import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'airflow Fachpflegedienst | Beatmungspflege Krefeld',
  description:
    'Professionelle ambulante Beatmungspflege in Krefeld. Rund-um-die-Uhr Intensivpflege für beatmungspflichtige Patienten zuhause.',
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
