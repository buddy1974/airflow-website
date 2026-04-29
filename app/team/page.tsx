import Link from 'next/link'

export default function TeamPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Team</h1>
          <p className="text-xl opacity-90">
            Examinierte Pflegefachkräfte, spezialisiert auf Beatmungspflege und Intensivversorgung.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">R. Koroma</h3>
              <p className="text-teal font-semibold text-sm mb-4">Pflegedienstleiterin</p>
              <ul className="text-charcoal-light text-sm space-y-2 text-left">
                <li>✓ Examinierte Pflegefachkraft (3-jährig)</li>
                <li>✓ Weiterbildung Intensiv- und Beatmungspflege</li>
                <li>✓ Qualifikation Pflegedienstleitung</li>
                <li>✓ Langjährige Erfahrung in der Intensivpflege</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-charcoal mb-4">Wir suchen Verstärkung</h3>
              <p className="text-charcoal-light mb-6">
                Sind Sie examinierte Pflegefachkraft und suchen eine sinnvolle, spezialisierte Tätigkeit in der Beatmungspflege? Wir freuen uns auf Ihre Bewerbung.
              </p>
              <Link
                href="/stellenangebote"
                className="bg-teal text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition-colors text-center"
              >
                Zu den Stellenangeboten
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Fragen an unser Team?</h2>
          <p className="text-charcoal-light mb-6">Wir sind persönlich erreichbar — telefonisch oder per Kontaktformular.</p>
          <Link href="/kontakt" className="bg-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
