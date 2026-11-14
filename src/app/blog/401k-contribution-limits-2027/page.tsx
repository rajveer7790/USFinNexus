import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = '2027 401(k) Limits: $25,500 and Catch-Up Rules';
const description = 'See the new 2027 401(k) limits, age-based catch-ups, $75,000 overall cap, Roth catch-up wage threshold and practical paycheck contribution examples.';
const url = 'https://usfinnexus.com/blog/401k-contribution-limits-2027';
const image = 'https://usfinnexus.com/images/401k-contribution-limits-2027.webp';
const alt = 'Professional reviewing retirement contribution plans with a notebook and calculator at a home desk';
const date = '2026-11-13';
const faqs = [
  { question: 'What is the 2027 employee 401(k) contribution limit?', answer: 'The general employee elective-deferral limit is $25,500 for 2027. Eligible catch-up contributions can increase that amount if the plan permits them. Your compensation and plan restrictions can limit the amount actually available.' },
  { question: 'How much can someone age 50 or older contribute in 2027?', answer: 'The standard catch-up is $8,500, producing a $34,000 employee total. Someone attaining age 60, 61, 62 or 63 during 2027 may instead qualify for an $11,750 catch-up and a $37,250 total. The two catch-ups are not added together.' },
  { question: 'Does the employer match reduce my $25,500 allowance?', answer: 'No. Employer matching contributions do not use your employee elective-deferral allowance. They count toward the separate overall annual-additions limit, generally the lesser of $75,000 or 100% of compensation for 2027, before eligible catch-up contributions.' },
  { question: 'Can I contribute the limit separately to traditional and Roth 401(k) accounts?', answer: 'No. Traditional pre-tax and designated Roth employee deferrals share the applicable combined limit. Dividing contributions between those tax treatments does not double your allowance.' },
  { question: 'What is the Roth catch-up wage threshold for 2027?', answer: 'Notice 2026-66 sets a $155,000 threshold for 2026 wages used to determine the 2027 Roth catch-up requirement. Workers whose applicable prior-year wages from the sponsoring employer exceeded that amount generally must make catch-up contributions on a Roth basis. Confirm the plan-specific wage and implementation rules.' },
  { question: 'Does a new job give me a fresh employee contribution limit?', answer: 'Generally, no. Employee elective deferrals to multiple 401(k) plans must be coordinated within your individual annual limit. Give the new payroll department your earlier year-to-date deferrals rather than assuming the new system knows them.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', locale: 'en_US', title, description, url, siteName: 'USFinNexus', publishedTime: date, modifiedTime: date, images: [{ url: image, width: 1200, height: 630, alt }] },
  twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt }] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-13" dateModified="2026-11-13" authorName="USFinNexus Editorial Team" keywords={['401k contribution limits 2027', '2027 401k catch-up', 'Roth catch-up wage threshold 2027', '401k payroll contribution']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <div className="max-w-4xl mx-auto py-7 sm:py-9">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/401k-contribution-limits-2027' }]} />
      <article className="prose prose-slate max-w-none">
        <header className="fn-article-head"><span className="fn-article-kicker">Retirement &amp; workplace benefits</span><h1>{title}</h1><p className="fn-article-deck">The IRS announced higher workplace retirement limits on November 12. Here is how to turn the new numbers into a realistic 2027 payroll election.</p><div className="fn-article-byline"><span>By <Link href="/about">USFinNexus Editorial Team</Link></span><span>Published and reviewed <time dateTime={date}>November 13, 2026</time></span></div></header>
        <figure><EditorialImage src="/images/401k-contribution-limits-2027.webp" alt={alt} width={1200} height={630} priority sizes="(min-width: 1050px) 790px, 100vw" className="w-full h-auto rounded-xl my-5" /><figcaption>Original AI-generated editorial illustration of workplace retirement planning.</figcaption></figure>
        <p><strong>Quick answer:</strong> The 2027 employee 401(k) limit is $25,500. With an eligible catch-up, the usual age-50-plus total is $34,000; for people attaining ages 60 through 63 during 2027, it can reach $37,250. The separate employee-plus-employer annual-additions ceiling is generally $75,000 before eligible catch-ups, subject to compensation and plan rules. These limits apply to 2027, not to remaining 2026 paychecks.</p>
        <p>A higher ceiling is useful only if your payroll election, household budget and employer plan fit together. Before increasing a percentage, check which limit you qualify for, whether bonuses count as eligible compensation and how the employer match works throughout the year. A plan can restrict contributions below the tax-law maximum. Treat the national figures as boundaries for planning, not a guarantee that your employer will accept every possible contribution type.</p>

        <h2 id="new-limits">What changed for 2027</h2>
        <p>The <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-25500-for-2027-ira-limit-remains-7500">IRS announcement dated November 12, 2026</a> raises the general employee limit from $24,500 in 2026 to $25,500 in 2027. The standard age-50 catch-up rises from $8,000 to $8,500. The special age-60-through-63 catch-up increases from $11,250 to $11,750. These are different age-based pathways, not three allowances everyone can stack together.</p>
        <ul><li><strong>Under 50:</strong> up to $25,500 in ordinary employee elective deferrals.</li><li><strong>Age 50 or older, outside the special age band:</strong> up to $34,000 including the $8,500 catch-up.</li><li><strong>Attaining age 60, 61, 62 or 63 during 2027:</strong> up to $37,250 including the higher $11,750 catch-up.</li></ul>
        <p>Each total assumes enough eligible compensation, a plan permitting the relevant catch-up and no other restriction reducing the allowance. For the year still in progress, use our separate <Link href="/blog/401k-contribution-limits-2026">2026 401(k) limits guide</Link>. Keeping the years separate prevents a practical mistake: applying next year’s larger amount to a final December payroll run.</p>

        <h2 id="three-buckets">Separate employee deferrals, employer money and catch-ups</h2>
        <p>The <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits">IRS contribution-limit framework</a> distinguishes the employee salary-deferral allowance from the overall annual-additions test. Employer matching and nonelective contributions do not consume the $25,500 employee allowance. They do count toward the broader limit along with ordinary employee deferrals and other included additions.</p>
        <p><a href="https://www.irs.gov/pub/irs-drop/n-26-66.pdf">Notice 2026-66</a> sets the 2027 dollar ceiling for defined-contribution annual additions at $75,000. The overall test is generally the lesser of that ceiling or 100% of the participant’s compensation, with eligible catch-up contributions excluded from this annual-additions limit. It is not an invitation for an employee to defer $75,000 from salary.</p>
        <h3>Example: the match is not a second salary-deferral limit</h3>
        <p>Suppose a worker under 50 has sufficient eligible pay, contributes $25,500 and receives an assumed $6,000 employer contribution. Those two deposits total $31,500 before any other included additions. The worker has used the ordinary employee allowance even though the combined amount is below $75,000. Whether additional after-tax contributions are available is a separate plan-design question; do not infer permission from unused overall room.</p>

        <h2 id="age-tests">Check your age band before choosing a target</h2>
        <p><a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-catch-up-contributions">IRS catch-up guidance</a> uses calendar-year age rules and explains that plans must permit the relevant contributions. Someone attaining 60 during 2027 may qualify for the special band; someone attaining 64 during that year is outside it. Your target can therefore change even if your salary and employer stay the same.</p>
        <p>Do not add the standard $8,500 catch-up to the special $11,750 catch-up. For the qualifying age band, the larger figure replaces the ordinary catch-up. Ask payroll how the system identifies the correct category and whether an election made now carries forward automatically. Review the confirmation rather than assuming a birthday update will adjust every deduction correctly.</p>

        <h2 id="roth-catch-up">The 2027 Roth catch-up wage test</h2>
        <p>The new notice sets $155,000 as the applicable 2026 wage threshold used for the 2027 Roth catch-up requirement. Generally, if the relevant prior-year wages from the sponsoring employer exceeded that amount, catch-up contributions for 2027 must be designated Roth contributions. The test is not simply whether household income or this year’s expected salary exceeds $155,000.</p>
        <p>This does not automatically force every ordinary employee deferral into Roth treatment. Distinguish the catch-up portion from the regular allowance, and ask the administrator which wage record it uses. Employer changes, related employers and special plan situations can require a closer review. Our <Link href="/blog/roth-401k-catch-up-rule-2026">Roth catch-up rule explainer</Link> provides background; use the new notice for the updated 2027 threshold.</p>
        <p>The <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-on-designated-roth-accounts">IRS designated Roth account FAQs</a> also confirm that traditional pre-tax and Roth employee contributions share a combined deferral limit. Splitting your election between the two does not double your allowance. Compare the effect on your current take-home pay without assuming a particular tax treatment is best for every worker. A personal Roth IRA has a different contribution and income framework; use our <Link href="/blog/roth-ira-income-limits-2027">2027 Roth IRA income-limits guide</Link> rather than applying 401(k) rules to an IRA.</p>

        <h2 id="paycheck-examples">Turn the annual number into a paycheck plan</h2>
        <p>Start with the amount you actually intend to save, which can be below the maximum. Divide it by the number of eligible paychecks and then check the employer’s rounding and percentage rules. Bonuses, unpaid leave and a midyear start can make a simple annual division inaccurate. The following illustrations assume a full year of evenly spaced eligible pay and no other deferrals.</p>
        <h3>Monthly and biweekly examples</h3>
        <p>For a $25,500 target, twelve equal monthly deposits would be $2,125 each. Across 26 biweekly checks, the unrounded amount is about $980.7692 per check. Rounding every check to $980.77 would produce $25,500.02, so payroll may need to cap or adjust the final deposit. Confirm how the system handles that small difference; do not create a rigid transfer schedule independent of its controls.</p>
        <h3>A percentage-based election</h3>
        <p>With an assumed $120,000 of evenly paid eligible annual salary, a 21.25% election produces $25,500 before rounding. That percentage will not produce the same total if eligible compensation is lower, bonuses use a separate election or a raise changes pay midyear. Recalculate after material payroll changes instead of leaving the percentage untouched until December.</p>
        <p>Use the <Link href="/calculators/paycheck">paycheck calculator</Link> for a clearly labeled estimate of cash-flow effects, checking its supported tax year and assumptions before relying on a result. The <Link href="/calculators/retirement">retirement calculator</Link> can compare long-term saving scenarios, but modeled growth is not a promised return and cannot establish your plan’s legal contribution allowance.</p>

        <h2 id="match-timing">Protect the match while adjusting contributions</h2>
        <p>Before front-loading the year, read the match formula. A per-pay-period match can work differently from a formula reconciled over the full year. Ask whether the plan makes a true-up, what conditions apply and whether you must remain employed on a particular date to receive it. Do not assume every employer makes an automatic year-end correction.</p>
        <p>The IRS explains the importance of the <a href="https://www.irs.gov/retirement-plans/operating-a-401k-plan">summary plan description and plan operating terms</a>. Request the current version and recent amendments. Our <Link href="/blog/401k-true-up-match-2026">401(k) true-up guide</Link> covers the timing issue in more detail. Employer contributions may also have vesting conditions, so a deposited match and an amount you can retain after leaving are not always identical.</p>

        <h2 id="job-changes">Coordinate job changes and multiple plans</h2>
        <p>The <a href="https://www.irs.gov/retirement-plans/how-much-salary-can-you-defer-if-youre-eligible-for-more-than-one-retirement-plan">IRS multiple-plan guidance</a> says an individual’s elective deferrals generally need to be aggregated across relevant plans. A new employer’s payroll system may see only its own deductions. Bring your final prior-employer pay statement and maintain a combined year-to-date record if you change jobs during 2027.</p>
        <p>For example, an under-50 worker who already deferred $10,000 to one 401(k) would generally have $15,500 of the ordinary 2027 allowance remaining at a second job, assuming no other relevant deferrals or restrictions. Do not extend that example indiscriminately to every retirement arrangement: governmental 457(b) plans have a separate framework, and SIMPLE plans have their own lower limits. Ask for advice when multiple plan types overlap.</p>

        <h2 id="action-list">Your November-to-January action list</h2>
        <p>Save the new notice, confirm your 2027 age band, request the plan’s election deadline and identify the wage figure used for Roth catch-up screening. Then choose an affordable annual target and verify match timing. If reaching the maximum would leave the household unable to meet essential bills, adjust the target rather than treating the IRS ceiling as a spending requirement.</p>
        <p>After the first 2027 paycheck, compare the deduction, tax treatment and employer deposit with your election. Recheck after a raise, bonus or job change. If you discover a possible excess, contact the administrator promptly about the correct correction procedure rather than making an ordinary withdrawal yourself. A short verification routine is more reliable than assuming payroll automation eliminates every cross-employer or eligibility mistake.</p>

        <h2 id="faq">2027 401(k) contribution FAQs</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}
        <aside aria-label="Financial disclaimer"><p><strong>Educational disclaimer:</strong> Official guidance checked November 13, 2026, including the November 12 IRS announcement and Notice 2026-66. Examples are hypothetical, not personalized tax, investment, legal or benefits advice. This guide concerns ordinary 401(k) planning; compensation, plan terms and special arrangements can change the result. Confirm elections with your administrator.</p></aside>
      </article>
    </div>
  </>;
}
