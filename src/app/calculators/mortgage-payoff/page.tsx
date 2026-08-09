import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorSkeleton from '@/components/ui/CalculatorSkeleton';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import SemrushIntentSection from '@/components/seo/SemrushIntentSection';

const MortgageCalculator = dynamic(() => import('../mortgage/MortgageCalculatorClient'), {
    loading: () => <CalculatorSkeleton />,
});

export const metadata: Metadata = {
    title: "Mortgage Payoff Calculator | Free Tool",
    description: 'Model extra monthly principal and compare your original mortgage schedule with an accelerated payoff plan, including estimated time and interest saved.',
    alternates: { canonical: '/calculators/mortgage-payoff' },
    openGraph: {
        type: 'website',
        url: 'https://usfinnexus.com/calculators/mortgage-payoff',
        title: 'Mortgage Payoff Calculator',
        description: 'Estimate how extra principal payments change your mortgage payoff date and total interest.',
    },
};

export default function MortgagePayoffPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WebApplicationSchema
                name="Mortgage Payoff Calculator"
                description="Model extra mortgage principal payments, payoff timing and estimated interest savings."
                url="https://usfinnexus.com/calculators/mortgage-payoff"
                dateModified="2026-08-09"
            />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Mortgage Payoff', item: '/calculators/mortgage-payoff' }]} />
            <MortgageCalculator
                initialTab="extra"
                heading="Mortgage Payoff Calculator"
                intro="Add a recurring principal payment to estimate a faster payoff date and lower lifetime interest."
            />
            <SemrushIntentSection slug="mortgage-payoff" />

            <article className="prose prose-slate max-w-4xl mx-auto mt-12">
                <h2>How to calculate a faster mortgage payoff</h2>
                <p>
                    Enter the current loan balance as the home price, set the down payment to zero, then enter the note rate, remaining term and extra monthly principal. The extra-payment view compares the scheduled loan with the accelerated plan. Results are estimates; your servicer&apos;s daily interest, payment timing and escrow handling can create small differences.
                </p>
                <h2>Extra-payment scenarios worth comparing</h2>
                <ul>
                    <li><strong>Monthly extra principal:</strong> test $100, $250, $500 or an amount that fits your cash-flow plan.</li>
                    <li><strong>Biweekly equivalent:</strong> compare one additional monthly payment per year with a true servicer-supported biweekly plan.</li>
                    <li><strong>Five-year target:</strong> increase extra principal until the modeled payoff date is about five years earlier.</li>
                    <li><strong>Payoff versus investing:</strong> compare the guaranteed interest avoided with the uncertain, taxable return of an alternative investment.</li>
                </ul>
                <h2>Before sending extra principal</h2>
                <p>
                    Confirm that your loan has no prepayment penalty, maintain an emergency reserve, and tell the servicer to apply the additional amount to principal. Paying a mortgage by credit card usually adds fees or cash-advance risk and is not the same as making an extra principal payment.
                </p>
                <p>
                    Also compare the <Link href="/calculators/amortization">amortization calculator</Link>, the <Link href="/blog/pay-off-mortgage-early-strategy">mortgage payoff strategy guide</Link>, and the <Link href="/blog/pay-off-mortgage-early-strategy">payoff-versus-investing guide</Link>.
                </p>
            </article>
        </main>
    );
}
