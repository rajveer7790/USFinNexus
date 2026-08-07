import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Privacy Policy | USFinNexus',
    description: 'Learn how USFinNexus handles calculator inputs, browser storage, advertising technologies, analytics, cookies and third-party services.',
    alternates: { canonical: 'https://usfinnexus.com/privacy' },
    openGraph: {
        type: 'website',
        url: 'https://usfinnexus.com/privacy',
        title: 'Privacy Policy | USFinNexus',
        description: 'How USFinNexus handles calculator inputs, browser storage, advertising, analytics and cookies.',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | USFinNexus',
        description: 'How USFinNexus handles calculator inputs, browser storage, advertising, analytics and cookies.',
    },
};

export default function PrivacyPage() {
    const sections = [
        {
            title: '1. Calculator Inputs',
            body: 'USFinNexus calculators are designed so the financial values you type into calculator fields are processed in your web browser. We do not use those calculator inputs as mortgage-lender lead forms. This statement applies to calculator input values and should not be interpreted to mean that no other website or browser data is processed by third-party services.',
        },
        {
            title: '2. Website Usage and Analytics',
            body: 'USFinNexus may use analytics or performance technologies to understand page traffic, device/browser characteristics, approximate geographic information, referrers, and feature usage. The exact data processed depends on the technologies active on the site and their configuration. We do not represent analytics activity as zero data collection.',
        },
        {
            title: '3. Cookies and Similar Technologies',
            body: 'The site and third-party services may use cookies, local storage, or similar browser technologies for functionality, preferences, measurement, fraud prevention, and advertising. Browser and consent controls may let you limit some of these technologies.',
        },
        {
            title: '4. Google AdSense',
            body: 'USFinNexus may display advertisements through Google AdSense. Google and its partners may use cookies or other technologies to serve, measure, secure, or personalize advertising in accordance with their own policies and your applicable settings or consent choices. USFinNexus does not describe AdSense as zero-data advertising.',
        },
        {
            title: '5. Local Browser Storage',
            body: 'Features such as saved scenarios may store information in your browser using localStorage or similar browser storage. Local browser storage remains on the device/browser unless a feature explicitly transmits it. You can generally remove local storage through your browser settings.',
        },
        {
            title: '6. Third-Party Services',
            body: 'The website may rely on third-party infrastructure, fonts, analytics, advertising, security, or performance services. Those providers may process technical data under their own terms and privacy practices. USFinNexus does not sell calculator input values to mortgage lenders or use calculator fields as lender-referral forms.',
        },
        {
            title: '7. Children’s Privacy',
            body: 'USFinNexus is a general financial-information website and is not directed to children under 13. If you believe a child has provided personal information through a site feature, please contact us so the issue can be reviewed.',
        },
        {
            title: '8. Policy Changes and Contact',
            body: 'This policy may be updated when site features or third-party services change. For privacy questions, use the Contact page. Material changes should be reflected by updating the date shown on this page.',
        },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Privacy Policy', item: '/privacy' }]} />
            <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Privacy Policy</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: August 7, 2026</p>

            <div className="prose prose-sm max-w-none space-y-6" style={{ color: 'var(--color-text)' }}>
                {sections.map(section => (
                    <section key={section.title}>
                        <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{section.body}</p>
                    </section>
                ))}
            </div>

            <div className="mt-8 p-4 rounded-lg text-xs leading-relaxed" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                This page describes USFinNexus practices at a high level. Third-party providers may maintain separate privacy policies and controls that also apply to their services.
            </div>

            <div className="mt-8 pt-6 border-t flex flex-wrap gap-4" style={{ borderColor: 'var(--color-border)' }}>
                <Link href="/" className="text-sm font-semibold" style={{ color: '#00C853' }}>← Back to Calculators</Link>
                <Link href="/contact" className="text-sm font-semibold" style={{ color: '#0da6f2' }}>Contact</Link>
            </div>
        </div>
    );
}
