import type { Metadata } from 'next'
import { Bebas_Neue, Manrope } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/components/LangContext'
import { ModalProvider } from '@/components/ModalContext'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BioStrategy - Data-Driven Health Coaching',
  description: 'Prémiový health coaching pro high performery. Wearables, krevní markery, CGM, trénink - vše na jedné platformě.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body>
        <LangProvider><ModalProvider>{children}</ModalProvider></LangProvider>
      </body>
    </html>
  )
}
