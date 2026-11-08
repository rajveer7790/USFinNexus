import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';
import AuthorBio from '@/components/AuthorBio';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

const title = '2027 Earned Income Tax Credit: Income Limits and Amounts';
const description = 'See 2027 EITC maximums, income phaseout limits, child rules, the $12,600 investment-income cap and a practical eligibility checklist.';
const url = 'https://usfinnexus.com/blog/earned-income-tax-credit-2027-income-limits';
const image = 'https://usfinnexus.com/images/earned-income-tax-credit-2027-income-limits.webp';
const faqs = [
  { question: 'What is the maximum Earned Income Tax Credit for 2027?', answer: 'The maximum 2027 EITC is $8,496 for a taxpayer with three or more qualifying children. The maximum is $7,552 with two children, $4,573 with one child and $685 with no qualifying children.' },
  { question: 'What are the 2027 EITC income limits?', answer: 'The credit fully phases out at different amounts based on filing status and qualifying children. For married couples filing jointly, the completed phaseout ranges from $27,684 with no qualifying child to $72,512 with three or more. For other eligible filers, it ranges from $20,164 to $65,002.' },
  { question: 'What is the 2027 EITC investment-income limit?', answer: 'A taxpayer cannot claim the 2027 EITC if disqualifying investment income exceeds $12,600. Use the 2027 return instructions to identify the income included in that test.' },
  { question: 'Can a taxpayer without children claim the 2027 EITC?', answer: 'Potentially. The taxpayer must satisfy the childless EITC age, residency, dependent and other eligibility rules. The maximum 2027 credit without a qualifying child is $685.' },
  { question: 'How old can a qualifying child be for EITC?', answer: 'Generally, the child must be under 19 and younger than the taxpayer, or under 24, younger than the taxpayer and a full-time student for at least five months. A permanently and totally disabled qualifying child can be any age.' },
  { question: 'When is the 2027 EITC claimed?', answer: 'The 2027 EITC is generally claimed on the federal income-tax return filed in 2028. Taxpayers should use the final 2027 Form 1040 instructions and Schedule EIC when available.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, siteName: 'USFinNexus', publishedTime: '2026-11-08', modifiedTime: '2026-11-08', images: [{ url: image, width: 1200, height: 630, alt: 'American family reviewing income records for the 2027 Earned Income Tax Credit' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function EarnedIncomeTaxCredit2027Page() {
  return <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-08" dateModified="2026-11-08" authorName="USFinNexus Editorial Team" keywords={['2027 earned income tax credit', 'EITC income limits 2027', 'earned income credit 2027 table', '2027 EITC maximum', 'EITC investment income limit']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/earned-income-tax-credit-2027-income-limits' }]} />
    <article>
      <header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Tax credits · Published and reviewed November 8, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">2027 Earned Income Tax Credit: Income Limits, Maximums and Rules</h1><p className="mt-5 text-xl leading-relaxed text-slate-600">The new IRS table raises the maximum credit, but income, investment income and qualifying-child rules still decide the result.</p></header>
      <figure className="mb-10"><div className="relative aspect-[1200/630] overflow-hidden rounded-3xl"><EditorialImage src="/images/earned-income-tax-credit-2027-income-limits.webp" alt="American family reviewing income records for the 2027 Earned Income Tax Credit" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" /></div><figcaption className="mt-2 text-center text-sm text-slate-500">Original editorial image illustrating a household EITC review.</figcaption></figure>
      <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
        <p><strong>Answer first:</strong> The maximum Earned Income Tax Credit for tax year 2027 is <strong>$8,496</strong> for a taxpayer with three or more qualifying children. The maximum is $7,552 with two children, $4,573 with one child and $685 with no qualifying children. Income limits depend on filing status and family size, and the credit is unavailable if disqualifying investment income exceeds <strong>$12,600</strong>.</p>
        <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>A maximum is not a promised refund.</strong> EITC rises with earned income, reaches a maximum range and then phases out. Adjusted gross income, earned income, filing status, qualifying children, Social Security numbers and investment income all matter.</aside>

        <h2>2027 EITC table: maximum credits and income limits</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Qualifying children</th><th className="p-4">Maximum credit</th><th className="p-4">Phaseout complete: joint</th><th className="p-4">Phaseout complete: other eligible filers</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4">None</td><td className="p-4 font-semibold">$685</td><td className="p-4">$27,684</td><td className="p-4">$20,164</td></tr><tr><td className="p-4">One</td><td className="p-4 font-semibold">$4,573</td><td className="p-4">$60,787</td><td className="p-4">$53,277</td></tr><tr><td className="p-4">Two</td><td className="p-4 font-semibold">$7,552</td><td className="p-4">$68,029</td><td className="p-4">$60,519</td></tr><tr><td className="p-4">Three or more</td><td className="p-4 font-semibold">$8,496</td><td className="p-4">$72,512</td><td className="p-4">$65,002</td></tr></tbody></table></div>
        <p>The IRS published these inflation-adjusted figures in Revenue Procedure 2026-35 on November 5, 2026. They apply to income earned in 2027 and generally to returns filed in 2028. “Completed phaseout” means the point at which no EITC remains; it does not mean every taxpayer below that line receives the maximum.</p>

        <h2>Where the 2027 credit starts to phase out</h2>
        <p>For married taxpayers filing jointly, the maximum credit begins to phase out when the greater of adjusted gross income or earned income exceeds $32,170 for filers with at least one qualifying child. For a joint filer without a qualifying child, phaseout begins at $18,730. For other eligible filing statuses, the phaseout starts at $24,660 with at least one qualifying child and $11,210 without one.</p>
        <p>The IRS table also lists the earned-income amount at which the credit reaches its maximum: $13,450 with one qualifying child, $18,880 with two or more children and $8,960 without a qualifying child. Actual return software uses the IRS credit table and all applicable rules, so a quick percentage calculation is not a substitute for the final 2027 instructions.</p>

        <h2>Who can qualify for the Earned Income Tax Credit?</h2>
        <p>At a high level, an eligible taxpayer needs earned income from work or self-employment, a valid Social Security number by the return due date, qualifying U.S. residency or citizenship status, and a filing status allowed for EITC. The taxpayer generally cannot file Form 2555 for foreign earned income. A person claimed as another taxpayer’s qualifying child cannot claim the credit on their own return.</p>
        <p>Married taxpayers ordinarily file jointly to claim EITC. A married person filing separately may qualify only under the special separated-spouse rules, which include living apart from the spouse for the required period and maintaining a qualifying child’s main home. This is a facts-and-circumstances rule worth checking carefully.</p>

        <h2>2027 qualifying-child tests</h2>
        <p>A child must satisfy several tests at the same time:</p>
        <ul><li><strong>Relationship:</strong> generally a son, daughter, stepchild, eligible foster child, sibling, stepsibling, half-sibling or a descendant of one of them.</li><li><strong>Age:</strong> generally under 19 and younger than the taxpayer, or under 24, younger than the taxpayer and a full-time student for at least five months. A permanently and totally disabled child can be any age.</li><li><strong>Residency:</strong> generally lived with the taxpayer in the United States for more than half the year, subject to temporary-absence and special rules.</li><li><strong>Joint return:</strong> generally did not file a joint return with a spouse, except in limited refund-only circumstances.</li><li><strong>Identification:</strong> has a valid Social Security number meeting the EITC timing rules.</li></ul>
        <p>Only one taxpayer can use the same child for EITC. When more than one person could claim a child, statutory tiebreaker rules look at parent status, time lived with each parent and adjusted gross income. Do not solve a shared-custody question by assuming the parent who paid more expenses automatically wins.</p>

        <h2>Can you claim EITC without a child?</h2>
        <p>Yes, but the maximum credit is much smaller: $685 for 2027. A childless claimant generally must be at least age 25 but under age 65 at year-end, live in the United States for more than half the year, not be another person’s dependent and not be another taxpayer’s qualifying child. A spouse on a joint return must also satisfy relevant age rules.</p>
        <p>The completed phaseout is $20,164 for eligible non-joint filers and $27,684 for married couples filing jointly. Because the credit begins phasing out earlier—$11,210 or $18,730 respectively—a taxpayer can be below the final limit and still receive less than $685.</p>

        <h2>The $12,600 investment-income limit</h2>
        <p>For 2027, EITC is unavailable when specified investment income exceeds $12,600. The test can include taxable and tax-exempt interest, dividends, net capital gains, rents and royalties, and certain passive-activity amounts under the form instructions. It is a separate eligibility gate, not another phaseout.</p>
        <p>Review brokerage statements, savings interest and rental or royalty income before assuming wages alone determine eligibility. Selling appreciated stock late in the year can affect this test even when earned income stays the same. Use the final 2027 worksheet because the statutory definition does not always match a household’s everyday meaning of “investment income.”</p>

        <h2>Worked examples</h2>
        <h3>Married couple with two qualifying children</h3>
        <p>Suppose a joint-filing couple has $42,000 of earned income, no disqualifying filing issue and investment income below $12,600. Their income is below the $68,029 completed-phaseout amount but above the $32,170 phaseout threshold. They may receive an EITC, but it will be less than the $7,552 maximum. The IRS credit table or approved software must calculate the final amount.</p>
        <h3>Single parent with one qualifying child</h3>
        <p>Suppose an eligible head-of-household filer has $24,000 of earned income. The amount is below the $24,660 phaseout threshold for a non-joint filer with a child, so the taxpayer may be in the maximum-credit range, subject to AGI, investment income and every other qualification rule. The maximum is $4,573, not an automatic refund amount.</p>
        <h3>Worker without a qualifying child</h3>
        <p>An eligible single worker with $18,000 of earned income is above the $11,210 phaseout threshold but below the $20,164 completed-phaseout amount. A reduced credit may remain. Age, residency, dependent status and investment income still need to be checked.</p>

        <h2>EITC filing checklist for 2027</h2>
        <ol><li>Gather every W-2, 1099 and self-employment income record.</li><li>Confirm names and Social Security numbers match Social Security Administration records.</li><li>Document each child’s relationship, age and time living in the home.</li><li>Coordinate with another parent before either return claims the child.</li><li>Add investment income and compare it with the $12,600 limit.</li><li>Use the final 2027 Form 1040 instructions, Schedule EIC and EITC table.</li><li>Consider IRS-certified VITA or TCE help if eligible.</li><li>Keep school, medical, childcare or housing records that support residency.</li></ol>
        <p>For broader planning, compare the <Link href="/blog/federal-tax-brackets-standard-deduction-2027">2027 federal tax brackets</Link> and the <Link href="/blog/child-tax-credit-2027-income-limits-refund">2027 Child Tax Credit</Link>. The <Link href="/calculators/income-tax">income tax calculator</Link> can estimate scenarios, but it cannot verify a qualifying child or replace the official EITC table.</p>

        <h2>Common mistakes to avoid</h2>
        <ul><li>Using the completed-phaseout number as if it were the maximum-credit threshold.</li><li>Ignoring adjusted gross income when it is higher than earned income.</li><li>Overlooking interest, dividends or capital gains in the investment-income test.</li><li>Claiming the same child on two returns.</li><li>Assuming Child Tax Credit eligibility automatically proves EITC eligibility.</li><li>Using 2026 limits on a 2027 return.</li><li>Inventing self-employment income to create a credit; false income can cause penalties and a future EITC ban.</li></ul>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and tax disclaimer</h2>
        <p>Primary sources reviewed November 8, 2026: IRS <a href="https://www.irs.gov/pub/irs-drop/rp-26-35.pdf">Revenue Procedure 2026-35</a>, the IRS <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2027-taxpayers-continue-to-benefit-from-the-working-families-tax-cuts">2027 inflation-adjustment release</a>, and the IRS <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/qualifying-child-rules">qualifying-child rules</a>. This article is general education, not individualized tax or legal advice. Eligibility depends on the complete return and family facts. Use final 2027 forms or a qualified tax professional before filing.</p>
      </div>
      <AuthorBio /><ContextualInternalLinks currentSlug="earned-income-tax-credit-2027-income-limits" showBlogs showCalculators />
    </article>
  </main>;
}
