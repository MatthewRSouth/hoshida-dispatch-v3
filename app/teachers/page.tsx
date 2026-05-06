import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TeacherCards from '@/components/sections/TeacherCards'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Teachers — Hoshida Dispatch',
  description: 'Meet the qualified English teachers Hoshida Dispatch sends to kindergartens across Japan.',
}

export default function TeachersPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="px-[5vw] pt-10 pb-0">
          <div className="mx-auto max-w-site">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 mb-5 text-[0.75rem] font-semibold text-muted">
              <Link href="/" className="text-muted no-underline hover:text-ink transition-colors">Home</Link>
              <span className="opacity-50">/</span>
              <span>Teachers</span>
            </div>

            {/* Hero module */}
            <div className="relative overflow-hidden rounded-[16px] border border-[#1a1c2e] bg-ink px-12 py-[52px] flex flex-wrap items-center justify-between gap-10 min-h-[280px]">
              <div className="pointer-events-none absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full bg-indigo opacity-10" />
              <div className="pointer-events-none absolute -bottom-16 left-[35%] w-[180px] h-[180px] rounded-full bg-terra opacity-[0.09]" />

              {/* Left */}
              <div className="relative z-10 max-w-[520px]">
                <div className="mb-3.5 text-[0.7rem] font-bold uppercase tracking-[1.4px] text-terra">
                  Teacher Information
                </div>
                <h1 className="font-serif text-[2.4rem] md:text-[3rem] leading-[1.1] text-white mb-3.5">
                  World class <em className="italic text-terra">teachers</em>
                </h1>
                <p className="text-[0.95rem] text-white/60 leading-[1.65] mb-7">
                  Every educator we dispatch is experienced, vetted, and genuinely passionate about working with young learners. Meet the team behind the lessons.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a href="/#contact" className="inline-flex items-center rounded-pill bg-terra px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:bg-terra-dark">
                    Join our team
                  </a>
                  <a href="#" className="inline-flex items-center rounded-pill border border-white/35 px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:border-white">
                    Our philosophy
                  </a>
                </div>
              </div>

              {/* Right — stats */}
              <div className="relative z-10 flex flex-col gap-5 border-l border-white/10 pl-10 flex-shrink-0">
                {[
                  { num: '1,000', accent: '+', label: 'Students taught' },
                  { num: '500', accent: '+', label: 'Satisfied parents' },
                  { num: '10k', accent: '+', label: 'Hours teaching English' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-[2.2rem] leading-none text-white">
                      {s.num}<span className="text-terra">{s.accent}</span>
                    </div>
                    <div className="mt-0.5 text-[0.75rem] text-white/45">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEACHING STYLE ── */}
        <section className="px-[5vw] pt-4 pb-0">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                Teaching <em className="italic text-terra">style</em>
              </h2>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted max-w-[520px]">
                We use a combination of Dutch Montessori and other proven methods, adapted for young English learners.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {/* Left panel — spans 2 rows */}
              <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[16px] border border-indigo-dark bg-indigo p-8 text-white md:row-span-2">
                <div className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-white/50">Philosophy</div>
                <h3 className="mb-2.5 font-serif text-[1.8rem] leading-[1.2] text-white">
                  Montessori-influenced English instruction
                </h3>
                <p className="text-[0.87rem] leading-[1.65] text-white/70">
                  Children make choices based on individual abilities and aspirations. Our teachers bring that same spirit to every lesson.
                </p>
              </div>
              {/* Photo */}
              <div className="rounded-[16px] overflow-hidden min-h-[380px] md:row-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/firetruck.PNG" alt="Students on a field trip" className="w-full h-full object-cover" />
              </div>
              {/* Point 1 */}
              <div className="rounded-[16px] border border-cream-dark bg-white p-7">
                <div className="mb-1.5 font-serif text-[1.05rem] text-ink">We guide children</div>
                <p className="text-[0.82rem] leading-relaxed text-muted">
                  Teachers support each student&apos;s natural curiosity, creating conditions for language to emerge organically.
                </p>
              </div>
              {/* Point 2 */}
              <div className="rounded-[16px] border border-cream-dark bg-white p-7">
                <div className="mb-1.5 font-serif text-[1.05rem] text-ink">Gamification</div>
                <p className="text-[0.82rem] leading-relaxed text-muted">
                  Games, songs, and movement make English stick. Learning that feels like play is learning that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEACHER CARDS ── */}
        <section className="px-[5vw] pt-4 pb-0">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                How we <em className="italic text-terra">help you</em>
              </h2>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted max-w-[600px]">
                Here is a little taste of what you get when you trust us with your English education. Every teacher brings something distinct.
              </p>
            </div>
            <TeacherCards />
          </div>
        </section>

        {/* ── STUDENTS FIRST ── */}
        <section className="px-[5vw] pt-4 pb-0">
          <div className="mx-auto max-w-site">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {/* Text left */}
              <div className="flex flex-col justify-center rounded-[16px] border border-[#1a1c2e] bg-ink p-10 text-white">
                <div className="flex items-center gap-2 mb-3 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-white/55">
                  <span className="block w-4 h-[2px] rounded-sm bg-white/40" />
                  Students First
                </div>
                <h2 className="font-serif text-[2.2rem] leading-[1.15] text-white mb-2.5">
                  Your children are our{' '}
                  <em className="italic text-cream">number one priority</em>
                </h2>
                <p className="text-[0.9rem] text-white/60 leading-[1.65] mb-7">
                  We strive to give the best English lessons tailored to each student 100% of the time.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { num: '1,000', accent: '+', label: 'Happy students have learned English with us' },
                    { num: '500', accent: '+', label: 'Satisfied parents' },
                    { num: '10,000', accent: '+', label: 'Hours teaching English' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-serif text-[2.2rem] leading-none text-white">
                        {s.num}<span className="text-terra">{s.accent}</span>
                      </div>
                      <div className="mt-0.5 text-[0.78rem] text-white/45">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Photos */}
              <div className="flex flex-col gap-4">
                <div className="h-[260px] w-full overflow-hidden rounded-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Harry.png" alt="Young student" className="h-full w-full object-cover object-[50%_30%]" />
                </div>
                <div className="h-[260px] w-full overflow-hidden rounded-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/exercise-park.jpg" alt="Children playing at the park" className="h-full w-full object-cover object-[50%_40%]" />
                </div>
                <div className="h-[260px] w-full overflow-hidden rounded-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/rosa.JPG" alt="Student in library" className="h-full w-full object-cover object-[50%_55%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="px-[5vw] pt-4 pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="relative overflow-hidden rounded-[16px] border border-indigo-dark bg-indigo px-14 py-[60px]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-[250px] w-[250px] rounded-full bg-indigo-dark opacity-30" />
              <div className="pointer-events-none absolute -bottom-10 left-[30%] h-[200px] w-[200px] rounded-full bg-terra opacity-10" />
              <div className="relative z-10 grid gap-10 grid-cols-1 lg:grid-cols-2 items-start">
                <div>
                  <h2 className="mb-4 font-serif text-[2.4rem] leading-[1.15] text-white max-w-[500px]">
                    Let&apos;s work <em className="italic text-cream">together</em>
                  </h2>
                  <p className="mb-6 text-[0.9rem] leading-[1.65] text-white/60">
                    Tell us about your school and what you&apos;re looking for in English instruction.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a href="#contact" className="inline-flex items-center rounded-pill bg-cream px-[30px] py-[13px] text-[0.92rem] font-bold text-ink transition-colors hover:bg-white">
                      Get started
                    </a>
                    <a href="/schools" className="inline-flex items-center rounded-pill border border-white/45 px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:border-white">
                      For schools
                    </a>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
