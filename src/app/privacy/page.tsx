import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Privacy Policy | USFinNexus',
    description: 'USFinNexus.com privacy policy — we collect minimal data and never sell your information.',
    alternates: { canonical: 'https://usfinnexus.com/privacy' },
};

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Privacy Policy', item: '/privacy' }]} />
            <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Privacy Policy</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: February 2026</p>

            <div className="prose prose-sm max-w-none space-y-6" style={{ color: 'var(--color-text)' }}>
                {[
                    {
                        title: '1. Information We Do Not Collect',
                        body: "All calculator inputs you enter on USFinNexus.com are processed entirely within your web browser. We do not transmit, store, or have access to any financial data you enter into our calculators — home prices, income, debts, loan amounts, or any other personal financial information.",
                    },
                    {
                        title: '2. Analytics (Anonymous)',
                        body: "We use Google Analytics 4 (GA4) and Vercel Analytics to collect anonymous, aggregated usage data including: page views, session duration, geographic region (country/state, not city or ZIP), and calculator interaction events (e.g., 'downloaded PDF'). This data contains no personally identifiable information (PII) and is used solely to improve the site.",
                    },
                    {
                        title: '3. Cookies',
                        body: "We use minimal cookies: a theme preference cookie (light/dark mode, set locally), and analytics cookies set by Google Analytics (anonymous session tracking). We do not use advertising cookies, tracking pixels, or third-party behavioral ad cookies.",
                    },
                    {
                        title: '4. Google AdSense',
                        body: "We serve advertisements through Google AdSense, which may use cookies for ad personalization based on your Google settings. You can opt out at g.co/adsettings. We do not have access to any data Google collects for ad targeting.",
                    },
                    {
                        title: '5. Local Storage',
                        body: "If you use the 'Save Scenario' feature, named scenarios are stored in your browser's localStorage. This data never leaves your device and can be deleted at any time by clearing your browser data for usfinnexus.com.",
                    },
                    {
                        title: '6. Third-Party Services',
                        body: "Google Fonts (typography loading), Vercel (hosting infrastructure — no personal data logged). We do not share data with mortgage lenders, real estate companies, or lead-generation services.",
                    },
                    {
                        title: '7. Children\'s Privacy',
                        body: "Our site is not directed to children under 13. We do not knowingly collect data from children.",
                    },
                    {
                        title: '8. Contact',
                        body: "For privacy questions, contact us through the About page. We are committed to your privacy.",
                    },
                ].map(s => (
                    <section key={s.title}>
                        <h2 className="text-lg font-bold mb-2">{s.title}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.body}</p>
                    </section>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <Link href="/" className="text-sm font-semibold" style={{ color: '#00C853' }}>← Back to Calculators</Link>
            </div>
        </div>
    );
}
