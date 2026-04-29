export default function BarrierefreiheitPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Barrierefreiheit</h1>
          <p className="mt-2 opacity-90">Erklärung zur digitalen Barrierefreiheit</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-charcoal-light leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Unser Engagement</h2>
            <p>
              airflow Fachpflegedienst ist bestrebt, seine Website für alle Nutzerinnen und Nutzer — unabhängig von Behinderung, Alter oder technischen Einschränkungen — zugänglich zu gestalten. Wir arbeiten kontinuierlich daran, die Barrierefreiheit unserer digitalen Angebote zu verbessern.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Technische Maßnahmen</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Semantisches HTML für Screenreader-Kompatibilität</li>
              <li>Ausreichende Farbkontraste gemäß WCAG 2.1 AA</li>
              <li>Tastaturnavigation für alle interaktiven Elemente</li>
              <li>Alt-Texte für Bilder und Icons</li>
              <li>Responsive Design für mobile Geräte</li>
              <li>Klare Beschriftung aller Formularfelder</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Bekannte Einschränkungen</h2>
            <p>
              Wir sind uns bewusst, dass unsere Website noch nicht in allen Bereichen vollständig barrierefrei ist. Wir arbeiten daran, bekannte Einschränkungen schrittweise zu beheben. Sollten Sie auf Barrieren stoßen, kontaktieren Sie uns bitte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Feedback & Kontakt</h2>
            <p>
              Wenn Sie Barrieren auf unserer Website feststellen oder Unterstützung bei der Nutzung benötigen, wenden Sie sich bitte an:<br /><br />
              R. Koroma · Stephanstraße 7 · 47799 Krefeld<br />
              Telefon: <a href="tel:021516599998" className="text-teal hover:underline">02151 / 65 99 998</a><br />
              E-Mail: <a href="mailto:air.flow@gmx.de" className="text-teal hover:underline">air.flow@gmx.de</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
