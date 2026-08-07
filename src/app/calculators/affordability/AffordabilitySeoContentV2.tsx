import Link from 'next/link';

export default function AffordabilitySeoContentV2() {
    return (
        <section className="bg-white border-t border-gray-100 py-10 mt-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2>How Much House Can I Afford?</h2>
                <p>A home affordability calculator estimates a price range from your gross income, recurring monthly debt, down payment, mortgage rate, loan term, property taxes and other housing costs. The result is a planning estimate rather than a lender preapproval.</p>

                <h3>What do the 28% and 43% scenarios mean?</h3>
                <p>USFinNexus shows a conservative 28% housing-cost scenario and a 43% total-debt scenario because these percentages are familiar planning references. They are <strong>not universal mortgage approval rules</strong>. The CFPB&apos;s current General Qualified Mortgage definition no longer uses the former fixed 43% DTI cap; it uses price-based thresholds. Loan programs, automated underwriting and individual lenders may apply different DTI requirements.</p>

                <h3>What changes how much home you can afford?</h3>
                <ul>
                    <li><strong>Interest rate:</strong> a higher rate increases the payment supported by the same loan amount.</li>
                    <li><strong>Down payment:</strong> a larger down payment reduces the amount financed and can change mortgage-insurance costs.</li>
                    <li><strong>Property taxes and insurance:</strong> these can materially change the monthly housing budget even when principal and interest are unchanged.</li>
                    <li><strong>Existing debts:</strong> required monthly obligations reduce the room available in a total-debt scenario.</li>
                    <li><strong>Loan program:</strong> conventional, FHA, VA and USDA underwriting rules differ.</li>
                </ul>

                <h3>2026 loan-limit context</h3>
                <p>For 2026, the FHFA baseline conforming limit for a one-unit property in most U.S. counties is $832,750. HUD&apos;s 2026 FHA one-unit national floor is $541,287. Location-specific limits can be higher, so these figures are context rather than a determination of what you personally qualify to borrow.</p>

                <h3>Affordability is different from maximum approval</h3>
                <p>A lender can potentially approve a payment that is uncomfortable for your household budget. Consider emergency savings, maintenance, utilities, childcare, transportation, retirement contributions and other goals that are not captured by a simple mortgage DTI calculation.</p>

                <h3>Related calculators</h3>
                <p>Estimate the payment on a specific property with the <Link href="/calculators/mortgage">Mortgage Calculator</Link>, examine recurring debt with the <Link href="/calculators/dti">Debt-to-Income Ratio Calculator</Link>, or compare loan structures with the <Link href="/calculators/fha-va-usda">FHA, VA &amp; USDA Loan Calculator</Link>.</p>

                <h3>Source note</h3>
                <p>2026 loan-limit figures are based on FHFA and HUD publications. The description of General Qualified Mortgage DTI treatment is based on the CFPB rule that replaced the former fixed 43% DTI threshold with price-based thresholds. Reviewed August 7, 2026.</p>
            </div>
        </section>
    );
}
