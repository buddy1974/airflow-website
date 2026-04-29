export default function ImpressumPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-charcoal-light leading-relaxed">
              <strong className="text-charcoal">airflow Fachpflegedienst</strong><br />
              Inhaberin: R. Koroma<br />
              Stephanstraße 7<br />
              47799 Krefeld
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Kontakt</h2>
            <p className="text-charcoal-light leading-relaxed">
              Telefon: <a href="tel:021516599998" className="text-teal hover:underline">02151 / 65 99 998</a><br />
              Mobil: <a href="tel:015174227338" className="text-teal hover:underline">0151 / 74 227 338</a><br />
              E-Mail: <a href="mailto:air.flow@gmx.de" className="text-teal hover:underline">air.flow@gmx.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Aufsichtsbehörde</h2>
            <p className="text-charcoal-light leading-relaxed">
              MDK Nordrhein (Medizinischer Dienst der Krankenversicherung)<br />
              Gesundheitsamt Krefeld<br />
              Nordwall 200<br />
              47798 Krefeld
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-charcoal-light leading-relaxed">
              Berufsbezeichnung: Pflegefachkraft, Pflegedienstleiterin<br />
              Zuständige Kammer: Pflegekammer NRW (sofern anwendbar)<br />
              Es gelten die berufsrechtlichen Regelungen gemäß SGB XI, Krankenpflegegesetz (KrPflG) sowie die Pflegeberufsgesetze des Landes NRW.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">EU-Streitschlichtung</h2>
            <p className="text-charcoal-light leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht teil.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Haftungsausschluss</h2>
            <p className="text-charcoal-light leading-relaxed">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die medizinischen Informationen auf dieser Website ersetzen keine ärztliche Beratung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Urheberrecht</h2>
            <p className="text-charcoal-light leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
