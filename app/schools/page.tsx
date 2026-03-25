import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import SchoolEmailForm from '@/components/sections/SchoolEmailForm'

export const metadata: Metadata = {
  title: 'For Schools — Hoshida Dispatch',
  description:
    'Partner with Hoshida Dispatch to bring qualified English teachers directly to your kindergarten. Flexible programs, student-centred teaching, and seamless integration with your curriculum.',
}

export default function SchoolsPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="px-[5vw] pt-10">
          <div className="mx-auto max-w-site">
            <div className="mb-3 flex items-center gap-1.5 text-[0.75rem] font-semibold text-muted">
              <a href="/" className="text-muted no-underline transition-colors hover:text-ink">Home</a>
              <span className="opacity-50">/</span>
              <span>For Schools</span>
            </div>
            <div className="grid min-h-[380px] grid-cols-1 items-stretch gap-4 md:grid-cols-2">
              {/* Text panel */}
              <div className="relative flex flex-col justify-center overflow-hidden rounded-[16px] border border-[#1a1c2e] bg-ink px-12 py-14 text-white">
                <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-indigo opacity-10" />
                <div className="pointer-events-none absolute bottom-[-50px] left-[30%] h-[160px] w-[160px] rounded-full bg-terra opacity-[0.09]" />
                <div className="relative z-10">
                  <div className="mb-3.5 text-[0.7rem] font-bold uppercase tracking-[1.4px] text-terra">
                    For Schools &amp; Kindergartens
                  </div>
                  <h1 className="mb-3.5 font-serif text-[3rem] leading-[1.1] text-white">
                    Let us <em className="italic text-terra">teach</em>
                    <br />your kids
                  </h1>
                  <p className="mb-7 max-w-[440px] text-[0.95rem] leading-[1.65] text-white/62">
                    Hoshida&apos;s teachers will help your children grow and learn in a safe, organised environment. Our curriculum is student-centred, and we make sure every child gets the attention they need.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="#cta"
                      className="inline-flex items-center rounded-pill bg-terra px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:bg-terra-dark"
                    >
                      Get started
                    </a>
                    <a
                      href="#what-you-get"
                      className="inline-flex items-center rounded-pill border border-white/45 px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:border-white"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/field-trip.PNG" alt="Teachers with students on a field trip" className="min-h-[280px] rounded-[16px] object-cover w-full md:min-h-0" />
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="px-[5vw] pt-4 pb-0">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                What makes us <em className="italic text-terra">different</em>
              </h2>
              <p className="mt-2.5 max-w-[520px] text-[0.95rem] leading-relaxed text-muted">
                Here is a little taste of what you get when you trust us with your English education.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: '💪',
                  title: 'Qualified educators',
                  body: 'Every teacher is vetted through Hoshida International School. Proven classroom experience with young learners, every time.',
                  variant: 'white',
                },
                {
                  icon: '🎮',
                  label: 'Our approach',
                  title: 'Interactive learning',
                  body: 'Lessons built on genuine interaction and play. We teach English through conversation, games, and natural learning moments.',
                  variant: 'indigo',
                },
                {
                  icon: '📋',
                  title: 'Adapts to your school',
                  body: 'Your curriculum and schedule guides our approach. Teachers work with your existing structure and goals, not against them.',
                  variant: 'white',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-3.5 rounded-[16px] border p-8 ${
                    card.variant === 'indigo'
                      ? 'border-indigo-dark bg-indigo text-white'
                      : 'border-cream-dark bg-white'
                  }`}
                >
                  {card.label && (
                    <div className="text-[0.65rem] font-bold uppercase tracking-[1.4px] text-white/55">
                      {card.label}
                    </div>
                  )}
                  <div className="text-[1.8rem]">{card.icon}</div>
                  <div className={`font-serif text-[1.15rem] ${card.variant === 'indigo' ? 'text-white' : 'text-ink'}`}>
                    {card.title}
                  </div>
                  <div className={`text-[0.85rem] leading-[1.65] ${card.variant === 'indigo' ? 'text-white/70' : 'text-muted'}`}>
                    {card.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section id="what-you-get" className="px-[5vw] py-4">
          <div className="mx-auto max-w-site">
            <div className="grid items-stretch gap-4 grid-cols-1 md:grid-cols-2">
              {/* Text panel */}
              <div className="flex flex-col justify-center rounded-[16px] border border-cream-dark bg-white px-11 py-11">
                <div className="mb-3 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-muted">
                  <span className="h-0.5 w-4 rounded bg-current opacity-50" />
                  Discover
                </div>
                <h2 className="mb-3 font-serif text-[2rem] leading-[1.2] text-ink">
                  Everything you <em className="italic text-terra">get</em> with Hoshida
                </h2>
                <p className="mb-7 text-[0.9rem] leading-[1.7] text-muted">
                  When you partner with us, you are not just hiring a teacher. You are gaining a dedicated educator who integrates seamlessly with your school.
                </p>
                <ul className="mb-7 flex flex-col gap-2.5">
                  {[
                    'Experienced teachers sent directly to your school',
                    'Lessons built on engagement and real interaction',
                    'Programs that adapt to your school\'s needs',
                    'Consistent teacher placement for student continuity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.85rem] leading-[1.5] text-ink">
                      <span className="mt-[5px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-terra" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="#cta"
                    className="inline-flex items-center rounded-pill bg-indigo px-5 py-[9px] text-[0.83rem] font-bold text-white transition-colors hover:bg-indigo-dark"
                  >
                    Discover more
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-pill border border-cream-dark px-5 py-[9px] text-[0.83rem] font-bold text-ink transition-colors hover:border-ink"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/potatoe.PNG" alt="Students and teachers working together outdoors" className="min-h-[340px] rounded-[16px] object-cover w-full" />
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="px-[5vw] py-4">
          <div className="mx-auto max-w-site">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {/* Intro panel — full width */}
              <div className="flex flex-wrap items-center justify-between gap-8 rounded-[16px] border border-[#1a1c2e] bg-ink px-11 py-9 md:col-span-3">
                <div>
                  <h2 className="font-serif text-[2rem] leading-[1.2] text-white">
                    Getting started is <em className="italic text-cream">straightforward</em>
                  </h2>
                  <p className="mt-2 max-w-[400px] text-[0.88rem] leading-[1.6] text-white/60">
                    Tell us what your kindergarten needs and what matters most in English instruction. We listen first, then we act.
                  </p>
                </div>
                <a
                  href="#cta"
                  className="inline-flex items-center rounded-pill bg-cream px-[30px] py-[13px] text-[0.92rem] font-bold text-ink transition-colors hover:bg-white"
                >
                  Contact us
                </a>
              </div>

              {/* Step 1 */}
              <div className="flex min-h-[220px] flex-col rounded-[16px] border border-cream-dark bg-white p-8">
                <div className="mb-4 font-serif text-[3.2rem] leading-none text-cream-dark">01</div>
                <div className="mb-3.5 text-[1.6rem]">⭐</div>
                <div className="mb-2 font-serif text-[1.15rem] text-ink">You reach out</div>
                <div className="text-[0.83rem] leading-[1.6] text-muted">
                  Contact us about your school&apos;s needs and what you&apos;re looking for in English instruction. We listen first, then act.
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex min-h-[220px] flex-col rounded-[16px] border border-cream-dark bg-indigo-light p-8">
                <div className="mb-4 font-serif text-[3.2rem] leading-none text-indigo/25">02</div>
                <div className="mb-3.5 text-[1.6rem]">📋</div>
                <div className="mb-2 font-serif text-[1.15rem] text-ink">We find your teacher</div>
                <div className="text-[0.83rem] leading-[1.6] text-muted">
                  We select a teacher whose experience and style align with your curriculum and goals. The right match matters.
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex min-h-[220px] flex-col rounded-[16px] border border-terra-dark bg-terra p-8">
                <div className="mb-4 font-serif text-[3.2rem] leading-none text-white/25">03</div>
                <div className="mb-3.5 text-[1.6rem]">📱</div>
                <div className="mb-2 font-serif text-[1.15rem] text-white">Lessons begin</div>
                <div className="text-[0.83rem] leading-[1.6] text-white/75">
                  Your teacher arrives prepared and ready to engage your students from day one. No disruption, only improvement.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="px-[5vw] py-4">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                Simple, <em className="italic text-terra">transparent</em> pricing
              </h2>
            </div>
            <div className="grid items-stretch gap-4 grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr]">
              {/* Left note — indigo */}
              <div className="flex flex-col justify-center rounded-[16px] border border-indigo-dark bg-indigo p-8">
                <div className="mb-2.5 font-serif text-[1.2rem] text-white">World class teachers</div>
                <div className="text-[0.85rem] leading-[1.65] text-white/70">
                  Thousands of happy children with bright futures. Our teachers are the best in the business, and our pricing reflects the value they bring.
                </div>
              </div>

              {/* Centre card */}
              <div className="flex flex-col rounded-[16px] border border-cream-dark bg-white p-10">
                <div className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-pill bg-terra px-3.5 py-[5px] text-[0.72rem] font-bold tracking-[0.5px] text-white">
                  💰 Pricing
                </div>
                <h3 className="mb-2.5 font-serif text-[1.8rem] leading-[1.2] text-ink">Competitive pricing</h3>
                <p className="mb-7 text-[0.88rem] leading-[1.6] text-muted">
                  We offer flexible programs to suit your school&apos;s size and schedule. Contact us for a tailored quote.
                </p>
                <div className="mb-6 rounded-[12px] border border-cream-dark bg-cream px-5 py-4 font-serif text-[1.1rem] italic text-muted">
                  Please contact us for our pricing
                </div>
                <ul className="mb-7 flex flex-col gap-2.5">
                  {[
                    'Competitive pricing',
                    'World class teachers',
                    'Thousands of happy children with bright futures',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.85rem] font-medium text-ink">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-indigo bg-indigo-light text-[0.65rem] text-indigo-dark">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="inline-flex w-fit items-center rounded-pill bg-ink px-5 py-[9px] text-[0.83rem] font-bold text-white transition-colors hover:opacity-85"
                >
                  Contact us
                </a>
              </div>

              {/* Right note — terra */}
              <div className="flex flex-col justify-center rounded-[16px] border border-terra-dark bg-terra p-8">
                <div className="mb-2.5 font-serif text-[1.2rem] text-white">Students first</div>
                <div className="text-[0.85rem] leading-[1.65] text-white/70">
                  Your children are our number one priority. Every program is tailored to ensure each student gets the attention and care they deserve.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="px-[5vw] py-4">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                What schools <em className="italic text-terra">say</em>
              </h2>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">Real voices from our partners.</p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {[
                {
                  quote: '"The teachers arrived prepared and genuinely interested in our students. The lessons felt natural, not forced."',
                  initials: 'MT',
                  name: 'Maria Tanaka',
                  role: 'Director, Sakura Kindergarten',
                  variant: 'white',
                },
                {
                  quote: '"Our children ask for English lessons now. That tells you everything about the quality of teaching."',
                  initials: 'KY',
                  name: 'Kenji Yamamoto',
                  role: 'Principal, Sunrise Academy',
                  variant: 'cream',
                },
                {
                  quote: '"They understood our curriculum and worked within it. No disruption, only improvement."',
                  initials: 'YS',
                  name: 'Yuki Sato',
                  role: 'Head Teacher, Bright Minds',
                  variant: 'ink',
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-3.5 rounded-[16px] border p-7 ${
                    t.variant === 'ink'
                      ? 'border-[#1a1c2e] bg-ink'
                      : t.variant === 'cream'
                      ? 'border-cream-dark bg-indigo-light'
                      : 'border-cream-dark bg-white'
                  }`}
                >
                  <div className="text-[0.85rem] tracking-[2px] text-terra">★★★★★</div>
                  <div className={`flex-1 font-serif text-[1.02rem] leading-[1.5] ${t.variant === 'ink' ? 'text-white' : 'text-ink'}`}>
                    {t.quote}
                  </div>
                  <div className={`flex items-center gap-2.5 border-t pt-3 ${t.variant === 'ink' ? 'border-white/12' : 'border-cream'}`}>
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[0.82rem] font-bold ${t.variant === 'ink' ? 'bg-white/10 text-white/60' : 'bg-cream-dark text-muted'}`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className={`text-[0.8rem] font-bold ${t.variant === 'ink' ? 'text-white' : 'text-ink'}`}>{t.name}</div>
                      <div className={`text-[0.72rem] ${t.variant === 'ink' ? 'text-white/45' : 'text-muted'}`}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="px-[5vw] py-4 pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="flex flex-wrap items-center justify-between gap-8 rounded-[16px] border border-indigo-dark bg-indigo px-14 py-14">
              <div>
                <h2 className="font-serif text-[2.2rem] leading-[1.15] text-white">
                  Let&apos;s work <em className="italic text-cream">together</em>
                </h2>
                <p className="mt-2 max-w-[400px] text-[0.9rem] leading-[1.6] text-white/55">
                  Send us a message and we will discuss how Hoshida Dispatch fits your school.
                </p>
              </div>
              <SchoolEmailForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
