'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', school: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        console.log('Resend response:', res.status, data)
      } else {
        setStatus('success')
        console.log('Resend response:', res.status, data)
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[12px] bg-white/10 p-8 text-center text-white">
        <div className="mb-3 text-[2rem]">✓</div>
        <h3 className="mb-2 font-serif text-[1.4rem]">Message sent</h3>
        <p className="text-[0.88rem] text-white/70">
          We&apos;ll be in touch shortly. Thank you for reaching out.
        </p>
      </div>
    )
  }

  const inputClass = 'w-full rounded-[8px] border border-white/20 bg-white/10 px-4 py-3 text-[0.88rem] text-white placeholder-white/40 outline-none focus:border-white/50 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <input
        name="school"
        type="text"
        placeholder="School name (optional)"
        value={form.school}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell us about your school and what you need..."
        required
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />

      {status === 'error' && (
        <p className="text-[0.83rem] text-terra-light">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-pill bg-cream px-6 py-3 text-[0.88rem] font-bold text-ink transition-colors hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
