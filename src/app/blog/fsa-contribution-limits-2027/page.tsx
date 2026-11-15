import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = '2027 FSA Contribution Limit: $3,500 and $700 Carryover';
const description = 'The 2027 Health FSA contribution limit is $3,500 and maximum permitted carryover is $700. Plan your election, deadlines and HSA coordination.';
const url = 'https://usfinnexus.com/blog/fsa-contribution-limits-2027';
const image = 'https://usfinnexus.com/images/fsa-contribution-limits-2027.webp';
const alt = 'Employee reviewing healthcare receipts and a flexible spending account election during open enrollment';
const date = '2026-11-15';

const faqs = [
  { question: 'What is the Health FSA contribution limit for 2027?', answer: 'For plan years beginning in 2027, the federal limit on an employee’s voluntary salary-reduction contribution to a Health FSA is $3,500. An employer may set a lower election limit, so the plan materials still control.' },
  { question: 'What is the maximum FSA carryover for 2027?', answer: 'A Health FSA plan that adopts carryover may permit up to $700 of unused 2027 plan-year funds to carry into the following plan year. Carryover is optional and the employer may allow less.' },
  { question: 'Does every FSA allow $700 to roll over?', answer: 'No. A plan may offer carryover, may instead offer a grace period, or may offer neither. A runout period only extends the time to submit claims; it does not extend the date when an expense must be incurred.' },
  { question: 'Can both spouses contribute $3,500 to separate Health FSAs?', answer: 'If each spouse is eligible through a separate employer plan, each may generally elect up to that plan’s employee limit. Each employer can set a lower maximum, and duplicate reimbursement of the same expense is not allowed.' },
  { question: 'Can I contribute to an HSA while covered by a Health FSA?', answer: 'A general-purpose Health FSA normally prevents HSA contributions because it can reimburse expenses before the HSA-qualified deductible. A properly designed limited-purpose or post-deductible FSA may be compatible; verify both plan documents.' },
  { question: 'Is the dependent care FSA limit also $3,500?', answer: 'No. A dependent care FSA is a different benefit with separate eligibility and exclusion rules. Beginning in 2026, the federal dependent-care assistance exclusion is generally $7,500, or $3,750 for married filing separately; employer plan limits and earned-income rules still apply.' },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'article', locale: 'en_US', title, description, url, siteName: 'USFinNexus', publishedTime: date, modifiedTime: date, images: [{ url: image, width: 1200, height: 630, alt }] },
  twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt }] },
};

export default function FsaContributionLimits2027Page() {
  return (
    <>
      <ArticleSchema title={title} description={description} url={url} image={image} datePublished={date} dateModified={date} authorName="USFinNexus Editorial Team" keywords={['FSA contribution limit 2027', '2027 Health FSA limit', 'FSA carryover 2027', 'flexible spending account limit 2027']} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <div className="max-w-4xl mx-auto py-7 sm:py-9">
        <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/fsa-contribution-limits-2027' }]} />
        <article className="prose prose-slate max-w-none">
          <header className="fn-article-head">
            <span className="fn-article-kicker">Open enrollment &amp; employee benefits</span>
            <h1>{title}</h1>
            <p className="fn-article-deck">The federal employee-election ceiling rises by $100 for 2027, but your employer decides whether carryover, a grace period or a lower plan limit applies.</p>
            <div className="fn-article-byline"><span>By <Link href="/about">USFinNexus Editorial Team</Link></span><span>Published and reviewed <time dateTime={date}>November 15, 2026</time></span></div>
          </header>

          <figure>
            <EditorialImage src="/images/fsa-contribution-limits-2027.webp" alt={alt} width={1200} height={630} priority sizes="(min-width: 1050px) 790px, 100vw" className="w-full h-auto rounded-xl my-5" />
            <figcaption>Original AI-generated editorial image of an employee estimating healthcare expenses for open enrollment.</figcaption>
          </figure>

          <p><strong>Quick answer:</strong> For plan years beginning in 2027, an employee may contribute up to $3,500 through salary reduction to a Health Flexible Spending Arrangement. If the employer’s plan adopts the carryover option, it may allow up to $700 of unused funds to move into the following plan year. Both amounts are federal ceilings—not promises that every employer plan will offer them.</p>
          <p>The 2027 election limit is $100 higher than the 2026 maximum of $3,400. The permitted carryover rises by $20, from $680 to $700. Before choosing the maximum, confirm the plan year, actual employer limit, eligible expenses, service-date deadline, claims-submission deadline and whether the plan uses carryover, a grace period or neither.</p>

          <h2 id="limits">2027 Health FSA limits at a glance</h2>
          <p>The IRS announced the figures on November 5, 2026 in <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2027-taxpayers-continue-to-benefit-from-the-working-families-tax-cuts">IR-2026-133</a> and <a href="https://www.irs.gov/pub/irs-drop/rp-26-35.pdf">Revenue Procedure 2026-35</a>.</p>
          <div className="overflow-x-auto"><table><thead><tr><th>Health FSA rule</th><th>2027</th><th>2026</th><th>Change</th></tr></thead><tbody>
            <tr><td>Maximum employee salary reduction</td><td>$3,500</td><td>$3,400</td><td>+$100</td></tr>
            <tr><td>Maximum permitted carryover</td><td>$700</td><td>$680</td><td>+$20</td></tr>
            <tr><td>Maximum monthly election if divided evenly</td><td>$291.67</td><td>$283.33</td><td>About +$8.34</td></tr>
            <tr><td>Maximum biweekly election across 26 checks</td><td>About $134.62</td><td>About $130.77</td><td>About +$3.85</td></tr>
          </tbody></table></div>
          <p>The payroll amounts are simple illustrations; actual deductions depend on pay frequency, rounding and when coverage starts. Employer money may be treated differently depending on plan design. A plan can also cap employee elections below $3,500, and an off-calendar plan applies the limit based on the plan year that begins in 2027.</p>

          <h2 id="what-it-is">What a Health FSA does</h2>
          <p>A Health FSA is an employer-sponsored cafeteria-plan benefit. The employee usually makes a pre-tax election before the plan year, payroll deducts that election over the coverage period, and the plan reimburses eligible medical expenses. Salary reductions and qualified reimbursements generally avoid federal income and payroll tax, subject to the tax rules and plan terms.</p>
          <p>The arrangement is not a personal savings or investment account. You generally cannot take the balance as cash, move it to an IRA or keep every unused dollar indefinitely. Many plans also apply a uniform-coverage rule that makes the annual election available for eligible claims early in the plan year even though payroll deductions continue later. That feature differs from a dependent care FSA, which generally reimburses only up to the amount already credited.</p>

          <h2 id="election">How much should you elect for 2027?</h2>
          <p>The maximum is useful only when expected eligible expenses support it. Start with costs that are probable and documentable rather than choosing $3,500 solely because it is tax-advantaged.</p>
          <ol>
            <li>List recurring prescriptions, copays, therapy, dental and vision costs.</li>
            <li>Add planned procedures using insurer and provider estimates, not sticker prices.</li>
            <li>Remove amounts expected to be paid by insurance or another account.</li>
            <li>Check whether each item appears on the administrator’s eligible-expense list.</li>
            <li>Subtract a carryover balance that will already be available, when applicable.</li>
            <li>Leave a margin for canceled treatment, changing coverage and uncertain care.</li>
          </ol>
          <h3>Election example</h3>
          <p>An employee expects $600 of prescriptions and copays, $900 of dental work, $450 for glasses and contacts, and $500 of therapy coinsurance. The documented estimate is $2,450. If $300 is expected to carry into the 2027 plan year, a new election around $2,150 may be more defensible than automatically selecting $3,500. The right answer changes if the carryover is unavailable, treatment timing changes or a spouse’s plan will reimburse part of the cost.</p>
          <p>Use the <Link href="/calculators/budget">budget calculator</Link> to include payroll deductions and out-of-pocket timing. The tax advantage does not make an unnecessary purchase free, and forfeiting unused funds can erase the expected savings.</p>

          <h2 id="carryover">Carryover, grace period and runout period are different</h2>
          <p>The $700 carryover is optional. The employer must include carryover in the plan and can allow a lower amount. Money above the plan’s permitted carryover may be forfeited after the applicable deadlines. Carryover also does not reduce the employee’s ability to make a new $3,500 election for the next plan year.</p>
          <p><a href="https://www.irs.gov/publications/p969">IRS Publication 969</a> explains that a Health FSA may instead provide a grace period of up to two and a half months after the end of the plan year for incurring eligible expenses. A plan generally cannot offer both a Health FSA carryover and a grace period for the same year.</p>
          <p>A runout period is only extra time to submit evidence for expenses incurred during the permitted service period. It does not move the service date. For example, a plan might require treatment by December 31 but allow claims through March 31. Buying an eligible item in February would not become a prior-year expense merely because the claims portal remains open.</p>

          <h2 id="expenses">Which expenses can a Health FSA reimburse?</h2>
          <p>Health FSAs commonly reimburse unreimbursed expenses that qualify as medical care, such as deductibles, copays, coinsurance, prescriptions, insulin, many over-the-counter medicines, menstrual-care products, dental treatment, eye exams, eyeglasses, contact lenses and certain medical equipment. The exact process and required documentation come from the plan administrator.</p>
          <p>General wellness purchases are not automatically medical care. Some services require a letter of medical necessity, and purely cosmetic procedures are generally ineligible. Health-insurance premiums are generally not reimbursable from a Health FSA. An expense cannot be reimbursed twice by insurance, an HSA, another FSA or another plan, and a tax-free reimbursed amount cannot also become an itemized medical deduction.</p>
          <p>The IRS <a href="https://www.irs.gov/individuals/frequently-asked-questions-about-medical-expenses-related-to-nutrition-wellness-and-general-health">medical-expense FAQ</a> distinguishes medical care from expenses that merely support general health. Save itemized receipts and explanations of benefits even when a payment card initially approves the transaction; card approval is not always final substantiation.</p>

          <h2 id="hsa">Health FSA versus HSA</h2>
          <p>A general-purpose Health FSA typically makes a person ineligible to contribute to a Health Savings Account because the FSA can pay medical expenses before the HSA-qualified deductible. Coverage through a spouse’s general-purpose FSA can also be disqualifying when it can reimburse the employee’s expenses.</p>
          <p>A limited-purpose FSA that covers eligible dental and vision expenses, or a properly designed post-deductible FSA, may preserve HSA eligibility. Names alone do not prove compatibility: read the plan document and confirm the coverage start date. A prior-year general-purpose FSA carryover can affect HSA eligibility in the next plan year if the plan does not handle it through an HSA-compatible design.</p>
          <p>For the separate federal HSA amounts and eligibility tests, use the <Link href="/blog/hsa-contribution-limits-2027">2027 HSA limits guide</Link>. An HSA is individually owned and carries its full balance forward; a Health FSA is an employer plan with different access, forfeiture and continuation rules.</p>

          <h2 id="dependent-care">Do not confuse Health FSA and dependent care FSA limits</h2>
          <p>The $3,500 figure applies to employee salary reductions for a Health FSA. A dependent care FSA reimburses qualifying care that enables an eligible employee and spouse to work or look for work, and it follows separate earned-income, dependent and filing-status rules.</p>
          <p>Beginning in 2026, the federal exclusion for employer-provided dependent care assistance is generally $7,500, or $3,750 for a married employee filing separately. That amount is not an extra Health FSA allowance, and it can include more than payroll deductions under an employer program. The <Link href="/blog/dependent-care-fsa-vs-tax-credit-2026">dependent care FSA versus tax credit guide</Link> explains the coordination issue. Do not submit the same expense to a Health FSA, dependent care FSA and tax credit.</p>

          <h2 id="changes">Changing an election or leaving the employer</h2>
          <p>Health FSA elections are generally fixed for the plan year unless the plan permits a prospective change following a qualifying status event and the requested change is consistent with that event. Marriage, divorce, birth, adoption, a dependent’s eligibility change or an employment change may matter, but the plan’s event list, notice deadline and documentation control.</p>
          <p>Leaving the employer can end the period for incurring new claims even when time remains to submit older claims. COBRA continuation may be available in some circumstances, but cost and eligibility are fact-specific. Before a job change, download the current balance, claim history, substantiation requests and plan rules. Do not rush to buy unnecessary items solely to exhaust the balance.</p>

          <h2 id="checklist">2027 open-enrollment checklist</h2>
          <ul>
            <li>Confirm that the plan year begins in 2027 and note the employer’s election maximum.</li>
            <li>Identify carryover, grace-period and final claim-submission rules separately.</li>
            <li>Review unresolved payment-card transactions and the prior balance.</li>
            <li>Coordinate a spouse’s FSA and any intended HSA contributions.</li>
            <li>Use expected eligible expenses, not the federal maximum, to set the election.</li>
            <li>Save the enrollment confirmation, summary plan description and expense guide.</li>
            <li>Set reminders before the last service date and claims deadline.</li>
          </ul>
          <p>The <Link href="/calculators/paycheck">paycheck calculator</Link> can illustrate how pre-tax deductions affect take-home pay, but payroll withholding and benefit-system results control. For the prior-year comparison, see the <Link href="/blog/fsa-contribution-limits-2026">2026 Health FSA limits guide</Link>.</p>

          <h2 id="faq">2027 FSA FAQs</h2>
          {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}

          <aside aria-label="Financial, tax and benefits disclaimer"><p><strong>Educational disclaimer:</strong> Official guidance checked November 15, 2026, including IRS Revenue Procedure 2026-35 and Publication 969. This guide is general tax and benefits education, not individualized tax, legal, medical or employment advice. Your employer’s plan document and administrator control eligibility, elections, reimbursements and deadlines.</p></aside>
        </article>
      </div>
    </>
  );
}
