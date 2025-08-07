import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEXUS Athletics - AI-Powered Performance',
  description: 'Experience the future of athletics with NEXUS - AI-powered gear designed for champions who push beyond limits. Revolutionary technology meets athletic excellence.',
  keywords: 'athletic wear, AI technology, performance gear, sports equipment, future athletics, innovation',
  authors: [{ name: 'NEXUS Athletics' }],
  creator: 'NEXUS Athletics',
  publisher: 'NEXUS Athletics',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus-athletics.com',
    siteName: 'NEXUS Athletics',
    title: 'NEXUS Athletics - AI-Powered Performance',
    description: 'Experience the future of athletics with NEXUS - AI-powered gear designed for champions who push beyond limits.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXUS Athletics - AI-Powered Performance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS Athletics - AI-Powered Performance',
    description: 'Experience the future of athletics with NEXUS - AI-powered gear designed for champions who push beyond limits.',
    images: ['/og-image.jpg'],
    creator: '@nexusathletics',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00FFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#00FFFF" />
        <meta name="theme-color" content="#00FFFF" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}