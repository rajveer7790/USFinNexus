import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';
import AuthorBio from '@/components/AuthorBio';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

const title = '2027 Child Tax Credit: $2,300, Refund and Income Limits';
const description = 'See the 2027 Child Tax Credit amount, $1,800 refundable limit, $200K/$400K phaseouts, qualifying-child rules, examples and filing steps.';
const url = 'https://usfinnexus.com/blog/child-tax-credit-2027-income-limits-refund';
const image = 'https://usfinnexus.com/images/child-tax-credit-2027-income-limits-refund.webp';
const faqs = [
  { question: 'How much is the Child Tax Credit for 2027?', answer: 'The maximum 2027 Child Tax Credit is $2,300 for each qualifying child. The actual amount can be lower because of tax liability, refundability, income phaseouts and eligibility rules.' },
  { question: 'How much of the 2027 Child Tax Credit is refundable?', answer: 'Up to $1,800 per qualifying child may be refundable through the Additional Child Tax Credit, subject to earned-income and Schedule 8812 calculations.' },
  { question: 'What are the 2027 Child Tax Credit income limits?', answer: 'The credit begins to phase out when modified adjusted gross income exceeds $400,000 for married couples filing jointly and $200,000 for other filers. It is reduced by $50 for each $1,000, or fraction of $1,000, above the threshold.' },
  { question: 'What age must a child be for the 2027 Child Tax Credit?', answer: 'A qualifying child must be under age 17 at the end of 2027 and meet the relationship, residency, support, dependent, citizenship and identification-number rules.' },
  { question: 'Does a child need a Social Security number for the Child Tax Credit?', answer: 'Yes. The qualifying child must have a valid Social Security number that meets the statutory requirements and is issued by the due date of the return. Taxpayer identification requirements also apply.' },
  { question: 'When will families claim the 2027 Child Tax Credit?', answer: 'The credit generally applies to income and family circumstances during tax year 2027 and is claimed on the federal return normally filed in 2028 using Form 1040 and Schedule 8812.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, siteName: 'USFinNexus', publishedTime: '2026-11-07', modifiedTime: '2026-11-07', images: [{ url: image, width: 1200, height: 630, alt: 'American family organizing household tax records for the 2027 Child Tax Credit' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function ChildTaxCredit2027Page() {
  return <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-07" dateModified="2026-11-07" authorName="USFinNexus Editorial Team" keywords={['2027 child tax credit', 'child tax credit 2027 income limit', 'additional child tax credit 2027', '$2300 child tax credit', '2027 tax refund']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/child-tax-credit-2027-income-limits-refund' }]} />
    <article>
      <header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Taxes and families · Published and reviewed November 7, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">2027 Child Tax Credit: $2,300 Maximum, Refund and Income Limits</h1><p className="mt-5 text-xl leading-relaxed text-slate-600">The credit rises again for 2027, but the headline maximum is not the same as every family’s refund.</p></header>
      <figure className="mb-10"><div className="relative aspect-[1200/630] overflow-hidden rounded-3xl"><EditorialImage src="/images/child-tax-credit-2027-income-limits-refund.webp" alt="American family organizing household tax records for the 2027 Child Tax Credit" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" /></div><figcaption className="mt-2 text-center text-sm text-slate-500">Original editorial image illustrating family tax-record preparation.</figcaption></figure>
      <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
        <p><strong>Answer first:</strong> The maximum Child Tax Credit for tax year 2027 is <strong>$2,300 per qualifying child</strong>, and up to <strong>$1,800 per child</strong> may be refundable through the Additional Child Tax Credit. The phaseout still starts above $400,000 of modified adjusted gross income for married couples filing jointly and $200,000 for other filers. The child generally must be under 17 at year-end and satisfy relationship, residency, support, dependent, citizenship and Social Security number rules.</p>
        <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Do not treat $2,300 as an automatic refund.</strong> The nonrefundable portion can reduce federal income tax, while the refundable portion follows a separate earned-income calculation and cap. Income phaseouts and identification rules can reduce the result.</aside>

        <h2>2027 Child Tax Credit numbers at a glance</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">2027 rule</th><th className="p-4">Amount or threshold</th><th className="p-4">What it means</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4">Maximum CTC</td><td className="p-4 font-semibold">$2,300 per qualifying child</td><td className="p-4">Maximum before tax-liability and phaseout limits</td></tr><tr><td className="p-4">Maximum refundable amount</td><td className="p-4 font-semibold">$1,800 per qualifying child</td><td className="p-4">ACTC cap; earned-income calculation still applies</td></tr><tr><td className="p-4">Joint-return phaseout start</td><td className="p-4">$400,000 MAGI</td><td className="p-4">Credit begins falling above this amount</td></tr><tr><td className="p-4">Other-filer phaseout start</td><td className="p-4">$200,000 MAGI</td><td className="p-4">Includes single, head-of-household and separate filers</td></tr><tr><td className="p-4">Earned-income threshold for ACTC</td><td className="p-4">$2,500</td><td className="p-4">Refundable calculation generally begins above this threshold</td></tr><tr><td className="p-4">Qualifying-child age</td><td className="p-4">Under 17 at year-end</td><td className="p-4">A child who turns 17 during 2027 generally fails the age test</td></tr></tbody></table></div>
        <p>The IRS announced the 2027 maximums on November 5, 2026 in its annual inflation-adjustment release and Revenue Procedure 2026-35. These rules apply to tax year 2027, meaning families generally claim the credit on returns filed in 2028. Final 2027 forms, instructions and administrative guidance should be checked before filing.</p>

        <h2>Who is a qualifying child for 2027?</h2>
        <p>A child must pass every applicable test; meeting only the age test is not enough. The core federal tests include:</p>
        <ul><li><strong>Age:</strong> under 17 at the end of 2027.</li><li><strong>Relationship:</strong> generally a son, daughter, stepchild, eligible foster child, sibling, stepsibling, half-sibling or a descendant of one of them.</li><li><strong>Residency:</strong> generally lived with the taxpayer for more than half the year, subject to special rules.</li><li><strong>Support:</strong> did not provide more than half of their own support.</li><li><strong>Dependent status:</strong> is claimed as the taxpayer’s dependent.</li><li><strong>Joint-return rule:</strong> generally did not file a joint return, except a return filed only to claim a refund in qualifying circumstances.</li><li><strong>Citizenship or residency:</strong> is a U.S. citizen, U.S. national or U.S. resident alien under the applicable rules.</li><li><strong>Identification:</strong> has a qualifying Social Security number issued by the return’s due date; taxpayer SSN requirements also apply.</li></ul>
        <p>Divorce, separation, temporary absences, birth or death during the year, adoption, foster placement and multiple-support situations can invoke special rules. Review Publication 501 and the 2027 Schedule 8812 instructions when available instead of resolving a complex dependency dispute from a checklist alone.</p>

        <h2>How the $200,000 and $400,000 phaseouts work</h2>
        <p>The credit is reduced by $50 for every $1,000—or fraction of $1,000—by which modified adjusted gross income exceeds the applicable threshold. Because a fraction counts as a full $1,000 step, an excess of $10,001 produces the same phaseout step count as an excess of $11,000.</p>
        <h3>Example 1: married filing jointly with two children</h3>
        <p>Assume joint MAGI of $425,000 and two qualifying children. The starting maximum is $4,600. MAGI exceeds $400,000 by $25,000, creating 25 phaseout steps. At $50 per step, the reduction is $1,250, leaving a potential credit of $3,350 before other limitations.</p>
        <h3>Example 2: head of household with one child</h3>
        <p>Assume MAGI of $210,500. The excess over $200,000 is $10,500, which rounds up to 11 phaseout steps. The $550 reduction lowers the potential $2,300 credit to $1,750 before tax-liability and refundability calculations.</p>
        <p>Modified AGI can differ from the AGI printed on the return when certain foreign-income exclusions apply. Do not substitute taxable income or gross wages for the statutory MAGI calculation.</p>

        <h2>Refundable versus nonrefundable: why the distinction matters</h2>
        <p>A nonrefundable credit can generally reduce eligible federal income tax to zero but does not, by itself, create a payment beyond that liability. The Additional Child Tax Credit is the potentially refundable portion. For many families, the basic earned-income method starts with 15% of earned income above $2,500, limited by the statutory per-child refundable cap and the remaining unused Child Tax Credit.</p>
        <p>For example, one qualifying child and $10,000 of earned income produces a preliminary earned-income amount of $1,125: 15% of the $7,500 above the threshold. That is below the $1,800 per-child cap. This illustration does not account for every Schedule 8812 rule, tax liability, phaseout or the alternative calculation that may apply to families with three or more qualifying children.</p>
        <p>A taxpayer with no federal income tax liability is therefore not automatically entitled to the full $2,300. Conversely, withholding and refundable credits can cause a refund even after the nonrefundable credit reduces tax. Keep the credit calculation separate from the refund calculation.</p>

        <h2>Identification-number rules can determine eligibility</h2>
        <p>The Internal Revenue Code requires a qualifying Social Security number for the child, issued by the due date of the return and meeting the statute’s citizenship or work-authorization conditions. Current law also requires the taxpayer—or at least one spouse on a joint return—to include a qualifying Social Security number. An ITIN for the child does not satisfy the CTC child-SSN requirement.</p>
        <p>A dependent who does not qualify for the Child Tax Credit may sometimes qualify for the nonrefundable Credit for Other Dependents, but that credit has separate rules and a $500 maximum under current law. Do not claim both credits for the same dependent.</p>

        <h2>How the 2027 credit compares with 2026</h2>
        <p>The maximum CTC rises from $2,200 in 2026 to $2,300 in 2027. The potentially refundable cap rises from $1,700 to $1,800. For a family with two qualifying children that is eligible for both maximums, the headline CTC increases by $200, but the actual tax benefit can be smaller if the credit is limited by income, tax liability, refundability or eligibility.</p>
        <p>The $400,000 joint and $200,000 other-filer phaseout thresholds are not indexed for inflation under the current statute. The credit amount and refundable cap are indexed under separate provisions. That distinction is why the maximum can rise while the income thresholds remain unchanged.</p>
        <p>See the broader <Link href="/blog/federal-tax-brackets-standard-deduction-2027">2027 federal tax bracket guide</Link> for standard deductions and marginal rates, and the <Link href="/blog/child-tax-credit-2026">2026 Child Tax Credit guide</Link> for the prior-year comparison.</p>

        <h2>Filing checklist for parents and guardians</h2>
        <ol><li><strong>Confirm the child’s year-end age.</strong> Use the child’s actual date of birth, not school grade.</li><li><strong>Document residency.</strong> School, medical, childcare or other records can help establish where the child lived.</li><li><strong>Check support and dependency.</strong> Coordinate with another parent before filing competing claims.</li><li><strong>Verify Social Security numbers.</strong> Names and numbers should match Social Security Administration records.</li><li><strong>Estimate 2027 MAGI.</strong> Include relevant foreign exclusions when required for the phaseout calculation.</li><li><strong>Complete Schedule 8812.</strong> Use the 2027 version when released; do not reuse an older worksheet.</li><li><strong>Retain income records.</strong> W-2s, 1099s and self-employment records support the refundable calculation.</li><li><strong>Track refund timing.</strong> Returns claiming EITC or ACTC are subject to the PATH Act’s mid-February refund restriction.</li></ol>
        <p>Use the <Link href="/calculators/income-tax">income tax calculator</Link> for scenario planning only after confirming its displayed tax year. A calculator cannot decide dependency, SSN validity or special custody rules.</p>

        <h2>Common mistakes to avoid</h2>
        <ul><li>Calling the full $2,300 an automatic refund.</li><li>Using gross income instead of modified AGI for the phaseout.</li><li>Claiming a child who turned 17 during the tax year.</li><li>Assuming an ITIN satisfies the child-SSN requirement.</li><li>Ignoring a competing claim by another parent or guardian.</li><li>Using 2026 forms or thresholds to prepare a 2027 return.</li><li>Confusing the Child Tax Credit with the Child and Dependent Care Credit.</li></ul>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and tax disclaimer</h2>
        <p>Primary sources reviewed November 7, 2026: the IRS <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2027-taxpayers-continue-to-benefit-from-the-working-families-tax-cuts">2027 inflation-adjustment release</a>, <a href="https://www.irs.gov/pub/irs-drop/rp-26-35.pdf">Revenue Procedure 2026-35</a>, the IRS <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit">Child Tax Credit eligibility page</a>, and <a href="https://uscode.house.gov/us/usc/t26/s24/">26 U.S.C. §24</a>. This article is general education, not individualized tax or legal advice. Final results depend on family facts, income, liability, identification numbers and future forms or guidance. Consult current IRS instructions or a qualified tax professional before filing.</p>
      </div>
      <AuthorBio /><ContextualInternalLinks currentSlug="child-tax-credit-2027-income-limits-refund" showBlogs showCalculators />
    </article>
  </main>;
}
