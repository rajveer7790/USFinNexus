import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';
import AuthorBio from '@/components/AuthorBio';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

const title = 'Mortgage Payment at 7.18%: $300K, $400K & $500K';
const description = 'See November 2026 mortgage payments at 7.18% for $300K, $400K and $500K loans, plus PITI, 15-year comparisons and rate-lock steps.';
const url = 'https://usfinnexus.com/blog/mortgage-payment-at-718-november-2026';
const image = 'https://usfinnexus.com/images/mortgage-payment-at-718-november-2026.webp';
const faqs = [
  { question: 'What is the payment on a $300,000 mortgage at 7.18%?', answer: 'The principal-and-interest payment is about $2,032 per month on a 30-year fixed mortgage. Property tax, homeowners insurance, mortgage insurance and HOA dues are additional.' },
  { question: 'What is the payment on a $400,000 mortgage at 7.18%?', answer: 'The 30-year principal-and-interest payment is about $2,710 per month. A realistic housing budget must also include property tax, insurance, possible mortgage insurance and HOA dues.' },
  { question: 'What is the payment on a $500,000 mortgage at 7.18%?', answer: 'The principal-and-interest payment is about $3,387 per month for a 30-year fixed loan, before taxes, insurance, mortgage insurance and association dues.' },
  { question: 'Is 7.18% the rate every borrower will receive?', answer: 'No. It is Freddie Mac’s weekly national survey average for a specific conventional conforming borrower profile, not a guaranteed quote. Credit, points, down payment, loan type, property and lock period affect individual pricing.' },
  { question: 'How much does a 0.25 percentage-point change affect a $400,000 loan?', answer: 'At 7.00%, the 30-year principal-and-interest payment is about $2,661; at 7.25%, it is about $2,729. That is roughly a $67 monthly range around those two rates.' },
  { question: 'Should I wait for mortgage rates to fall?', answer: 'Do not rely on a future rate decline to make today’s purchase affordable. Compare the full payment, cash reserves, home price, lender offers and possible refinance costs under several scenarios.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, siteName: 'USFinNexus', publishedTime: '2026-11-07', modifiedTime: '2026-11-07', images: [{ url: image, width: 1200, height: 630, alt: 'Homebuyers comparing November 2026 mortgage payment scenarios at a dining table' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function MortgagePayment718Page() {
  return <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-07" dateModified="2026-11-07" authorName="USFinNexus Editorial Team" keywords={['mortgage payment at 7.18%', 'mortgage rates November 2026', '$400,000 mortgage payment', '30 year mortgage calculator', 'current mortgage payment']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/mortgage-payment-at-718-november-2026' }]} />
    <article>
      <header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Mortgage rates · Published and reviewed November 7, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Mortgage Payment at 7.18%: What $300K, $400K and $500K Loans Cost</h1><p className="mt-5 text-xl leading-relaxed text-slate-600">Freddie Mac’s third consecutive weekly decline still leaves today’s payment well above last year’s level. Here is the math buyers can actually budget.</p></header>
      <figure className="mb-10"><div className="relative aspect-[1200/630] overflow-hidden rounded-3xl"><EditorialImage src="/images/mortgage-payment-at-718-november-2026.webp" alt="Homebuyers comparing November 2026 mortgage payment scenarios at a dining table" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" /></div><figcaption className="mt-2 text-center text-sm text-slate-500">Original editorial illustration of a payment comparison—not a lender quote.</figcaption></figure>
      <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
        <p><strong>Answer first:</strong> A 30-year fixed mortgage at 7.18% has estimated monthly principal-and-interest payments of <strong>$2,032 on $300,000, $2,710 on $400,000 and $3,387 on $500,000</strong>. Those figures exclude property tax, homeowners insurance, mortgage insurance, HOA dues and maintenance. Freddie Mac reported 7.18% for the week of November 5, 2026; it is a benchmark, not a rate every applicant can obtain.</p>
        <aside className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-950"><strong>Current rate context:</strong> Freddie Mac’s 30-year average fell from 7.32% on October 22 to 7.24% on October 29 and 7.18% on November 5. The November 5 average was still above 6.22% one year earlier.</aside>

        <h2>Payment table for a 30-year mortgage at 7.18%</h2>
        <p>These estimates use the standard fixed-rate amortization formula, 360 monthly payments and no extra principal. The loan amount is the financed principal—not the home price. Figures are rounded to the nearest dollar, so a lender’s disclosure may differ slightly.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[660px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Loan amount</th><th className="p-4">Monthly P&amp;I</th><th className="p-4">First-year P&amp;I</th><th className="p-4">Interest over 30 years*</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4">$300,000</td><td className="p-4 font-semibold">$2,032</td><td className="p-4">$24,384</td><td className="p-4">About $431,630</td></tr><tr><td className="p-4">$400,000</td><td className="p-4 font-semibold">$2,710</td><td className="p-4">$32,520</td><td className="p-4">About $575,506</td></tr><tr><td className="p-4">$500,000</td><td className="p-4 font-semibold">$3,387</td><td className="p-4">$40,644</td><td className="p-4">About $719,383</td></tr></tbody></table></div>
        <p><small>*Assumes all scheduled payments are made and the loan is never sold, refinanced or prepaid. Actual lifetime interest changes when the loan ends early or extra principal is applied.</small></p>
        <p>Enter your down payment, term and local ownership costs in the <Link href="/calculators/mortgage">mortgage calculator</Link>. If the purchase price is still undecided, use the <Link href="/calculators/affordability">affordability calculator</Link> and then stress-test the result with the <Link href="/calculators/dti">debt-to-income calculator</Link>.</p>

        <h2>Why your quote may not be 7.18%</h2>
        <p>Freddie Mac’s Primary Mortgage Market Survey is built from thousands of conventional, conforming, fully amortizing purchase-loan applications submitted through Loan Product Advisor. Its published profile emphasizes borrowers with excellent credit and 20% down. It is useful for tracking direction, but it is not an APR, approval, lock confirmation or individualized offer.</p>
        <p>Lenders price credit score, loan-to-value ratio, property type, occupancy, points, loan size, lock period and market conditions. FHA, VA, USDA, jumbo and investment-property loans can price differently. Ask multiple lenders for the same loan amount, property assumptions, lock period and point structure so the comparison is meaningful.</p>

        <h2>The full payment is larger than principal and interest</h2>
        <h3>Property tax</h3>
        <p>Property taxes are local and can change after a sale, reassessment, new construction or expiration of an exemption. The seller’s current bill may not predict your future escrow deposit. Ask for the latest bill and verify the assessment rules with the local taxing authority.</p>
        <h3>Homeowners and hazard insurance</h3>
        <p>Insurance depends on replacement cost, location, deductible and hazard exposure. Obtain a property-specific quote before making a final affordability decision. Flood, wind, earthquake or wildfire coverage may be separate and can materially change the monthly total.</p>
        <h3>Mortgage insurance and HOA dues</h3>
        <p>Conventional loans above 80% loan-to-value may include private mortgage insurance, while FHA loans generally follow mortgage-insurance-premium rules. HOA and condo dues are not part of the mortgage formula but still count in the household budget and often in underwriting. Model conventional PMI with the <Link href="/calculators/pmi-removal">PMI removal calculator</Link>.</p>

        <h2>Rate sensitivity on a $400,000 mortgage</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">30-year rate</th><th className="p-4">Monthly P&amp;I</th><th className="p-4">Difference from 7.18%</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4">6.50%</td><td className="p-4">$2,528</td><td className="p-4">−$182</td></tr><tr><td className="p-4">6.75%</td><td className="p-4">$2,594</td><td className="p-4">−$115</td></tr><tr><td className="p-4">7.00%</td><td className="p-4">$2,661</td><td className="p-4">−$49</td></tr><tr><td className="p-4">7.18%</td><td className="p-4 font-semibold">$2,710</td><td className="p-4">Baseline</td></tr><tr><td className="p-4">7.25%</td><td className="p-4">$2,729</td><td className="p-4">+$19</td></tr><tr><td className="p-4">7.50%</td><td className="p-4">$2,797</td><td className="p-4">+$87</td></tr></tbody></table></div>
        <p>A rate reduction is not automatically free. Discount points exchange more cash at closing for a lower note rate. Calculate the months required to recover that upfront cost with the <Link href="/calculators/points-buydown">points buydown calculator</Link>. A temporary buydown only subsidizes early payments; it does not change the permanent note rate.</p>

        <h2>30-year at 7.18% versus 15-year at 6.57%</h2>
        <p>Freddie Mac’s November 5 average for a 15-year fixed mortgage was 6.57%. On a $400,000 balance, the estimated 15-year P&amp;I is about $3,500 per month versus $2,710 for the 30-year loan. The shorter term is roughly $790 more each month, but scheduled lifetime interest is about $229,971 instead of $575,506.</p>
        <p>The lower lifetime interest comes from repaying principal much faster, not merely from the lower rate. A 15-year term can strain monthly cash flow and reduce room for emergencies, retirement saving or repairs. Compare the required payment rather than assuming the shorter term is always better. The <Link href="/calculators/comparison">mortgage comparison calculator</Link> can keep the terms side by side.</p>

        <h2>Should you lock, float or wait?</h2>
        <p>A rate lock can protect a quoted rate for a defined period, but terms, fees and extension rules vary. Floating preserves the chance to benefit from a decline while accepting the risk of a higher payment before closing. Ask what happens if closing is delayed, whether a float-down option exists, and which changes to the application could invalidate pricing.</p>
        <p>Waiting to buy is broader than waiting to lock. Home prices, inventory, rent, insurance and personal finances may move while rates change. “Buy now and refinance later” is not a guarantee because a future refinance requires acceptable rates, equity, credit, income and closing costs. The current payment should be affordable without depending on that future transaction.</p>

        <h2>How to compare lender offers correctly</h2>
        <ol><li><strong>Request comparable quotes.</strong> Use the same loan amount, term, down payment, points and lock period.</li><li><strong>Read the Loan Estimate.</strong> Compare interest rate, APR, projected payments, lender-controlled fees, lender credits and cash to close.</li><li><strong>Separate points from other costs.</strong> A lower rate with expensive points may lose to a zero-point option if you move or refinance early.</li><li><strong>Verify taxes and insurance.</strong> Estimates can be too low for the actual property.</li><li><strong>Keep reserves.</strong> Do not use every available dollar for the down payment and closing costs.</li><li><strong>Recheck before closing.</strong> Review the Closing Disclosure and ask about unexplained changes.</li></ol>
        <p>The CFPB recommends comparing official Loan Estimates rather than relying on verbal quotes. Use the <Link href="/calculators/closing-costs">closing-cost calculator</Link> to organize estimates, but treat lender disclosures and property-specific bills as the controlling documents.</p>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and financial disclaimer</h2>
        <p>Primary sources reviewed November 7, 2026: <a href="https://www.freddiemac.com/pmms">Freddie Mac’s Primary Mortgage Market Survey</a>, its <a href="https://www.freddiemac.com/pmms/pmms_archives">weekly PMMS archive</a>, and the CFPB’s <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/">Loan Estimate guide</a>. This article provides educational estimates, not a lending offer, approval, tax advice or personalized financial recommendation. Rates and calculations are rounded. Confirm current pricing, APR, taxes, insurance, program eligibility and closing costs with licensed professionals.</p>
      </div>
      <AuthorBio /><ContextualInternalLinks currentSlug="mortgage-payment-at-718-november-2026" showBlogs showCalculators />
    </article>
  </main>;
}
