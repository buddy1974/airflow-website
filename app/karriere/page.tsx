'use client'

import { useState } from 'react'

const jobs = [
  'Examinierte/r Gesundheits- und Krankenpfleger/in (m/w/d)',
  'Examinierte/r Krankenpfleger/in (m/w/d)',
  'Examinierte/r Altenpfleger/in (m/w/d) mit Weiterbildung außerklinische Intensivpflege (nicht zwingend erforderlich)',
  'Fachkrankenpfleger/in für Intensivpflege und Anästhesie (m/w/d)',
]

const benefits = [
  'Viel Zeit für eine gute Pflege, ohne Druck und Hektik',
  'Attraktives Einkommen nach Qualifikation und Berufserfahrung zuzüglich steuerfreier Zulagen',
  'Unbefristetes Arbeitsverhältnis',
  'Beschäftigung in Teilzeit möglich',
  'Nachtzuschläge sowie Feiertags- und Sonntagszuschläge',
  'Kilometergeld / Tankgutscheine',
  'Strukturierte Einarbeitung entsprechend Deiner Berufserfahrung',
  'Familiäres Betriebsklima',
  'Regelmäßige Teambesprechungen',
  'Individuelle Fort- und Weiterbildungen z.B. zur Pflegefachkraft für außerklinische Beatmung',
  'Eigenverantwortliches Arbeiten mit Gestaltungsmöglichkeiten',
]

export default function KarrierePage() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    position: '',
    anschreiben: '',
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
        setFormData({ vorname: '', nachname: '', email: '', telefon: '', position: '', anschreiben: '' })
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Willkommen im Team</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Sie können sich jederzeit initiativ oder auf ein konkretes Stellenangebot bewerben.
          </p>
        </div>
      </section>

      {/* Job cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Aktuelle Stellenangebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="border-2 border-teal rounded-xl p-6 hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-charcoal leading-snug">{job}</h3>
                </div>
                <div className="mt-3 ml-11 flex gap-2">
                  <span className="bg-teal-50 text-teal text-xs font-medium px-2.5 py-1 rounded-full border border-teal-100">
                    Krefeld / Duisburg
                  </span>
                  <span className="bg-gray-100 text-charcoal-light text-xs font-medium px-2.5 py-1 rounded-full">
                    Vollzeit / Teilzeit
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-3 text-center">Dich erwartet:</h2>
          <p className="text-center text-charcoal-light mb-10">Was wir Ihnen bieten — weil gute Pflege gute Arbeitsbedingungen braucht.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-teal font-bold flex-shrink-0">✓</span>
                <span className="text-charcoal-light text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-3 text-center">Jetzt bewerben</h2>
          <p className="text-center text-charcoal-light mb-8">
            Nutzen Sie das Formular oder schreiben Sie direkt an{' '}
            <a href="mailto:kontakt@fachpflegedienst-airflow.de" className="text-teal hover:underline">
              kontakt@fachpflegedienst-airflow.de
            </a>
          </p>

          {status === 'success' ? (
            <div className="bg-teal-50 border border-teal rounded-xl p-6 text-teal font-medium text-center">
              ✓ Vielen Dank für Ihre Bewerbung! Wir melden uns so schnell wie möglich bei Ihnen.
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
                  {jobs.map((job) => (
                    <option key={job} value={job}>{job}</option>
                  ))}
                  <option value="Initiativbewerbung">Initiativbewerbung</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Anschreiben / Motivationstext
                </label>
                <textarea
                  rows={5}
                  value={formData.anschreiben}
                  onChange={(e) => setFormData({ ...formData, anschreiben: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal resize-none"
                  placeholder="Erzählen Sie uns von Ihrer Berufserfahrung und warum Sie zu airflow passen…"
                />
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

      {/* Contact for applications */}
      <section className="bg-teal-50 border-y border-teal-100 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-charcoal mb-4">Direkter Kontakt für Bewerbungen</h3>
          <div className="text-charcoal-light space-y-1">
            <p className="font-semibold text-charcoal">Fachpflegedienst Airflow — Häuslicher Pflegedienst</p>
            <p>Frau Rugiatu Koroma (Geschäftsführerin)</p>
            <p>Stephanstraße 7, 47799 Krefeld</p>
            <p>
              Tel:{' '}
              <a href="tel:015174227338" className="text-teal hover:underline">
                +49 (0) 151 74 227 338
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:kontakt@fachpflegedienst-airflow.de" className="text-teal hover:underline">
                kontakt@fachpflegedienst-airflow.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
