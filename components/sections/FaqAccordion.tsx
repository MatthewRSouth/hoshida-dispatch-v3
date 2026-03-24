'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How are teachers selected?',
    a: 'Every teacher comes from Hoshida International School or has been vetted through our network. We look for classroom experience, genuine interest in young learners, and the ability to adapt.',
  },
  {
    q: 'Can we customise lesson plans?',
    a: 'Yes. Your curriculum and teaching philosophy shape what we do. Teachers work with your existing schedule and goals, not against them.',
  },
  {
    q: 'What if it is not working?',
    a: 'We stay flexible. If a teacher or approach is not right, we adjust. Your satisfaction matters more than sticking to a plan that does not fit.',
  },
  {
    q: 'How long are the programs?',
    a: 'Programs run as long as you need them. Some schools bring us in for a semester, others for the full year. You decide the timeline.',
  },
  {
    q: 'What about teacher continuity?',
    a: 'We keep the same teacher with your school when possible. Consistency helps students learn and builds real relationships.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border-b border-cream last:border-b-0"
        >
          <button
            className="flex w-full items-center justify-between gap-3 py-3.5 text-left text-[0.88rem] font-bold text-ink transition-colors hover:text-indigo font-sans"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          >
            {faq.q}
            <span
              className={`flex-shrink-0 text-[0.7rem] text-muted transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden text-[0.83rem] leading-relaxed text-muted transition-all duration-300 ${
              openIndex === i ? 'max-h-[200px] pb-3.5' : 'max-h-0'
            }`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  )
}
