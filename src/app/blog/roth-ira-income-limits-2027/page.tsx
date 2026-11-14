import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = '2027 Roth IRA Income Limits: MAGI Phase-Out Guide';
const description = 'Check the 2027 Roth IRA income limits, $7,500 contribution cap, $1,100 catch-up, MAGI phase-outs, spousal IRA rules and excess-contribution risks.';
const url = 'https://usfinnexus.com/blog/roth-ira-income-limits-2027';
const image = 'https://usfinnexus.com/images/roth-ira-income-limits-2027.webp';
const alt = 'Couple reviewing a retirement contribution plan with a laptop and calculator at a bright home office';
const date = '2026-11-14';

const faqs = [
  {
    question: 'What is the 2027 Roth IRA contribution limit?',
    answer: 'The combined 2027 contribution limit for all of your traditional and Roth IRAs is generally $7,500, or $8,600 if you are age 50 or older by the end of 2027. Your taxable compensation, modified adjusted gross income and filing status can reduce the amount.',
  },
  {
    question: 'What are the 2027 Roth IRA income limits for single filers?',
    answer: 'For single and head-of-household filers, the 2027 Roth IRA contribution phase-out is $158,000 to $173,000 of modified adjusted gross income. Below $158,000, the income phase-out does not reduce the general limit; at $173,000 or more, a direct Roth IRA contribution is not allowed.',
  },
  {
    question: 'What are the 2027 Roth IRA limits for married couples filing jointly?',
    answer: 'For married couples filing jointly and qualifying surviving spouses, the 2027 phase-out range is $250,000 to $260,000 of modified adjusted gross income. The contribution is reduced within the range and reaches zero at $260,000 or more.',
  },
  {
    question: 'Do Roth and traditional IRAs have separate $7,500 limits?',
    answer: 'No. The $7,500 general limit is shared across all traditional and Roth IRA contributions for one person. Opening multiple accounts does not multiply the annual allowance.',
  },
  {
    question: 'Can a nonworking spouse contribute to a Roth IRA?',
    answer: 'A married couple filing jointly may be able to fund an IRA for a spouse with little or no taxable compensation under the spousal IRA rules. Combined contributions cannot exceed the couple’s eligible taxable compensation, and each spouse needs a separate IRA.',
  },
  {
    question: 'What happens if I contribute too much to a Roth IRA?',
    answer: 'An excess contribution can trigger a 6% excise tax for each year the excess remains in the account. Contact the IRA custodian and a qualified tax professional promptly because the correction method and treatment of earnings depend on timing and facts.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    title,
    description,
    url,
    siteName: 'USFinNexus',
    publishedTime: date,
    modifiedTime: date,
    images: [{ url: image, width: 1200, height: 630, alt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt }] },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        image={image}
        datePublished={date}
        dateModified={date}
        authorName="USFinNexus Editorial Team"
        keywords={[
          'Roth IRA income limits 2027',
          '2027 Roth IRA contribution limit',
          'Roth IRA MAGI phase out 2027',
          'Roth IRA eligibility 2027',
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto py-7 sm:py-9">
        <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/roth-ira-income-limits-2027' }]} />
        <article className="prose prose-slate max-w-none">
          <header className="fn-article-head">
            <span className="fn-article-kicker">Retirement &amp; tax planning</span>
            <h1>{title}</h1>
            <p className="fn-article-deck">The 2027 IRA dollar limit is unchanged, but the income ranges for direct Roth contributions are higher. Use the correct MAGI range before automating deposits.</p>
            <div className="fn-article-byline">
              <span>By <Link href="/about">USFinNexus Editorial Team</Link></span>
              <span>Published and reviewed <time dateTime={date}>November 14, 2026</time></span>
            </div>
          </header>

          <figure>
            <EditorialImage
              src="/images/roth-ira-income-limits-2027.webp"
              alt={alt}
              width={1200}
              height={630}
              priority
              sizes="(min-width: 1050px) 790px, 100vw"
              className="w-full h-auto rounded-xl my-5"
            />
            <figcaption>Original AI-generated editorial image of a household reviewing retirement contribution options.</figcaption>
          </figure>

          <p><strong>Quick answer:</strong> For 2027, the combined traditional-and-Roth IRA contribution limit is $7,500, plus a $1,100 catch-up for someone age 50 or older. Direct Roth IRA contributions phase out at modified adjusted gross income of $158,000 to $173,000 for single and head-of-household filers and $250,000 to $260,000 for married couples filing jointly. A contribution also cannot exceed eligible taxable compensation.</p>
          <p>Those three tests—annual dollar limit, compensation and modified adjusted gross income—must be checked together. A salary below the phase-out ceiling does not automatically prove eligibility because Roth IRA MAGI can differ from salary or the adjusted gross income shown near the bottom of Form 1040. Likewise, being below the income range does not allow someone to contribute more than their eligible compensation.</p>

          <h2 id="limits">2027 Roth IRA limits at a glance</h2>
          <p>The <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-25500-for-2027-ira-limit-remains-7500">IRS announcement dated November 12, 2026</a> and <a href="https://www.irs.gov/pub/irs-drop/n-26-66.pdf">Notice 2026-66</a> set the 2027 retirement-plan adjustments. The IRA contribution ceiling stays at the 2026 level, while the income phase-outs move higher.</p>
          <div className="overflow-x-auto">
            <table>
              <thead><tr><th>2027 rule</th><th>Amount or range</th></tr></thead>
              <tbody>
                <tr><td>General combined IRA contribution limit</td><td>$7,500</td></tr>
                <tr><td>Age-50-or-older catch-up</td><td>$1,100</td></tr>
                <tr><td>Single or head of household Roth phase-out</td><td>$158,000–$173,000 MAGI</td></tr>
                <tr><td>Married filing jointly or qualifying surviving spouse phase-out</td><td>$250,000–$260,000 MAGI</td></tr>
                <tr><td>Married filing separately after living with spouse during the year</td><td>$0–$10,000 MAGI</td></tr>
              </tbody>
            </table>
          </div>
          <p>The table is a screening tool, not a contribution authorization. Your actual maximum is the smallest amount allowed after applying the combined IRA limit, compensation limit and Roth income reduction. Custodian software may accept a transfer without knowing your full tax-year income, filing status or contributions held elsewhere.</p>

          <h2 id="income-bands">Full, reduced or zero direct Roth contribution</h2>
          <h3>Single and head-of-household filers</h3>
          <p>If 2027 Roth IRA MAGI is below $158,000, the income phase-out by itself does not reduce the general contribution limit. From $158,000 up to—but not including—$173,000, the maximum direct contribution is reduced. At $173,000 or more, the direct Roth IRA contribution limit is zero. A married person filing separately who did not live with a spouse at any time during the year generally uses this same range.</p>
          <h3>Married filing jointly</h3>
          <p>For married couples filing jointly and qualifying surviving spouses, the phase-out begins at $250,000 and ends at $260,000. Below $250,000, the income range does not reduce the general limit. Inside the range, the allowed amount is partial. At $260,000 or more, no direct Roth contribution is allowed.</p>
          <h3>Married filing separately after living together</h3>
          <p>The special $0-to-$10,000 range applies when someone files married filing separately and lived with a spouse at any time during the year. Even a relatively small positive Roth IRA MAGI can reduce the allowance, and the direct-contribution limit reaches zero at $10,000. Do not apply the single-filer range merely because two separate returns are filed.</p>

          <h2 id="magi">Why MAGI—not salary—controls the phase-out</h2>
          <p>The IRS defines Roth IRA MAGI through a tax-specific calculation. It starts from adjusted gross income and applies specified adjustments. Depending on the return, items involving an IRA deduction, student-loan interest, excluded savings-bond interest, foreign earned income or housing amounts, adoption benefits and conversion income can affect the calculation. The current <a href="https://www.irs.gov/publications/p590a">Publication 590-A</a> explains the method and provides the worksheet framework; use the version for the contribution year when it becomes available.</p>
          <p>A job offer stating $160,000 of salary therefore does not answer the eligibility question on its own. Bonuses, self-employment income, investment activity, deductible adjustments and a spouse’s income on a joint return may change MAGI. Conversely, a high gross-income figure may include amounts treated differently in the Roth calculation. Estimate late in the year, then verify using the final tax information before assuming an automatic monthly contribution was fully permitted.</p>

          <h2 id="shared-limit">Traditional and Roth IRAs share one contribution limit</h2>
          <p>The <a href="https://www.irs.gov/retirement-plans/roth-iras">IRS Roth IRA overview</a> confirms that the same combined limit applies across traditional and Roth IRAs. An under-50 taxpayer who contributes $3,000 to a traditional IRA generally has no more than $4,500 of the $7,500 annual IRA allowance left for a Roth IRA, before considering compensation and income restrictions. Two custodians do not create two limits.</p>
          <p>This shared cap also means that a nondeductible traditional IRA contribution uses contribution room. A Roth conversion is a different transaction and is not an ordinary annual contribution, but conversion tax rules can be complex. Our <Link href="/blog/roth-conversion-tax-planning-2026">Roth conversion tax-planning guide</Link> explains the distinction, while the <Link href="/blog/mega-backdoor-roth-ira-guide-2026">mega backdoor Roth guide</Link> addresses a separate workplace-plan strategy. Neither should be treated as an automatic workaround for the direct Roth income limit.</p>

          <h2 id="compensation">The compensation test can lower the limit</h2>
          <p>Generally, IRA contributions require eligible taxable compensation. Wages, salaries, tips, bonuses, commissions and net self-employment earnings can qualify, subject to the IRS definitions and adjustments. Interest, dividends, pension income and ordinary rental income generally do not become compensation merely because they provide cash that could be transferred to an IRA.</p>
          <p>For example, an under-50 person with $4,000 of eligible compensation and otherwise full Roth eligibility generally cannot contribute $7,500 based only on savings in a bank account. The compensation ceiling would ordinarily cap the contribution at $4,000. The <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits">IRS IRA contribution-limit page</a> also explains that married couples filing jointly may use the spousal IRA rules, subject to combined compensation and separate account limits.</p>

          <h2 id="spousal-ira">How a spousal Roth IRA works</h2>
          <p>A “spousal IRA” is not a joint account. Each spouse owns a separate IRA. If a couple files a joint return and has enough combined eligible compensation, a spouse with little or no compensation may still be able to contribute. Each spouse’s contribution remains subject to that spouse’s age-based dollar limit and the couple’s Roth MAGI range.</p>
          <p>Assume both spouses are under 50 and otherwise eligible. If combined eligible compensation is at least $15,000, the couple may potentially contribute $7,500 to each spouse’s separate IRA. If combined eligible compensation is only $10,000, the total contributions cannot simply become $15,000. Account ownership, beneficiary designations and investment choices remain separate even though the joint-return compensation rule helps determine the permitted deposits.</p>

          <h2 id="examples">Three planning examples</h2>
          <h3>Example 1: safely below the income phase-out</h3>
          <p>A single taxpayer under 50 estimates 2027 Roth MAGI of $120,000, has more than $7,500 of eligible compensation and makes no traditional IRA contribution. The income phase-out does not reduce the general $7,500 limit. That does not mean a $7,500 contribution is automatically the best cash-flow choice; emergency savings and high-interest debt still matter.</p>
          <h3>Example 2: income lands inside the phase-out</h3>
          <p>A single taxpayer estimates MAGI of $165,000. That falls within the $158,000-to-$173,000 range, so the maximum direct Roth contribution is reduced. The exact amount should be calculated using the IRS worksheet for 2027 rather than guessed from salary. If income is uncertain, waiting for clearer year-end information or leaving room below an estimate can reduce correction risk.</p>
          <h3>Example 3: contributions at two custodians</h3>
          <p>A taxpayer age 52 contributes $5,000 to one Roth IRA and $3,600 to another. The combined $8,600 equals the general $7,500 limit plus the $1,100 age-50 catch-up, assuming enough compensation and no MAGI reduction. Another $1,100 catch-up is not created by the second custodian.</p>

          <h2 id="excess">Avoid and correct excess contributions promptly</h2>
          <p>Publication 590-A explains that a 6% excise tax can apply to an excess Roth IRA contribution for each year it remains. Excesses can arise from exceeding the combined dollar limit, contributing more than compensation, or discovering that final MAGI reduced or eliminated direct eligibility. Do not withdraw an arbitrary amount without instructions: earnings calculations, tax reporting and deadlines can affect the correct procedure.</p>
          <p>Contact the custodian as soon as the issue is found and clearly identify the contribution year. Ask how it handles a return of excess, recharacterization when legally available, and associated earnings. A Roth conversion cannot be recharacterized back to traditional IRA treatment under current law, while an ordinary contribution may have different options. Use a qualified tax professional for a material or multi-year error.</p>

          <h2 id="paycheck-plan">Build a contribution schedule that can change</h2>
          <p>A $7,500 annual target equals $625 per month over twelve equal deposits. The $8,600 age-50-plus target is about $716.67 per month, so the final deposit may need a small rounding adjustment. Those are cash-flow illustrations, not recommendations. If income may cross a phase-out boundary, consider a flexible schedule instead of treating the January estimate as final.</p>
          <p>Roth IRA contributions do not reduce current federal taxable income. To compare household cash flow, use the <Link href="/calculators/paycheck">paycheck calculator</Link> and keep the IRA transfer separate from payroll withholding. Use the <Link href="/calculators/retirement">retirement calculator</Link> to explore hypothetical long-term contributions, but remember that modeled returns are not guaranteed and the calculator cannot determine tax eligibility.</p>

          <h2 id="checklist">2027 Roth IRA eligibility checklist</h2>
          <ol>
            <li>Confirm filing status and whether the married-filing-separately special rule applies.</li>
            <li>Estimate 2027 Roth IRA MAGI, not just salary or gross income.</li>
            <li>Confirm eligible taxable compensation for you and, when relevant, your spouse.</li>
            <li>Add contributions across every traditional and Roth IRA you own.</li>
            <li>Apply the age-50 catch-up only if eligible by the end of 2027.</li>
            <li>Recheck after bonuses, investment gains, business-income changes or a filing-status change.</li>
            <li>Keep custodian confirmations and resolve a possible excess promptly.</li>
          </ol>
          <p>The new thresholds are planning inputs, not a reason to force a maximum contribution. Preserve enough liquidity for essential bills and near-term goals. If you are also increasing workplace contributions, review the separate <Link href="/blog/401k-contribution-limits-2027">2027 401(k) limits</Link>; a 401(k) employee-deferral limit is not interchangeable with an IRA limit.</p>

          <h2 id="faq">2027 Roth IRA FAQs</h2>
          {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}

          <aside aria-label="Financial disclaimer">
            <p><strong>Educational disclaimer:</strong> Official guidance checked November 14, 2026, including IRS Notice 2026-66 and the November 12 IRS announcement. This article provides general educational information, not individualized tax, legal, investment or retirement advice. Tax forms, compensation, filing status, plan transactions and later IRS guidance can change the result.</p>
          </aside>
        </article>
      </div>
    </>
  );
}
