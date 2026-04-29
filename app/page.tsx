import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Professionelle Beatmungspflege in Krefeld
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 opacity-90">
            Ambulante Intensivpflege · 24/7 · 1:1 Betreuung zuhause
          </h2>
          <p className="text-lg mb-10 opacity-85 max-w-2xl mx-auto leading-relaxed">
            Wir begleiten beatmungspflichtige Patienten sicher und würdevoll in ihrem Zuhause. Unser zertifiziertes Fachpflegeteam ist rund um die Uhr für Sie da.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/kontakt"
              className="bg-white text-teal font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              href="/leistungen"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-90">
            <span>✓ MDK-zertifiziert</span>
            <span>✓ 24/7 Bereitschaft</span>
            <span>✓ Krefeld &amp; Umgebung</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-10 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '24/7', label: 'Rund-um-die-Uhr Bereitschaft' },
            { number: '1:1', label: 'Individuelle Betreuung' },
            { number: '100%', label: 'Zertifizierte Pflegefachkräfte' },
            { number: 'Krefeld', label: '& Umgebung' },
          ].map((stat) => (
            <div key={stat.number}>
              <div className="text-3xl font-bold text-teal mb-1">{stat.number}</div>
              <div className="text-sm text-charcoal-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🫁',
                title: 'Beatmungspflege',
                desc: 'Professionelle Versorgung beatmungspflichtiger Patienten mit modernsten Geräten und zertifizierten Fachkräften.',
              },
              {
                icon: '🔬',
                title: 'Tracheostomaversorgung',
                desc: 'Fachgerechte Pflege, Reinigung und Wechsel der Trachealkanüle nach ärztlicher Anordnung.',
              },
              {
                icon: '🏠',
                title: '1:1 Intensivpflege zuhause',
                desc: 'Individuelle Betreuung rund um die Uhr — damit Ihre Angehörigen sicher und würdevoll zuhause leben können.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border-2 border-teal rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leistungen" className="text-teal font-semibold hover:underline">
              Alle Leistungen anzeigen →
            </Link>
          </div>
        </div>
      </section>

      {/* Why airflow */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Warum airflow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Spezialisiert auf Beatmungspflege',
                desc: 'Wir konzentrieren uns ausschließlich auf hochspezialisierte Intensivpflege.',
              },
              {
                icon: '👩‍⚕️',
                title: 'Erfahrenes Fachpflegeteam',
                desc: 'Alle unsere Pflegekräfte sind examiniert und speziell für Beatmungspflege ausgebildet.',
              },
              {
                icon: '🤝',
                title: 'Enge Zusammenarbeit mit Ärzten',
                desc: 'Wir arbeiten eng mit behandelnden Ärzten und Therapeuten zusammen.',
              },
              {
                icon: '💙',
                title: 'Würde im Mittelpunkt',
                desc: 'Lebensqualität, Würde und das Wohlbefinden unserer Patienten stehen immer an erster Stelle.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-charcoal-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Wir sind für Sie da — 24 Stunden, 7 Tage die Woche
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Rufen Sie uns an oder schreiben Sie uns auf WhatsApp — wir beraten Sie kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:021516599998"
              className="bg-white text-teal font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              02151 / 65 99 998 anrufen
            </a>
            <a
              href="https://wa.me/4915174227338"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
