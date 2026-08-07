import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import Link from 'next/link';

const MortgageCalculatorClient = nextDynamic(() => import('@/app/calculators/mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Privacy-Focused Mortgage Calculator | USFinNexus',
    description:
        'Estimate a mortgage payment without submitting an email or phone number. Calculator values are designed to be processed in your browser; see our Privacy Policy for hosting and advertising disclosures.',
    alternates: { canonical: 'https://usfinnexus.com/privacy-focused-mortgage-calculator' },
    openGraph: {
        type: 'website',
        title: 'Privacy-Focused Mortgage Calculator | USFinNexus',
        description: 'Mortgage calculations without an email or phone-number lead form. Read the privacy details for website-service data.',
        url: 'https://usfinnexus.com/privacy-focused-mortgage-calculator',
        siteName: 'USFinNexus',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus privacy-focused mortgage calculator' }],
    },
};

export default function PrivacyMortgagePage() {
    return (
        <main className="neo-root">
            <section className="neo-light-zone py-8 border-b border-[var(--color-border)] bg-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Breadcrumbs items={[{ name: 'Privacy-Focused Mortgage Calculator', item: '/privacy-focused-mortgage-calculator' }]} />
                    <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
                        No email or phone required
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ color: 'var(--color-text)' }}>
                        Privacy-Focused Mortgage Calculator
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                        Run a mortgage-payment scenario without submitting a lead form. The financial values entered into the calculator are designed to be processed in your browser rather than sent to USFinNexus as a mortgage application.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <WebApplicationSchema
                    name="Privacy-Focused Mortgage Calculator"
                    description="Estimate mortgage payments without submitting an email or phone number for ordinary calculator results."
                    url="https://usfinnexus.com/privacy-focused-mortgage-calculator"
                    dateModified="2026-08-07"
                />

                <div className="mb-12"><MortgageCalculatorClient /></div>

                <div className="prose prose-slate max-w-4xl mx-auto" style={{ color: 'var(--color-text)' }}>
                    <h2>What “Privacy-Focused” Means Here</h2>
                    <ul>
                        <li><strong>No lead form for ordinary results:</strong> you do not need to submit an email address or phone number to calculate a payment.</li>
                        <li><strong>Browser-based calculator inputs:</strong> values such as home price, down payment and rate are designed to be used by the calculator in the browser.</li>
                        <li><strong>No sale of calculator-input data to lenders:</strong> USFinNexus does not sell the numbers entered into the calculator as mortgage leads.</li>
                    </ul>

                    <h2>What This Does Not Mean</h2>
                    <p>
                        A website still makes normal network requests. Cloudflare infrastructure can process technical request information needed to deliver and secure the site, and Google AdSense may use cookies or similar technologies for advertising, measurement and fraud prevention. For that reason, we do not describe the entire website as collecting “zero data” or “zero cookies.”
                    </p>
                    <p>
                        Read the <Link href="/privacy">Privacy Policy</Link> for the current disclosures and <Link href="/methodology">Calculation Methodology</Link> for the assumptions behind the calculator.
                    </p>

                    <h2>Mortgage Estimate, Not a Loan Offer</h2>
                    <p>
                        The calculator estimates payment math. It does not transmit a mortgage application, check credit, guarantee approval or quote a lender rate. Taxes, insurance, mortgage insurance, HOA dues and underwriting requirements can materially change the real cost or eligibility.
                    </p>
                </div>
            </div>
        </main>
    );
}
