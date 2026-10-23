import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = 'Social Security Earnings Test 2027: New Work Limits';
const description = 'Working while collecting Social Security in 2027? See the $25,560 and $67,920 earnings limits, withholding examples and full-retirement-age rules.';
const url = 'https://usfinnexus.com/blog/social-security-earnings-test-2027';
const image = 'https://usfinnexus.com/images/social-security-earnings-test-2027.webp';
const faqs = [
  { question: 'How much can I earn while receiving Social Security in 2027?', answer: 'If you remain below full retirement age for all of 2027, the annual earnings-test limit is $25,560. If you reach full retirement age during 2027, the higher limit is $67,920 and only earnings before the month you reach full retirement age count. Starting with that month, the retirement earnings test no longer applies.' },
  { question: 'What happens if I earn more than $25,560 in 2027?', answer: 'For a beneficiary below full retirement age all year, Social Security generally withholds $1 in benefits for every $2 of covered earnings above $25,560. Social Security may withhold whole monthly checks to implement the estimate and later reconcile the result.' },
  { question: 'Are benefits withheld by the earnings test permanently lost?', answer: 'No. At full retirement age, Social Security adjusts the monthly benefit to account for months in which benefits were withheld under the earnings test. That is different from receiving an immediate refund, and longevity affects the eventual lifetime result.' },
  { question: 'Does pension or investment income count toward the earnings test?', answer: 'Generally, the test counts wages from a job and net earnings from self-employment. Pensions, annuities, investment income, interest, capital gains and most other non-work income generally do not count, although they may affect income tax or Medicare costs under separate rules.' },
  { question: 'Does the earnings test apply after full retirement age?', answer: 'No. Beginning with the month you reach full retirement age, there is no retirement earnings-test limit. Earnings can still cause part of your Social Security benefit to be taxable and may affect Medicare income-related premiums later.' },
  { question: 'What is the 2027 Social Security taxable wage base?', answer: 'The maximum earnings subject to the 6.2% Social Security payroll tax rise to $192,300 in 2027. Medicare tax has no comparable earnings cap. The wage base is a payroll-tax rule and is not the same as the retirement earnings-test limit.' },
];

export const metadata: Metadata = {
  title: 'Social Security Earnings Test 2027: Work Limits',
  description,
  alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-10-23', modifiedTime: '2026-10-23', images: [{ url: image, width: 1200, height: 630, alt: 'Older professional reviewing work income and retirement benefit documents at a home office' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-10-23" dateModified="2026-10-23" authorName="USFinNexus Editorial Team" keywords={['Social Security earnings test 2027', 'how much can I earn on Social Security 2027', 'Social Security work limit 2027', '2027 taxable wage base']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8"><Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/social-security-earnings-test-2027' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Social Security · Published and reviewed October 23, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> If you collect Social Security retirement benefits before full retirement age and work in 2027, you can earn up to $25,560 before the standard earnings test starts withholding benefits. Social Security generally withholds $1 for every $2 above that limit. In the calendar year you reach full retirement age, the limit is $67,920 and the withholding rate is $1 for every $3 above it—but only earnings before your full-retirement-age month count. From that month forward, the earnings test ends.</p>
        <figure><EditorialImage src="/images/social-security-earnings-test-2027.webp" width={1200} height={630} priority alt="Older professional reviewing work income and retirement benefit documents at a home office" className="h-auto w-full rounded-2xl" /><figcaption>Original AI-generated editorial image illustrating the balance between wages and retirement benefits; no real benefit statement is shown.</figcaption></figure>

        <h2>The official 2027 limits at a glance</h2>
        <p>The Social Security Administration&apos;s October 2026 fact sheet raised both retirement earnings-test thresholds for 2027. Which threshold applies depends on whether you reach full retirement age during the year—not simply whether you turn 65.</p>
        <div className="not-prose overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th className="border p-3">Your status in 2027</th><th className="border p-3">2027 limit</th><th className="border p-3">Benefit withholding</th></tr></thead><tbody>
          <tr><td className="border p-3">Below full retirement age for all of 2027</td><td className="border p-3">$25,560 for the year ($2,130 monthly reference)</td><td className="border p-3">$1 for every $2 above the annual limit</td></tr>
          <tr><td className="border p-3">Reach full retirement age during 2027</td><td className="border p-3">$67,920 before the full-retirement-age month ($5,660 monthly reference)</td><td className="border p-3">$1 for every $3 above the higher limit</td></tr>
          <tr><td className="border p-3">Beginning with full-retirement-age month</td><td className="border p-3">No limit</td><td className="border p-3">No retirement earnings-test withholding</td></tr>
        </tbody></table></div>
        <p>These are gross earnings limits, not the amount left after tax, retirement contributions or household expenses. They are also separate from the 3.6% 2027 cost-of-living adjustment. Read the <Link href="/blog/social-security-cola-2027">2027 Social Security COLA guide</Link> for benefit-adjustment examples.</p>

        <h2>How the $25,560 rule works</h2>
        <p>Suppose a 63-year-old receives retirement benefits throughout 2027 and earns $35,560 in wages. The wages exceed the annual limit by $10,000. At $1 withheld for each $2 above the limit, the estimated withholding is $5,000. Social Security commonly withholds whole monthly checks until it has withheld the required amount, rather than trimming every check by an identical fraction.</p>
        <p>If the monthly benefit were $2,000, three full checks could be withheld, totaling $6,000. Social Security would then reconcile any excess withholding according to its procedures. That cash-flow pattern matters: a person may have enough annual income on paper yet face several months without a benefit deposit.</p>
        <p>Report a realistic earnings estimate and update it when work changes. Overtime, commissions, a second job or stronger self-employment profit can raise the estimate; reduced hours or job loss can lower it. Waiting until tax forms arrive may produce avoidable under- or over-withholding.</p>

        <h2>The special rule for the year you reach full retirement age</h2>
        <p>The higher $67,920 threshold applies only in the year you reach full retirement age and only to earnings before the month you reach it. If your full-retirement-age month is September 2027, wages earned January through August are tested against the higher limit. Wages earned in September and later do not count toward the retirement earnings test.</p>
        <p>For example, assume $79,920 of counted earnings before September. That is $12,000 above the higher limit, so the estimated withholding is $4,000 under the $1-for-$3 formula. Earnings after August are not added to that calculation. The precise result depends on when wages were earned, not merely when payroll deposited the money.</p>
        <h3>Full retirement age is not automatically 65</h3>
        <p>Full retirement age depends on birth year. For people born in 1960 or later, it is 67; earlier birth years phase in between 66 and 67. Verify your date through your Social Security account or the agency&apos;s official chart. Medicare eligibility at 65 does not switch off the earnings test.</p>

        <h2>What income counts—and what usually does not</h2>
        <p>The test generally counts wages from employment and net earnings from self-employment. A bonus, commission or vacation pay can count as wages, while business profit follows self-employment rules. Special timing rules may apply to compensation earned before retirement but paid later, so keep payroll records when a payment straddles the retirement date.</p>
        <p>Pension payments, annuities, Social Security benefits, interest, dividends, capital gains and most rental or investment income generally are not earnings for this test. But “not counted by the earnings test” does not mean “ignored everywhere.” These amounts can affect the federal taxation of benefits, adjusted gross income, and future Medicare income-related surcharges.</p>
        <p>A spouse&apos;s wages do not get combined with yours for your individual earnings test. Each beneficiary&apos;s own work and benefit record matters. If family benefits are paid on your record, however, your excess earnings and withheld benefit can affect dependent payments too; ask Social Security to model the household result.</p>

        <h2>Withheld benefits are not simply gone</h2>
        <p>SSA explains that benefits withheld under the retirement earnings test are not permanently lost. At full retirement age, the agency recalculates the monthly benefit to account for months in which checks were withheld. Conceptually, the adjustment reduces the early-claiming penalty associated with those months.</p>
        <p>This is not an immediate dollar-for-dollar refund, and it does not guarantee that every household will recoup the same lifetime amount. The break-even result depends on survival, future COLAs, spouse or survivor benefits, taxes and the number of checks withheld. Treat the later adjustment as part of a long retirement-income plan, not free short-term financing.</p>

        <h2>A monthly special rule may help in the first retirement year</h2>
        <p>Social Security has a special monthly rule that can pay a full benefit for a month it considers you retired even when annual earnings exceed the annual limit. It is most relevant when someone stops a well-paid job midyear, starts benefits, and then earns no more than the applicable monthly amount in later months.</p>
        <p>Self-employed people can also face a substantial-services test, because reducing reported profit does not necessarily prove retirement from an actively operated business. Document hours, duties, management activity and when services were performed. Ask SSA whether the annual or monthly test will be used for the transition year before relying on an estimate.</p>

        <h2>Do not confuse three different Social Security numbers</h2>
        <p>The 2027 fact sheet contains several limits that answer different questions:</p>
        <ul>
          <li><strong>$25,560:</strong> the lower retirement earnings-test exempt amount.</li>
          <li><strong>$67,920:</strong> the higher exempt amount in the year full retirement age is reached, before that month.</li>
          <li><strong>$192,300:</strong> the maximum earnings subject to the 6.2% employee Social Security payroll tax in 2027.</li>
        </ul>
        <p>The payroll-tax wage base does not determine how much a beneficiary may earn without benefit withholding. An employee can be below the $192,300 payroll-tax ceiling yet well above the $25,560 benefit threshold. Medicare&apos;s 1.45% payroll tax has no equivalent wage cap, and an additional Medicare tax can apply above separate thresholds.</p>

        <h2>Working may increase your future benefit</h2>
        <p>Social Security retirement benefits are based on the highest 35 years of indexed earnings. Continued work can replace a low or zero year in that calculation. SSA reviews reported earnings and can recompute the benefit when a new year improves the record. Check your earnings history for omissions; correcting a missing W-2 or self-employment year can matter more than a minor claiming-date tweak.</p>
        <p>Working also adds cash flow and may let you delay portfolio withdrawals. Compare the after-tax value of wages, employer benefits and retirement contributions against commuting, payroll tax and any temporary benefit withholding. Use the <Link href="/calculators/retirement">retirement calculator</Link> to test income longevity, but enter Social Security conservatively because the tool cannot adjudicate SSA-specific withholding.</p>

        <h2>Five steps before you work and claim in 2027</h2>
        <ol>
          <li><strong>Confirm your exact full retirement age:</strong> use birth year and month, not Medicare age.</li>
          <li><strong>Forecast counted earnings:</strong> include wages, bonuses, commissions and expected net self-employment income.</li>
          <li><strong>Build a withholding calendar:</strong> identify which monthly checks could be held and keep a cash reserve.</li>
          <li><strong>Update SSA promptly:</strong> report a meaningful change in expected earnings and retain confirmation.</li>
          <li><strong>Model taxes separately:</strong> use the <Link href="/calculators/income-tax">income-tax calculator</Link> and get tax advice for the interaction between wages and taxable benefits.</li>
        </ol>
        <p>If you have not claimed yet, compare claiming now with delaying. The earnings test can make early claiming less useful when most checks will be withheld, while delayed retirement credits may raise benefits after full retirement age. Health, survivor needs, job stability and savings can change the better choice.</p>

        <h2>Frequently asked questions</h2>{faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}
        <h2>Sources and financial disclaimer</h2>
        <p><a href="https://www.ssa.gov/news/en/cola/factsheets/2027.html">SSA 2027 COLA Fact Sheet</a>, <a href="https://www.ssa.gov/oact/cola/rtea.html">SSA retirement earnings-test exempt amounts</a>, and <a href="https://www.ssa.gov/benefits/retirement/planner/whileworking.html">SSA guidance on working while receiving benefits</a> were reviewed October 23, 2026. This article is general education, not individualized Social Security, tax, legal or investment advice. SSA makes benefit determinations. Confirm your full retirement age, counted earnings and reporting obligations directly with SSA before changing work or claiming decisions.</p>
      </article>
    </main>
  </>;
}
