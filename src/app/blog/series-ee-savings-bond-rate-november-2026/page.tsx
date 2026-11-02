import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';

const title = 'Series EE Bond Rate Is 2.90%: Should You Buy Now?';
const description = 'The November 2026 Series EE savings bond rate, 20-year doubling guarantee, taxes, cash-out rules and a practical buy-or-skip test.';
const url = 'https://usfinnexus.com/blog/series-ee-savings-bond-rate-november-2026';
const image = 'https://usfinnexus.com/images/series-ee-savings-bond-rate-november-2026.webp';
const faqs = [
  { question: 'What is the current Series EE savings bond rate?', answer: 'Series EE bonds issued from November 1, 2026 through April 30, 2027 earn a 2.90% annual fixed rate. TreasuryDirect says the rate is fixed for the bond’s first 20 years.' },
  { question: 'Will a Series EE bond really double in 20 years?', answer: 'Yes, under current Treasury terms for EE bonds bought now. If ordinary interest has not doubled the purchase value by the 20-year original maturity, Treasury makes a one-time adjustment so the bond is worth twice its purchase price.' },
  { question: 'Can I cash an EE bond before 20 years?', answer: 'You may redeem it after 12 months. If you redeem before five years, you lose the final three months of interest. Redeeming before 20 years also means giving up the 20-year doubling adjustment.' },
  { question: 'How much in EE bonds can I buy?', answer: 'TreasuryDirect currently permits up to $10,000 of electronic EE bonds per calendar year for one Social Security number, with a $25 minimum purchase.' },
  { question: 'Are EE bond earnings taxable?', answer: 'Interest is subject to federal income tax but not state or local income tax. Owners generally may report interest annually or defer it until redemption or final maturity; a qualified higher-education exclusion has additional requirements.' },
  { question: 'Is an EE bond better than an I bond?', answer: 'They solve different problems. EE bonds offer a fixed rate and a 20-year doubling guarantee; I bonds combine a lifetime fixed component with an inflation component that resets every six months. Your time horizon and inflation concern determine the better fit.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-11-02', modifiedTime: '2026-11-02', siteName: 'USFinNexus', images: [{ url: image, width: 1200, height: 630, alt: 'Savings certificate, hourglass and long-term growth chart representing Series EE bonds' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-02" dateModified="2026-11-02" authorName="USFinNexus Editorial Team" keywords={['Series EE bond rate 2026', 'EE savings bond rate', '2.90 EE bond', 'EE bond doubling 20 years', 'should I buy EE bonds']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/series-ee-savings-bond-rate-november-2026' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Savings bonds · Published and reviewed November 2, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> New Series EE savings bonds earn a <strong>2.90% fixed annual rate</strong> when issued from November 1, 2026 through April 30, 2027. They are most compelling for money you can truly leave untouched for 20 years, because Treasury guarantees the value will double at that point. They are usually a poor emergency-fund substitute: redemption is blocked for one year, an early penalty applies before year five, and the special doubling benefit disappears if you cash out before year 20.</p>
        <figure><img src="/images/series-ee-savings-bond-rate-november-2026.webp" width="1200" height="630" alt="Savings certificate, hourglass and long-term growth chart representing Series EE bonds" className="h-auto w-full rounded-2xl" /><figcaption>Original USFinNexus editorial image illustrating the long holding period of an EE savings bond.</figcaption></figure>

        <aside className="not-prose my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-950"><strong>Current rate window:</strong> TreasuryDirect lists 2.90% for EE bonds issued November 1, 2026–April 30, 2027. This rate belongs to the bond you buy; it is not a six-month promotional APY.</aside>

        <h2>How the 2.90% EE bond rate works</h2>
        <p>Electronic EE bonds earn interest monthly and compound semiannually. For bonds issued since May 2005, the rate set at purchase is fixed for the first 20 years. The account value shown between compounding dates can therefore look less dramatic than a bank balance that credits interest monthly, but the economic rule is straightforward: interest accrues, and every six months the earned amount is added to principal.</p>
        <p>The November rate rose from the 2.40% fixed rate that applied to issues from May through October 2026. That change does not reprice an older EE bond. Each issue keeps the fixed rate assigned when it was bought, subject to Treasury&apos;s rules after year 20.</p>

        <h2>The 20-year doubling guarantee is the main feature</h2>
        <p>Treasury guarantees that an EE bond bought now will be worth at least twice its purchase price at its 20-year original maturity. If normal compounding at 2.90% falls short, Treasury adds a one-time adjustment. A $5,000 purchase is therefore guaranteed to be worth at least $10,000 at year 20, provided you hold it for the full period and the terms remain those stated by Treasury.</p>
        <p>Doubling over exactly 20 years is equivalent to an annualized return of roughly 3.53%, before federal income tax. That effective figure matters more than the 2.90% coupon for a committed 20-year holder. It does <em>not</em> mean the bond earns 3.53% every year or that a person redeeming at year 19 receives the doubled value.</p>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">Purchase</th><th scope="col">Guaranteed minimum at year 20</th><th scope="col">What must happen</th></tr></thead><tbody>
          <tr><th scope="row">$1,000</th><td>$2,000</td><td>Hold through original maturity</td></tr>
          <tr><th scope="row">$5,000</th><td>$10,000</td><td>Do not redeem early</td></tr>
          <tr><th scope="row">$10,000</th><td>$20,000</td><td>Hold the full 20 years</td></tr>
        </tbody></table></div>
        <p>Those are guaranteed minimum values, not forecasts of what a competing investment will earn. Inflation can reduce the purchasing power of a fixed dollar amount over two decades.</p>

        <h2>When you can cash the bond</h2>
        <p>An EE bond cannot be redeemed during its first 12 months. After that lockup, you can redeem through TreasuryDirect. Cashing before five years forfeits the final three months of interest. For example, a redemption after 30 months pays the value through month 27. After five years, that three-month penalty ends.</p>
        <p>The bigger opportunity cost is the doubling adjustment. A bond redeemed at 19 years and 11 months does not receive the 20-year guarantee. Treat the 20-year date as a hard planning milestone, not an approximate target.</p>

        <h2>EE bonds versus I bonds, T-bills and savings accounts</h2>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">Option</th><th scope="col">Rate behavior</th><th scope="col">Access</th><th scope="col">Best use</th></tr></thead><tbody>
          <tr><th scope="row">EE bond</th><td>2.90% fixed; doubles at 20 years</td><td>Locked 12 months; penalty before year 5</td><td>Dedicated 20-year goal</td></tr>
          <tr><th scope="row">I bond</th><td>Fixed component plus inflation reset</td><td>Same 12-month lock and early penalty</td><td>Long-term inflation protection</td></tr>
          <tr><th scope="row">Treasury bill</th><td>Market yield fixed at purchase/auction</td><td>Matures in weeks or months; market sale possible</td><td>Short-term cash schedule</td></tr>
          <tr><th scope="row">HYSA</th><td>Bank may change variable APY</td><td>Generally liquid</td><td>Emergency fund</td></tr>
        </tbody></table></div>
        <p>The current <Link href="/blog/i-bond-rate-2026">I bond rate guide</Link> explains the inflation-linked alternative. For short-term money, compare maturity and reinvestment risk in our <Link href="/blog/treasury-bills-vs-high-yield-savings-2026">T-bills versus high-yield savings guide</Link>. An EE bond should not replace cash needed for rent, medical bills or an uncertain job transition.</p>

        <h2>Taxes: federal yes, state and local no</h2>
        <p>EE bond interest is subject to federal income tax, but Treasury says it is exempt from state and local income tax. Owners can generally elect to report accrued interest each year or defer reporting until they redeem the bond, it reaches final maturity or another taxable disposition occurs. The choice can affect recordkeeping and tax timing, so review IRS Publication 550 or consult a tax professional.</p>
        <p>A federal exclusion may be available when eligible taxpayers use proceeds for qualified higher-education expenses. It has ownership, age, income, filing-status and expense rules; merely naming a college goal does not make the interest tax-free. Form 8815 is used when claiming the exclusion.</p>

        <h2>How to buy and title an EE bond</h2>
        <ol>
          <li><strong>Use TreasuryDirect.</strong> New EE bonds are electronic only.</li>
          <li><strong>Choose an amount.</strong> The minimum is $25, in penny increments above that.</li>
          <li><strong>Stay within the annual limit.</strong> One Social Security number may buy up to $10,000 of EE bonds per calendar year.</li>
          <li><strong>Select registration carefully.</strong> Ownership, co-owner and beneficiary choices affect access and estate handling.</li>
          <li><strong>Save the issue date.</strong> Put the 12-month, five-year and 20-year milestones on your records.</li>
        </ol>
        <p>Do not buy through a social-media seller or a look-alike site. TreasuryDirect.gov is the government platform for new electronic savings bonds.</p>

        <h2>A practical buy-or-skip test</h2>
        <h3>Consider buying when</h3>
        <ul><li>You have a separate liquid emergency fund.</li><li>The goal is approximately 20 years away.</li><li>You value a U.S. government-backed nominal guarantee more than market upside.</li><li>You can tolerate fixed-rate inflation risk.</li><li>State and local income-tax exemption is useful in your situation.</li></ul>
        <h3>Consider skipping or limiting the purchase when</h3>
        <ul><li>You may need the money inside 12 months.</li><li>You are likely to redeem before the 20-year adjustment.</li><li>You carry expensive credit-card debt.</li><li>Your objective is short-term yield rather than a long-dated guarantee.</li><li>You need inflation-linked principal or equity-market growth.</li></ul>
        <p>Before locking money away, model your cash reserve with the <Link href="/calculators/budget">budget calculator</Link> and high-cost balances with the <Link href="/calculators/debt-payoff">debt-payoff calculator</Link>. A guaranteed bond return rarely justifies carrying a much higher revolving APR.</p>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and financial disclaimer</h2>
        <p>Primary sources reviewed November 2, 2026: TreasuryDirect&apos;s <a href="https://www.treasurydirect.gov/savings-bonds/ee-bonds/">Series EE bond page</a>, <a href="https://www.treasurydirect.gov/savings-bonds/buy-a-bond/">buying guide</a>, and <a href="https://www.treasurydirect.gov/savings-bonds/tax-information-ee-i-bonds/">tax information</a>; and the IRS <a href="https://www.irs.gov/forms-pubs/about-publication-550">Publication 550 hub</a>. This article is educational, not individualized investment, tax, legal or estate advice. Treasury terms, tax rules and your time horizon should be checked before purchase.</p>
      </article>
    </main>
  </>;
}
