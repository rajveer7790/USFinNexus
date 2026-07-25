import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import Link from 'next/link';

// Reuse the exact same client component so we don't duplicate code
const MortgageCalculatorClient = nextDynamic(() => import('@/app/calculators/mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
    title: 'Privacy Focused Mortgage Calculator — Free & No Signup Required',
    description: 'A truly privacy-first mortgage calculator. All math runs locally on your device. We collect zero data, require no email, and send no spam. 100% free.',
    alternates: { canonical: 'https://usfinnexus.com/privacy-focused-mortgage-calculator' },
    openGraph: {
        type: 'website',
        title: 'Privacy Focused Mortgage Calculator — Free & No Signup Required',
        description: 'A truly privacy-first mortgage calculator. All math runs locally on your device. We collect zero data, require no email, and send no spam.',
        url: 'https://usfinnexus.com/privacy-focused-mortgage-calculator',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'Privacy Focused Mortgage Calculator' }],
    },
};

export default function PrivacyMortgagePage() {
    return (
        <main className="neo-root">
            <section className="neo-light-zone py-8 border-b border-[var(--color-border)] bg-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Breadcrumbs items={[{ name: 'Privacy Focused Mortgage Calculator', item: '/privacy-focused-mortgage-calculator' }]} />
                    <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        100% Secure & Private
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ color: 'var(--color-text)' }}>
                        The Privacy-First <br className="hidden sm:block" /> Mortgage Calculator
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                        Why give away your phone number just to do math? Our calculator runs entirely on your device. <strong>No data collected. No emails required. No lender spam.</strong>
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <WebApplicationSchema
                    name="Privacy Focused Mortgage Calculator"
                    description="A truly privacy-first mortgage calculator. All math runs locally on your device. We collect zero data, require no email, and send no spam."
                    url="https://usfinnexus.com/privacy-focused-mortgage-calculator"
                    dateModified="2026-05-15"
                />
                
                <div className="mb-12">
                    <MortgageCalculatorClient />
                </div>

                <div className="prose prose-slate max-w-4xl mx-auto" style={{ color: 'var(--color-text)' }}>
                    <h2 className="text-2xl font-bold mb-4">Why Privacy Matters When Shopping for a Mortgage</h2>
                    <p className="mb-4">
                        The mortgage calculator space is dominated by lead-generation companies. Most "free" calculators are designed to harvest your personal information — your IP address, your estimated home value, your down payment savings, and your contact details. This data is then sold as a "lead" to multiple mortgage brokers, resulting in endless spam calls and emails.
                    </p>
                    <p className="mb-4">
                        At <Link href="/" className="text-blue-600 hover:underline">USFinNexus</Link>, we believe financial math should be completely free and private. That's why we built this privacy-focused calculator:
                    </p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Client-Side Processing:</strong> Every calculation happens right here in your web browser. The numbers you enter never leave your device.</li>
                        <li><strong>Zero Data Collection:</strong> We do not track your financial inputs or save them to any database.</li>
                        <li><strong>No Signup or Email Required:</strong> You don't need to create an account or provide an email address to see your full amortization schedule or download the PDF report.</li>
                        <li><strong>No Affiliate Spam:</strong> We don't sell your data to lenders. Period.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">How Does It Work Without Servers?</h2>
                    <p className="mb-4">
                        Modern web browsers are incredibly powerful. When you load this page, you download the calculator's logic directly to your device. When you adjust the home price, down payment, or interest rate, your computer or phone does the math instantly. There is no need for your inputs to be sent back to our servers, ensuring your privacy is guaranteed by the architecture itself.
                    </p>
                </div>
            </div>
        </main>
    );
}
