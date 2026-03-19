import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Credit Score Needed to Buy a House in 2026 | USFinNexus',
    description: 'Find out exactly what credit score you need for FHA, VA, USDA, and Conventional mortgages in 2026.',
    openGraph: {
        title: 'Mortgage Credit Score Requirements 2026 | USFinNexus',
        description: 'See minimum credit score requirements by loan type and learn how lenders pull your FICO scores.',
        url: 'https://usfinnexus.com/guides/mortgage-credit-score-requirements',
    },
};

export default function CreditScoreRequirementsPage() {
    return (
        <main className="bg-white min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ name: 'Guides', item: '/guides' }, { name: 'Mortgage Credit Scores', item: '/guides/mortgage-credit-score-requirements' }]} />
            </div>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
                        What Credit Score Do You Really Need to Buy a House?
                    </h1>
                    <p className="text-xl text-gray-500">
                        The absolute minimum credit score required to buy a house in 2026 is 500 (with a 10% down FHA loan). 
                        However, the reality of what score you need for the &quot;best&quot; rates requires a much deeper dive into how lenders pull your credit.
                    </p>
                </header>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                    <h3 className="text-xl font-bold text-red-800 mt-0 mb-2">WARNING: Credit Karma is Lying to You</h3>
                    <p className="mb-0 text-red-900">
                        The credit score you see for free on Credit Karma or your banking app is almost always a <strong>VantageScore 3.0</strong>. 
                        Mortgage lenders absolutely <strong>do not care</strong> about your VantageScore. When you apply for a mortgage, the lender pulls your <strong>FICO 2, 4, and 5</strong> scores. These older FICO models are significantly stricter and are often 20 to 40 points lower than what you see on Credit Karma.
                    </p>
                </div>

                <h2>How Lenders Calculate Your &quot;Middle Score&quot;</h2>
                <p>
                    When you apply for a mortgage, the lender pulls your FICO scores from all three major bureaus (Equifax, Experian, and TransUnion). This is called a &quot;Tri-Merge.&quot;
                </p>
                <ul>
                    <li>Equifax FICO 5: 640</li>
                    <li>Experian FICO 2: 700</li>
                    <li>TransUnion FICO 4: 680</li>
                </ul>
                <p>
                    The lender throws out the highest score (700) and throws out the lowest score (640). They use the <strong>middle score (680)</strong> to determine your interest rate and loan eligibility. If you have a co-borrower (like a spouse), the lender looks at both of your middle scores, and they are forced to use the <strong>lowest of the two middle scores</strong> to price the loan.
                </p>

                <hr className="my-10" />

                <h2>Minimum Credit Scores by Loan Type</h2>

                <h3>1. FHA Loan Minimums</h3>
                <p>
                    FHA loans are the most forgiving option for buyers with damaged credit.
                </p>
                <ul>
                    <li><strong>580 or Higher:</strong> You qualify for the standard 3.5% down payment. Check our <Link href="/calculators/fha" className="text-blue-600 hover:underline">FHA Calculator</Link> to see the math.</li>
                    <li><strong>500 to 579:</strong> You can technically still qualify for an FHA loan, but the government mandates you must put down at least <strong>10%</strong> instead of 3.5%. Very few private lenders are willing to underwrite these loans due to the extreme risk.</li>
                </ul>

                <h3>2. Conventional Loan Minimums</h3>
                <p>
                    Conventional loans (backed by Fannie Mae and Freddie Mac) are much stricter because the government assumes less risk.
                </p>
                <ul>
                    <li><strong>Minimum Score: 620</strong></li>
                    <li><strong>Important Caveat:</strong> While 620 gets you in the door, Conventional loans employ massive &quot;Loan-Level Price Adjustments&quot; (LLPAs). This means a borrower with a 620 score will be hit with massive interest rate penalties and astronomical Private Mortgage Insurance (PMI) fees compared to someone with a 740 score. Often, a buyer with a 620 score is financially better off taking an FHA loan despite having to pay upfront Mortgage Insurance Premiums.</li>
                </ul>

                <h3>3. VA Loan Minimums</h3>
                <p>
                    Legally, the Department of Veterans Affairs does <strong>not</strong> set a minimum credit score requirement. 
                </p>
                <ul>
                    <li>However, the private banks actually funding the loan institute their own &quot;Overlays.&quot;</li>
                    <li>Most lenders require a <strong>620</strong> minimum for a VA loan, though specialized veteran lenders will often dip down to 580.</li>
                </ul>

                <h3>4. USDA Loan Minimums</h3>
                <p>
                    USDA loans (which offer 0% down in rural areas) use an automated underwriting system called GUS.
                </p>
                <ul>
                    <li><strong>640 Minimum:</strong> If your score is 640 or higher, you are run through the automated system for quick, easy approval.</li>
                    <li><strong>Below 640:</strong> You can technically qualify, but it requires &quot;Manual Underwriting.&quot; A human must dig through every single transaction in your bank accounts to ensure you are safe, creating massive delays and a high chance of denial.</li>
                </ul>

                <hr className="my-10" />

                <h2>How to Quickly Boost Your Mortgage FICO Score</h2>
                <div className="space-y-6 mt-8">
                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mt-0 mb-2">1. Slash Credit Card Utilization</h3>
                        <p className="mb-0 text-gray-600">
                            The single fastest way to manipulate your FICO score is to drastically reduce your credit card utilization. If you have a $10,000 credit limit across all cards, and you owe $9,000, your score is tanking. Pay those cards down so the balances are below 30% of their limits (ideally below 10%). This can shoot your score up 30-50 points in 30 days.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mt-0 mb-2">2. Do Not Close Old Accounts</h3>
                        <p className="mb-0 text-gray-600">
                            Even if you pay off that terrible high-interest credit card you opened in college, DO NOT close the account. Closing the account reduces your total available credit (spiking your utilization metric) and deletes years of valuable &quot;Age of Credit History.&quot; Put the card in a block of ice in the freezer, but leave the account open.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mt-0 mb-2">3. Dispute Incorrect Late Payments (Rapid Rescore)</h3>
                        <p className="mb-0 text-gray-600">
                            If your score is ruined by an inaccurate 30-day late payment, get proof from the creditor that it was an error. Give that proof to your mortgage loan officer. The lender can initiate a &quot;Rapid Rescore&quot; directly with the credit bureaus to blast the error off your report in 3-5 days instead of the usual 30-45 day dispute process.
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
}
