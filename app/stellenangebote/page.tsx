'use client'

import { useState } from 'react'

const jobs = [
  {
    title: 'Examinierte Pflegefachkraft (m/w/d)',
    type: 'Vollzeit / Teilzeit',
    location: 'Krefeld',
    desc: 'Wir suchen engagierte Pflegefachkräfte mit Interesse an der Intensiv- und Beatmungspflege. Berufserfahrung in der Intensivpflege ist ein Plus, aber kein Muss — wir schulen Sie ein.',
    requirements: [
      '3-jährige Pflegeausbildung (Altenpflege oder Gesundheits- und Krankenpflege)',
      'Interesse an hochspezialisierter Beatmungspflege',
      'Bereitschaft zur Schichtarbeit inkl. Nacht- und Wochenenddienste',
      'Einfühlungsvermögen, Zuverlässigkeit, Teamgeist',
    ],
  },
  {
    title: 'Pflegehilfskraft (m/w/d)',
    type: 'Vollzeit / Teilzeit',
    location: 'Krefeld',
    desc: 'Unterstützung unseres Pflegeteams bei der Grundpflege, Hauswirtschaft und Begleitung unserer Patienten. Sie erhalten eine strukturierte Einarbeitung durch erfahrene Fachkräfte.',
    requirements: [
      'Pflegehilfskurs oder vergleichbare Erfahrung erwünscht',
      'Einfühlungsvermögen im Umgang mit schwerstkranken Menschen',
      'Bereitschaft zu flexiblen Arbeitszeiten',
      'Führerschein Klasse B von Vorteil',
    ],
  },
  {
    title: 'Pflegedienstleitung (m/w/d)',
    type: 'Vollzeit',
    location: 'Krefeld',
    desc: 'Für unseren wachsenden Pflegedienst suchen wir eine erfahrene Pflegedienstleitung zur organisatorischen und fachlichen Steuerung unseres Teams.',
    requirements: [
      'Examinierte Pflegefachkraft mit PDL-Weiterbildung (460 Std.) oder Studium Pflegemanagement',
      'Mehrjährige Berufserfahrung in der ambulanten oder stationären Pflege',
      'Führungserfahrung und Organisationstalent',
      'Kenntnisse in SGB XI / Qualitätsmanagement',
    ],
  },
]

export default function StellenangebotePage() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    position: '',
    bewerbungstext: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://airflow-backend-oyff.onrender.com/api/recruitment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ vorname: '', nachname: '', email: '', telefon: '', position: '', bewerbungstext: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Werden Sie Teil unseres Teams</h1>
          <p className="text-xl opacity-90">
            Sinnvolle Arbeit in einem spezialisierten Pflegeteam — mitten in Krefeld.
          </p>
        </div>
      </section>

      {/* Job cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Aktuelle Stellen</h2>
          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.title} className="border border-gray-200 rounded-xl p-6 hover:border-teal hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-charcoal">{job.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className="bg-teal-50 text-teal text-xs font-medium px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-gray-100 text-charcoal-light text-xs font-medium px-3 py-1 rounded-full">📍 {job.location}</span>
                  </div>
                </div>
                <p className="text-charcoal-light mb-4">{job.desc}</p>
                <ul className="space-y-1">
                  {job.requirements.map((req) => (
                    <li key={req} className="text-sm text-charcoal-light flex gap-2">
                      <span className="text-teal">✓</span> {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Was wir bieten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '💰', title: 'Faire Vergütung', desc: 'Wettbewerbsfähiges Gehalt nach Qualifikation und Erfahrung — zzgl. Schicht- und Wochenendzuschläge.' },
              { icon: '📍', title: 'Standort Krefeld', desc: 'Arbeiten Sie in Ihrer Region — keine weiten Anfahrtswege, Patienten im Krefelder Stadtgebiet.' },
              { icon: '🤝', title: 'Starker Teamgeist', desc: 'Kleines, eng zusammenarbeitendes Team mit flachen Hierarchien und direkter Kommunikation.' },
              { icon: '📚', title: 'Weiterbildung', desc: 'Wir übernehmen die Kosten für Fachweiterbildungen, z.B. in der Intensiv- und Beatmungspflege.' },
              { icon: '🎯', title: 'Sinnvolle Arbeit', desc: 'Spezialisierte Pflege mit echtem Unterschied — Ihre Arbeit verändert das Leben unserer Patienten täglich.' },
              { icon: '📋', title: 'Gute Einarbeitung', desc: 'Strukturiertes Onboarding, Mentoring durch erfahrene Kolleginnen und klare Pflegeprotokolle.' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4 bg-white p-5 rounded-xl border border-gray-100">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">{benefit.title}</h3>
                  <p className="text-charcoal-light text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Jetzt bewerben</h2>

          {status === 'success' ? (
            <div className="bg-teal-50 border border-teal rounded-xl p-6 text-teal font-medium text-center">
              ✓ Vielen Dank für Ihre Bewerbung! Wir melden uns innerhalb von 48 Stunden.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Vorname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vorname}
                    onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Nachname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nachname}
                    onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Telefon</label>
                <input
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Position</label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                >
                  <option value="">Bitte wählen…</option>
                  <option>Examinierte Pflegefachkraft (m/w/d)</option>
                  <option>Pflegehilfskraft (m/w/d)</option>
                  <option>Pflegedienstleitung (m/w/d)</option>
                  <option>Initiativbewerbung</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Bewerbungstext</label>
                <textarea
                  rows={5}
                  value={formData.bewerbungstext}
                  onChange={(e) => setFormData({ ...formData, bewerbungstext: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal resize-none"
                  placeholder="Erzählen Sie uns von sich und warum Sie zu airflow passen…"
                />
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center text-charcoal-light text-sm">
                📎 Lebenslauf hochladen — Funktion folgt in Kürze. Bitte senden Sie Ihren CV alternativ per E-Mail an{' '}
                <a href="mailto:air.flow@gmx.de" className="text-teal hover:underline">air.flow@gmx.de</a>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">
                  Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder bewerben Sie sich per E-Mail.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-teal text-white py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Wird gesendet…' : 'Jetzt bewerben'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
