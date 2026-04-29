import Link from 'next/link'

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über airflow</h1>
          <p className="text-xl opacity-90">
            Wir sind ein spezialisierter ambulanter Pflegedienst mit dem Fokus auf Beatmungspflege in Krefeld und Umgebung.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Unser Auftrag</h2>
            <blockquote className="text-2xl font-light text-teal italic leading-relaxed border-l-4 border-teal pl-6 text-left max-w-3xl mx-auto">
              „Unser Auftrag ist es, beatmungspflichtigen Menschen ein sicheres, würdevolles Leben in ihrem Zuhause zu ermöglichen."
            </blockquote>
          </div>
          <div className="space-y-5 text-charcoal-light leading-relaxed">
            <p>
              airflow Fachpflegedienst wurde mit dem Ziel gegründet, eine Lücke in der ambulanten Versorgungslandschaft in Krefeld zu schließen: die professionelle, hochspezialisierte Betreuung von Menschen, die dauerhaft auf Beatmungsunterstützung angewiesen sind. Diese Patienten haben besondere Bedürfnisse, die weit über die Standard-Hauspflege hinausgehen.
            </p>
            <p>
              Unser Team besteht ausschließlich aus examinierten Pflegefachkräften mit Zusatzqualifikationen in der Intensiv- und Beatmungspflege. Wir stehen sieben Tage die Woche, 24 Stunden täglich im Einsatz — weil Beatmungspflege keine Pause kennt.
            </p>
            <p>
              Als MDK-geprüfter Pflegedienst unterliegen wir den höchsten Qualitätsstandards. Regelmäßige Fortbildungen, klare Protokolle und eine enge Zusammenarbeit mit Ärzten und Kliniken sichern die Qualität unserer Arbeit auf einem konstant hohen Niveau.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Unser Team</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-sm w-full text-center">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">R. Koroma</h3>
              <p className="text-teal font-semibold text-sm mb-4">Pflegedienstleiterin</p>
              <ul className="text-charcoal-light text-sm space-y-1.5">
                <li>✓ Examinierte Pflegefachkraft</li>
                <li>✓ Spezialisiert auf Beatmungspflege</li>
                <li>✓ Intensivpflege-Weiterbildung</li>
                <li>✓ Pflegedienstleitungs-Qualifikation</li>
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a href="tel:021516599998" className="text-teal text-sm font-medium hover:underline">
                  02151 / 65 99 998
                </a>
              </div>
            </div>
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
                title: 'Würde',
                desc: 'Jeder Mensch verdient Pflege, die seine Persönlichkeit, seine Geschichte und seinen Willen respektiert. Würde ist für uns kein Schlagwort, sondern das Fundament jedes Pflegehandels — in guten wie in schwierigen Momenten.',
              },
              {
                icon: '🎓',
                title: 'Fachkompetenz',
                desc: 'Beatmungspflege erfordert tiefes medizinisches Wissen, technisches Können und permanente Weiterbildung. Wir investieren konsequent in die Qualifikation unseres Teams, weil unsere Patienten auf höchste Kompetenz angewiesen sind.',
              },
              {
                icon: '⏰',
                title: 'Verlässlichkeit',
                desc: 'Unsere Patienten können sich auf uns verlassen — zu jeder Tages- und Nachtzeit. Verlässlichkeit bedeutet: pünktlich, konsequent, transparent und immer erreichbar. Was wir zusagen, halten wir.',
              },
              {
                icon: '❤️',
                title: 'Menschlichkeit',
                desc: 'Hinter jedem Patienten steht ein Mensch mit Familie, Träumen und Gefühlen. Wir pflegen nicht nur Körper — wir begleiten Menschen. Empathie, Zugewandtheit und echtes Interesse an der Person machen den Unterschied.',
              },
            ].map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDK Quality */}
      <section className="bg-teal-50 py-20 px-4 border-y border-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">MDK-geprüfte Qualität</h2>
          <p className="text-charcoal-light leading-relaxed mb-6 max-w-2xl mx-auto">
            Als ambulanter Pflegedienst werden wir regelmäßig vom Medizinischen Dienst der Krankenversicherung (MDK) geprüft. Diese externen Qualitätsprüfungen stellen sicher, dass unsere Pflegeprozesse, Dokumentation und Hygienemaßnahmen den gesetzlichen Standards entsprechen — und darüber hinaus.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Pflegerische Versorgung', 'Ärztliche Verordnung', 'Hygiene & Sicherheit', 'Dokumentation', 'Zufriedenheit der Patienten'].map((item) => (
              <span key={item} className="bg-white border border-teal rounded-full px-4 py-2 text-sm text-teal font-medium">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Lernen Sie uns kennen</h2>
          <p className="text-lg opacity-90 mb-8">
            Wir nehmen uns Zeit für Ihr Anliegen. Rufen Sie uns an oder schreiben Sie uns.
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
