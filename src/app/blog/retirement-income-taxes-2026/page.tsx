import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';

const title = 'How Retirement Income Is Taxed: 2026 Planning Guide';
const description = 'Learn how pensions, traditional and Roth withdrawals, Social Security and investment income are taxed—and how to plan withholding.';
const url = 'https://usfinnexus.com/blog/retirement-income-taxes-2026';
const image = 'https://usfinnexus.com/images/retirement-income-taxes-2026.webp';
const faqs = [
  { question: 'Is all retirement income taxable?', answer: 'No. Traditional retirement-plan withdrawals and many pensions are generally taxable, qualified Roth distributions are generally tax-free, and only part of Social Security may be taxable depending on filing status and other income.' },
  { question: 'How much of Social Security can be taxed?', answer: 'Depending on provisional income and filing status, none, up to 50%, or up to 85% of benefits may be included in federal taxable income. This does not mean the IRS applies an 85% tax rate to the benefit.' },
  { question: 'Are pension payments taxable?', answer: 'Pension payments are often fully taxable when the worker made no after-tax contribution. If the worker has after-tax basis in the contract, part of each payment may be a tax-free return of that basis.' },
  { question: 'Are Roth IRA withdrawals tax-free in retirement?', answer: 'Qualified Roth IRA distributions are generally tax-free. A distribution is typically qualified after the five-year period and when the owner is at least 59½, disabled, deceased, or meets the limited first-home rule.' },
  { question: 'Can tax be withheld from retirement payments?', answer: 'Yes. Form W-4P is generally used for periodic pension or annuity payments, Form W-4R for many nonperiodic payments, and Form W-4V can request voluntary withholding from Social Security benefits.' },
  { question: 'When do required minimum distributions start?', answer: 'The IRS says traditional IRA and certain plan owners generally start required minimum distributions at age 73 under current rules, although workplace-plan timing and inherited-account rules can differ.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-11-04', modifiedTime: '2026-11-04', siteName: 'USFinNexus', images: [{ url: image, width: 1200, height: 630, alt: 'Retired couple reviewing pension, investment and tax-planning documents' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-04" dateModified="2026-11-04" authorName="USFinNexus Editorial Team" keywords={['retirement income taxes 2026', 'how pension income is taxed', 'IRA withdrawal tax', 'Social Security tax', 'retirement withholding']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/retirement-income-taxes-2026' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Retirement taxes · Published and reviewed November 4, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> Retirement income is not taxed under one universal rule. Traditional IRA and 401(k) withdrawals are generally ordinary taxable income; qualified Roth distributions are generally tax-free; pension payments may be fully or partly taxable; and anywhere from zero to 85% of Social Security benefits may be included in taxable income. The practical task is to estimate all income sources together, then set withholding or quarterly payments before a surprise bill develops.</p>
        <figure><img src="/images/retirement-income-taxes-2026.webp" width="1200" height="630" alt="Retired couple reviewing pension, investment and tax-planning documents" className="h-auto w-full rounded-2xl" /><figcaption>Original editorial image illustrating a household retirement-income tax review.</figcaption></figure>

        <aside className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-950"><strong>Key distinction:</strong> “Up to 85% of Social Security is taxable” means up to 85% may be included in income—not that benefits face an 85% tax rate. The included amount is taxed at the household&apos;s applicable marginal rates.</aside>

        <h2>Build a retirement tax map before calculating</h2>
        <p>Start by listing every expected cash-flow source and its tax character. Two retirees with the same monthly spending can owe very different federal tax because one draws from a traditional IRA while the other uses qualified Roth money and taxable-account principal. State treatment can also differ, so this guide focuses on federal income tax.</p>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">Income source</th><th scope="col">Typical federal treatment</th><th scope="col">Document to expect</th></tr></thead><tbody>
          <tr><th scope="row">Traditional IRA/401(k)</th><td>Generally ordinary taxable income</td><td>Form 1099-R</td></tr>
          <tr><th scope="row">Qualified Roth distribution</th><td>Generally tax-free</td><td>Form 1099-R</td></tr>
          <tr><th scope="row">Pension/annuity</th><td>Fully or partly taxable</td><td>Form 1099-R</td></tr>
          <tr><th scope="row">Social Security</th><td>Zero to 85% included in income</td><td>Form SSA-1099</td></tr>
          <tr><th scope="row">Bank interest/dividends</th><td>Taxable under interest/dividend rules</td><td>Forms 1099-INT/1099-DIV</td></tr>
          <tr><th scope="row">Taxable investment sale</th><td>Gain or loss; holding period matters</td><td>Form 1099-B</td></tr>
        </tbody></table></div>

        <h2>Traditional IRA and workplace-plan withdrawals</h2>
        <p>Distributions from a traditional IRA, 401(k), 403(b) or similar tax-deferred account are generally included in ordinary income to the extent they have not already been taxed. A retiree with nondeductible IRA contributions has basis that should not be taxed again, but Form 8606 tracking is essential. The pro-rata rule generally looks across traditional, SEP and SIMPLE IRAs rather than letting a taxpayer select only after-tax dollars.</p>
        <p>A withdrawal can increase more than the income-tax line. It may cause a larger share of Social Security to become taxable, raise Medicare income-related premiums in a later year, reduce deductions or credits, and push long-term gains into a higher bracket. Model the entire return instead of multiplying a withdrawal by one bracket rate.</p>

        <h2>Roth IRA and Roth 401(k) distributions</h2>
        <p>A qualified Roth IRA distribution is generally tax-free after the five-year requirement and a qualifying event such as reaching age 59½. Roth IRA ordering rules generally treat regular contributions as coming out first, then conversions, then earnings. Conversion amounts can have their own five-year penalty clocks.</p>
        <p>Designated Roth workplace accounts have related but not identical rules. After-tax does not automatically mean every distribution is qualified. Check the first contribution year, age, rollover history and plan records before assuming a payment is tax-free.</p>

        <h2>How pensions and annuities are taxed</h2>
        <p>IRS Topic 410 explains that pension or annuity payments are usually fully taxable when the recipient has no investment in the contract—for example, when all contributions were pre-tax. If the employee made after-tax contributions, each payment may include a tax-free return of basis and a taxable portion. Many pensions starting after November 18, 1996 use the Simplified Method to calculate that split.</p>
        <p>Do not estimate basis from memory. Use the plan&apos;s Form 1099-R, benefit statement and prior-year workpapers. Once all basis has been recovered, later payments may become fully taxable.</p>

        <h2>Social Security provisional-income test</h2>
        <p>The first screening calculation adds one-half of Social Security benefits to other income, including tax-exempt interest. IRS base amounts are $25,000 for single, head-of-household, qualifying surviving spouse and certain married-separate filers who lived apart all year; $32,000 for married filing jointly; and generally $0 for married filing separately when spouses lived together during the year.</p>
        <p>Above the first thresholds, up to 50% of benefits may become taxable. Up to 85% may be taxable when the combined figure exceeds $34,000 for many single filers or $44,000 for joint filers. The actual formula is capped and should be completed with the Form 1040 worksheet or IRS Publication 915.</p>
        <p>Supplemental Security Income is not Social Security income for this rule and is not taxable. For current benefit amounts and COLA context, see our <Link href="/blog/social-security-cola-2027">2027 Social Security COLA guide</Link>.</p>

        <h2>Investment income in retirement</h2>
        <p>Interest from bank accounts and most bonds is ordinary income. Qualified dividends and long-term capital gains can receive preferential rates, while short-term gains are generally ordinary income. Municipal-bond interest may be federally tax-exempt, but it still enters the Social Security provisional-income calculation and can affect Medicare premium calculations.</p>
        <p>Investment losses can offset gains, and a limited amount of net capital loss may offset ordinary income, subject to carryforward rules. Our <Link href="/blog/capital-gains-tax-rates-2026">2026 capital-gains guide</Link> and <Link href="/blog/tax-loss-harvesting-wash-sale-2026">tax-loss harvesting checklist</Link> explain those mechanics.</p>

        <h2>Required minimum distributions</h2>
        <p>The IRS states that traditional IRA and certain retirement-plan owners generally begin required minimum distributions at age 73 under current rules. Roth IRAs do not require lifetime RMDs for the original owner, and designated Roth workplace accounts are no longer subject to owner lifetime RMDs. Beneficiaries and inherited accounts follow separate rules.</p>
        <p>An RMD cannot be rolled over. Missing an amount can trigger an excise tax, although timely correction may reduce it. Use our <Link href="/blog/required-minimum-distributions-2026">RMD guide</Link> and <Link href="/calculators/retirement">retirement calculator</Link> for planning—not as a substitute for the custodian&apos;s official calculation.</p>

        <h2>Withholding and estimated payments</h2>
        <p>Periodic pension and annuity withholding is generally requested on Form W-4P. Form W-4R applies to many nonperiodic payments and eligible rollover distributions. Social Security recipients can request voluntary withholding with Form W-4V at permitted percentage choices. Brokerage income may have little or no automatic withholding.</p>
        <p>Compare projected tax with total withholding and credits. If the gap is material, increase withholding or make estimated payments. Withholding is generally treated as paid evenly through the year, while estimated payments are credited when made—an important timing difference when correcting late in the year. The <Link href="/blog/tax-withholding-w4-2026">withholding guide</Link> and <Link href="/blog/estimated-tax-payment-dates-2026">estimated-tax calendar</Link> provide next steps.</p>

        <h2>A practical annual review</h2>
        <ol>
          <li>List gross pension, Social Security, IRA, wages, interest, dividends and planned gains.</li>
          <li>Separate tax-free principal or qualified Roth money from taxable income.</li>
          <li>Calculate the taxable Social Security amount—not merely the provisional-income threshold.</li>
          <li>Add RMDs and any Roth conversion planned before December 31.</li>
          <li>Check Medicare IRMAA exposure using the applicable lookback year.</li>
          <li>Compare projected tax with withholding and estimated payments.</li>
          <li>Retain Forms 1099-R, SSA-1099, 8606 and pension-basis records.</li>
        </ol>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and tax disclaimer</h2>
        <p>Primary sources reviewed November 4, 2026: the IRS <a href="https://www.irs.gov/newsroom/preparing-for-retirement-know-how-it-can-affect-taxes">retirement tax tip</a>, <a href="https://www.irs.gov/taxtopics/tc410">Topic 410 on pensions and annuities</a>, <a href="https://www.irs.gov/publications/p915">Publication 915</a>, and <a href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs">RMD FAQs</a>. This article is general education, not individualized tax, legal, investment or Medicare advice. Confirm current forms and rules for the tax year you are filing.</p>
      </article>
    </main>
  </>;
}
