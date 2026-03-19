import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'Terms of Service | USFinNexus', description: 'USFinNexus.com terms of service — calculator results are estimates only.' };

export default function TermsPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Terms of Service', item: '/terms' }]} />
            <h1 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>Terms of Service</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: February 2026</p>
            <div className="space-y-6" style={{ color: 'var(--color-text)' }}>
                {[
                    ['1. Acceptance', 'By using USFinNexus.com, you agree to these terms. If you do not agree, please do not use our site.'],
                    ['2. Estimation Only', 'All calculations are estimates based solely on the inputs you provide. Results are for informational and educational purposes only and do not constitute financial, mortgage, tax, legal, or investment advice. Actual loan terms, payments, interest rates, property taxes, insurance costs, and other figures will differ.'],
                    ['3. No Professional Relationship', 'Use of USFinNexus.com does not create any professional relationship between you and USFinNexus.com. We are not mortgage brokers, financial advisors, CPAs, or attorneys.'],
                    ['4. Accuracy', 'We strive for mathematical accuracy but make no warranties regarding the accuracy, completeness, or suitability of our calculations for any purpose. All loan limit data (FHFA, FHA, VA) is sourced from public government sources and updated annually.'],
                    ['5. Third-Party Services', 'We use Google AdSense to serve advertisements and Google Analytics for anonymous analytics. These services are governed by their own terms and privacy policies.'],
                    ['6. Intellectual Property', 'All content, design, and code on USFinNexus.com is the property of USFinNexus. You may not reproduce or distribute our content without written permission.'],
                    ['7. Limitation of Liability', 'USFinNexus.com and its operators are not liable for any financial decisions made based on our calculator results. Always consult a licensed financial professional before making any financial decision.'],
                    ['8. Changes', 'We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.'],
                ].map(([title, body]) => (
                    <section key={String(title)}>
                        <h2 className="text-lg font-bold mb-2">{title}</h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{body}</p>
                    </section>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <Link href="/" className="text-sm font-semibold" style={{ color: '#00C853' }}>← Back to Calculators</Link>
            </div>
        </div>
    );
}
