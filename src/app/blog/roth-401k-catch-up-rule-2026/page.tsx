import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';

const title = 'Roth 401(k) Catch-Up Rule 2026: Who Must Use Roth?';
const description = 'The 2026 Roth catch-up rule uses prior-year wages over $150,000. See who is affected, which dollars must be Roth and what to ask payroll.';
const url = 'https://usfinnexus.com/blog/roth-401k-catch-up-rule-2026';
const image = 'https://usfinnexus.com/images/roth-401k-catch-up-rule-2026.webp';
const faqs = [
  { question: 'Who is subject to the Roth catch-up rule in 2026?', answer: 'A catch-up-eligible participant generally must make 2026 catch-up contributions as designated Roth contributions when 2025 FICA wages from the employer sponsoring the plan exceeded $150,000. The rule concerns catch-up dollars, not the regular employee deferral limit. Plan type, Roth availability and special circumstances still matter.' },
  { question: 'Does a $150,000 salary in 2026 trigger the rule?', answer: 'Not by itself. The 2026 test generally looks to FICA wages from the plan-sponsoring employer in the preceding calendar year, 2025. It is not a test of household income, adjusted gross income or an estimate of current-year salary.' },
  { question: 'Do all of my 401(k) contributions have to be Roth?', answer: 'No. The SECURE 2.0 requirement applies to catch-up contributions of affected participants. Regular elective deferrals can still be traditional or Roth as permitted by the plan and chosen by the participant.' },
  { question: 'What is the 2026 401(k) catch-up limit?', answer: 'The general 2026 catch-up limit for most 401(k), 403(b) and governmental 457 plans is $8,000. A higher $11,250 limit applies to eligible participants who attain ages 60 through 63 during 2026. The regular employee elective-deferral limit is $24,500.' },
  { question: 'Does a new job automatically make my catch-up pretax?', answer: 'Do not assume that. The wage test is employer-specific, and the final regulations contain rules for predecessor employers and related arrangements. Give the new plan accurate contribution information and ask its administrator how it applies the 2026 rule to your facts.' },
  { question: 'Does a Roth catch-up contribution avoid tax today?', answer: 'No. A designated Roth contribution is included in current taxable income rather than excluded as a traditional pretax deferral. Qualified distributions can be tax-free if the applicable requirements are met. Roth treatment does not mean the contribution is tax-free in both years.' },
];

export const metadata: Metadata = {
  title: 'Roth 401(k) Catch-Up Rule 2026: $150K Wage Test',
  description,
  alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-10-25', modifiedTime: '2026-10-25', images: [{ url: image, width: 1200, height: 630, alt: 'Employee reviewing a retirement contribution statement and payroll calendar' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-10-25" dateModified="2026-10-25" authorName="USFinNexus Editorial Team" keywords={['Roth 401k catch up rule 2026', '401k catch up wage threshold 2026', 'Roth catch up $150000', 'SECURE 2.0 Roth catch up']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/roth-401k-catch-up-rule-2026' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Retirement planning · Published and reviewed October 25, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Quick answer:</strong> If you are eligible to make age-50 catch-up contributions in 2026 and your 2025 FICA wages from the employer sponsoring the plan exceeded $150,000, your catch-up dollars generally must go into the plan&apos;s designated Roth account. The rule does not force the first $24,500 of regular 2026 employee deferrals into Roth. Check your prior-year W-2, age, plan terms and payroll election before the last pay periods of the year.</p>
        <figure><img src="/images/roth-401k-catch-up-rule-2026.webp" width="1200" height="630" alt="Employee reviewing a retirement contribution statement and payroll calendar" className="h-auto w-full rounded-2xl" /><figcaption>Original AI-generated editorial image. Documents and figures are illustrative, not an actual retirement statement.</figcaption></figure>

        <h2>The 2026 rule in one table</h2>
        <p>The change comes from SECURE 2.0. The <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-catch-up-contributions">IRS catch-up contribution page</a> says that beginning in 2026, participants in plans with Roth features that offer catch-up contributions must make those catch-up contributions on a Roth basis when prior-year wages with the plan sponsor exceeded $150,000 for 2026. The threshold is indexed, so do not reuse $150,000 automatically for a later year.</p>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">2026 question</th><th scope="col">Answer</th><th scope="col">What to verify</th></tr></thead><tbody>
          <tr><th scope="row">Regular employee limit</th><td>$24,500</td><td>Your total ordinary deferrals across relevant plans</td></tr>
          <tr><th scope="row">General age-50 catch-up</th><td>$8,000</td><td>Plan permits catch-ups and you are eligible</td></tr>
          <tr><th scope="row">Age 60–63 catch-up</th><td>$11,250</td><td>Your age attained during 2026 and plan type</td></tr>
          <tr><th scope="row">Roth wage threshold</th><td>2025 FICA wages over $150,000</td><td>Wages from the employer sponsoring the plan</td></tr>
          <tr><th scope="row">Dollars required to be Roth</th><td>Affected catch-up contributions</td><td>Not automatically every employee contribution</td></tr>
        </tbody></table></div>
        <p>The annual limits above come from <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500">the IRS 2026 retirement-limit announcement</a> and <a href="https://www.irs.gov/pub/irs-drop/n-25-67.pdf">Notice 2025-67</a>. They are separate from your employer match. A match does not ordinarily consume the $24,500 employee elective-deferral limit, although a larger overall annual-additions limit and plan restrictions still apply.</p>

        <h2>What counts as wages for the $150,000 test?</h2>
        <p>This is not an adjusted-gross-income test and it is not based on your joint tax return. The rule generally looks to wages as defined for FICA purposes from the employer sponsoring the plan in the preceding calendar year. For a calendar-year 2026 contribution, that means relevant 2025 wages. A bonus or equity compensation can affect the wage figure when it is included in that measure; investment income and a spouse&apos;s pay do not simply get added to it.</p>
        <p>Start with your 2025 Form W-2 from that employer, but do not turn a single box into a legal conclusion when payroll corrections, predecessor employers, controlled groups or unusual employment arrangements are involved. The <a href="https://www.irs.gov/irb/2025-40_IRB">Treasury and IRS final regulations</a> contain detailed administrative rules. Ask the plan administrator which employer and wage record it used and save the response.</p>
        <h3>The threshold says “exceeded,” not “equaled”</h3>
        <p>The IRS wording uses wages that exceeded $150,000. A worker at exactly $150,000 is not the same as a worker at $150,000.01 under that wording. Payroll systems should perform the plan&apos;s determination, but this distinction is worth knowing before assuming a rounded benefits-portal figure settles the issue.</p>

        <h2>Only the catch-up layer is forced into Roth</h2>
        <p>Imagine a 55-year-old participant defers $32,500 in 2026 and is otherwise eligible for the full general catch-up. The first $24,500 is the regular elective-deferral layer. The next $8,000 is the catch-up layer. If the participant crossed the applicable prior-year wage threshold, that $8,000 generally must be designated Roth; the regular $24,500 can still follow the participant&apos;s traditional-versus-Roth election to the extent the plan permits.</p>
        <p>This ordering is why a portal that displays only one contribution percentage can be confusing. Some plans can apply a deemed Roth catch-up election once regular deferrals reach the annual limit. Others may ask for separate elections. Do not wait until the final paycheck to learn how the system changes the tax character of a contribution.</p>

        <h2>What changes in take-home pay?</h2>
        <p>A traditional pretax deferral generally reduces current federal taxable income; a designated Roth contribution does not. Consider a simplified illustration in which an affected participant makes an $8,000 Roth catch-up and is in a 24% marginal federal bracket. Compared with an $8,000 pretax catch-up, the immediate federal income-tax difference is approximately $1,920: $8,000 × 24%.</p>
        <p>That is not a tax bill quote. It ignores state tax, deductions, credits, withholding accuracy and other income. Retirement deferrals also do not generally eliminate Social Security and Medicare tax on the wages, so it would be wrong to multiply the contribution by every payroll-tax rate as though all of those taxes disappeared under the pretax alternative. Use the <Link href="/calculators/income-tax">income-tax calculator</Link> for a planning comparison, then confirm withholding with payroll or a tax professional.</p>

        <h2>Age 60 through 63 can create a bigger catch-up</h2>
        <p>SECURE 2.0 also created a higher catch-up limit for eligible participants who attain ages 60, 61, 62 or 63 during the calendar year. For most 401(k), 403(b) and governmental 457 plans, that 2026 amount is $11,250 rather than the general $8,000 catch-up. The age test is not “older than 60” in the everyday sense; someone turning 64 during 2026 does not use the special 60–63 amount for that year.</p>
        <p>For an affected higher-wage participant, a larger permitted catch-up can also mean a larger amount that must be Roth. At a hypothetical 24% federal marginal rate, the immediate difference between an $11,250 Roth contribution and the same amount as a deductible pretax contribution is about $2,700. That arithmetic explains cash-flow impact; it does not prove Roth is better or worse over the participant&apos;s lifetime.</p>

        <h2>Changed employers? Do not combine wages casually</h2>
        <p>The ordinary employee deferral limit follows the participant across jobs, so prior-job deferrals still matter when tracking the $24,500 limit. The Roth catch-up wage test, however, is tied to prior-year wages from the employer sponsoring the plan, with special rules that can apply to predecessor employers and related arrangements. Those two concepts should not be merged into one spreadsheet column.</p>
        <p>Give a new plan administrator your year-to-date employee deferrals so it can help prevent an excess. Separately ask whether you had prior-year wages from the relevant employer for its Roth catch-up determination. A payroll portal at the new job may not know contributions made at the old one, and a simple “new employer means no Roth” shortcut can fail in a corporate transaction or related-employer case.</p>

        <h2>What if the plan does not offer a Roth account?</h2>
        <p>Do not assume you can label a prohibited contribution “pretax catch-up” just because no Roth button appears. Also do not assume the plan must let every participant contribute above the regular limit. Catch-up contributions depend on plan provisions and eligibility. Ask whether the plan permits catch-ups, whether it has a designated Roth feature, and how it handles a participant subject to the requirement.</p>
        <p>The final regulations are effective but generally apply to contributions in taxable years beginning after December 31, 2026, while the statutory Roth catch-up requirement begins in 2026 after the earlier administrative transition period. That difference between the statutory start and the regulations&apos; general applicability date is one reason to rely on the plan administrator&apos;s documented 2026 procedure rather than an old payroll FAQ.</p>

        <h2>A five-step October payroll check</h2>
        <ol>
          <li><strong>Confirm eligibility:</strong> Will you be at least 50 by year-end, and does the plan allow catch-up contributions?</li>
          <li><strong>Check 2025 wages:</strong> Ask which FICA-wage amount and employer relationship payroll used for the $150,000 test.</li>
          <li><strong>Reconcile deferrals:</strong> Add traditional and Roth employee deferrals across jobs before estimating remaining room.</li>
          <li><strong>Model take-home pay:</strong> Estimate the withholding effect of any Roth catch-up and protect essential bills and emergency savings.</li>
          <li><strong>Save the confirmation:</strong> Keep the election receipt, applicable plan language and the first pay stub showing the new treatment.</li>
        </ol>
        <p>Coordinate this check with your employer-match schedule. The related <Link href="/blog/401k-true-up-match-2026">401(k) true-up guide</Link> explains why finishing contributions early can affect a per-pay-period match. For the broader annual ceilings, use the <Link href="/blog/401k-contribution-limits-2026">2026 401(k) contribution-limit guide</Link>. The <Link href="/calculators/retirement">retirement calculator</Link> can test a long-term savings rate, but it cannot determine your plan&apos;s legal contribution classification.</p>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources, scope and retirement disclaimer</h2>
        <p>Primary guidance reviewed October 25, 2026: IRS Retirement Topics—Catch-Up Contributions; the IRS 2026 limit announcement; Notice 2025-67; and Treasury/IRS final regulations in T.D. 10033, all linked above. Dollar examples are original calculations with stated assumptions. This article covers a common calendar-year employee scenario and is educational, not individualized tax, investment, legal, payroll or employee-benefits advice. Plan documents and your facts control. Confirm elections and wage treatment with the plan administrator and consult a qualified professional for corrections or complex employer relationships.</p>
      </article>
    </main>
  </>;
}
