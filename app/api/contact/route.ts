import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, school, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Hoshida Dispatch <onboarding@resend.dev>',
      to: ['matthewrogersouth@gmail.com'],
      subject: `New enquiry from ${name} — ${school || 'No school listed'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2B2D42;">New enquiry from Hoshida Dispatch website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #7A7D95;">School</td><td>${school || '—'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #FAEDCA; border-radius: 8px;">
            <p style="color: #7A7D95; font-size: 12px; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
