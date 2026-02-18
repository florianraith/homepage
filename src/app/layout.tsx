import { type Metadata } from 'next'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import seoImage from '@/assets/seo.png'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

config.autoAddCss = false

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://florianraith.com'
const siteName = 'Florian Raith'
const defaultTitle = 'Florian Raith - Software developer'
const defaultDescription = 'Hey, I\'m Florian — a software developer and student from Germany who loves diving deep into the world of computer science.'
const seoImageUrl = seoImage.src

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Florian Raith',
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    'Florian Raith',
    'software developer',
    'software engineer',
    'web development',
    'portfolio',
  ],
  authors: [{ name: 'Florian Raith' }],
  creator: 'Florian Raith',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: 'en_US',
    images: [
      {
        url: seoImageUrl,
        alt: `${siteName} website preview image`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: defaultTitle,
    description: defaultDescription,
    images: [seoImageUrl],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
