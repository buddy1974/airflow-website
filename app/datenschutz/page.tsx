export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
          <p className="mt-2 opacity-90">Stand: April 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-sm max-w-none space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">1. Verantwortlicher</h2>
            <p className="text-charcoal-light leading-relaxed">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              <strong>airflow Fachpflegedienst</strong><br />
              Inhaberin: R. Koroma<br />
              Stephanstraße 7<br />
              47799 Krefeld<br />
              Telefon: 02151 / 65 99 998<br />
              E-Mail: air.flow@gmx.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="text-charcoal-light leading-relaxed mb-3">
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme oder Bewerbung freiwillig mitteilen. Dazu gehören:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-light">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Inhalt Ihrer Nachricht oder Bewerbung</li>
            </ul>
            <p className="text-charcoal-light leading-relaxed mt-3">
              Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Bewerbung verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">3. Rechtsgrundlage der Verarbeitung</h2>
            <p className="text-charcoal-light leading-relaxed">
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen des Verantwortlichen, soweit Ihre Interessen nicht überwiegen). Bei Bewerbungen gilt zusätzlich § 26 BDSG.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">4. Cookies</h2>
            <p className="text-charcoal-light leading-relaxed">
              Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Session-Cookies verwendet, die nach dem Schließen des Browsers automatisch gelöscht werden. Wir verwenden keine Analyse- oder Marketing-Cookies von Drittanbietern.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">5. Speicherdauer</h2>
            <p className="text-charcoal-light leading-relaxed">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die genannten Zwecke notwendig ist oder gesetzliche Aufbewahrungsfristen bestehen. Bewerberdaten werden bei Ablehnung nach spätestens 6 Monaten gelöscht, sofern keine Einwilligung für einen längeren Verbleib im Bewerber-Pool vorliegt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">6. Ihre Rechte</h2>
            <p className="text-charcoal-light leading-relaxed mb-3">Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-light">
              <li><strong>Auskunft</strong> (Art. 15 DSGVO) über die bei uns gespeicherten Daten</li>
              <li><strong>Berichtigung</strong> (Art. 16 DSGVO) unrichtiger Daten</li>
              <li><strong>Löschung</strong> (Art. 17 DSGVO) Ihrer Daten</li>
              <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li><strong>Beschwerde</strong> bei der zuständigen Aufsichtsbehörde</li>
            </ul>
            <p className="text-charcoal-light mt-3">
              Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW, Kavalleriestr. 2–4, 40213 Düsseldorf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">7. Kontakt Datenschutz</h2>
            <p className="text-charcoal-light leading-relaxed">
              Für Anfragen zum Datenschutz wenden Sie sich bitte an:<br /><br />
              R. Koroma · air.flow@gmx.de · 02151 / 65 99 998
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
