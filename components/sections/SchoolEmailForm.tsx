'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function SchoolEmailForm() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Schools page enquiry',
          email,
          message: 'Submitted via Schools page CTA form',
          website: honeypot,
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-[0.9rem] font-medium text-white/90">
        ✓ Thanks — we&apos;ll be in touch soon.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 items-center">
        {/* Honeypot — visually hidden, bots fill it in, humans don't */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="sr-only"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your school&apos;s email address"
          className="min-w-[240px] rounded-pill border border-white/25 bg-white/10 px-5 py-[13px] text-[0.85rem] text-white placeholder-white/40 outline-none transition-colors focus:border-white/60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-pill bg-cream px-[30px] py-[13px] text-[0.92rem] font-bold text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Get started'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-[0.83rem] text-terra-light">{errorMsg}</p>
      )}
    </div>
  )
}
