import Link from 'next/link'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leitbild', label: 'Leitbild' },
  { href: '/karriere', label: 'Karriere' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
]

function DandelionWhite() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="60" x2="50" y2="115" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="52" r="7" fill="white" />
      <line x1="50" y1="48" x2="50" y2="18" stroke="white" strokeWidth="1.5" />
      <circle cx="50" cy="14" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="22" y2="28" stroke="white" strokeWidth="1.5" />
      <circle cx="19" cy="25" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="78" y2="28" stroke="white" strokeWidth="1.5" />
      <circle cx="81" cy="25" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="15" y2="48" stroke="white" strokeWidth="1.5" />
      <circle cx="11" cy="48" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="85" y2="48" stroke="white" strokeWidth="1.5" />
      <circle cx="89" cy="48" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="25" y2="65" stroke="white" strokeWidth="1.5" />
      <circle cx="22" cy="68" r="3.5" fill="white" />
      <line x1="50" y1="48" x2="75" y2="65" stroke="white" strokeWidth="1.5" />
      <circle cx="78" cy="68" r="3.5" fill="white" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2D2D2D' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DandelionWhite />
              <div className="flex flex-col leading-tight">
                <span style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#ffffff', lineHeight: 1.1, fontWeight: 400 }}>
                  airflow
                </span>
                <span style={{ fontSize: '0.9rem', color: '#00ABA8', fontWeight: 700, lineHeight: 1.1 }}>
                  Fachpflegedienst
                </span>
              </div>
            </div>
            <p className="text-teal font-medium italic mb-3">„Mit Herz und Sachverstand"</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr ambulanter Fachpflegedienst für Beatmungspflege und Intensivpflege in Krefeld und Umgebung.
            </p>
          </div>

          {/* Col 2: Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-medium text-gray-300">Hauptsitz</li>
              <li>Borgschenweg 8-12</li>
              <li>47239 Duisburg</li>
              <li className="pt-2 font-medium text-gray-300">Standort Krefeld</li>
              <li>Stephanstraße 7</li>
              <li>47799 Krefeld</li>
              <li className="pt-2">
                <a href="tel:021516599998" className="hover:text-teal transition-colors">
                  Tel: 02151 / 65 99 998
                </a>
              </li>
              <li>
                <span className="text-gray-500">Fax: 02151 / 36 94 214</span>
              </li>
              <li>
                <a href="mailto:kontakt@fachpflegedienst-airflow.de" className="hover:text-teal transition-colors break-all">
                  kontakt@fachpflegedienst-airflow.de
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          © 2026 Fachpflegedienst airflow GmbH · Alle Rechte vorbehalten · HRB 19337 Amtsgericht Krefeld
        </div>
        <div className="mt-3 text-center" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
          Entwickelt von{' '}
          <a
            href="https://maxpromo.digital"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline' }}
          >
            maxpromo.digital
          </a>
        </div>
      </div>
    </footer>
  )
}
