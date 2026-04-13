import type { Metadata } from 'next'
import { Inter, DM_Mono, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn(inter.variable, dmMono.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  )
}
