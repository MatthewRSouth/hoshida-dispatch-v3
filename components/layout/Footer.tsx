import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink px-[5vw] pb-7 pt-12">
      <div className="mx-auto max-w-site">
        <div className="mb-7 grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-[1.2rem] text-white no-underline">
              <span className="h-2 w-2 rounded-full bg-terra" />
              Hoshida Dispatch
            </Link>
            <p className="mt-2.5 max-w-[220px] text-[0.82rem] leading-relaxed text-white/45">
              Bringing qualified English teachers to kindergartens across Japan.
            </p>
          </div>

          {/* For Schools */}
          <div>
            <h4 className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-white/35">
              For Schools
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {['Teaching approach', 'Our programs', 'Apply now', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.83rem] text-white/55 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-white/35">
              Company
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {['About us', 'Teacher info', 'Resources', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.83rem] text-white/55 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[1.2px] text-white/35">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {['Parent news', 'contact@hoshidadispatch.com', '070-1877-7490'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[0.83rem] text-white/55 no-underline transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-wrap items-center justify-between gap-5">
          <p className="text-[0.75rem] text-white/30">
            &copy; {new Date().getFullYear()} Hoshida Dispatch. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy policy', 'Terms of service', 'Cookie settings'].map((item) => (
              <Link key={item} href="#" className="text-[0.75rem] text-white/30 no-underline hover:text-white/60">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
