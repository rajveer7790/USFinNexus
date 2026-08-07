import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Privacy Policy | USFinNexus',
    description: 'Read how USFinNexus handles calculator inputs, local browser storage, advertising technologies and third-party services.',
    alternates: { canonical: '/privacy' },
    openGraph: {
        type: 'website',
        url: 'https://usfinnexus.com/privacy',
        title: 'Privacy Policy | USFinNexus',
        description: 'How USFinNexus handles calculator inputs, browser storage, advertising and third-party services.',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | USFinNexus',
        description: 'How USFinNexus handles calculator inputs, browser storage and advertising technologies.',
    },
};

export default function PrivacyPage() {
    const sections = [
        {
            title: '1. Calculator Inputs',
            body: 'Core calculator fields are designed to be processed in your web browser. USFinNexus does not operate these tools as loan applications, and you should not enter sensitive identifiers such as Social Security numbers, bank credentials or account numbers into calculator fields. Browser-side processing of calculator inputs does not mean the website as a whole collects zero technical data; hosting, security and advertising services can process ordinary web-request information as described below.',
        },
        {
            title: '2. Advertising and Cookies',
            body: 'USFinNexus uses Google AdSense to serve advertisements. Google and its partners may use cookies or similar technologies for ad delivery, measurement, fraud prevention and, depending on your settings and applicable consent choices, personalization. Advertising data is handled under Google’s own policies and controls. USFinNexus does not receive your calculator field values from AdSense.',
        },
        {
            title: '3. Hosting, Security and Technical Logs',
            body: 'Like most websites, our hosting and security infrastructure may process technical request information needed to deliver and protect the site, such as IP address, user-agent, request time, requested URL and security signals. These records are separate from the financial values you type into calculator fields and may be retained according to the infrastructure provider’s operational and security practices.',
        },
        {
            title: '4. Browser Storage',
            body: 'Some site features may use browser storage, such as localStorage or preference storage, to keep settings or locally saved scenarios on your device. You can remove browser-stored information through your browser controls. Clearing site data can remove locally saved preferences or scenarios.',
        },
        {
            title: '5. Third-Party Resources',
            body: 'The site may load third-party resources needed for advertising, fonts, content delivery, security or other site functionality. When a browser connects to a third-party service, that service can receive ordinary network and browser information. We aim to keep this policy aligned with technologies actually used by the production site and update it when material integrations change.',
        },
        {
            title: '6. Lender Referrals and Sale of Calculator Inputs',
            body: 'USFinNexus does not operate a lender lead-generation form on the core calculator pages and does not sell the financial values entered into those calculator fields to mortgage lenders. If a future feature separately asks you to submit information to a third party, it should be clearly disclosed at the point of submission and this policy should be updated as appropriate.',
        },
        {
            title: '7. Children’s Privacy',
            body: 'USFinNexus is a general financial-education website and is not directed to children under 13. We do not intentionally ask children under 13 to submit personal information through calculator fields.',
        },
        {
            title: '8. Changes and Contact',
            body: 'We may update this Privacy Policy when site features, providers or legal requirements change. For privacy questions, use the Contact page. The date below identifies the latest substantive review of this policy.',
        },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Privacy Policy', item: '/privacy' }]} />
            <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Privacy Policy</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last reviewed: August 7, 2026</p>

            <div className="prose prose-sm max-w-none space-y-6" style={{ color: 'var(--color-text)' }}>
                {sections.map((section) => (
                    <section key={section.title}>
                        <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{section.body}</p>
                    </section>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <Link href="/contact" className="text-sm font-semibold" style={{ color: '#0da6f2' }}>Privacy question? Contact USFinNexus</Link>
            </div>
        </div>
    );
}
