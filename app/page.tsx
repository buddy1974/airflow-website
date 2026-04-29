import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white min-h-[70vh] flex items-center px-4">
        <div className="max-w-4xl mx-auto text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Beatmungspflege &amp; Intensivpflege in Krefeld
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 opacity-90">
            Ambulante Fachpflege · 24/7 · 1:1 Betreuung zuhause
          </h2>
          <p className="text-lg mb-10 opacity-85 max-w-3xl mx-auto leading-relaxed">
            Herzlich willkommen beim Fachpflegedienst airflow! Unter der Leitung von Rugiatu Koroma bieten wir Ihnen umfassende Unterstützung in Ihrem Alltag. Unser Pflegedienst ist spezialisiert, Ihnen mit Herz und Sachverstand zur Seite zu stehen — denn jeder Mensch ist einzigartig.
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
          <div className="flex flex-wrap gap-4 justify-center text-sm opacity-90">
            <span>✓ MDK-geprüfte Qualität</span>
            <span>✓ 24/7 Notrufbereitschaft</span>
            <span>✓ Alle Pflegekassen</span>
            <span>✓ Westliches NRW</span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white py-10 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '24/7', label: 'Notrufbereitschaft' },
            { number: '1:1', label: 'Individuelle Betreuung' },
            { number: '100%', label: 'Examinierte Fachkräfte' },
            { number: 'NRW', label: 'Westliches Nordrhein-Westfalen' },
          ].map((stat) => (
            <div key={stat.number}>
              <div className="text-3xl font-bold text-teal mb-1">{stat.number}</div>
              <div className="text-sm text-charcoal-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-3">Unsere Leistungen</h2>
          <p className="text-center text-charcoal-light mb-12 max-w-2xl mx-auto">
            Wir beherrschen sämtliche medizinische und pflegerische Leistungen — spezialisiert auf Intensiv- und Beatmungspflege.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🫁',
                title: 'Beatmungspflege & Intensivpflege',
                desc: 'Heimbeatmung, Tracheostoma-Versorgung, Sauerstoffgabe, Pneumonie-Prävention und Sekretmanagement nach ärztlicher Anordnung. Wir übernehmen die 24-Stunden-Überwachung der lebenswichtigen Funktionen.',
              },
              {
                icon: '💉',
                title: 'Behandlungspflege (SGB V)',
                desc: 'Injektionen, Verbandspflege, Kompressionsstrümpfe, Katheterpflege, PEG-Versorgung, Blutdruckmessung, Blutzuckerbestimmung, Medikamentengabe und Wundversorgung.',
              },
              {
                icon: '🏠',
                title: 'Grundpflege & Betreuung (SGB XI)',
                desc: 'Grundpflegerische Leistungen sowie persönliche Betreuung — individuell nach Ihren Bedürfnissen. Ob morgendliche Pflege, Begleitung zu Arztterminen oder alltägliche Unterstützung.',
              },
              {
                icon: '🧹',
                title: 'Hauswirtschaftliche Versorgung',
                desc: 'Reinigung der Wohnung, Waschen und Bügeln, Erledigung von Einkäufen — wir schaffen ein behagliches Umfeld, in dem Sie sich rundum wohlfühlen können.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border-t-4 border-teal shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="bg-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* WHY AIRFLOW */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Warum Fachpflegedienst airflow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Herzensangelegenheit',
                desc: 'Die Gründung von airflow war für Rugiatu Koroma eine Herzensangelegenheit — Intensivpflege ist ihre Berufung und erfüllt sie mit Freude.',
              },
              {
                icon: '🤝',
                title: 'Versorgungsverträge',
                desc: 'Wir haben Versorgungsverträge mit allen Pflegekassen und Sozialhilfeträgern. Unsere Leistungen werden vollständig übernommen.',
              },
              {
                icon: '👩‍⚕️',
                title: 'Examinierte Fachkräfte',
                desc: 'Unser Team besteht aus examinierten Gesundheits-, Kranken- und Altenpflegern mit Spezialausbildung in außerklinischer Intensivpflege.',
              },
              {
                icon: '💙',
                title: 'Jeder Mensch ist einzigartig',
                desc: 'Wir gestalten die Betreuung individuell nach Ihren Bedürfnissen. Bei uns stehen Ihre Wünsche und Ihr Wohlbefinden im Mittelpunkt.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUGIATU KOROMA QUOTE */}
      <section className="bg-teal py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6 opacity-40">&ldquo;</div>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 -mt-8">
            Den Fachpflegedienst airflow zu gründen ist eine Herzensangelegenheit, denn die Intensivpflege ist meine Berufung und erfüllt mich mit Freude. Ich freue mich sehr, diesen Weg mit meinem Team gemeinsam zu gehen.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
              RK
            </div>
            <span className="font-medium">Rugiatu Koroma, Geschäftsführerin</span>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: '#2D2D2D' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Beim Fachpflegedienst Airflow ist Ihr Wohl unser Anliegen!
          </h2>
          <p className="text-lg opacity-80 mb-8">
            Wir sind 24 Stunden am Tag, 7 Tage die Woche für Sie erreichbar. Kontaktieren Sie uns — wir finden gemeinsam den besten Weg, Sie zu unterstützen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:021516599998"
              className="bg-teal text-white font-semibold px-8 py-3 rounded-md hover:bg-teal-600 transition-colors"
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
