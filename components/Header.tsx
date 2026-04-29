'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/beatmungspflege', label: 'Beatmungspflege' },
  { href: '/team', label: 'Team' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/stellenangebote', label: 'Stellenangebote' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Logo />
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

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:021516599998" className="text-teal font-semibold text-sm">
              02151 / 65 99 998
            </a>
            <Link
              href="/kontakt"
              className="bg-teal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
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
              className="block text-base font-medium text-charcoal hover:text-teal py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a href="tel:021516599998" className="block text-teal font-semibold text-base mb-3">
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
