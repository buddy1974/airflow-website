import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'airflow Fachpflegedienst | Beatmungspflege & Intensivpflege Krefeld',
  description:
    'Professionelle ambulante Beatmungspflege und Intensivpflege in Krefeld und Umgebung. Unter der Leitung von Rugiatu Koroma bieten wir Ihnen 24/7 Fachpflege mit Herz und Sachverstand.',
  keywords:
    'Beatmungspflege Krefeld, Intensivpflege, ambulante Pflege, Tracheostoma, außerklinische Beatmung, Fachpflegedienst',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
