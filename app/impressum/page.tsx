export default function ImpressumPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-charcoal-light leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong className="text-charcoal">Fachpflegedienst airflow GmbH</strong><br />
              Borgschenweg 8-12<br />
              47239 Duisburg
            </p>
            <p className="mt-3">
              <strong className="text-charcoal">Handelsregister:</strong> HRB 19337<br />
              <strong className="text-charcoal">Registergericht:</strong> Amtsgericht Krefeld
            </p>
            <p className="mt-3">
              <strong className="text-charcoal">Vertreten durch:</strong> Rugiatu Koroma
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Kontakt</h2>
            <p>
              Telefon:{' '}
              <a href="tel:021516599998" className="text-teal hover:underline">
                +49 (0) 2151 / 65 99 998
              </a><br />
              Telefax: +49 (0) 2151 / 36 94 214<br />
              E-Mail:{' '}
              <a href="mailto:kontakt@fachpflegedienst-airflow.de" className="text-teal hover:underline">
                kontakt@fachpflegedienst-airflow.de
              </a>
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Redaktionell verantwortlich</h2>
            <p>
              Frau Rugiatu Koroma<br />
              c/o Fachpflegedienst airflow GmbH<br />
              Borgschenweg 8-12<br />
              47239 Duisburg
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Aufsichtsbehörde</h2>
            <p>
              MDK Nordrhein (Medizinischer Dienst der Krankenversicherung)<br />
              Gesundheitsamt Krefeld<br />
              Nordwall 200<br />
              47798 Krefeld
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter: https://ec.europa.eu/consumers/odr/
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Bildquellen</h2>
            <p>
              ©AdobeStock Photographee.eu · ©AdobeStock Merpics · ©AdobeStock Robert Kneschke · eigene Aufnahmen
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die auf dieser Website enthaltenen medizinischen Informationen ersetzen keine ärztliche Beratung oder Diagnose.
            </p>
          </div>

          <hr className="border-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
