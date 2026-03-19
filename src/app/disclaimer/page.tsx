import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'Disclaimer | USFinNexus', description: 'Important disclaimer for all USFinNexus.com calculator results.' };

export default function DisclaimerPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Breadcrumbs items={[{ name: 'Disclaimer', item: '/disclaimer' }]} />
            <div className="flex items-center gap-3 mb-2">
                <Shield style={{ color: '#f59e0b' }} size={28} />
                <h1 className="text-3xl font-black" style={{ color: 'var(--color-text)' }}>Disclaimer</h1>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>Last updated: February 2026</p>

            <div className="disclaimer-banner mb-8 text-sm p-5">
                <strong>IMPORTANT: All calculations are for estimation and educational purposes only. They do not constitute financial, mortgage, tax, legal, or investment advice.</strong>
            </div>

            <div className="space-y-6">
                {[
                    ['Estimation Only', 'The calculations and information provided on USFinNexus.com are based on the inputs you provide and standard mathematical formulas. They are intended for general informational purposes only.'],
                    ['Not Financial Advice', 'Nothing on USFinNexus.com constitutes financial advice, mortgage advice, legal advice, tax advice, or investment advice. Results should not be relied upon as the sole basis for any financial decision.'],
                    ['Actual Results Will Vary', 'Actual mortgage payments, interest rates, property taxes, homeowners insurance premiums, PMI costs, and all other financial figures will differ based on your specific situation, lender requirements, local tax assessments, insurance market conditions, and many other factors.'],
                    ['Consult a Professional', 'Before making any financial decision — including purchasing a home, refinancing a mortgage, or taking out any loan — you should consult with a licensed financial advisor, mortgage professional, CPA, or attorney.'],
                    ['Loan Limit Data Sources', '2026 conforming loan limits from FHFA (fhfa.gov). FHA loan limits from HUD (hud.gov). VA baseline limits from VA.gov. Property tax estimates from Tax Foundation state averages. DTI guidelines from CFPB (consumerfinance.gov). All government data is subject to annual updates.'],
                    ['No Warranty', 'USFinNexus.com makes no warranty, express or implied, regarding the accuracy, completeness, reliability, or suitability of the information provided. We expressly disclaim any liability for errors or omissions.'],
                    ['Approval Not Guaranteed', 'Calculator results showing a home price you can "afford" do not guarantee mortgage approval. Approval is subject to lender underwriting criteria including credit score, income verification, employment history, debt obligations, appraisal, and other factors.'],
                ].map(([title, body]) => (
                    <section key={String(title)}>
                        <h2 className="text-base font-bold mb-2" style={{ color: 'var(--color-text)' }}>{title}</h2>
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
