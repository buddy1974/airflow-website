import Link from 'next/link'

const services = [
  {
    icon: '🫁',
    title: 'Beatmungspflege',
    desc: 'Wir übernehmen die vollständige Versorgung von beatmungspflichtigen Patienten zuhause. Unser Team aus examinierten Pflegefachkräften ist rund um die Uhr im Einsatz, überwacht Beatmungsgeräte und reagiert sofort bei Veränderungen. Die Pflege erfolgt nach individuell erstelltem Pflegeplan in enger Abstimmung mit dem behandelnden Arzt.',
    href: '/beatmungspflege',
  },
  {
    icon: '🔬',
    title: 'Tracheostomaversorgung',
    desc: 'Die Pflege des Tracheostomas erfordert höchste Sorgfalt und Fachkenntnisse. Unsere Pflegekräfte führen Kanülenwechsel, Wundreinigung und Wundversorgung nach ärztlicher Anordnung durch. Wir schulen auf Wunsch auch Angehörige in Grundkenntnissen der Tracheostomapflege.',
    href: '/leistungen',
  },
  {
    icon: '🏠',
    title: '1:1 Intensivpflege zuhause',
    desc: 'Eine Pflegefachkraft begleitet Ihren Angehörigen exklusiv rund um die Uhr. Diese Form der Intensivbetreuung stellt sicher, dass jede Veränderung im Gesundheitszustand sofort erkannt und behandelt wird. Das Verbleiben in der gewohnten Umgebung steigert nachweislich die Lebensqualität.',
    href: '/leistungen',
  },
  {
    icon: '💊',
    title: 'Medikamentengabe nach ärztl. AO',
    desc: 'Die sachgerechte Verabreichung von Medikamenten — oral, inhalativ oder parenteral — erfolgt ausschließlich nach ärztlicher Anordnung und wird lückenlos dokumentiert. Unsere Pflegekräfte überwachen Wirkung und Nebenwirkungen und informieren den Arzt bei Auffälligkeiten umgehend.',
    href: '/leistungen',
  },
  {
    icon: '🛁',
    title: 'Grundpflege & Körperpflege',
    desc: 'Tägliche Körperpflege, Waschen, Lagern und Prophylaxen gehören zum festen Bestandteil unserer Pflegeleistung. Wir achten dabei stets auf die Würde und die persönlichen Gewohnheiten unserer Patienten. Dekubitus- und Kontrakturprophylaxe werden konsequent umgesetzt.',
    href: '/leistungen',
  },
  {
    icon: '🧹',
    title: 'Hauswirtschaftliche Versorgung',
    desc: 'Ergänzend zur Pflege übernehmen wir auf Wunsch hauswirtschaftliche Aufgaben wie Einkaufen, Kochen, Wäschepflege und leichte Haushaltsarbeiten. So können Patienten vollständig in ihrer gewohnten häuslichen Umgebung verbleiben, ohne auf Unterstützung verzichten zu müssen.',
    href: '/leistungen',
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Pflegeleistungen</h1>
          <p className="text-xl opacity-90">
            Hochspezialisierte ambulante Pflege für beatmungspflichtige Menschen — zuhause, würdevoll und sicher.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-xl p-6 hover:border-teal hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href={service.href} className="text-teal font-medium text-sm hover:underline">
                  Mehr erfahren →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Haben Sie Fragen zu unseren Leistungen?</h2>
          <p className="text-lg opacity-90 mb-8">
            Wir beraten Sie kostenlos und unverbindlich — telefonisch oder per WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:021516599998"
              className="bg-white text-teal font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              02151 / 65 99 998 anrufen
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
