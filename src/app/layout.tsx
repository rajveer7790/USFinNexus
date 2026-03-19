import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';
import './globals.css';

export const dynamic = 'force-static';
export const revalidate = 86400; // Cache for 24 hours

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
    preload: true,
    variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-mono',
});


export const metadata: Metadata = {
    title: {
        template: '%s | USFinNexus',
        default: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
    },
    description:
        'Free mortgage, affordability, refinance & finance calculators. Get instant PDF & CSV reports — no signup, no email required. Built for Americans.',
    keywords: [
        'free mortgage calculator', 'mortgage calculator with PDF download',
        'mortgage calculator 2026', 'affordability calculator', 'refinance calculator',
        'amortization schedule', 'PITI calculator', 'home loan calculator',
    ],
    metadataBase: new URL('https://usfinnexus.com'),
    icons: {
        icon: [
            { url: '/icon.svg', type: 'image/svg+xml' },
            { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
            { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
        ],
        apple: '/icon-192.png',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com',
        siteName: 'USFinNexus',
        title: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
        description: 'Instant mortgage calculations. Free PDF & CSV reports. No signup needed.',
        images: [
            {
                url: 'https://usfinnexus.com/icon-512.png',
                width: 512,
                height: 512,
                alt: 'USFinNexus — Free Mortgage & Finance Calculators',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Mortgage Calculator 2026 | USFinNexus',
        description: 'Free full PDF & CSV reports from your mortgage calculator. No signup needed.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0A2540',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-US" suppressHydrationWarning data-scroll-behavior="smooth">
            <head>
                <link rel="manifest" href="/manifest.json" />
                {/* Organization JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'USFinNexus',
                        url: 'https://usfinnexus.com',
                        logo: 'https://usfinnexus.com/icon-512.png',
                        description: 'Free mortgage, affordability, refinance and finance calculators. No signup, no spam. Built for Americans.',
                        sameAs: ['https://usfinnexus.com'],
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'customer support',
                            url: 'https://usfinnexus.com/contact',
                        },
                    }) }}
                />
                {/* WebSite JSON-LD with SearchAction */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'USFinNexus',
                        url: 'https://usfinnexus.com',
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: { '@type': 'EntryPoint', urlTemplate: 'https://usfinnexus.com/blog?q={search_term_string}' },
                            'query-input': 'required name=search_term_string',
                        },
                    }) }}
                />
            </head>
            <body className={`${inter.className} ${plexMono.variable}`} suppressHydrationWarning>
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1373076230922603"
                    strategy="afterInteractive"
                    crossOrigin="anonymous"
                />
                <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
                    <SiteHeader />
                    <main id="main-content" className="min-h-screen">{children}</main>
                    <Footer />
                    <Toaster
                        position="bottom-right"
                        toastOptions={{
                            style: {
                                background: 'var(--color-card)',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text)',
                            },
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
