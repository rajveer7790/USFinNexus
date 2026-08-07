import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Privacy Policy | USFinNexus',
    description:
        'Read how USFinNexus handles calculator inputs, browser storage, hosting data, cookies and third-party advertising services.',
    alternates: { canonical: 'https://usfinnexus.com/privacy' },
    openGraph: {
        type: 'website',
        url: 'https://usfinnexus.com/privacy',
        title: 'Privacy Policy | USFinNexus',
        description: 'How calculator inputs, browser storage, hosting data and third-party services are handled on USFinNexus.',
        siteName: 'USFinNexus',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | USFinNexus',
        description: 'How USFinNexus handles calculator inputs and website service data.',
    },
};

const sections = [
    {
        title: '1. Calculator Inputs',
        body: 'USFinNexus calculators are designed to perform calculations in your browser. Values such as home price, loan amount, income, debts and interest rate are not submitted to USFinNexus as a loan application or sold to mortgage lenders. This statement applies to calculator-input fields; it does not mean that visiting the website produces no network or service data.',
    },
    {
        title: '2. Hosting and Technical Request Data',
        body: 'The site is delivered through Cloudflare infrastructure. Like other web hosting and content-delivery services, infrastructure providers can process technical request information needed to deliver and secure the site, such as IP address, user agent, requested URL, timestamps and security-related signals. Retention and processing by those providers are governed by their applicable terms and privacy practices.',
    },
    {
        title: '3. Advertising and Cookies',
        body: 'USFinNexus uses Google AdSense to serve advertisements. Google and its partners may use cookies or similar technologies for ad delivery, measurement, fraud prevention and, depending on your settings and consent requirements, personalization. Advertising data is handled by Google under its own policies. We do not describe the site as having “zero cookies” or “zero data collection” while third-party advertising services are present.',
    },
    {
        title: '4. Analytics',
        body: 'This policy does not claim that Google Analytics or Vercel Analytics is active unless those services are actually enabled in production. If additional analytics tooling is introduced, this policy should be updated to identify the service and the categories of data involved before or when the change is deployed.',
    },
    {
        title: '5. Browser Storage',
        body: 'Some features may use browser storage, such as localStorage, to keep preferences or saved calculator scenarios on your device. Browser-stored values can generally be removed by clearing site data in your browser. Browser storage is separate from hosting request logs and third-party advertising technologies.',
    },
    {
        title: '6. Data Sales and Lender Referrals',
        body: 'USFinNexus does not sell calculator-input data to mortgage lenders and does not require calculator users to submit a phone number or email address to receive ordinary calculator results. If the site adds a separate form or partner feature in the future, that feature should state what information is collected and why before submission.',
    },
    {
        title: '7. External Links',
        body: 'Pages may link to government agencies, data providers and other third-party websites. Their privacy practices are controlled by those organizations, not by USFinNexus.',
    },
    {
        title: '8. Children’s Privacy',
        body: 'USFinNexus is a general-audience financial education website and is not directed to children under 13. We do not knowingly request personal information from children through calculator inputs.',
    },
    {
        title: '9. Changes to This Policy',
        body: 'We may update this policy when the website, hosting setup, advertising configuration or data practices change. The review date shown on this page indicates the latest published policy review.',
    },
];

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Privacy Policy', item: '/privacy' }]} />
            <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Privacy Policy</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last reviewed: August 7, 2026</p>

            <div className="prose prose-sm max-w-none space-y-7" style={{ color: 'var(--color-text)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    This policy distinguishes between <strong>financial values you enter into calculators</strong> and the normal technical data involved in loading a website or third-party ad service. That distinction is important: calculator inputs can stay in the browser while hosting and advertising services still process ordinary web-request data.
                </p>

                {sections.map((section) => (
                    <section key={section.title}>
                        <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{section.body}</p>
                    </section>
                ))}

                <section>
                    <h2 className="text-lg font-bold mb-2">10. Contact</h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        For privacy questions or corrections, use the <Link href="/contact" className="font-semibold hover:underline" style={{ color: '#0da6f2' }}>Contact page</Link>.
                    </p>
                </section>
            </div>

            <div className="mt-8 pt-6 border-t flex flex-wrap gap-4" style={{ borderColor: 'var(--color-border)' }}>
                <Link href="/" className="text-sm font-semibold" style={{ color: '#00C853' }}>← Back to Calculators</Link>
                <Link href="/terms" className="text-sm font-semibold" style={{ color: '#0da6f2' }}>Terms of Service</Link>
                <Link href="/disclaimer" className="text-sm font-semibold" style={{ color: '#0da6f2' }}>Disclaimer</Link>
            </div>
        </div>
    );
}
