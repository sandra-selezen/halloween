import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Butcherman } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--body-font'
})
const butcherman = Butcherman({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--second-font'
})

export const metadata: Metadata = {
  title: 'Halloween',
  description: 'Responsive Halloween website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${butcherman.variable}`}>
      <body>{children}</body>
    </html>
  )
}
