export default function DatenschutzerklaerungPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
          <p className="mt-2 opacity-90 text-lg">Stand: April 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-charcoal-light leading-relaxed">

          {/* 1. Datenschutz auf einen Blick */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Datenerfassung auf dieser Website</h3>
            <p className="mb-3">
              <strong className="text-charcoal">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>
            <p className="mb-3">
              <strong className="text-charcoal">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mb-3">
              <strong className="text-charcoal">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 2. Hosting */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">2. Hosting</h2>
            <p className="mb-3">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-lg font-semibold text-charcoal mb-3">Vercel</h3>
            <p className="mb-3">
              Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend Vercel).
            </p>
            <p className="mb-3">
              Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy
            </p>
            <p>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Hinweis zur Verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              <strong className="text-charcoal">Fachpflegedienst airflow GmbH</strong><br />
              Borgschenweg 8-12<br />
              47239 Duisburg<br /><br />
              Telefon: +49 (0) 2151 / 65 99 998<br />
              E-Mail: kontakt@fachpflegedienst-airflow.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Im Falle der ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Ihre Rechte</h3>
            <ul className="space-y-2 mb-4">
              {[
                'Recht auf Auskunft (Art. 15 DSGVO)',
                'Recht auf Berichtigung (Art. 16 DSGVO)',
                'Recht auf Löschung (Art. 17 DSGVO)',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
                'Recht auf Widerruf einer erteilten Einwilligung',
                'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
              ].map((right) => (
                <li key={right} className="flex gap-2">
                  <span className="text-teal flex-shrink-0">✓</span>
                  {right}
                </li>
              ))}
            </ul>
            <p>
              Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW, Kavalleriestr. 2–4, 40213 Düsseldorf.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 4. Datenerfassung */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Cookies</h3>
            <p className="mb-4">
              Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Session-Cookies verwendet, die nach dem Schließen des Browsers automatisch gelöscht werden. Wir setzen keine Analyse- oder Marketing-Cookies von Drittanbietern ein.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* 5. Plugins und Tools */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">5. Plugins und Tools</h2>

            <h3 className="text-lg font-semibold text-charcoal mb-3">Google Fonts (lokales Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt. Weitere Informationen zu Google Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://policies.google.com/privacy.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
