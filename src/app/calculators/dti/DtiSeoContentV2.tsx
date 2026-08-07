import Link from 'next/link';

export default function DtiSeoContentV2() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2>How to Calculate Your Debt-to-Income Ratio</h2>
                <p>Debt-to-income ratio (DTI) is monthly recurring debt divided by gross monthly income, expressed as a percentage. For example, $2,000 of monthly debt divided by $8,000 of gross monthly income equals a 25% DTI.</p>
                <h3>DTI is a planning measure, not a universal approval rule</h3>
                <p>The CFPB&apos;s current General Qualified Mortgage definition does not impose a universal 43% DTI cap. The former fixed 43% General QM threshold was replaced with price-based thresholds. Mortgage programs, automated underwriting systems and individual lenders can apply different debt and income rules.</p>
                <h3>What debts should you include?</h3>
                <p>For a personal planning estimate, include recurring required debt payments such as installment loans, student loans, required minimum revolving-debt payments and other continuing obligations. Mortgage underwriting can count specific obligations differently, so a lender&apos;s calculated DTI may differ from this simplified tool.</p>
                <h3>How to interpret the result</h3>
                <p>Lower DTI generally means more income is available after recurring debt payments. Common planning references such as 28%, 36% and 43% can help compare scenarios, but none should be presented as guaranteed approval or rejection thresholds across all mortgage products.</p>
                <h3>Next step</h3>
                <p>Use the <Link href="/calculators/affordability">Home Affordability Calculator</Link> to add a proposed housing payment, or the <Link href="/calculators/mortgage">Mortgage Calculator</Link> to estimate principal, interest, taxes and insurance.</p>
                <h3>Source note</h3>
                <p>The General QM rule description on this page is based on the Consumer Financial Protection Bureau&apos;s final rule replacing the former 43% DTI limit with price-based thresholds. Reviewed August 7, 2026.</p>
            </div>
        </section>
    );
}
