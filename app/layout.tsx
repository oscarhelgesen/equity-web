import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Equity — Fakturaopfølgning & inkasso',
  description: 'Stop med at rykke manuelt. Lad Equity gøre det.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}