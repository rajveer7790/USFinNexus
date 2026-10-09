import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const url = 'https://usfinnexus.com/blog/federal-scholarship-tax-credit-2027';
const image = 'https://usfinnexus.com/images/federal-scholarship-tax-credit-2027.webp';
const title = 'Federal Scholarship Tax Credit 2027: $1,700 SGO Donation Rules';
const metaTitle = 'Federal Scholarship Tax Credit 2027: $1,700 SGO Rules';
const description = 'IRS proposed rules explain a new 2027 federal tax credit of up to $1,700 for qualified cash donations to eligible scholarship-granting organizations.';
const faqs = [
  { question: 'What is the federal scholarship tax credit for 2027?', answer: 'It is a new nonrefundable federal income-tax credit for qualified cash contributions to eligible Scholarship Granting Organizations in participating states. The credit begins for contributions made from January 1, 2027, subject to final IRS rules.' },
  { question: 'How much is the scholarship tax credit?', answer: 'The proposed regulations generally allow an individual credit of up to $1,700. The IRS says married couples filing jointly may claim up to $3,400 when both spouses make qualified contributions, subject to the final rules and tax liability.' },
  { question: 'Can unused scholarship tax credit carry forward?', answer: 'Under the proposed rules, an excess eligible credit generally may carry forward for up to five years. A nonrefundable credit cannot reduce federal income tax below zero.' },
  { question: 'Does every donation to a school qualify?', answer: 'No. The contribution must be cash and must go to an eligible Scholarship Granting Organization on a participating state or District of Columbia list submitted under the federal program.' },
  { question: 'Can I claim both a charitable deduction and the new credit?', answer: 'The same payment cannot produce an unrestricted double federal tax benefit. The proposed rules coordinate the credit with charitable-contribution deductions and state tax benefits, so keep the receipt and follow final IRS instructions.' },
  { question: 'Are the October 2026 IRS rules final?', answer: 'No. The IRS issued proposed regulations and temporary procedures. Taxpayers and organizations should watch for final regulations, participating-state lists and official 2027 forms before relying on a contribution.' }
];

export const metadata: Metadata = {
  title: metaTitle,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'article', title: metaTitle, description, url, siteName: 'USFinNexus', images: [{ url: image, width: 1200, height: 630, alt: 'Family reviewing scholarship documents, a tax form and education savings' }] },
  twitter: { card: 'summary_large_image', title: metaTitle, description, images: [image] }
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} datePublished="2026-10-09" dateModified="2026-10-09" authorName="USFinNexus Editorial Team" image={image} keywords={['federal scholarship tax credit 2027', '$1700 scholarship tax credit', 'Scholarship Granting Organization donation', 'SGO tax credit 2027']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/federal-scholarship-tax-credit-2027' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Taxes and education · Reviewed October 9, 2026</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> Starting January 1, 2027, an individual may qualify for a nonrefundable federal tax credit of up to $1,700 for a qualified cash contribution to an eligible Scholarship Granting Organization, or SGO, in a participating state. The IRS says qualifying married couples filing jointly may reach $3,400 when both spouses contribute. October 2026 guidance is proposed, so verify the final rules and approved organization list before donating.</p>
        <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"><img src="/images/federal-scholarship-tax-credit-2027.webp" alt="Family reviewing scholarship documents, a tax form and education savings" width="1200" height="630" className="h-auto w-full" /></div>
        <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">Important: The IRS released proposed regulations and temporary procedures on October 1, 2026. Details may change in final guidance. A donation made to an unapproved organization or before the federal start date may not qualify.</aside>

        <h2>What the new scholarship credit does</h2>
        <p>The federal program is designed to encourage cash gifts to nonprofit organizations that award scholarships for eligible elementary and secondary education expenses. Rather than giving the tax benefit directly for tuition paid by a family, the credit is connected to a qualified contribution made to an eligible SGO. The organization, state participation and contribution documentation therefore matter as much as the dollar amount.</p>
        <p>A tax credit generally reduces federal income tax dollar for dollar, while a deduction reduces taxable income. That makes the new credit potentially more valuable than an equal-sized deduction, but it is nonrefundable. If your federal income-tax liability is below the otherwise allowable credit, the credit does not create a refund by itself. Proposed rules generally allow unused eligible amounts to carry forward for up to five years.</p>

        <h2>The $1,700 individual limit and $3,400 joint amount</h2>
        <p>The proposed rules set a maximum annual credit of $1,700 for an individual. An IRS announcement explains that married taxpayers filing a joint return may claim up to $3,400 when both spouses make qualified contributions. This is not a matching government deposit and does not mean every $3,400 gift automatically generates a $3,400 refund. The credit remains limited by qualified contributions, federal income-tax liability and coordination rules.</p>
        <p>Couples should preserve records showing the contribution attributed to each spouse and wait for final return instructions. Filing status, contribution timing and the approved SGO receipt may determine how the amount is reported. Do not split or relabel a contribution after the fact based only on an online example.</p>

        <h2>Which contributions may qualify?</h2>
        <p>The proposed federal credit focuses on qualified cash contributions. Donated property, volunteer time, tuition paid directly to a school and gifts to a general education charity are not automatically the same thing. The recipient must be an eligible SGO under the federal framework, and its state or the District of Columbia must participate by electing into the program and submitting a qualifying list.</p>
        <p>This creates a two-step verification process. First, confirm that your state participates for the relevant year. Second, confirm that the exact legal name of the recipient appears on the official list. A familiar local scholarship fund may do valuable work but still fail the technical federal eligibility test. Ask for the organization's tax identification details and a receipt that identifies the federal program.</p>

        <h2>Why state participation matters</h2>
        <p>The federal credit is national, but participating states play an administrative role. The IRS reported that 30 states had indicated participation as of July 24, 2026. That number is a dated status update, not a permanent guarantee. A state can have its own education-credit program without necessarily completing the federal election process in the same way.</p>
        <p>Before contributing, check the IRS page and the appropriate state agency. Avoid relying on a fundraising page that merely says an application is pending. If the state list changes, save a dated copy of the official list or confirmation available when you donated. Final IRS procedures should explain the records taxpayers need to retain.</p>

        <h2>Credit versus charitable deduction</h2>
        <p>The same dollar cannot generally create unlimited overlapping federal benefits. Proposed regulations coordinate the new credit with the charitable-contribution deduction and with state tax credits. A payment treated as a qualified contribution for the federal scholarship credit may have to be reduced or handled differently when determining another deduction.</p>
        <p>That coordination is one reason not to enter a 2027 donation into a tax return based on a rough internet formula. Keep the contemporaneous receipt, proof of payment, organization eligibility information and any state credit certificate. Tax software and final IRS instructions should apply the federal limits, carryforward and benefit coordination. If a contribution is large relative to your tax liability, consult a qualified tax professional before year-end.</p>

        <h2>How the five-year carryforward can help</h2>
        <p>Suppose an individual makes a $1,700 qualified contribution but can use only $1,100 of the nonrefundable credit for 2027. Under the proposed rules, the remaining eligible $600 may generally be carried to later years, subject to the five-year period and final limitations. Carryforward does not make the credit refundable; it preserves a possible future offset when sufficient tax liability exists.</p>
        <p>Track each contribution year separately. Future contributions may create new credits while older balances remain, and the final form may specify ordering rules. Keep returns, receipts and carryforward worksheets together. If you change tax preparers, provide the complete history rather than only the current-year receipt.</p>

        <h2>A safe donation checklist for 2027</h2>
        <ol>
          <li>Wait until the program's January 1, 2027 effective date for a federal-credit contribution.</li>
          <li>Confirm that your state or the District of Columbia is participating.</li>
          <li>Verify the recipient on the official eligible SGO list.</li>
          <li>Use a traceable cash payment method and keep proof of payment.</li>
          <li>Obtain a receipt with the organization's legal name, date and amount.</li>
          <li>Check whether a state credit or deduction changes the federal calculation.</li>
          <li>Estimate your federal income-tax liability before assuming the full credit is usable.</li>
          <li>Retain final IRS forms and any carryforward worksheet with your tax records.</li>
        </ol>

        <h2>Scam and marketing warning signs</h2>
        <p>A promoter should not guarantee that a contribution will increase your refund by more than the allowable credit or claim that every school fundraiser qualifies. Be skeptical of pressure to donate before the official start date, requests to pay an individual, or an organization that refuses to provide its legal name and eligibility evidence. A website that uses the words scholarship or tax credit is not proof of approval.</p>
        <p>Never share an IRS account password or identity-verification code with a fundraiser. Search the organization independently, check its nonprofit status, compare the name with the official SGO list and review how it selects scholarship recipients. The tax credit can be useful, but the donation should still go to a transparent organization whose mission you understand.</p>

        <h2>Planning example</h2>
        <p>Consider a married couple filing jointly who expect sufficient federal income-tax liability and want to support scholarships. If each spouse makes a separately documented $1,700 qualified cash contribution after January 1, 2027 to an eligible SGO, the IRS proposal says their combined potential credit may be as much as $3,400. The final usable amount could be lower because of tax liability, state benefits, documentation or final regulations.</p>
        <p>They should not reduce payroll withholding by $3,400 before confirming eligibility and cash flow. A credit claimed at filing does not erase the need to pay taxes during the year. Use our <Link href="/calculators/income-tax">income tax calculator</Link> for a planning estimate and the <Link href="/calculators/budget">budget calculator</Link> to confirm that a donation will not compromise emergency savings or required bills.</p>

        <h2>What parents should know</h2>
        <p>The donor tax credit and a student's scholarship are different sides of the program. A parent's contribution does not necessarily guarantee a scholarship for that parent's child. Eligible SGOs must follow program requirements for awarding assistance, and private organizations may have application windows, income criteria or school restrictions.</p>
        <p>Families seeking aid should check the SGO's scholarship application separately from the donation process. Compare the award with tuition, fees, transportation and other education costs. A scholarship may also interact with other assistance. Do not donate money you need for near-term school bills merely because a credit may be available later.</p>

        <h2>What remains uncertain</h2>
        <p>Because the October 2026 regulations are proposed, final definitions, reporting mechanics and forms may change. Participating-state and eligible-SGO lists can also evolve before the first 2027 contributions. The IRS may issue examples or additional procedures addressing joint filers, carryforwards, state tax benefits and substantiation.</p>
        <p>For now, treat the announced amount and start date as a planning framework rather than permission to send money to any organization. Recheck official guidance close to the contribution date and again when preparing the 2027 return.</p>

        <h2>Official sources</h2>
        <p>Read the <a href="https://www.irs.gov/newsroom/treasury-irs-issue-proposed-regulations-for-new-federal-tax-credit-for-contributions-to-scholarship-granting-organizations" target="_blank" rel="noopener noreferrer">IRS announcement of the proposed regulations</a> and the <a href="https://www.irs.gov/credits-deductions/individuals/federal-tax-credit-for-scholarship-granting-organizations" target="_blank" rel="noopener noreferrer">IRS scholarship tax credit resource page</a>. Final regulations and official forms control over this summary.</p>

        <h2>Frequently asked questions</h2>
        <CalculatorFAQ faqs={faqs} title="Federal Scholarship Tax Credit 2027 FAQs" />
        <h2>Disclaimer</h2>
        <p>This article is for general education and is not individualized tax, legal or education advice. The rules were proposed as of October 9, 2026. Consult current IRS guidance and a qualified professional before claiming a credit.</p>
      </article>
    </main>
  </>;
}
