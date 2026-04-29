import Link from 'next/link'

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            BEATMUNGSPFLEGE UND INTENSIVPFLEGE
          </h1>
          <p className="text-xl opacity-90 font-light">Wir helfen schnell &amp; unkompliziert!</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-teal-50 border-b border-teal-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Beratung und Organisation</h2>
          <p className="text-charcoal-light leading-relaxed text-lg">
            Wir übernehmen die Organisation und Begleitung von der Klinik bis nach Hause. Die Unterstützung bei der Beschaffung von medizinischen Geräten und die Begleitung zu außerhäuslichen Terminen ist gewährleistet. Sie können Ihre Sorgen &amp; Ängste bei uns thematisieren – gemeinsam finden wir Lösungen.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Intensiv- und Beatmungspflege */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-3xl">🫁</div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Intensiv- und Beatmungspflege</h2>
              <p className="text-charcoal-light leading-relaxed">
                Wir sind Spezialisten für Intensiv- und Beatmungspflege! Wir beherrschen sämtliche medizinische und pflegerische Leistungen zur Beatmung: Heimbeatmung, Tracheostoma-Versorgung, Sauerstoffgabe, Pneumonie-Prävention und Sekretmanagement nach ärztlicher Anordnung. Wir übernehmen die 24-Stunden-Überwachung der lebenswichtigen Funktionen.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Heimbeatmung (invasiv und nicht-invasiv)',
                  'Tracheostoma-Versorgung und Kanülenwechsel',
                  'Sauerstoffgabe und -überwachung',
                  'Pneumonie-Prävention',
                  'Sekretmanagement und Absaugung',
                  '24-Stunden-Monitoring der Vitalfunktionen',
                  'Notfallmanagement nach klaren Protokollen',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-charcoal-light text-sm">
                    <span className="text-teal font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Behandlungspflege SGB V */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-3xl">💉</div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Behandlungspflege (SGB V)</h2>
              <p className="text-charcoal-light leading-relaxed">
                Wir übernehmen die komplette Behandlungspflege nach SGB V für Sie! Injektionen, Verbandspflege, Kompressionsstrümpfe an- &amp; ausziehen, Augentropfengabe, Kathetisierung &amp; Katheterpflege, Stomabehandlung, PEG-Versorgung, Einläufe, Klistiere, Blutdruckmessung, Blutzuckerbestimmung, Medikamentengabe &amp; Kontrolle und Wundversorgung.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Injektionen (s.c., i.m.)',
                  'Verbandspflege und Wundversorgung',
                  'Kompressionsstrümpfe an- & ausziehen',
                  'Augentropfengabe',
                  'Kathetisierung & Katheterpflege',
                  'Stomabehandlung',
                  'PEG-Versorgung und Sondenernährung',
                  'Einläufe und Klistiere',
                  'Blutdruckmessung und Blutzuckerbestimmung',
                  'Medikamentengabe & Kontrolle',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-charcoal-light text-sm">
                    <span className="text-teal font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Grundpflege SGB XI */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-3xl">🏠</div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Ambulante Pflege / Grundpflege (SGB XI)</h2>
              <p className="text-charcoal-light leading-relaxed">
                Wir übernehmen die Ambulante Pflege/Grundpflege nach SGB XI für Sie! Körperpflege, Waschen, Duschen, Baden, Ankleiden, Ernährung und Mobilisation — alles mit äußerstem Respekt und Einfühlungsvermögen.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Körperpflege (Waschen, Duschen, Baden)',
                  'Ankleiden und Auskleiden',
                  'Mundpflege und Zahnpflege',
                  'Ernährungsunterstützung',
                  'Mobilisation und Lagerung',
                  'Begleitung zu Arzt- und Therapieterminen',
                  'Aktivierende Pflege zur Erhaltung der Selbstständigkeit',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-charcoal-light text-sm">
                    <span className="text-teal font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Hauswirtschaft */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-3xl">🧹</div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Hauswirtschaftliche Versorgung</h2>
              <p className="text-charcoal-light leading-relaxed">
                Wir übernehmen Ihre hauswirtschaftliche Versorgung! Im Rahmen der hauswirtschaftlichen Versorgung unterstützen wir bei den alltäglichen Aufgaben im Haushalt: Reinigung der Wohnung, Waschen und Bügeln von Kleidung und Wäsche, Erledigung von Einkäufen.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Reinigung und Pflege der Wohnung',
                  'Waschen und Bügeln von Kleidung und Wäsche',
                  'Einkäufe erledigen',
                  'Kochen und Mahlzeiten zubereiten',
                  'Müllentsorgung',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-charcoal-light text-sm">
                    <span className="text-teal font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Versorgungsverträge info */}
      <section className="bg-teal-50 border-y border-teal-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Alle Pflegekassen</h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Wir haben Versorgungsverträge mit allen Pflegekassen und Sozialhilfeträgern. Unsere Leistungen werden vollständig von Ihrer Pflegekasse übernommen — ohne Zusatzkosten für Sie.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Wir helfen schnell &amp; unkompliziert!</h2>
          <p className="text-lg opacity-90 mb-8">
            Rufen Sie uns an — wir beraten Sie kostenlos und unverbindlich über alle Leistungen und Möglichkeiten.
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
