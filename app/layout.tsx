import type { Metadata } from 'next'
import { Inter, DM_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--fn',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--mo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Equity — Invoice follow-up & debt collection',
  description: 'Stop chasing payments manually. Let Equity do it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
