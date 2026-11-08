import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';
import AuthorBio from '@/components/AuthorBio';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

const title = '2027 Gift and Estate Tax Limits: $20,000 and $15.48M';
const description = 'Learn the 2027 $20,000 annual gift exclusion, $15.48 million estate and gift exemption, gift splitting, Form 709 and planning rules.';
const url = 'https://usfinnexus.com/blog/gift-estate-tax-limits-2027';
const image = 'https://usfinnexus.com/images/gift-estate-tax-limits-2027.webp';
const faqs = [
  { question: 'What is the annual gift tax exclusion for 2027?', answer: 'The 2027 annual exclusion is $20,000 per donor for each recipient. A married couple may potentially transfer $40,000 to one recipient using both exclusions, subject to ownership, consent and gift-splitting rules.' },
  { question: 'What is the federal estate tax exemption for 2027?', answer: 'The 2027 basic exclusion amount is $15.48 million per individual. Taxable lifetime gifts using the unified credit generally reduce the exclusion remaining at death.' },
  { question: 'Does a gift above $20,000 automatically create gift tax?', answer: 'No. It commonly creates a Form 709 filing requirement and uses part of the donor’s lifetime exclusion, but tax may not be due until cumulative taxable transfers exceed the available exclusion.' },
  { question: 'Does the person receiving a gift pay federal income tax?', answer: 'A genuine gift is generally not included in the recipient’s federal gross income merely because it was received. Income later produced by the gifted property can be taxable, and basis rules affect a later sale.' },
  { question: 'Can tuition or medical payments avoid the annual exclusion limit?', answer: 'Qualifying tuition paid directly to an educational institution and qualifying medical expenses paid directly to the provider can be excluded from gift tax under separate rules. Payments to the beneficiary for reimbursement generally do not receive this direct-payment exclusion.' },
  { question: 'What is the 2027 exclusion for gifts to a noncitizen spouse?', answer: 'The inflation-adjusted annual exclusion for qualifying gifts to a spouse who is not a U.S. citizen is $201,000 for 2027, subject to statutory requirements.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, siteName: 'USFinNexus', publishedTime: '2026-11-08', modifiedTime: '2026-11-08', images: [{ url: image, width: 1200, height: 630, alt: 'Family discussing a 2027 gift and estate plan with a financial professional' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function GiftEstateTax2027Page() {
  return <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-08" dateModified="2026-11-08" authorName="USFinNexus Editorial Team" keywords={['2027 gift tax exclusion', 'estate tax exemption 2027', '$20000 gift limit', '2027 lifetime gift exemption', 'Form 709 2027']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/gift-estate-tax-limits-2027' }]} />
    <article>
      <header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Estate planning · Published and reviewed November 8, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">2027 Gift and Estate Tax Limits: $20,000 Annual Exclusion and $15.48M Exemption</h1><p className="mt-5 text-xl leading-relaxed text-slate-600">Giving more than the annual exclusion does not automatically mean writing a tax check—but reporting, basis and long-term planning still matter.</p></header>
      <figure className="mb-10"><div className="relative aspect-[1200/630] overflow-hidden rounded-3xl"><EditorialImage src="/images/gift-estate-tax-limits-2027.webp" alt="Family discussing a 2027 gift and estate plan with a financial professional" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" /></div><figcaption className="mt-2 text-center text-sm text-slate-500">Original editorial image illustrating a multigenerational gifting discussion.</figcaption></figure>
      <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
        <p><strong>Answer first:</strong> In 2027, one person can generally give up to <strong>$20,000 to each recipient</strong> under the federal annual gift-tax exclusion. The federal basic exclusion amount for lifetime taxable gifts and estates rises to <strong>$15.48 million per individual</strong>. A gift above $20,000 usually does not create immediate gift tax by itself; it may require Form 709 and reduce the donor’s remaining lifetime exclusion.</p>
        <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>“Gift limit” is misleading shorthand.</strong> The $20,000 figure is an annual exclusion from taxable gifts, not a legal cap on generosity. The donor—not normally the recipient—handles federal gift-tax reporting and any tax.</aside>

        <h2>2027 federal gift and estate tax numbers</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">2027 provision</th><th className="p-4">Amount</th><th className="p-4">Practical meaning</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4">Annual gift exclusion</td><td className="p-4 font-semibold">$20,000 per donor, per recipient</td><td className="p-4">Generally does not use lifetime exclusion</td></tr><tr><td className="p-4">Potential couple total</td><td className="p-4 font-semibold">$40,000 per recipient</td><td className="p-4">Uses both spouses’ exclusions; gift-splitting rules may apply</td></tr><tr><td className="p-4">Basic exclusion amount</td><td className="p-4 font-semibold">$15.48 million per individual</td><td className="p-4">Unified lifetime gift and estate tax threshold before adjustments</td></tr><tr><td className="p-4">Noncitizen-spouse annual exclusion</td><td className="p-4 font-semibold">$201,000</td><td className="p-4">Special limit for qualifying gifts; not the unlimited marital deduction</td></tr></tbody></table></div>
        <p>The IRS announced these inflation adjustments on November 5, 2026. The annual exclusion increases from $19,000 in 2026 to $20,000 in 2027. The basic exclusion increases from $15 million to $15.48 million for estates of people who die in 2027 and gifts made during 2027.</p>

        <h2>How the $20,000 annual exclusion works</h2>
        <p>The exclusion is measured separately for each donor and each recipient during the calendar year. One donor could give $20,000 to each of three children in 2027—a total of $60,000—without those gifts using the donor’s lifetime exclusion, assuming they are present-interest gifts and no special valuation issue applies.</p>
        <p>The annual exclusion generally requires the recipient to have a present interest: the immediate right to use, possess or enjoy the property. A future interest placed in a trust may not qualify unless the trust is structured to provide a qualifying present interest. Trust gifts are therefore not a do-it-yourself extension of the cash-gift rule.</p>
        <h3>Example: one parent gives $35,000</h3>
        <p>If one parent gives an adult child $35,000 in cash during 2027, the first $20,000 may fit within the annual exclusion. The remaining $15,000 is a taxable gift for federal gift-tax accounting. The donor would generally file Form 709 and apply $15,000 of available lifetime exclusion. If the donor has ample exclusion remaining, no current gift-tax payment may be due.</p>
        <h3>Example: gifts to several recipients</h3>
        <p>If the same donor gives $20,000 to a child and $20,000 to a grandchild, each transfer can have its own annual exclusion. The limit is not $20,000 total for the donor’s entire year.</p>

        <h2>How married couples may give $40,000</h2>
        <p>Each spouse has a separate $20,000 annual exclusion. When each spouse owns and transfers $20,000, the couple may give $40,000 to one recipient. If property comes entirely from one spouse, the spouses can elect to treat qualifying gifts as made one-half by each—commonly called gift splitting. Both spouses generally consent, and Form 709 filing can be required even when the combined exclusions shelter the gift.</p>
        <p>Do not assume a joint bank account automatically proves equal ownership for federal transfer-tax purposes. State property law, who funded the account, the type of asset and the transfer documentation can matter.</p>

        <h2>The $15.48 million lifetime and estate exclusion</h2>
        <p>Federal gift and estate taxes share a unified exclusion. Taxable lifetime gifts that consume exclusion generally reduce the amount available to shelter an estate at death. That is why “no tax due today” is not the same as “the gift has no transfer-tax consequence.”</p>
        <p>For a U.S. citizen or resident decedent dying in 2027, an estate may need Form 706 when the gross estate plus adjusted taxable gifts and other statutory amounts exceed the applicable filing threshold. An executor may also file below the threshold to elect portability of a deceased spouse’s unused exclusion. Portability is not automatic, and generation-skipping transfer tax has separate allocation rules.</p>
        <p>Large estates should track every filed Form 709, prior taxable gifts, appraisals and elections. The nominal $15.48 million figure can be affected by prior use, deceased-spousal unused exclusion, citizenship, residency, valuation and later law changes.</p>

        <h2>Direct tuition and medical payments</h2>
        <p>Qualifying tuition paid directly to an educational institution for another person and qualifying medical expenses paid directly to the provider can fall under separate gift-tax exclusions. These transfers can be made in addition to annual-exclusion gifts when every requirement is met.</p>
        <p>The payment must be direct. Giving a student $30,000 so the student can pay tuition is not the same as paying the school. Tuition exclusion generally does not cover books, supplies, room or board. The medical exclusion can cover qualifying medical expenses and certain insurance premiums, but not amounts reimbursed by insurance.</p>

        <h2>Does the recipient owe income tax?</h2>
        <p>A genuine gift is generally excluded from the recipient’s federal gross income. The recipient can still owe tax on income the property later produces—for example, interest, dividends or rent. A later sale can also create capital gain because gifted property commonly carries over the donor’s basis, subject to special dual-basis rules when fair market value at the gift date is below the donor’s adjusted basis.</p>
        <p>This basis difference is a major planning issue. Inherited property generally receives a basis tied to date-of-death value under different rules, while lifetime gifts often carry the donor’s historic basis. Transfer-tax savings should therefore be compared with potential income-tax cost, control, cash-flow and Medicaid or creditor implications.</p>

        <h2>When Form 709 may be required</h2>
        <p>A donor commonly files Form 709 when gifts to one recipient exceed the annual exclusion, when spouses elect gift splitting, when a future-interest gift is made or when certain generation-skipping transfers occur. Filing can be required even when no gift tax is payable.</p>
        <p>The return is generally due with the donor’s individual income-tax return deadline for the following year, but it is a separate return. An income-tax filing extension can extend Form 709 in some circumstances; payment rules and special extensions should be checked separately. For a 2027 gift, use the 2027 Form 709 and instructions when the IRS releases them.</p>

        <h2>Planning checklist before making a large gift</h2>
        <ol><li><strong>Identify the donor and owner.</strong> Confirm who legally owns the cash or property.</li><li><strong>Value the asset.</strong> Marketable securities are straightforward; business, real-estate and partnership interests can require a qualified appraisal.</li><li><strong>Check present-interest status.</strong> Trust restrictions can prevent annual-exclusion treatment.</li><li><strong>Track prior gifts.</strong> Maintain a recipient-by-recipient ledger for the calendar year.</li><li><strong>Model basis.</strong> Estimate the recipient’s capital-gain exposure after a future sale.</li><li><strong>Consider direct payments.</strong> Pay qualifying tuition or medical providers directly when appropriate.</li><li><strong>Coordinate spouses.</strong> Decide whether each spouse gives separately or a gift-splitting election is needed.</li><li><strong>Preserve liquidity.</strong> Do not give away emergency or retirement resources merely to use an exclusion.</li><li><strong>File and retain Form 709.</strong> Keep returns, appraisals and proof of delivery permanently with estate records.</li></ol>
        <p>Compare the prior-year rules in the <Link href="/blog/estate-gift-tax-exemption-2026">2026 estate and gift tax guide</Link>. For investments received by gift, the <Link href="/blog/capital-gains-tax-rates-2026">capital-gains guide</Link> explains why basis matters. For general federal-rate planning, see the <Link href="/blog/federal-tax-brackets-standard-deduction-2027">2027 tax bracket guide</Link>.</p>

        <h2>Common misconceptions</h2>
        <ul><li><strong>“I cannot give more than $20,000.”</strong> False; the annual exclusion is not a transfer cap.</li><li><strong>“The recipient pays gift tax.”</strong> The donor is generally responsible, with limited exceptions.</li><li><strong>“A gift above $20,000 means tax is immediately due.”</strong> Often it uses lifetime exclusion instead.</li><li><strong>“All gifts are income-tax deductions.”</strong> Personal gifts are not charitable deductions.</li><li><strong>“A gift and an inheritance have the same basis.”</strong> They often do not.</li><li><strong>“Paying a family member’s tuition qualifies.”</strong> The separate exclusion generally requires direct payment to the school.</li></ul>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and tax disclaimer</h2>
        <p>Primary sources reviewed November 8, 2026: the IRS <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2027-taxpayers-continue-to-benefit-from-the-working-families-tax-cuts">2027 inflation-adjustment release</a>, <a href="https://www.irs.gov/pub/irs-drop/rp-26-35.pdf">Revenue Procedure 2026-35</a>, the IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-gift-taxes">gift-tax FAQs</a>, and the IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax">estate and gift tax update</a>. This article is general education, not individualized tax, legal or estate-planning advice. Transfer-tax consequences depend on ownership, citizenship, residency, prior gifts, valuation and document terms. Consult a qualified attorney or tax professional before a significant transfer.</p>
      </div>
      <AuthorBio /><ContextualInternalLinks currentSlug="gift-estate-tax-limits-2027" showBlogs showCalculators />
    </article>
  </main>;
}
