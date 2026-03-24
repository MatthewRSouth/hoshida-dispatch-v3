'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Teachers', href: '/teachers' },
  { label: 'Schools', href: '/schools' },
  { label: 'Parent Hub', href: '/parent-hub' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-cream-dark bg-[rgba(250,237,202,0.95)] backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-site items-center justify-between px-[5vw]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-[1.2rem] text-ink no-underline">
          <span className="h-2 w-2 rounded-full bg-terra" />
          Hoshida Dispatch
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-7 list-none md:flex">
          {links.map((link) => {
            const isActive = link.href !== '#' && pathname === link.href
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[0.85rem] font-semibold no-underline transition-colors hover:text-ink ${isActive ? 'text-ink' : 'text-muted'}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="#"
            className="rounded-pill bg-indigo px-5 py-[9px] text-[0.83rem] font-bold text-white transition-colors hover:bg-indigo-dark"
          >
            Apply
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-cream-dark bg-cream px-[5vw] py-4 md:hidden">
          <ul className="flex flex-col gap-3 list-none">
            {links.map((link) => {
              const isActive = link.href !== '#' && pathname === link.href
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[0.9rem] font-semibold ${isActive ? 'text-ink font-semibold' : 'text-ink'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-4 flex gap-2">
            <Link
              href="#"
              className="rounded-pill bg-indigo px-5 py-2 text-[0.83rem] font-bold text-white"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
