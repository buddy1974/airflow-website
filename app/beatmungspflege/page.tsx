'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    q: 'Kann Beatmungspflege wirklich zuhause stattfinden?',
    a: 'Ja — moderne Beatmungsgeräte sind kompakt, zuverlässig und für den Heimgebrauch zugelassen. Mit einem qualifizierten Fachpflegeteam, das rund um die Uhr anwesend ist, ist häusliche Beatmungspflege nicht nur möglich, sondern für viele Patienten die medizinisch und menschlich bessere Lösung gegenüber einem stationären Aufenthalt. Zahlreiche Studien zeigen, dass Patienten zuhause besser schlafen, weniger Infektionen bekommen und eine höhere Lebensqualität berichten.',
  },
  {
    q: 'Wer übernimmt die Kosten?',
    a: 'Die Kosten für die häusliche Beatmungspflege werden in der Regel von der gesetzlichen Krankenversicherung übernommen — auf Basis von § 37 SGB V (häusliche Krankenpflege) und ggf. § 36 SGB XI (Pflegesachleistungen). Voraussetzung ist eine ärztliche Verordnung. Wir unterstützen Sie bei der Beantragung und stehen in direktem Kontakt mit Ihrer Krankenkasse, um alle administrativen Schritte zu übernehmen.',
  },
  {
    q: 'Wie läuft die Aufnahme ab?',
    a: 'Zunächst führen wir ein unverbindliches Erstgespräch mit Ihnen und Ihren Angehörigen — telefonisch oder bei Ihnen zuhause. Anschließend erstellen wir gemeinsam mit dem behandelnden Arzt einen individuellen Pflegeplan. Dann übernehmen wir die Kommunikation mit der Krankenkasse und organisieren alle notwendigen Hilfsmittel. Der Pflegeeinsatz beginnt sobald die Genehmigung vorliegt — in dringenden Fällen sind wir auch vorab tätig.',
  },
  {
    q: 'Was passiert im Notfall?',
    a: 'Unsere Pflegefachkräfte sind 24 Stunden täglich, 7 Tage die Woche erreichbar. Jeder Patient hat ein hinterlegtes Notfallprotokoll, das genau festlegt, welche Maßnahmen bei welchen Situationen einzuleiten sind. Unsere Pflegekräfte sind in Notfallmanagement geschult und handeln nach klaren Protokollen — gleichzeitig alarmieren sie bei Bedarf sofort den Notarzt und informieren die Angehörigen.',
  },
  {
    q: 'Welche Geräte werden verwendet?',
    a: 'Wir arbeiten mit zugelassenen Heimbeatmungsgeräten führender Hersteller — darunter Geräte der Trilogy-Serie (Philips Respironics), BiPAP- und CPAP-Geräte sowie Intensivrespiratoren für komplexe Beatmungsformen. Die Auswahl des geeigneten Geräts erfolgt in Abstimmung mit dem behandelnden Pneumologen oder Intensivmediziner. Alle Geräte werden regelmäßig gewartet und technisch überwacht.',
  },
]

export default function BeatmungspflegePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Beatmungspflege</h1>
          <p className="text-xl opacity-90">
            Fachgerechte ambulante Versorgung beatmungspflichtiger Patienten — sicher, würdevoll und rund um die Uhr.
          </p>
        </div>
      </section>

      {/* Was ist Beatmungspflege */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Was ist Beatmungspflege?</h2>
          <div className="space-y-5 text-charcoal-light leading-relaxed">
            <p>
              Beatmungspflege ist ein hochspezialisierter Bereich der Intensivpflege, der sich mit der Versorgung von Menschen befasst, die dauerhaft oder zeitweise auf maschinelle Unterstützung bei der Atmung angewiesen sind. Diese Patienten können aufgrund schwerer neurologischer, neuromuskulärer oder pulmonaler Erkrankungen nicht selbstständig ausreichend atmen.
            </p>
            <p>
              Die Pflege umfasst weit mehr als die technische Bedienung der Beatmungsgeräte: Sie beinhaltet die kontinuierliche Überwachung der Vitalparameter, die Atemwegsmanagement inklusive Absaugung, die Tracheostomaversorgung, die Kommunikationsunterstützung sowie die gesamte Grundpflege. Beatmungspflegekräfte benötigen eine examinierte Pflegeausbildung sowie eine spezielle Weiterbildung in der Intensiv- und Beatmungspflege.
            </p>
            <p>
              airflow Fachpflegedienst ist auf genau diese Versorgungsform spezialisiert. Wir ermöglichen beatmungspflichtigen Menschen, in ihrer gewohnten häuslichen Umgebung zu leben — ein Ziel, das wissenschaftlich belegt die Lebensqualität und das Wohlbefinden signifikant verbessert gegenüber einer dauerhaften stationären Unterbringung.
            </p>
          </div>
        </div>
      </section>

      {/* Wer benötigt */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Wer benötigt Beatmungspflege?</h2>
          <p className="text-charcoal-light mb-6 leading-relaxed">
            Beatmungspflege wird für Menschen notwendig, deren Atemmuskulatur oder Lungenkapazität nicht mehr ausreicht, um den Körper ausreichend mit Sauerstoff zu versorgen. Häufige Erkrankungen, bei denen häusliche Beatmungspflege indiziert ist:
          </p>
          <ul className="space-y-3">
            {[
              { label: 'ALS', desc: 'Amyotrophe Lateralsklerose — fortschreitende Lähmung der Atemmuskulatur' },
              { label: 'COPD Stadium IV', desc: 'Schwere chronisch obstruktive Lungenerkrankung mit respiratorischer Insuffizienz' },
              { label: 'ABI / Schädel-Hirn-Trauma', desc: 'Erworbene Hirnschädigungen mit Beeinträchtigung des Atemzentrums' },
              { label: 'Muskeldystrophie', desc: 'Duchenne und andere Formen mit progredientem Muskelschwund' },
              { label: 'Querschnittslähmung', desc: 'Hohe Querschnittslähmung mit Betroffenheit der Atemmuskulatur (C3 und höher)' },
              { label: 'Postpolio-Syndrom', desc: 'Spätkomplikationen nach überstandener Kinderlähmung' },
              { label: 'Zentrale Schlafapnoe', desc: 'Schwere Formen, die eine nächtliche oder dauerhafte Beatmungsunterstützung erfordern' },
            ].map((item) => (
              <li key={item.label} className="flex gap-3 bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-teal font-bold flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-charcoal">{item.label}</span>
                  <span className="text-charcoal-light"> — {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Was bietet airflow */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Was bietet airflow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '24/7-Pflegeversorgung durch examinierte Beatmungspflegefachkräfte',
              'Überwachung und Bedienung aller gängigen Heim- und Intensivbeatmungsgeräte',
              'Tracheostomaversorgung und Kanülenwechsel nach ärztlicher Anordnung',
              'Atemwegsmanagement inkl. endotrachealem und oropharyngealem Absaugen',
              'Kontinuierliches Monitoring: SpO₂, Herzfrequenz, Atemfrequenz',
              'Grundpflege, Mobilisation und Lagerung nach modernen Pflegestandards',
              'Medikamentengabe inkl. Inhalationstherapie',
              'Enge Kooperation mit Pneumologen, Hausärzten und Kliniken',
              'Unterstützung bei Antragsstellung bei Krankenkassen',
              'Notfallmanagement mit klaren Protokollen',
              'Angehörigenberatung und psychosoziale Begleitung',
            ].map((item) => (
              <div key={item} className="flex gap-3 p-3">
                <span className="text-teal font-bold flex-shrink-0">✓</span>
                <span className="text-charcoal-light text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Häufig gestellte Fragen</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-charcoal pr-4">{faq.q}</span>
                  <span className="text-teal text-xl flex-shrink-0">{openIndex === i ? '−' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 text-charcoal-light leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Benötigen Sie Beatmungspflege?</h2>
          <p className="text-lg opacity-90 mb-8">
            Sprechen Sie uns an — wir beraten Sie kostenlos und helfen Ihnen bei allen nächsten Schritten.
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
