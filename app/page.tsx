import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PhotoStrip from '@/components/sections/PhotoStrip'
import FaqAccordion from '@/components/sections/FaqAccordion'
import ContactForm from '@/components/sections/ContactForm'
import { GraduationCap, Sparkles, BookOpen, School, BadgeCheck, Star } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* 1. Nav */}
      <Nav />

      <main>
        {/* 2. Hero */}
        <section className="px-[5vw] pt-10">
          <div className="mx-auto max-w-site">
            {/* Hero main module */}
            <div className="relative mb-4 overflow-hidden rounded-[16px] border border-[#1a1c2e] bg-ink px-14 pb-12 pt-14">
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-indigo opacity-[0.12]" />
              <div className="pointer-events-none absolute bottom-[-60px] left-[40%] h-[200px] w-[200px] rounded-full bg-terra opacity-10" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-10">
                {/* Text */}
                <div className="max-w-[560px]">
                  <div className="mb-[18px] text-[0.72rem] font-bold uppercase tracking-[1.4px] text-terra">
                    Hoshida Dispatch &middot; Katano, Osaka
                  </div>
                  <h1 className="mb-[18px] font-serif text-[2.2rem] leading-[1.08] text-white md:text-[3.4rem]">
                    English lessons<br />that{' '}
                    <em className="italic text-terra">matter</em>
                  </h1>
                  <p className="mb-8 text-[1rem] leading-[1.65] text-white/65">
                    We bring qualified English teachers directly to your kindergarten. Young learners thrive when teaching is genuine, engaging, and built on real experience.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a href="#contact" className="inline-flex items-center rounded-pill bg-terra px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:bg-terra-dark">
                      Get started
                    </a>
                    <a href="#offer" className="inline-flex items-center rounded-pill border border-white/45 px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:border-white">
                      Learn more
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-shrink-0 flex-col gap-5 border-l border-white/[0.12] pl-10">
                  {[
                    { num: '1,000', sup: '+', label: 'Happy students' },
                    { num: '500', sup: '+', label: 'Satisfied parents' },
                    { num: '10k', sup: '+', label: 'Hours teaching English' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-serif text-[2.4rem] leading-none text-white">
                        {s.num}<span className="text-terra">{s.sup}</span>
                      </div>
                      <div className="mt-0.5 text-[0.78rem] text-white/50">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Photo strip */}
            <PhotoStrip />
          </div>
        </section>

        {/* 4. What We Offer */}
        <section id="offer" className="px-[5vw] pt-0 pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="mb-6 pt-[60px]">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                What we <em className="italic text-terra">offer</em>
              </h2>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                Experienced teachers sent to your school, ready to engage from day one.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {[
                {
                  Icon: GraduationCap,
                  title: 'Qualified Educators',
                  body: 'Every teacher comes from Hoshida International School or has been vetted through our network. Proven classroom experience with young learners.',
                  variant: 'white',
                },
                {
                  Icon: Sparkles,
                  label: 'Our approach',
                  title: 'Engagement-first',
                  body: 'We teach English through play, conversation, and natural learning moments. Lessons built on genuine interaction, not rote repetition.',
                  variant: 'white',
                },
                {
                  Icon: BookOpen,
                  title: 'Your Curriculum, Our Guide',
                  body: 'Your teaching philosophy and schedule shapes what we do. Teachers work with your existing structure and goals, not against them.',
                  variant: 'white',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`flex min-h-[220px] flex-col justify-between rounded-[16px] border p-8 ${
                    card.variant === 'indigo'
                      ? 'border-indigo-dark bg-indigo text-white'
                      : 'border-cream-dark bg-white text-ink'
                  }`}
                >
                  {card.label && (
                    <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-muted">
                      {card.label}
                    </div>
                  )}
                  <div className={`mb-3.5 ${card.variant === 'indigo' ? 'text-white/70' : 'text-indigo'}`}>
                    <card.Icon size={28} />
                  </div>
                  <div className={`mb-2 font-serif text-[1.2rem] ${card.variant === 'indigo' ? 'text-white' : 'text-ink'}`}>
                    {card.title}
                  </div>
                  <div className={`flex-1 mb-4 text-[0.85rem] leading-relaxed ${card.variant === 'indigo' ? 'text-white/70' : 'text-muted'}`}>
                    {card.body}
                  </div>
                  <a href="#" className={`text-[0.78rem] font-bold no-underline transition-all ${card.variant === 'indigo' ? 'text-white/85' : 'text-indigo'}`}>
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Getting Started */}
        <section className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                Getting started is <em className="italic text-terra">straightforward</em>
              </h2>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: '01',
                  title: 'You reach out',
                  body: 'Tell us what your kindergarten needs and what matters most in English instruction. We listen first, then act.',
                  variant: 'white',
                },
                {
                  num: '02',
                  title: 'We find your teacher',
                  body: 'We select a teacher whose experience and style align with your curriculum and goals.',
                  variant: 'cream',
                },
                {
                  num: '03',
                  title: 'Lessons begin',
                  body: 'Your teacher arrives prepared and ready to engage your students from day one.',
                  variant: 'indigo',
                },
                {
                  num: '04',
                  title: 'Partnership grows',
                  body: 'We stay flexible. If something is not right, we adjust. Your satisfaction matters more than sticking to a plan that does not fit.',
                  variant: 'terra',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative rounded-[16px] border p-7 ${
                    step.variant === 'cream'
                      ? 'border-cream-dark bg-indigo-light'
                      : step.variant === 'terra'
                      ? 'border-terra-dark bg-terra'
                      : step.variant === 'indigo'
                      ? 'border-indigo-dark bg-indigo'
                      : 'border-cream-dark bg-white'
                  }`}
                >
                  <div
                    className={`mb-3.5 font-serif text-[3rem] leading-none ${
                      step.variant === 'terra' ? 'text-white/20' : step.variant === 'indigo' ? 'text-white/20' : step.variant === 'cream' ? 'text-indigo/25' : 'text-cream-dark'
                    }`}
                  >
                    {step.num}
                  </div>
                  <div
                    className={`mb-2 font-serif text-[1.1rem] ${
                      step.variant === 'terra' || step.variant === 'indigo' ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div
                    className={`text-[0.82rem] leading-relaxed ${
                      step.variant === 'terra' ? 'text-white/75' : step.variant === 'indigo' ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    {step.body}
                  </div>
                  {i < 3 && (
                    <span className={`absolute right-[-6px] top-7 z-10 text-[1.1rem] ${step.variant === 'indigo' ? 'text-indigo-light' : 'text-cream-dark'}`}>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Teaching Style */}
        <section className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="mb-6">
              <h2 className="font-serif text-[2.2rem] leading-[1.15] text-ink">
                Our teaching <em className="italic text-terra">style</em>
              </h2>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {/* Left panel — spans 2 rows on desktop */}
              <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[16px] border border-indigo-dark bg-indigo p-9 text-white md:row-span-2">
                <div className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-white/50">
                  Philosophy
                </div>
                <h3 className="mb-2.5 font-serif text-[1.9rem] leading-[1.2] text-white">
                  Montessori-influenced English instruction
                </h3>
                <p className="text-[0.88rem] leading-[1.65] text-white/70">
                  We draw from the Dutch Montessori approach. Children make choices based on individual abilities and aspirations. Our teachers bring that same philosophy to English language learning.
                </p>
              </div>
              {/* Photo */}
              <div className="h-[280px] w-full overflow-hidden rounded-[16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/pe.PNG" alt="Students in PE class" className="h-full w-full object-cover object-center" />
              </div>
              {/* Point 1 */}
              <div className="rounded-[16px] border border-indigo-dark bg-indigo p-7">
                <div className="mb-2 font-serif text-[1.1rem] text-white">We guide children</div>
                <p className="text-[0.83rem] leading-relaxed text-white/70">
                  Teachers support each student&apos;s natural curiosity. Rather than directing every moment, we create the conditions for language to emerge organically.
                </p>
              </div>
              {/* Photo */}
              <div className="h-[280px] w-full overflow-hidden rounded-[16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/exercise-park.jpg" alt="Children at the park" className="h-full w-full object-cover object-[50%_30%]" />
              </div>
              {/* Point 2 */}
              <div className="rounded-[16px] border border-indigo-dark bg-indigo p-7">
                <div className="mb-2 font-serif text-[1.1rem] text-white">Interactive learning</div>
                <p className="text-[0.83rem] leading-relaxed text-white/70">
                  Lessons are built around conversation, activity, and participation. Students learn by doing, not by watching or listening passively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Stats */}
        <section className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {[
                { num: '1,000', accent: '+', label: 'Happy students', variant: 'ink' },
                { num: '500', accent: '+', label: 'Satisfied parents', variant: 'ink' },
                { num: '10k', accent: '+', label: 'Hours teaching English', variant: 'ink' },
                { num: '100', accent: '%', label: 'Student-centred approach', variant: 'ink' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`rounded-[16px] border p-7 text-center ${
                    stat.variant === 'ink'
                      ? 'border-[#1a1c2e] bg-ink'
                      : stat.variant === 'indigo'
                      ? 'border-indigo-dark bg-indigo'
                      : stat.variant === 'cream'
                      ? 'border-cream-dark bg-indigo-light'
                      : 'border-cream-dark bg-white'
                  }`}
                >
                  <span
                    className={`block font-serif text-[2.8rem] leading-none mb-1.5 ${
                      stat.variant === 'ink' || stat.variant === 'indigo' ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {stat.num}
                    <span className={stat.variant === 'ink' || stat.variant === 'indigo' ? 'text-terra' : 'text-terra'}>
                      {stat.accent}
                    </span>
                  </span>
                  <div
                    className={`text-[0.82rem] font-medium ${
                      stat.variant === 'ink' || stat.variant === 'indigo' ? 'text-white/65' : 'text-muted'
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="px-[5vw] pb-[60px]">
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
                  variant: 'white',
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-3.5 rounded-[16px] border p-7 ${
                    t.variant === 'cream' ? 'border-cream-dark bg-indigo-light' : 'border-cream-dark bg-white'
                  }`}
                >
                  <div className="flex gap-0.5 text-terra">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <div className="flex-1 font-serif text-[1.02rem] leading-[1.5] text-ink">
                    {t.quote}
                  </div>
                  <div className="flex items-center gap-2.5 border-t border-cream pt-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream-dark text-[0.82rem] font-bold text-muted">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[0.8rem] font-bold text-ink">{t.name}</div>
                      <div className="text-[0.72rem] text-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Heritage */}
        <section className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[2fr_1fr_1fr]">
              {/* Main block */}
              <div className="flex min-h-[280px] flex-col justify-between rounded-[16px] border border-[#1a1c2e] bg-ink p-10 text-white">
                <div>
                  <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-white/55">
                    Our foundation
                  </div>
                  <h3 className="mb-3 font-serif text-[1.9rem] leading-[1.2] text-white">
                    Built on decades of teaching experience
                  </h3>
                  <p className="mb-6 text-[0.88rem] leading-[1.65] text-white/70">
                    Hoshida International School has worked with young learners for years. That foundation shapes everything Hoshida Dispatch does. Schools trust us because we have earned it.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex w-fit items-center rounded-pill bg-cream px-5 py-[9px] text-[0.83rem] font-bold text-ink transition-colors hover:bg-white"
                >
                  Learn about us
                </a>
              </div>
              {/* Point 1 */}
              <div className="rounded-[16px] border border-cream-dark bg-white p-7">
                <div className="mb-3 text-indigo"><School size={26} /></div>
                <div className="mb-1.5 font-serif text-[1.05rem] text-ink">Proven foundation</div>
                <p className="text-[0.82rem] leading-relaxed text-muted">
                  Hoshida International School knows what works with young learners and that knowledge powers every dispatch placement.
                </p>
              </div>
              {/* Point 2 */}
              <div className="rounded-[16px] border border-cream-dark bg-white p-7">
                <div className="mb-3 text-indigo"><BadgeCheck size={26} /></div>
                <div className="mb-1.5 font-serif text-[1.05rem] text-ink">Real results</div>
                <p className="text-[0.82rem] leading-relaxed text-muted">
                  Schools trust us because we have earned it through years of consistent, high-quality teaching outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {/* Intro panel */}
              <div className="flex flex-col justify-center rounded-[16px] border border-cream-dark bg-white p-10">
                <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[1.4px] text-muted">
                  Common questions
                </div>
                <h3 className="mb-3 font-serif text-[1.9rem] leading-[1.2] text-ink">
                  Everything you need to know
                </h3>
                <p className="mb-6 text-[0.88rem] leading-[1.65] text-muted">
                  Questions about how Hoshida Dispatch works and what to expect when you partner with us.
                </p>
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center rounded-pill bg-indigo px-5 py-[9px] text-[0.83rem] font-bold text-white transition-colors hover:bg-indigo-dark"
                >
                  Contact us
                </a>
              </div>
              {/* Accordion */}
              <div className="rounded-[16px] border border-terra bg-terra-light p-7">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* 11. Final CTA — with contact form */}
        <section id="contact" className="px-[5vw] pb-[60px]">
          <div className="mx-auto max-w-site">
            <div className="relative overflow-hidden rounded-[16px] border border-indigo-dark bg-indigo px-14 py-[60px]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-[250px] w-[250px] rounded-full bg-indigo-dark opacity-30" />
              <div className="pointer-events-none absolute -bottom-10 left-[30%] h-[200px] w-[200px] rounded-full bg-terra opacity-10" />
              <div className="relative z-10 grid gap-10 grid-cols-1 lg:grid-cols-2 items-start">
                {/* Left: heading + CTAs */}
                <div>
                  <h2 className="mb-6 font-serif text-[2.4rem] leading-[1.15] text-white max-w-[500px]">
                    Let&apos;s work <em className="italic text-cream">together</em>
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    <a href="#" className="inline-flex items-center rounded-pill bg-cream px-[30px] py-[13px] text-[0.92rem] font-bold text-ink transition-colors hover:bg-white">
                      Get started
                    </a>
                    <a href="#offer" className="inline-flex items-center rounded-pill border border-white/45 px-[30px] py-[13px] text-[0.92rem] font-bold text-white transition-colors hover:border-white">
                      Learn more
                    </a>
                  </div>
                </div>
                {/* Right: contact form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <Footer />
    </>
  )
}
