'use client'
import { useState, useEffect, useRef } from 'react'
import { teachers } from '@/data/teachers'

export default function TeacherCards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (i !== -1) setActiveIndex(i)
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -15% 0px' }
    )
    cardRefs.current.forEach((card) => { if (card) observer.observe(card) })
    return () => observer.disconnect()
  }, [])

  const active = teachers[activeIndex]

  return (
    <div className="flex gap-4 items-start">

      {/* ── STICKY PANEL (desktop only) ── */}
      <div className="hidden lg:block w-[32%] flex-shrink-0 sticky top-[76px] rounded-[16px] border border-cream-dark bg-white p-7">
        {/* Label */}
        <div className="flex items-center gap-2 mb-5 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-muted">
          <span className="block w-4 h-[2px] rounded-sm bg-terra opacity-50" />
          Our Educators
        </div>

        {/* Number */}
        <div className="font-serif text-[4.5rem] italic leading-none text-cream-dark mb-1.5 transition-all duration-300">
          {active.num}
        </div>

        {/* Name */}
        <div className="font-serif text-[1.8rem] leading-[1.15] text-ink mb-1">
          {active.name}
        </div>

        {/* Specialty */}
        <div className="text-[0.82rem] font-semibold text-terra mb-3.5">
          {active.specialty}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {active.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.68rem] font-bold px-2.5 py-[3px] rounded-pill bg-indigo-light text-indigo-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1.5px] bg-cream-dark my-4" />

        {/* Progress dots */}
        <div className="flex items-center gap-[7px] mb-5">
          {teachers.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-[7px] rounded-[4px] transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-indigo'
                  : 'w-[7px] bg-cream-dark hover:bg-muted/40'
              }`}
              aria-label={`Go to teacher ${i + 1}`}
            />
          ))}
          <span className="ml-1 text-[0.7rem] font-semibold text-muted">
            {activeIndex + 1} / {teachers.length}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href="#"
            className="flex-1 flex justify-center items-center rounded-pill bg-ink text-white text-[0.78rem] font-bold px-3.5 py-[9px] transition-colors hover:bg-ink/80"
          >
            Join Team
          </a>
          <a
            href="#"
            className="flex-1 flex justify-center items-center rounded-pill border border-cream-dark text-ink text-[0.78rem] font-bold px-3.5 py-[9px] transition-colors hover:border-ink"
          >
            Philosophy
          </a>
        </div>
      </div>

      {/* ── CARDS COLUMN ── */}
      <div className="flex-1 flex flex-col gap-4">
        {teachers.map((teacher, i) => {
          const isActive = i === activeIndex
          return (
            <div
              key={teacher.id}
              ref={(el) => { cardRefs.current[i] = el }}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden rounded-[16px] border min-h-[68vh] flex flex-col justify-end p-10 cursor-pointer transition-all duration-300 ${
                isActive
                  ? 'border-indigo shadow-[0_8px_40px_-8px_rgba(108,125,226,0.18)] bg-white'
                  : 'border-cream-dark bg-white hover:border-indigo/40'
              }`}
            >
              {/* Decorative number */}
              <div
                className={`pointer-events-none select-none absolute -top-4 -right-1 font-serif text-[11rem] italic font-black leading-none transition-colors duration-300 ${
                  isActive ? 'text-indigo-light' : 'text-cream'
                }`}
              >
                {teacher.num}
              </div>

              {/* Photo circle */}
              <div
                className={`absolute top-7 left-10 w-[72px] h-[72px] rounded-full bg-grey border-2 transition-colors duration-300 ${
                  isActive ? 'border-indigo' : 'border-grey-border'
                }`}
              />

              {/* Years badge */}
              <div
                className={`absolute top-7 right-7 text-[0.72rem] font-bold rounded-pill px-[13px] py-[5px] border transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-light text-indigo-dark border-indigo'
                    : 'bg-cream text-muted border-cream-dark'
                }`}
              >
                {teacher.experience}
              </div>

              {/* Card body */}
              <div className="relative z-10 pt-[72px]">
                {/* Tags */}
                <div className="flex flex-wrap gap-[7px] mb-[18px]">
                  {teacher.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[0.68rem] font-bold px-[11px] py-1 rounded-pill border transition-all duration-300 ${
                        isActive
                          ? 'bg-indigo-light text-indigo-dark border-indigo'
                          : 'bg-cream text-muted border-cream-dark'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <div className="font-serif text-[2.8rem] leading-[1.05] text-ink mb-1.5">
                  {teacher.name}
                </div>

                {/* Specialty */}
                <div
                  className={`text-[0.75rem] font-bold uppercase tracking-[0.7px] mb-[18px] transition-colors duration-300 ${
                    isActive ? 'text-terra' : 'text-muted'
                  }`}
                >
                  {teacher.specialty}
                </div>

                {/* Rule */}
                <div
                  className={`h-[1.5px] w-1/2 mb-[18px] transition-colors duration-300 ${
                    isActive ? 'bg-indigo' : 'bg-cream-dark'
                  }`}
                />

                {/* Bio */}
                <p className="text-[0.9rem] text-muted leading-[1.75] max-w-[480px] mb-[22px]">
                  {teacher.bio}
                </p>

                {/* Link */}
                <button className="bg-none border-none cursor-pointer font-sans text-[0.8rem] font-bold text-indigo inline-flex items-center gap-[5px] p-0 transition-all hover:gap-[9px]">
                  View full profile →
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
