import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const dynamic = 'force-static';
export const revalidate = 86400; // Cache for 24 hours

const inter = Inter({ subsets: ['latin'], display: 'swap' });
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';

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
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com',
        siteName: 'USFinNexus',
        title: 'Free Mortgage Calculator 2026 with PDF Download | USFinNexus',
        description: 'Instant mortgage calculations. Free PDF & CSV reports. No signup needed.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Mortgage Calculator 2026 | USFinNexus',
        description: 'Free full PDF & CSV reports from your mortgage calculator. No signup needed.',
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
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#0A2540' },
        { media: '(prefers-color-scheme: dark)', color: '#060f1e' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1373076230922603"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header />
                    <main className="min-h-screen">{children}</main>
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
