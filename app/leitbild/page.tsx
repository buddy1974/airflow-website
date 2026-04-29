import Link from 'next/link'

export default function LeitbildPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Unternehmensleitbild</h1>
          <p className="text-xl opacity-90 font-light">„Mit Herz und Sachverstand"</p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Versorgungsgebiet */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</span>
              Versorgungsgebiet und Pflegekassen
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Wir haben Versorgungsverträge mit allen Pflegekassen und Sozialhilfeträgern. Unser Einzugsgebiet ist das westliche Nordrhein-Westfalen. Unsere Leistungen werden vollständig von den Pflegekassen übernommen — Sie entstehen keine Zusatzkosten.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Wohlfühlen */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</span>
              Angenommen, geschätzt, wohlgefühlt
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Pflegebedürftige uns anvertraute Menschen, deren Angehörige und unsere Mitarbeiter sollen sich angenommen, geschätzt und wohlfühlen. Dies ist der Kerngedanke, der jeden unserer Pflegeeinsätze leitet. Wir schaffen eine Atmosphäre der Geborgenheit und des Vertrauens — in der Pflege, im Team und in der Kommunikation mit Familien.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Gesprächskultur */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</span>
              Offene Gesprächskultur auf Augenhöhe
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Eine offene, vertrauensvolle Gesprächskultur auf Augenhöhe mit allen am Pflegeprozess Beteiligten ist uns wichtig. Dies schließt Patienten, Angehörige, behandelnde Ärzte, Therapeuten und unser eigenes Pflegeteam ein. Wir hören zu, erklären und treffen Entscheidungen gemeinsam — stets transparent und respektvoll.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Unabhängigkeit */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</span>
              Pflege ohne Unterschied
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Der Dienst am Menschen erfolgt unabhängig von seiner Herkunft, Rasse, religiösen oder politischen Überzeugung. Jeder Mensch hat das gleiche Recht auf hochwertige, würdevolle Pflege. Dieser Grundsatz ist nicht verhandelbar — er ist Teil unserer Unternehmensidentität.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Selbstbestimmung */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</span>
              Selbstbestimmung des Patienten
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Der von uns betreute pflegebedürftige Mensch bestimmt über sich selbst. Wir sind Dienstleister im besten Sinne: Wir stellen unsere Fachkompetenz in den Dienst der Wünsche und Ziele unserer Patienten — nicht umgekehrt. Die Autonomie des Patienten wird in jeder Pflegesituation gewahrt und gefördert.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Mitarbeiterführung */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">6</span>
              Mitarbeiterführung und Teamkultur
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Unser Führungsstil ist kooperativ und wertschätzend. Wir fördern die fachliche und persönliche Weiterentwicklung jedes Teammitglieds. Regelmäßige Teambesprechungen, klare Kommunikation und ein familiäres Betriebsklima sind die Grundlage unserer gemeinsamen Arbeit. Ein starkes Team ist die Voraussetzung für starke Pflege.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Unbefristete Verträge */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">7</span>
              Unbefristete Arbeitsverhältnisse
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Wir schließen ausschließlich unbefristete Arbeitsverträge ab — keine Befristungen, keine Unsicherheit. Denn wer langfristig plant und sich sicher fühlt, gibt seine beste Pflege. Diese Stabilität kommt unmittelbar unseren Patienten zugute. Verlässlichkeit beginnt im Unternehmen selbst.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Familie und Beruf */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">8</span>
              Vereinbarkeit von Familie und Beruf
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Wir sind uns bewusst, dass unsere Mitarbeiter ein Leben außerhalb der Arbeit haben — und das ist gut so. Flexible Arbeitszeitmodelle, Teilzeitoptionen und Rücksicht auf familiäre Situationen sind keine Ausnahme, sondern Normalfall. Ein ausgeglichenes Team ist ein motiviertes Team.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Wirtschaftlichkeit */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">9</span>
              Wirtschaftlichkeit (§ 2 Abs. 4 SGB V, § 12 Abs. 1 SGB V)
            </h2>
            <p className="text-charcoal-light leading-relaxed pl-11">
              Wir handeln wirtschaftlich, zweckmäßig und ausreichend — im Rahmen der gesetzlichen Vorgaben nach SGB V und SGB XI. Wirtschaftlichkeit bedeutet für uns nicht Sparsamkeit auf Kosten der Qualität, sondern effizienter Einsatz aller Ressourcen zum Wohl des Patienten. Qualität und Wirtschaftlichkeit sind kein Widerspruch — sie bedingen sich gegenseitig.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Unser Leitbild in der Praxis</h2>
          <p className="text-lg opacity-90 mb-8">
            Diese Grundsätze sind nicht nur Worte — sie spiegeln sich in jedem Pflegeeinsatz wider. Lernen Sie uns kennen.
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
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
