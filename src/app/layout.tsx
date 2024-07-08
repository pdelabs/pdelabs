import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Punta del Este - Labs',
  description: 'Punta del Este labs',
  keywords: ["custom software development", "webapp development", "mobile app development", "AI solutions", "software integration", "API development", "data engineering", "data mining", "etl", "software consulting"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
