import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/medicare-part-b-premium-deductible-2026';
const IMAGE = 'https://usfinnexus.com/images/medicare-part-b-premium-deductible-2026.webp';

export const metadata: Metadata = {
    title: 'Medicare Part B Premium & Deductible 2026: Costs Explained',
    description: 'Medicare Part B costs $202.90 monthly in 2026 with a $283 deductible. Learn coinsurance, IRMAA, late penalties and cost-help options.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article', title: 'Medicare Part B Premium and Deductible for 2026',
        description: 'Understand the $202.90 standard premium, $283 deductible, usual 20% coinsurance, higher-income charges and help with costs.',
        url: URL, publishedTime: '2026-09-02', modifiedTime: '2026-09-02',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Older couple reviewing their 2026 Medicare Part B costs and household health-care budget' }],
    },
    twitter: { card: 'summary_large_image', title: 'Medicare Part B Costs 2026: Premium and Deductible', description: 'A CMS-sourced guide to standard Part B costs, IRMAA, enrollment penalties and cost-help programs.', images: [IMAGE] },
};

const faqs = [
    { question: 'How much is the Medicare Part B premium in 2026?', answer: 'The standard Medicare Part B premium is $202.90 per month in 2026. Some beneficiaries pay more because of income-related monthly adjustment amounts, and a person who enrolled late without an exception may also owe a penalty.' },
    { question: 'What is the Medicare Part B deductible for 2026?', answer: 'The annual Part B deductible is $283 in 2026. After the deductible, Original Medicare beneficiaries usually pay 20% of the Medicare-approved amount for covered Part B services when the provider accepts assignment, though service-specific rules can differ.' },
    { question: 'Is the $283 Part B deductible monthly?', answer: 'No. The $283 Part B deductible is an annual deductible for 2026, not a monthly charge. The $202.90 standard premium is monthly and is owed even in a month when the beneficiary receives no Part B-covered service.' },
    { question: 'Does Medicare Part B have an out-of-pocket maximum?', answer: 'Original Medicare by itself does not set an annual out-of-pocket maximum for Part A and Part B services. A Medigap policy, employer coverage, Medicaid or a Medicare Advantage plan can change cost sharing; Medicare Advantage plans have their own annual limits for covered Part A and Part B services.' },
    { question: 'What is the Part B late enrollment penalty in 2026?', answer: 'The Part B premium generally increases by 10% for each full 12-month period a person could have had Part B but did not enroll. The penalty is normally added for as long as the person has Part B, unless an exception such as a qualifying Special Enrollment Period applies.' },
    { question: 'Can I get help paying the 2026 Part B premium?', answer: 'Possibly. State-run Medicare Savings Programs may pay the Part B premium and, depending on the program, other Medicare cost sharing. Federal limits apply, but states may use more generous rules or count income and resources differently, so Medicare recommends applying through your state even if you are unsure.' },
];

export default function MedicarePartBPremiumDeductible2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema title="Medicare Part B Premium and Deductible 2026: Complete Cost Guide" description="CMS-sourced guide to the 2026 Part B standard premium, annual deductible, common coinsurance, IRMAA, late enrollment penalties and help with costs." url={URL} datePublished="2026-09-02" dateModified="2026-09-02" authorName="USFinNexus Editorial Team" image={IMAGE} keywords={['Medicare Part B premium 2026', 'Medicare Part B deductible 2026', 'Medicare costs 2026', 'Part B coinsurance 2026', 'Part B late enrollment penalty', 'Medicare Savings Program 2026']} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Medicare Part B Costs 2026', item: '/blog/medicare-part-b-premium-deductible-2026' }]} />
            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Medicare • Published September 2, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Medicare Part B Premium and Deductible 2026: Complete Cost Guide</h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">The standard premium is only the first line of a Part B budget. Understand the deductible, coinsurance, income surcharge and enrollment rules before estimating annual cost.</p>
                </header>
                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image src="/images/medicare-part-b-premium-deductible-2026.webp" alt="Older couple reviewing their 2026 Medicare Part B costs and household health-care budget" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" />
                </div>
                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> The standard Medicare Part B premium is <strong>$202.90 per month in 2026</strong>, and the annual Part B deductible is <strong>$283</strong>. After meeting the deductible, a person with Original Medicare usually pays 20% of the Medicare-approved amount for covered Part B services when the provider accepts assignment. Higher-income beneficiaries and some late enrollees pay more.</p>
                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">This article is general educational information, not medical, insurance, legal or financial advice. Medicare coverage and personal costs depend on the service, provider, other coverage, enrollment history and state programs. Confirm your situation with Medicare, Social Security or a qualified counselor.</aside>

                    <h2>2026 Medicare Part B costs at a glance</h2>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Part B cost</th><th className="p-4">2026 amount</th><th className="p-4">How it works</th></tr></thead><tbody className="divide-y divide-slate-200">
                            <tr><td className="p-4 font-semibold">Standard premium</td><td className="p-4">$202.90 monthly</td><td className="p-4">Paid every month, even without using a Part B service</td></tr>
                            <tr><td className="p-4 font-semibold">Annual deductible</td><td className="p-4">$283</td><td className="p-4">Paid before Original Medicare begins paying for many services</td></tr>
                            <tr><td className="p-4 font-semibold">Typical coinsurance</td><td className="p-4">Usually 20%</td><td className="p-4">Share of the Medicare-approved amount after the deductible</td></tr>
                            <tr><td className="p-4 font-semibold">Income surcharge</td><td className="p-4">Varies</td><td className="p-4">IRMAA can raise the monthly premium based on tax-return income</td></tr>
                            <tr><td className="p-4 font-semibold">Late penalty</td><td className="p-4">10% per full 12-month delay</td><td className="p-4">Generally added for as long as Part B continues</td></tr>
                        </tbody></table>
                    </div>
                    <p>CMS announced the 2026 figures on November 14, 2025. The standard premium rose $17.90 from $185 in 2025, while the deductible rose $26 from $257. CMS attributed the increase mainly to projected price changes and expected use of services.</p>

                    <h2>What does the $202.90 Part B premium cover?</h2>
                    <p>Part B is medical insurance. It helps cover physicians&apos; services, outpatient hospital services, certain home health services, durable medical equipment and other medically necessary or preventive care that Part A does not cover. Paying the premium does not mean every service is free; the deductible, coinsurance, copayments and coverage rules still apply.</p>
                    <p>The standard monthly premium adds up to <strong>$2,434.80 for 12 months</strong> in 2026 before considering IRMAA, any late penalty or service-related costs. Many Social Security beneficiaries have the premium deducted from their monthly benefit. Others receive a bill from Medicare or use another approved payment arrangement.</p>
                    <p>A realistic retirement plan also includes Part D or other prescription coverage, supplemental coverage if selected, dental and vision expenses, and the beneficiary&apos;s share for services. Use the <Link href="/calculators/retirement">Retirement Calculator</Link> to model a health-care expense line that grows over time rather than treating the 2026 premium as permanent.</p>

                    <h2>How the $283 annual deductible works</h2>
                    <p>The Part B deductible is $283 for the 2026 calendar year. It is not charged every month and is not necessarily collected in a single payment. Medicare tracks deductible-applicable approved amounts as claims are processed. Once the beneficiary has met it, Medicare generally begins applying normal cost-sharing rules for covered services.</p>
                    <p>Some preventive services can be covered without the Part B deductible or coinsurance when all Medicare requirements are satisfied. Other services have different payment structures, including hospital outpatient copayments. Check the specific service in Medicare&apos;s coverage information and confirm that the provider accepts Medicare assignment.</p>

                    <h3>Why the 20% coinsurance can be the larger risk</h3>
                    <p>After the deductible, Original Medicare beneficiaries usually pay 20% of the Medicare-approved amount for covered Part B services when the provider accepts assignment. That percentage has no simple dollar ceiling across the year. Original Medicare alone does not provide an annual out-of-pocket maximum for Part A and Part B services.</p>
                    <p>For a simplified example, if $5,000 of deductible-applicable Medicare-approved Part B services occurred after the deductible was met, 20% would be $1,000. Actual claims may include services with different rules, and providers that do not accept assignment can affect the bill where excess charges are permitted. This is budgeting math, not a coverage determination.</p>

                    <h2>Who pays more than $202.90 in 2026?</h2>
                    <p>Some beneficiaries pay an income-related monthly adjustment amount, or IRMAA, on top of the standard premium. For 2026, the first higher-income tier begins above modified adjusted gross income of $109,000 for an individual return or $218,000 for a joint return. CMS says income-related amounts affect roughly 8% of people with Part B.</p>
                    <p>Social Security generally uses federal tax-return information supplied by the IRS. A life-changing event such as marriage, divorce, death of a spouse, work stoppage or loss of income-producing property may support a request for a new determination when an older return no longer reflects current income. Read the separate <Link href="/blog/medicare-irmaa-brackets-2026">2026 Medicare IRMAA brackets guide</Link> for all tiers and the appeal process; this guide focuses on standard Part B costs.</p>
                    <p>Retirement-account withdrawals and capital gains can affect modified adjusted gross income. Coordinate large conversions or distributions with the <Link href="/blog/required-minimum-distributions-2026">2026 RMD guide</Link> and tax advice, especially when income is near an IRMAA boundary.</p>

                    <h2>Part B late enrollment penalty in 2026</h2>
                    <p>A person who does not enroll when first eligible may face a lasting surcharge unless a Special Enrollment Period or another exception applies. Medicare states that the premium generally increases by 10% for each full 12-month period the person could have had Part B but did not sign up. It is usually charged for as long as Part B coverage continues.</p>
                    <p>Medicare&apos;s 2026 example shows a two-full-year delay producing a 20% penalty. Twenty percent of $202.90 is $40.58; after Medicare&apos;s rounding convention, the example monthly total is $243.50. The base premium can change each year, so a percentage penalty can change in dollar terms.</p>

                    <h3>Working after age 65</h3>
                    <p>Active employer coverage can create a Special Enrollment Period, but rules depend on whose employment provides coverage and other facts. Medicare says the Initial Enrollment Period generally starts three months before the month a person turns 65 and ends three months after it. For qualifying current-employment coverage, an eight-month Part B Special Enrollment Period can start when work or coverage ends, whichever happens first.</p>
                    <p>COBRA and retiree coverage are not interchangeable with current-employment coverage for this deadline. Medicare warns that the eight-month clock can begin when active work ends even if COBRA is elected. Ask the employer benefits administrator and Medicare for a written timeline before delaying Part B.</p>

                    <h2>Medicare Advantage and Medigap costs</h2>
                    <p>A Medicare Advantage enrollee must still have Part B and generally continue paying the Part B premium. The plan may have its own premium, deductible, copayments, network and annual out-of-pocket limit for covered Part A and Part B services. Plan costs vary, so $202.90 is not the entire monthly health-plan price.</p>
                    <p>A Medigap policy works with Original Medicare and may pay some deductibles, coinsurance or copayments depending on the standardized plan. It has a separate private premium. Enrollment timing matters because federal Medigap open-enrollment protections are not the same as Medicare&apos;s annual fall Open Enrollment Period, and state rights can differ. Review the separate <Link href="/blog/medicare-open-enrollment-2027">2027 Medicare Open Enrollment checklist</Link> before changing health or drug coverage for January.</p>
                    <p>Prescription coverage is separate. Review the <Link href="/blog/medicare-part-d-costs-2026">2026 Medicare Part D cost guide</Link> for the $615 maximum plan deductible and prescription cost-sharing changes. Do not add a national “average” Part D premium to every household; premiums and formularies vary by plan and location.</p>

                    <h2>Help paying the Part B premium and deductible</h2>
                    <p>Medicare Savings Programs are administered by states. Depending on the program, they can pay Part A or Part B premiums and may also pay deductibles, coinsurance and copayments. Medicare advises people to apply even if they are unsure because states can use limits or counting rules more generous than the federal figures.</p>
                    <p>For 2026, the federal QMB monthly income limit is $1,350 for an individual or $1,824 for a married couple, with resource limits of $9,950 and $14,910 respectively. QMB can cover the Part B premium and Medicare cost sharing. SLMB and QI use higher income limits and primarily help with the Part B premium. Alaska, Hawaii and state rules can differ, and not every item is counted as a resource.</p>
                    <p>Apply through the state Medicaid agency. A State Health Insurance Assistance Program, known as SHIP, can provide free local counseling about Medicare choices and assistance programs. Never pay a caller for access to an application or disclose a Medicare number in response to an unsolicited contact.</p>

                    <h2>How to estimate your 2026 Part B budget</h2>
                    <ol>
                        <li>Start with $2,434.80 for 12 months of the standard premium.</li>
                        <li>Check whether IRMAA or a late penalty appears on your notice.</li>
                        <li>Add the $283 annual deductible if you expect deductible-applicable care.</li>
                        <li>Estimate coinsurance using known care patterns and approved amounts where available.</li>
                        <li>Add Medigap, Medicare Advantage or employer-plan costs as applicable.</li>
                        <li>Add Part D premiums and expected prescription costs separately.</li>
                        <li>Check Medicare Savings Program and Extra Help eligibility.</li>
                    </ol>
                    <p>Keep a reserve for care that Original Medicare does not routinely cover, such as most long-term custodial care and many routine dental, vision and hearing expenses. A good plan separates fixed premiums from unpredictable service costs and reevaluates plan choices during the appropriate enrollment window.</p>

                    <h2>Common Part B cost mistakes</h2>
                    <ul>
                        <li>Treating the $283 deductible as a monthly expense.</li>
                        <li>Assuming the monthly premium eliminates coinsurance.</li>
                        <li>Budgeting only $202.90 without checking IRMAA or a late penalty.</li>
                        <li>Assuming Original Medicare has an annual out-of-pocket maximum.</li>
                        <li>Dropping Part B after joining Medicare Advantage, even though it is required.</li>
                        <li>Waiting until COBRA ends before checking the Special Enrollment Period.</li>
                        <li>Skipping a Medicare Savings Program application because income seems slightly high.</li>
                    </ul>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles" target="_blank" rel="noopener noreferrer">CMS: 2026 Medicare Parts A and B premiums and deductibles</a></li>
                        <li><a href="https://www.medicare.gov/basics/costs/medicare-costs" target="_blank" rel="noopener noreferrer">Medicare.gov: 2026 Medicare costs</a></li>
                        <li><a href="https://www.medicare.gov/basics/costs/medicare-costs/avoid-penalties" target="_blank" rel="noopener noreferrer">Medicare.gov: Part B late enrollment penalty</a></li>
                        <li><a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare" target="_blank" rel="noopener noreferrer">Medicare.gov: when to sign up</a></li>
                        <li><a href="https://www.medicare.gov/basics/costs/help/medicare-savings-programs" target="_blank" rel="noopener noreferrer">Medicare.gov: Medicare Savings Programs and 2026 limits</a></li>
                    </ul>

                    <h2>Frequently asked questions</h2>
                    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
                </div>
                <AuthorBio />
            </article>
        </main>
    );
}
