import Link from 'next/link'

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
          <p className="text-xl opacity-90 font-light">Wir helfen schnell &amp; unkompliziert!</p>
        </div>
      </section>

      {/* Rugiatu Koroma */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-teal-50 border-4 border-teal rounded-full flex items-center justify-center text-4xl font-bold text-teal mb-4">
                RK
              </div>
              <h2 className="text-2xl font-bold text-charcoal mb-1">Rugiatu Koroma</h2>
              <p className="text-teal font-semibold mb-4">Geschäftsführerin · Fachpflegedienst airflow GmbH</p>
            </div>
            <div>
              <blockquote className="border-l-4 border-teal pl-6 text-xl font-light text-charcoal italic leading-relaxed mb-6">
                „Den Fachpflegedienst airflow zu gründen ist eine Herzensangelegenheit, denn die Intensivpflege ist meine Berufung und erfüllt mich mit Freude. Ich freue mich sehr diesen Weg mit meinem Team gemeinsam zu gehen."
              </blockquote>
              <p className="text-charcoal-light leading-relaxed">
                Rugiatu Koroma leitet den Fachpflegedienst airflow mit tiefer Überzeugung und jahrelanger Erfahrung in der Intensivpflege. Ihre Motivation: Menschen, die auf Beatmungsunterstützung angewiesen sind, ein würdevolles, selbstbestimmtes Leben im eigenen Zuhause zu ermöglichen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leitbild excerpt */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Unser Unternehmensleitbild</h2>
          <div className="space-y-6 text-charcoal-light leading-relaxed">
            <p>
              Wir haben Versorgungsverträge mit allen Pflegekassen und Sozialhilfeträgern. Unser Einzugsgebiet ist das westliche Nordrhein-Westfalen.
            </p>
            <p>
              Pflegebedürftige uns anvertraute Menschen, deren Angehörige und unsere Mitarbeiter sollen sich angenommen, geschätzt und wohlfühlen.
            </p>
            <p>
              Eine offene, vertrauensvolle Gesprächskultur auf Augenhöhe mit allen am Pflegeprozess Beteiligten ist uns wichtig.
            </p>
            <p>
              Der Dienst am Menschen erfolgt unabhängig von seiner Herkunft, Rasse, religiösen oder politischen Überzeugung.
            </p>
            <p>
              Der von uns betreute pflegebedürftige Mensch bestimmt über sich selbst.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/leitbild"
              className="text-teal font-semibold hover:underline"
            >
              Vollständiges Leitbild lesen →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🕊️',
                title: 'Würde & Respekt',
                desc: 'Jeder Mensch verdient Pflege, die seine Persönlichkeit, seine Geschichte und seinen Willen respektiert. Würde ist das Fundament jedes unserer Pflegehandlungen.',
              },
              {
                icon: '🎓',
                title: 'Fachkompetenz',
                desc: 'Beatmungspflege erfordert tiefes medizinisches Wissen und permanente Weiterbildung. Wir investieren konsequent in die Qualifikation unseres Teams.',
              },
              {
                icon: '⏰',
                title: 'Verlässlichkeit',
                desc: 'Unsere Patienten können sich auf uns verlassen — zu jeder Tages- und Nachtzeit. Was wir zusagen, halten wir. Pünktlich, konsequent, transparent.',
              },
              {
                icon: '❤️',
                title: 'Menschlichkeit',
                desc: 'Hinter jedem Patienten steht ein Mensch mit Familie, Träumen und Gefühlen. Empathie und echtes Interesse an der Person machen den Unterschied.',
              },
            ].map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundesgesundheitsminister quote */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl text-gray-300 mb-4">&ldquo;</div>
          <blockquote className="text-xl font-light text-charcoal italic leading-relaxed mb-6 -mt-4">
            Intensiv-Pflegebedürftige sollen dort versorgt werden können, wo es für sie am besten ist. Das darf keine Frage des Geldbeutels sein.
          </blockquote>
          <p className="text-charcoal-light text-sm">— Zitat Bundesgesundheitsminister Jens Spahn</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Lernen Sie uns persönlich kennen</h2>
          <p className="text-lg opacity-90 mb-8">
            Wir nehmen uns Zeit für Sie — kostenlos, unverbindlich und auf Augenhöhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:021516599998"
              className="bg-white text-teal font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              02151 / 65 99 998
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
