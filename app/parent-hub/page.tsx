import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Parent Hub — Hoshida Dispatch',
  description:
    'Lesson updates and announcements for parents of enrolled children at 念法幼稚園.',
  // Prevent search engines from indexing the parent hub — it contains
  // school-specific schedule and contact data that should not be publicly indexed.
  robots: { index: false, follow: false },
}

const newsItems = [
  {
    pip: 'bg-cream-deeper',
    title: 'Term 1 Parent Information',
    body: 'Placeholder notice about the upcoming term, lesson format, and what to expect.',
    date: 'Mar 25',
  },
  {
    pip: 'bg-indigo',
    title: 'Open Lesson — Wednesday, April 1 at 念法幼稚園',
    body: 'Open to new families considering signing up.',
    date: 'Apr 1',
  },
  {
    pip: 'bg-[#5CBF7A]',
    title: 'Regular Classes Begin — Wednesday, April 8',
    body: 'First regular lesson of the new term.',
    date: 'Apr 8',
  },
  {
    pip: 'bg-terra',
    title: 'No Lesson — Wednesday, April 16',
    body: 'Placeholder — national holiday.',
    date: 'Apr 16',
  },
]

export default function ParentHubPage() {
  return (
    <>
      <Nav />

      <main className="px-[5vw] py-12">
        <div className="mx-auto max-w-site">

          {/* Page header */}
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="font-serif text-[2.6rem] leading-[1.1] text-ink">
                Parent <em className="italic text-terra">Hub</em>
              </h1>
              <p className="mt-2 text-[0.92rem] text-muted">
                Lesson updates &amp; announcements · 念法幼稚園
              </p>
            </div>
            <div className="whitespace-nowrap rounded-pill border border-cream-dark bg-white px-4 py-2 text-[0.8rem] font-semibold text-ink">
              Term 1 · April 2026
            </div>
          </div>

          {/* Module grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* News & Announcements */}
            <div
              className="animate-fade-up rounded-[16px] border border-cream-dark bg-white p-6"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-3.5 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-muted">
                <span className="h-0.5 w-[18px] flex-shrink-0 rounded bg-indigo" />
                News &amp; Announcements
              </div>
              <div className="flex flex-col">
                {newsItems.map((item, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[auto_1fr_auto] items-start gap-3.5 rounded-[10px] px-2.5 py-3 transition-colors hover:bg-cream ${
                      i < newsItems.length - 1 ? 'border-b border-cream' : ''
                    }`}
                  >
                    <span className={`mt-[5px] h-[9px] w-[9px] flex-shrink-0 rounded-full ${item.pip}`} />
                    <div>
                      <strong className="block text-[0.88rem] font-semibold leading-[1.35] text-ink">
                        {item.title}
                      </strong>
                      <span className="text-[0.78rem] leading-[1.5] text-muted">{item.body}</span>
                    </div>
                    <span className="mt-0.5 whitespace-nowrap text-[0.7rem] font-medium text-muted">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Schedule */}
            <div
              className="animate-fade-up rounded-[16px] border border-cream-dark bg-white p-6"
              style={{ animationDelay: '0.18s' }}
            >
              <div className="mb-3.5 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-muted">
                <span className="h-0.5 w-[18px] flex-shrink-0 rounded bg-terra" />
                Lesson Schedule
              </div>
              <div className="mb-5">
                <p className="font-serif text-[2.4rem] leading-[1.1] text-ink">
                  Wednesday
                </p>
                <p className="mt-1 text-[0.85rem] font-medium text-muted">Wednesdays · All day</p>
              </div>
              <div className="flex flex-col gap-2.5 border-t border-cream pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[8px] border border-cream-dark bg-cream text-[0.9rem]">
                    🏫
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.8px] text-muted">School</span>
                    <span className="text-[0.88rem] font-semibold text-ink">念法幼稚園</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[8px] border border-cream-dark bg-cream text-[0.9rem]">
                    👤
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.8px] text-muted">Teacher</span>
                    <span className="text-[0.88rem] font-semibold text-ink">Mr. Brandon</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[0.75rem] text-muted">
                Makeup lesson dates will be announced in News &amp; Announcements.
              </p>
            </div>

            {/* What They're Learning */}
            <div
              className="animate-fade-up rounded-[16px] border border-cream-dark bg-white p-6"
              style={{ animationDelay: '0.26s' }}
            >
              <div className="mb-3.5 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-muted">
                <span className="h-0.5 w-[18px] flex-shrink-0 rounded bg-[#5CBF7A]" />
                This Term
              </div>
              <p className="text-[0.92rem] leading-[1.65] text-ink">
                This term we&apos;re focusing on everyday English vocabulary through games, conversation, and interactive activities.
              </p>
              <p className="mt-4 text-[0.78rem] text-muted">Full curriculum details coming soon.</p>
            </div>

            {/* Contact */}
            <div
              className="animate-fade-up rounded-[16px] border border-cream-dark bg-white p-6"
              style={{ animationDelay: '0.33s' }}
            >
              <div className="mb-3.5 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-muted">
                <span className="h-0.5 w-[18px] flex-shrink-0 rounded bg-indigo" />
                Contact
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 py-3 border-b border-cream">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-cream-dark bg-cream text-[1rem]">
                    ✉
                  </div>
                  <div>
                    <strong className="block text-[0.82rem] font-semibold text-ink">Email</strong>
                    <span className="text-[0.78rem] text-muted">contact@hoshidadispatch.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-cream-dark bg-cream text-[1rem]">
                    📞
                  </div>
                  <div>
                    <strong className="block text-[0.82rem] font-semibold text-ink">Phone</strong>
                    <span className="text-[0.78rem] text-muted">070-1877-7490</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
