import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'First-Time Homebuyer Guide: Ultimate Step-by-Step Walkthrough | USFinNexus',
    description: 'A massive 2026 step-by-step guide to buying your first home. Includes hidden closing costs, pre-approval pitfalls, making offers, and the exact escrow timeline.',
    alternates: { canonical: 'https://usfinnexus.com/guides/first-time-homebuyer-guide' },
    openGraph: {
        title: 'Step-by-Step First-Time Homebuyer Guide | USFinNexus',
        description: 'Navigate the complex 2026 housing market with our comprehensive, chronological walkthrough.',
        url: 'https://usfinnexus.com/guides/first-time-homebuyer-guide',
    },
};

export default function FirstTimeHomebuyerGuidePage() {
    return (
        <main className="bg-white min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ name: 'Guides', item: '/guides' }, { name: 'First-Time Homebuyer Guide', item: '/guides/first-time-homebuyer-guide' }]} />
            </div>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
                        The Ultimate Step-by-Step Guide to Buying Your First Home
                    </h1>
                    <p className="text-xl text-gray-500">
                        Buying a house is a stressful, 45-day sprint disguised as a marathon. This chronologic guide breaks down exactly what you need to do, day by day, to secure the keys to your first house.
                    </p>
                </header>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">1</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Check Your Credit & Stop Using It</h3>
                        <p className="mb-0">
                            The very first thing you do before even looking at houses on Zillow is to freeze your credit activity. Do not open new credit cards. Do not finance a car. Do not co-sign a student loan. 
                            Mortgage lenders obsessively monitor your <Link href="/calculators/dti" className="text-blue-600 hover:underline">Debt-to-Income (DTI) ratio</Link>. Even a $250/mo auto lease will destroy your purchasing power by slashing the maximum mortgage payment you qualify for. Check your FICO scores (lenders use FICO 2, 4, and 5) and dispute any errors immediately.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">2</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Save for the Down Payment AND Closing Costs</h3>
                        <p className="mb-0">
                            A 20% down payment is a myth. You can buy a home with 3.5% down (FHA) or 3% down (Conventional). Track your progress with our <Link href="/calculators/down-payment" className="text-blue-600 hover:underline">Down Payment Calculator</Link>.
                            However, the vast majority of first-time buyers completely forget about <strong>Closing Costs</strong>. These are separate mandatory fees (title insurance, loan origination, appraisals) that cost another 2% to 5% of the purchase price. Estimate them instantly using our <Link href="/calculators/closing-costs" className="text-blue-600 hover:underline">Closing Costs Calculator</Link>.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">3</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Get Fully Pre-Approved</h3>
                        <p className="mb-0">
                            Never look at a house without a Pre-Approval letter. In a competitive market, no seller will accept your offer without it. A &quot;Pre-Qualification&quot; is useless (it&apos;s just a guess based on what you told a robot). A &quot;Pre-Approval&quot; means a human underwriter actually verified your W-2s, tax returns, pay stubs, and bank statements.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">4</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Hire a Buyer&apos;s Real Estate Agent</h3>
                        <p className="mb-0">
                            Under the massive new National Association of Realtors (NAR) rules instituted recently, <strong>you</strong> are now legally responsible for negotiating your buyer&apos;s agent commission. The seller no longer automatically pays your agent 3%. You must sign a Buyer Representation Agreement outlining exactly how much your agent is owed (e.g., 2.5% of the purchase price) before they can even unlock a door for you. You can try to negotiate that the seller covers this cost in your eventual offer.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">5</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">House Hunting and Making an Offer</h3>
                        <p className="mb-0">
                            Once you find &quot;the one,&quot; your agent will draft a contract. The offer includes your purchase price, down payment type, requested concessions (e.g., &quot;seller pays $5,000 toward my closing costs&quot;), and crucially, your <strong>Contingencies</strong>.
                            Contingencies are legal escape hatches. The three most important are the <strong>Inspection</strong> contingency (you can back out if the house is falling apart), the <strong>Appraisal</strong> contingency (you can back out if the bank says the house isn&apos;t worth the price), and the <strong>Financing</strong> contingency (you can back out if your lender denies the loan at the last minute).
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">6</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Earnest Money and Escrow (The 30-45 Day Sprint)</h3>
                        <p className="mb-0">
                            When the seller accepts your offer, you must immediately wire an &quot;Earnest Money Deposit&quot; (usually 1-2% of the purchase price) to the title company to prove you are serious. This money goes toward your down payment. Over the next 30 days:
                            <br/><br/>
                            1. You hire a private home inspector to tear the house apart.
                            <br/>
                            2. You negotiate repairs or credits with the seller based on the inspector&apos;s findings.
                            <br/>
                            3. Your lender orders a massive appraisal.
                            <br/>
                            4. You shop for Homeowners Insurance.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-blue-200 mt-0">7</h2>
                    <div>
                        <h3 className="text-2xl font-bold text-navy-900 mt-0 mb-2">Clear to Close (CTC) & Closing Day</h3>
                        <p className="mb-0">
                            Usually three days before closing, your lender issues the &quot;Clear to Close&quot; and sends you the <strong>Closing Disclosure (CD)</strong>. This document tells you the exact, to-the-penny amount of cash you need to wire to the title company. On Closing Day, you arrive at the title attorney&apos;s office, sign 150 pages of legal documents until your hand cramps, hand over your massive wire transfer confirmation, and finally get the keys to your new home!
                        </p>
                    </div>
                </div>

                <p className="text-center font-bold text-lg text-navy-900 mt-12 pt-8 border-t border-gray-200">
                    Ready to do the math? Run your scenarios through our <Link href="/calculators/mortgage" className="text-blue-600 hover:underline">Comprehensive Mortgage Calculator</Link>.
                </p>
            </article>
        </main>
    );
}
