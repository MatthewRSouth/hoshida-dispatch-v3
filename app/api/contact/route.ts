import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Input validation ────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTHS = { name: 100, email: 254, school: 200, message: 2000 }

function validateInput(body: Record<string, unknown>): string | null {
  const { name, email, school, message } = body

  if (typeof name !== 'string' || name.trim().length === 0)
    return 'Name is required'
  if (name.length > MAX_LENGTHS.name)
    return `Name must be ${MAX_LENGTHS.name} characters or fewer`

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email))
    return 'A valid email address is required'
  if (email.length > MAX_LENGTHS.email)
    return `Email must be ${MAX_LENGTHS.email} characters or fewer`

  if (school !== undefined && school !== null && school !== '') {
    if (typeof school !== 'string' || school.length > MAX_LENGTHS.school)
      return `School name must be ${MAX_LENGTHS.school} characters or fewer`
  }

  if (typeof message !== 'string' || message.trim().length === 0)
    return 'Message is required'
  if (message.length > MAX_LENGTHS.message)
    return `Message must be ${MAX_LENGTHS.message} characters or fewer`

  return null
}

// ── HTML escaping (prevents injection into email body) ──────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// ── In-memory rate limiter ──────────────────────────────────────────────────
// Limits each IP to MAX_REQUESTS per WINDOW_MS.
// Works on a single server instance. For serverless / multi-instance deployments
// (e.g. Vercel), upgrade to @upstash/ratelimit + Vercel KV for shared state.
const WINDOW_MS = 60_000  // 1 minute
const MAX_REQUESTS = 3    // max 3 submissions per IP per window

const ipStore = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipStore.get(ip)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    ipStore.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (entry.count >= MAX_REQUESTS) return true

  entry.count++
  return false
}

// Purge stale entries periodically to prevent unbounded memory growth
setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS
  for (const [ip, entry] of ipStore) {
    if (entry.windowStart < cutoff) ipStore.delete(ip)
  }
}, WINDOW_MS * 5)

// ── Route handler ───────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Prefer x-real-ip (set by Vercel/Nginx directly — not spoofable by clients).
  // Fall back to the LAST entry of x-forwarded-for (the closest trusted proxy appends
  // its own record to the end, so the last entry is the most trustworthy on most stacks).
  const ip =
    request.headers.get('x-real-ip')?.trim()
    ?? request.headers.get('x-forwarded-for')?.split(',').at(-1)?.trim()
    ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute before trying again.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Honeypot check — bots fill in hidden fields, humans don't.
  // Return 200 silently so bots don't know they were blocked.
  const honeypot = typeof body.website === 'string' ? body.website : ''
  if (honeypot.length > 0) {
    return NextResponse.json({ success: true })
  }

  const validationError = validateInput(body)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  // Safe to cast — all fields validated above
  const name    = (body.name    as string).trim()
  const email   = (body.email   as string).trim()
  const school  = typeof body.school === 'string' ? body.school.trim() : ''
  const message = (body.message as string).trim()

  // Escape all user-supplied values before inserting into the HTML email body
  const safeName    = escapeHtml(name)
  const safeEmail   = escapeHtml(email)
  const safeSchool  = escapeHtml(school)
  const safeMessage = escapeHtml(message)

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'Hoshida Dispatch <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `New enquiry from ${safeName} — ${safeSchool || 'No school listed'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2B2D42;">New enquiry from Hoshida Dispatch website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">Name</td><td>${safeName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">Email</td><td>${safeEmail}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">School</td><td>${safeSchool || '—'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #FAEDCA; border-radius: 8px;">
            <p style="color: #7A7D95; font-size: 12px; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
