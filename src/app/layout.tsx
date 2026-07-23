import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LosDedosFooterContainer from '@/components/LosDedosFooterContainer/LosDedosFooterContainer'
import StyledComponentsRegistry from '@/lib/registry'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google"
import { SITE_URL, organizationJsonLd, websiteJsonLd } from '@/seo'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The homepage is the *company* page; /ai owns the AI-agent keywords.
    // Both pages chasing "AI agent development" means Google picks one and
    // buries the other — and it would pick the homepage, burying the deep page.
    default: 'pdelabs — Software Product Studio in Punta del Este, Uruguay',
    template: '%s | pdelabs',
  },
  description: 'pdelabs (Punta del Este Labs) is a software product studio in Punta del Este, Uruguay. We design and build web apps, mobile apps, APIs, data platforms and AI products for startups and businesses worldwide — discovery through deployment, with one team.',
  keywords: ["software development company Uruguay", "software product studio", "custom software development", "webapp development", "mobile app development", "software integration", "API development", "data engineering", "nearshore development Latin America", "Punta del Este software company"],
  applicationName: 'pdelabs',
  authors: [{ name: 'Punta del Este Labs', url: SITE_URL }],
  creator: 'Punta del Este Labs',
  publisher: 'Punta del Este Labs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'pdelabs — Punta del Este Labs',
    title: 'pdelabs — Software Product Studio in Punta del Este, Uruguay',
    description: 'We design and build web apps, mobile apps, APIs, data platforms and AI products for startups and businesses worldwide. Punta del Este, Uruguay.',
    locale: 'en_US',
    images: [{ url: '/assets/logo-full.svg', alt: 'pdelabs — Punta del Este Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pdelabs — Software Product Studio in Punta del Este, Uruguay',
    description: 'We design and build web apps, mobile apps, APIs, data platforms and AI products for startups and businesses worldwide. Punta del Este, Uruguay.',
    images: ['/assets/logo-full.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: { google: "-U-TYuy4mItqVNdUz3k7mUsN9ZMJ-po-CTWuz7ji7cA" }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GoogleTagManager gtmId="AW-16648191500" />
        <body className={inter.className}>
          {children}
          <LosDedosFooterContainer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <SpeedInsights />
          <Analytics />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
