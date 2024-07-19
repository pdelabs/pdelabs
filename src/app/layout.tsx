import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LosDedosFooterContainer from '@/components/LosDedosFooterContainer/LosDedosFooterContainer'
import StyledComponentsRegistry from '@/lib/registry'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Punta del Este - Labs',
  description: 'Punta del Este Labs offers comprehensive software development services, including product discovery, UX/UI design, software architecture, development, testing, and deployment. Our expert team ensures high-quality, scalable, and user-friendly applications tailored to your business needs.',
  keywords: ["custom software development", "webapp development", "mobile app development", "AI solutions", "software integration", "API development", "data engineering", "data mining", "etl", "software consulting"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <SpeedInsights />
        <GoogleTagManager gtmId="AW-16648191500" />
        <Analytics />
        <body className={inter.className}>
          {children}
          <LosDedosFooterContainer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
