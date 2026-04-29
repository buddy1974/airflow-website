'use client'

import { useState } from 'react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: '', email: '', telefon: '', nachricht: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://airflow-backend-oyff.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', telefon: '', nachricht: '' })
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl opacity-90 font-light">Wir helfen schnell &amp; unkompliziert!</p>
        </div>
      </section>

      {/* 24h banner */}
      <section className="bg-teal py-4 px-4">
        <div className="max-w-4xl mx-auto text-center text-white font-semibold">
          📞 Über unser Notruftelefon sind wir 24 Stunden am Tag erreichbar —{' '}
          <a href="tel:021516599998" className="underline hover:no-underline">
            02151 / 65 99 998
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Nachricht senden</h2>

            {status === 'success' ? (
              <div className="bg-teal-50 border border-teal rounded-xl p-6 text-teal font-medium">
                ✓ Vielen Dank! Wir melden uns innerhalb von 24 Stunden.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                    placeholder="Ihr vollständiger Name"
                  />
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
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                    placeholder="02151 65 99 998"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Nachricht <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-teal text-white py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Unsere Kontaktdaten</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-5 mb-4">
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">🏢</span>
                <div>
                  <div className="font-semibold text-charcoal">Hauptsitz</div>
                  <div className="text-charcoal-light text-sm">
                    Borgschenweg 8-12<br />47239 Duisburg
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <div className="font-semibold text-charcoal">Standort Krefeld</div>
                  <div className="text-charcoal-light text-sm">
                    Stephanstraße 7<br />47799 Krefeld
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <div className="font-semibold text-charcoal">Telefon</div>
                  <a href="tel:021516599998" className="text-teal hover:underline text-sm">
                    02151 / 65 99 998
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">📠</span>
                <div>
                  <div className="font-semibold text-charcoal">Telefax</div>
                  <div className="text-charcoal-light text-sm">02151 / 36 94 214</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">📱</span>
                <div>
                  <div className="font-semibold text-charcoal">Mobil</div>
                  <a href="tel:015174227338" className="text-teal hover:underline text-sm">
                    0151 / 74 227 338
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <div className="font-semibold text-charcoal">E-Mail</div>
                  <a href="mailto:kontakt@fachpflegedienst-airflow.de" className="text-teal hover:underline text-sm break-all">
                    kontakt@fachpflegedienst-airflow.de
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">💬</span>
                <div>
                  <div className="font-semibold text-charcoal">WhatsApp</div>
                  <a
                    href="https://wa.me/4915174227338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline text-sm"
                  >
                    Jetzt auf WhatsApp schreiben
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-teal rounded-xl p-4 text-white text-sm font-medium text-center">
              📞 Notruftelefon — 24 Stunden täglich erreichbar:<br />
              <a href="tel:021516599998" className="text-lg font-bold hover:underline">
                02151 / 65 99 998
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
