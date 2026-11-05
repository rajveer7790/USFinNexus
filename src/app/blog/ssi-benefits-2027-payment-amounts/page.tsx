import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = 'SSI Benefits 2027: $1,029 Payment and Resource Limits';
const description = 'See the 2027 SSI maximums, first increased payment date, unchanged $2,000/$3,000 resource limits, income reductions and state supplements.';
const url = 'https://usfinnexus.com/blog/ssi-benefits-2027-payment-amounts';
const image = 'https://usfinnexus.com/images/ssi-benefits-2027-payment-amounts.webp';
const faqs = [
  { question: 'What is the maximum federal SSI payment for 2027?', answer: 'SSA lists a monthly maximum of $1,029 for an eligible individual, $1,544 for an eligible individual with an eligible spouse, and $516 for an essential person. Actual payments can be lower.' },
  { question: 'When will the first increased 2027 SSI payment arrive?', answer: 'SSA says increased SSI payments begin December 31, 2026. January 1 is a federal holiday, so the January 2027 payment is issued on the preceding business day.' },
  { question: 'Did the SSI resource limit increase for 2027?', answer: 'No. SSA lists the federal resource limits as $2,000 for an individual and $3,000 for a couple in both 2026 and 2027.' },
  { question: 'Does every SSI recipient receive $1,029 in 2027?', answer: 'No. The figure is the maximum federal amount for an eligible individual. Countable income, living arrangements and state supplementation can change the actual payment.' },
  { question: 'Can someone receive both SSI and Social Security?', answer: 'Yes. Some people receive SSI and a Social Security benefit at the same time. Social Security income can affect the SSI calculation, so the two deposits should not be assumed to equal two maximum benefits.' },
  { question: 'How can I check my exact 2027 benefit?', answer: 'SSA says eligible users can view a personalized COLA notice in the Message Center of a my Social Security account, while recipients not using paperless notices receive a mailed notice.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-11-05', modifiedTime: '2026-11-05', siteName: 'USFinNexus', images: [{ url: image, width: 1200, height: 630, alt: 'Older adult and caregiver reviewing a monthly SSI household budget' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-05" dateModified="2026-11-05" authorName="USFinNexus Editorial Team" keywords={['SSI benefits 2027', 'SSI payment amount 2027', '2027 SSI increase', 'SSI resource limit 2027', 'SSI payment December 31 2026']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/ssi-benefits-2027-payment-amounts' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Government benefits · Published and reviewed November 5, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> The maximum federal SSI payment for 2027 is $1,029 a month for an eligible individual and $1,544 for an eligible couple, reflecting the 3.6% COLA. The first increased payment is scheduled for December 31, 2026 because January 1 is a holiday. These are maximums, not guaranteed deposits: countable income, living arrangements and state supplements can change the actual amount. The federal resource limits remain $2,000 for an individual and $3,000 for a couple.</p>
        <figure><EditorialImage src="/images/ssi-benefits-2027-payment-amounts.webp" width={1200} height={630} priority alt="Older adult and caregiver reviewing a monthly SSI household budget" className="h-auto w-full rounded-2xl" /><figcaption>Original editorial image illustrating an SSI household-budget review.</figcaption></figure>

        <aside className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-950"><strong>Maximum does not mean expected payment.</strong> SSA subtracts countable income from the applicable federal amount, and some states add a supplement. Use the personalized SSA notice for the amount that applies to you.</aside>

        <h2>Official 2027 SSI amounts</h2>
        <p>SSA calculates the new federal payment standard by increasing the prior year&apos;s unrounded annual amount by the COLA, dividing by 12 and rounding down to the next lower whole dollar. The 3.6% adjustment moves the individual maximum from $994 in 2026 to $1,029 in 2027 and the eligible-couple maximum from $1,491 to $1,544.</p>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">Recipient category</th><th scope="col">2026 maximum</th><th scope="col">2027 maximum</th><th scope="col">Monthly change</th></tr></thead><tbody>
          <tr><th scope="row">Eligible individual</th><td>$994</td><td>$1,029</td><td>$35</td></tr>
          <tr><th scope="row">Eligible individual with eligible spouse</th><td>$1,491</td><td>$1,544</td><td>$53</td></tr>
          <tr><th scope="row">Essential person</th><td>$498</td><td>$516</td><td>$18</td></tr>
        </tbody></table></div>
        <p>An “essential person” is a narrow SSI category with its own historical eligibility rules; it is not a general caregiver payment. Most readers should focus on the individual or eligible-couple standard shown in their notice.</p>

        <h2>Why the first higher payment arrives December 31</h2>
        <p>The new amount is effective for January 2027. SSI is normally paid on the first day of the month, but January 1 is a federal holiday. SSA therefore issues the January payment on the preceding business day, December 31, 2026. This is an early January payment, not a bonus or a second December benefit.</p>
        <p>Do not expect another regular SSI payment on January 1. Budget the December 31 deposit across January expenses. If the payment does not arrive, first check the account or Direct Express activity, then follow SSA&apos;s missing-payment guidance rather than responding to an unsolicited caller.</p>

        <h2>Why your payment may be below $1,029</h2>
        <h3>Countable income</h3>
        <p>SSA reduces the federal amount by monthly countable income. Wages, Social Security, pensions, unemployment and support from other people can be treated differently, and exclusions may apply. Gross income is not always the same as countable income. Report changes promptly and keep pay stubs, benefit letters and receipts.</p>
        <h3>Living arrangements and in-kind support</h3>
        <p>Where a person lives and whether someone else pays shelter costs can affect SSI. Moving, beginning or ending shared housing, marriage or separation may change the calculation. Report the event instead of waiting for an annual review, because delayed reporting can create an overpayment.</p>
        <h3>State supplementation</h3>
        <p>Some states add money to the federal SSI payment, while administration and eligibility rules vary. A total deposit can therefore be higher than the federal maximum shown in the national table. Check the state supplement separately and do not compare only the bank deposit with another recipient in a different state.</p>

        <h2>The resource limits did not rise</h2>
        <p>SSA&apos;s 2027 fact sheet keeps the countable-resource ceiling at $2,000 for an individual and $3,000 for a couple. The limits have not changed since 1989. Resources are things a person owns that can potentially be used for support, such as cash and money in bank accounts, but not everything a person owns counts.</p>
        <p>A home used as the principal residence and one vehicle used for transportation may be excluded under applicable rules, as can certain burial funds, ABLE accounts and other specifically excluded resources. The exclusions are fact-specific. Do not spend or transfer an asset based only on a summary; ask SSA or a qualified benefits counselor how the item is treated.</p>
        <p>Review balances near the start of each month because SSI resource eligibility is generally measured monthly. Keep statements showing the source of unusual deposits, including tax refunds or retroactive benefits, since an exclusion may depend on what the funds are and how long they remain excluded.</p>

        <h2>Student earned-income exclusion increases</h2>
        <p>For an eligible student under the SSI rules, the 2027 student earned-income exclusion rises to $2,500 per month and $10,080 for the year, up from $2,410 and $9,730 in 2026. The exclusion has age, school-attendance and earned-income conditions. It is not a general exclusion for every SSI recipient who works.</p>

        <h2>SSI versus SSDI and Social Security retirement</h2>
        <p>SSI is a needs-based program funded by general revenues. Social Security retirement and SSDI are insurance benefits connected to a worker&apos;s covered earnings record. A person can receive both SSI and Social Security, but the Social Security benefit may count as income in the SSI calculation. The $1,029 SSI maximum should not be added mechanically to a retirement or disability benefit.</p>
        <p>For broader retirement-benefit figures, use the <Link href="/blog/social-security-cola-2027">2027 Social Security COLA guide</Link>. For deposit dates, see the <Link href="/blog/social-security-payment-schedule-2027">2027 Social Security payment schedule</Link>. The programs have different payment rules, so confirm which benefit appears on each notice.</p>

        <h2>How to verify the exact 2027 amount</h2>
        <ol>
          <li><strong>Read the COLA notice.</strong> SSA says eligible users can view the notice in the Message Center of a personal my Social Security account; paper notices are mailed to others.</li>
          <li><strong>Separate federal and state amounts.</strong> Identify whether a state supplement is included in the deposit.</li>
          <li><strong>Check countable income.</strong> Compare the notice with wages, pensions, Social Security and support reported to SSA.</li>
          <li><strong>Review resources.</strong> Verify bank balances and document excluded funds.</li>
          <li><strong>Report changes.</strong> Update income, address, marital status and living arrangements using an official SSA channel.</li>
          <li><strong>Appeal errors on time.</strong> The notice explains reconsideration rights and the deadline; keep proof of any filing.</li>
        </ol>
        <p>Use the <Link href="/calculators/budget">USFinNexus budget calculator</Link> to plan the monthly cash flow and the <Link href="/blog/retirement-income-taxes-2026">retirement-income tax guide</Link> for other benefits. SSI itself is not taxable, but other household income can have separate federal or state tax treatment.</p>

        <h2>A safe January budget</h2>
        <p>Start with the personalized net deposit, not the maximum federal amount. Set aside rent, utilities, food, transportation and medication costs before discretionary spending. Because the January benefit arrives December 31, label it in the budget as January income so it is not accidentally spent twice.</p>
        <p>Never pay a caller to “activate” the COLA. SSA services and COLA adjustments do not require gift cards, cryptocurrency, wire transfers or an advance fee. Sign in by typing SSA.gov directly or use the phone number on an official notice.</p>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and benefits disclaimer</h2>
        <p>Primary sources reviewed November 5, 2026: SSA&apos;s <a href="https://www.ssa.gov/news/en/cola/factsheets/2027.html">2027 COLA fact sheet</a>, <a href="https://www.ssa.gov/oact/cola/SSI.html">2027 federal SSI payment calculation</a>, <a href="https://www.ssa.gov/ssi/eligibility">SSI eligibility page</a>, and <a href="https://www.ssa.gov/faqs/en/questions/KA-01951.html">2027 COLA timing FAQ</a>. This article is general education, not legal, tax or individualized benefits advice. SSA notices and official program determinations control eligibility and payment amounts.</p>
      </article>
    </main>
  </>;
}
