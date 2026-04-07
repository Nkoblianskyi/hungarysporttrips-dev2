import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hungary Sport Trips – Prémium Sportturisztikai Utak',
  description:
    'Fedezze fel Magyarországot sportesemények, stadionlátogatások és egyedülálló turisztikai élmények révén. Prémium szervezett utazások sportrajongóknak.',
  keywords: ['sporttúra', 'Magyarország', 'sportutazás', 'stadionlátogatás', 'sportturizmus'],
  openGraph: {
    title: 'Hungary Sport Trips – Prémium Sportturisztikai Utak',
    description: 'Fedezze fel Magyarországot sport és utazás összekapcsolásával.',
    url: 'https://hungarysporttrips.com',
    siteName: 'Hungary Sport Trips',
    locale: 'hu_HU',
    type: 'website',
  },
  metadataBase: new URL('https://hungarysporttrips.com'),
}

export const viewport: Viewport = {
  themeColor: '#1e3a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
