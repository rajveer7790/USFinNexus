import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import InteractiveAdSense from '@/components/InteractiveAdSense';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';
import './globals.css';

export const dynamic = 'force-static';
export const revalidate = 86400;

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700', '800', '900'], preload: true, variable: '--font-inter' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'], variable: '--font-mono' });

export const metadata: Metadata = {
    metadataBase: new URL('https://usfinnexus.com'),
    title: {
        // Individual pages in this codebase already control their own title wording.
        // Do not append the brand globally or pages that already include it render "| USFinNexus | USFinNexus".
        template: '%s',
        default: 'Mortgage Calculator & Financial Calculators | USFinNexus',
    },
    description: 'Free U.S. mortgage and personal finance calculators for monthly payments, affordability, refinancing, amortization, debt, taxes and more. No account required.',
    applicationName: 'USFinNexus',
    keywords: ['mortgage calculator', 'home affordability calculator', 'mortgage payment calculator', 'refinance calculator', 'amortization calculator', 'debt to income calculator', 'financial calculators'],
    icons: {
        icon: [
            { url: '/icon.svg', type: 'image/svg+xml' },
            { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
            { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
        apple: '/icon-192.png',
    },
    openGraph: {
        type: 'website', locale: 'en_US', url: 'https://usfinnexus.com/', siteName: 'USFinNexus',
        title: 'Mortgage Calculator & Financial Calculators',
        description: 'Free U.S. mortgage and personal finance calculators with clear assumptions and no account required.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus financial calculators' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Calculator & Financial Calculators',
        description: 'Free U.S. mortgage and personal finance calculators with clear assumptions and no account required.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0A2540' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const organizationSchema = {
        '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://usfinnexus.com/#organization',
        name: 'USFinNexus', alternateName: ['US Fin Nexus', 'US Financial Nexus'], url: 'https://usfinnexus.com/',
        logo: { '@type': 'ImageObject', url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512 },
        description: 'USFinNexus publishes free mortgage and personal finance calculators and educational resources for U.S. consumers.',
        foundingDate: '2025', areaServed: { '@type': 'Country', name: 'United States' },
        contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://usfinnexus.com/contact', availableLanguage: 'English' },
    };

    const websiteSchema = {
        '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://usfinnexus.com/#website',
        url: 'https://usfinnexus.com/', name: 'USFinNexus', alternateName: ['US Fin Nexus', 'usfinnexus.com'],
        description: 'Free U.S. mortgage and personal finance calculators.', publisher: { '@id': 'https://usfinnexus.com/#organization' }, inLanguage: 'en-US',
    };

    return (
        <html lang="en-US" suppressHydrationWarning data-scroll-behavior="smooth">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            </head>
            <body className={`${inter.className} ${plexMono.variable}`} suppressHydrationWarning>
                <InteractiveAdSense client="ca-pub-1373076230922603" />
                <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
                    <SiteHeader />
                    <main id="main-content" className="min-h-screen">{children}</main>
                    <Footer />
                    <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)' } }} />
                </ThemeProvider>
            </body>
        </html>
    );
}
