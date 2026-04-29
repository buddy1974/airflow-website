'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leitbild', label: 'Leitbild' },
  { href: '/karriere', label: 'Karriere' },
  { href: '/kontakt', label: 'Kontakt' },
]

function DandelionSVG({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="50" y1="60" x2="50" y2="115" stroke="#00ABA8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="52" r="7" fill="#00ABA8" />
      <line x1="50" y1="48" x2="50" y2="18" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="50" cy="14" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="22" y2="28" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="19" cy="25" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="78" y2="28" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="81" cy="25" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="15" y2="48" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="11" cy="48" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="85" y2="48" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="89" cy="48" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="25" y2="65" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="22" cy="68" r="3.5" fill="#00ABA8" />
      <line x1="50" y1="48" x2="75" y2="65" stroke="#00ABA8" strokeWidth="1.5" />
      <circle cx="78" cy="68" r="3.5" fill="#00ABA8" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <DandelionSVG />
            <div className="flex flex-col leading-tight">
              <span style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#2D2D2D', lineHeight: 1.1, fontWeight: 400 }}>
                airflow
              </span>
              <span style={{ fontSize: '0.9rem', color: '#00ABA8', fontWeight: 700, lineHeight: 1.1 }}>
                Fachpflegedienst
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:021516599998" className="text-teal font-semibold text-sm whitespace-nowrap">
              02151 / 65 99 998
            </a>
            <Link
              href="/kontakt"
              className="bg-teal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors whitespace-nowrap"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-charcoal hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-charcoal hover:text-teal py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <a href="tel:021516599998" className="block text-teal font-semibold text-base">
              02151 / 65 99 998
            </a>
            <Link
              href="/kontakt"
              className="block bg-teal text-white px-4 py-2 rounded-md text-sm font-medium text-center"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
