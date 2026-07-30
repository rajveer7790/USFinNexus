import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/medicare-irmaa-brackets-2026';
const IMAGE = 'https://usfinnexus.com/images/medicare-irmaa-brackets-2026.webp';

export const metadata: Metadata = {
    title: 'Medicare IRMAA 2026: Part B & D Premiums | USFinNexus',
    description: 'See every 2026 Medicare IRMAA bracket, Part B premium and Part D surcharge, based mainly on 2024 MAGI, plus SSA-44 reduction and appeal rules.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: '2026 Medicare IRMAA Brackets: Part B and Part D Costs',
        description: 'Find your 2026 income bracket, estimate monthly Medicare premiums and learn when a life-changing event may support a reduction.',
        url: URL,
        publishedTime: '2026-07-30',
        modifiedTime: '2026-07-30',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Retired American couple reviewing Medicare cost planning with a financial professional' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Medicare IRMAA Brackets for 2026',
        description: 'Official 2026 income thresholds, Part B premiums, Part D surcharges and appeal steps.',
        images: [IMAGE],
    },
};

const faqs = [
    {
        question: 'What income triggers IRMAA in 2026?',
        answer: 'For 2026, IRMAA generally begins when 2024 modified adjusted gross income was above $109,000 for an individual filer or above $218,000 for married filing jointly. A special two-tier table generally applies to married people who filed separately and lived together during the tax year.',
    },
    {
        question: 'What is the standard Medicare Part B premium for 2026?',
        answer: 'The standard 2026 Medicare Part B premium is $202.90 per month. The annual Part B deductible is $283. IRMAA can raise the monthly Part B premium to $284.10, $405.80, $527.50, $649.20 or $689.90, depending on filing status and MAGI.',
    },
    {
        question: 'Which tax return does Medicare use for 2026 IRMAA?',
        answer: 'Social Security generally uses MAGI from the 2024 federal tax return to determine 2026 IRMAA because that is two years earlier. If 2024 information is unavailable, it may use 2023 information. MAGI for this purpose is adjusted gross income plus tax-exempt interest.',
    },
    {
        question: 'Does IRMAA apply separately to each spouse?',
        answer: 'Yes. A married couple’s joint MAGI determines the bracket, but each spouse enrolled in Part B or Part D owes the applicable adjustment. If both spouses have both coverages, the household impact can be roughly twice the per-person surcharge shown.',
    },
    {
        question: 'Can I appeal IRMAA after retirement?',
        answer: 'A work stoppage or reduction is one of the life-changing events that may support a request for a new IRMAA decision when household income falls. Submit Form SSA-44 with evidence of the event and estimated lower income. An ordinary disagreement with correct tax data is handled differently from a qualifying life-changing event.',
    },
    {
        question: 'Do Roth IRA withdrawals count toward IRMAA MAGI?',
        answer: 'A qualified Roth IRA distribution is generally not included in federal adjusted gross income and therefore generally does not increase IRMAA MAGI. Traditional IRA withdrawals and taxable Roth conversions generally increase AGI. Tax treatment depends on the transaction, so confirm it before acting solely to manage IRMAA.',
    },
];

export default function MedicareIrmaaBrackets2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema
                title="Medicare IRMAA Brackets 2026: Part B Premiums and Part D Surcharges"
                description="Official 2026 IRMAA income thresholds, monthly Medicare costs, two-year lookback rules and life-changing-event reduction steps."
                url={URL}
                datePublished="2026-07-30"
                dateModified="2026-07-30"
                authorName="USFinNexus Editorial Team"
                image={IMAGE}
                keywords={[
                    'Medicare IRMAA brackets 2026',
                    '2026 Medicare Part B premium',
                    'Part D IRMAA 2026',
                    'Medicare income limits 2026',
                    'SSA-44 IRMAA appeal',
                    'Medicare MAGI calculation',
                ]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                        })),
                    }),
                }}
            />

            <Breadcrumbs items={[
                { name: 'Blog', item: '/blog' },
                { name: 'Medicare IRMAA Brackets 2026', item: '/blog/medicare-irmaa-brackets-2026' },
            ]} />

            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Retirement healthcare • Updated July 30, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        Medicare IRMAA Brackets 2026: How Much Will Part B and Part D Cost?
                    </h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">
                        Medicare uses a two-year income lookback, so a 2024 tax decision can raise 2026 premiums even when today&apos;s retirement income is much lower.
                    </p>
                </header>

                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/medicare-irmaa-brackets-2026.webp"
                        alt="Retired American couple reviewing Medicare premium and retirement planning with a financial professional"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 960px"
                    />
                </div>

                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> The standard 2026 Part B premium is $202.90 per month. IRMAA begins above $109,000 of 2024 MAGI for an individual return or above $218,000 for married filing jointly. At the highest tier, Part B is $689.90 per person per month and Part D adds $91 to the selected drug plan&apos;s monthly premium.</p>

                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
                        This article provides general educational information, not individualized tax, legal, investment or Medicare advice. A conversion, gain, withdrawal or filing-status change can affect many taxes and benefits beyond IRMAA. Verify your notice with Social Security, Medicare and qualified advisers before changing a financial plan.
                    </aside>

                    <h2>2026 IRMAA brackets for individual and joint returns</h2>
                    <p>The table uses 2024 MAGI because Social Security generally looks back two years. Part B amounts are the total monthly premium per enrolled person. The Part D amount is a surcharge added to the premium charged by the person&apos;s prescription drug plan.</p>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="min-w-[760px] w-full text-left text-sm">
                            <thead className="bg-slate-950 text-white">
                                <tr><th className="p-4">2024 MAGI: individual</th><th className="p-4">2024 MAGI: joint</th><th className="p-4">2026 Part B</th><th className="p-4">Part D IRMAA</th></tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr><td className="p-4">$109,000 or less</td><td className="p-4">$218,000 or less</td><td className="p-4">$202.90</td><td className="p-4">$0 + plan premium</td></tr>
                                <tr><td className="p-4">&gt;$109,000–$137,000</td><td className="p-4">&gt;$218,000–$274,000</td><td className="p-4">$284.10</td><td className="p-4">$14.50 + plan premium</td></tr>
                                <tr><td className="p-4">&gt;$137,000–$171,000</td><td className="p-4">&gt;$274,000–$342,000</td><td className="p-4">$405.80</td><td className="p-4">$37.50 + plan premium</td></tr>
                                <tr><td className="p-4">&gt;$171,000–$205,000</td><td className="p-4">&gt;$342,000–$410,000</td><td className="p-4">$527.50</td><td className="p-4">$60.40 + plan premium</td></tr>
                                <tr><td className="p-4">&gt;$205,000–&lt;$500,000</td><td className="p-4">&gt;$410,000–&lt;$750,000</td><td className="p-4">$649.20</td><td className="p-4">$83.30 + plan premium</td></tr>
                                <tr><td className="p-4">$500,000 or more</td><td className="p-4">$750,000 or more</td><td className="p-4">$689.90</td><td className="p-4">$91.00 + plan premium</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The 2026 Part B annual deductible is $283. That deductible is separate from the monthly premium and IRMAA. Medicare Advantage and Medigap premiums, Part D plan premiums, late-enrollment penalties and out-of-pocket healthcare costs are also separate.</p>

                    <h2>Special 2026 table for married filing separately</h2>
                    <p>A married beneficiary who lived with a spouse at some time during the 2024 tax year but filed separately generally faces a compressed table. MAGI of $109,000 or less receives the $202.90 standard Part B premium. MAGI above $109,000 but below $391,000 produces a $649.20 Part B premium and an $83.30 Part D adjustment. MAGI of $391,000 or more produces a $689.90 Part B premium and a $91 Part D adjustment.</p>
                    <p>If spouses lived apart for the entire tax year, different treatment may apply. Do not assume the tax-return filing label tells Social Security the complete living arrangement; respond to the notice with the required facts and evidence.</p>

                    <h2>What does IRMAA cost over a full year?</h2>
                    <p>IRMAA applies per beneficiary, not per household. At the first tier, Part B adds $81.20 and Part D adds $14.50 per month. A person enrolled in both pays $95.70 more monthly, or $1,148.40 over 12 months, in addition to the standard Part B and drug-plan premiums.</p>
                    <p>At the third tier, the combined adjustments are $324.60 for Part B and $60.40 for Part D: $385 per month, or $4,620 annually per person. At the highest tier, the combined additions are $487 for Part B and $91 for Part D: $578 per month, or $6,936 annually per person.</p>
                    <p>If both spouses are enrolled in both parts and land in the same tier, double those adjustment amounts. For example, a jointly filing couple at the first tier could pay $2,296.80 of combined annual IRMAA. Actual Part D plan premiums still sit on top, and enrollment dates can make a calendar-year total different.</p>

                    <h2>How Social Security calculates Medicare MAGI</h2>
                    <p>For IRMAA, MAGI is adjusted gross income plus tax-exempt interest. It is not simply taxable income and is not the same specialized MAGI used for every other tax provision. Municipal-bond interest can therefore raise Medicare MAGI even though it is generally excluded from federal taxable income.</p>
                    <p>Social Security generally receives the most recent available tax data from the IRS. For 2026 premiums, that is usually the 2024 return; if it is unavailable, 2023 information may be used. The agency sends an initial determination showing the income, filing status and premium adjustment.</p>
                    <p>A Roth conversion generally adds taxable income to AGI, as can traditional IRA distributions, realized capital gains, taxable pension income and business profit. A qualified Roth IRA distribution generally does not add to AGI. Review <Link href="/blog/roth-ira-income-limits-2026">2026 Roth IRA income rules</Link> and <Link href="/blog/401k-contribution-limits-2026">2026 workplace-plan limits</Link>, but do not execute a multi-year tax strategy based on one premium alone.</p>

                    <h2>IRMAA is a cliff, not a gradual phase-in</h2>
                    <p>Crossing a threshold by one dollar can move the beneficiary into the next full monthly tier. That makes year-end income estimates important, especially when realizing gains, converting retirement money, selling property or exercising stock compensation. But avoiding a surcharge should not override a transaction with a larger after-tax benefit.</p>
                    <p><strong>Example:</strong> An individual has $136,500 of projected MAGI and considers realizing an additional $2,000 long-term gain. If the final figure exceeds $137,000, the 2026 Part B premium moves from $284.10 to $405.80 and Part D IRMAA moves from $14.50 to $37.50. The decision should compare the tax and investment value of the sale with the additional Medicare cost, not treat the threshold as an absolute prohibition.</p>
                    <p>Because the lookback is delayed, 2026 planning generally influences 2028 premiums, subject to future law and inflation adjustments. Maintain a multi-year worksheet for income, required distributions, Social Security, charitable gifts, capital gains and Roth conversions.</p>

                    <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white">
                        <p className="text-sm font-black uppercase tracking-widest text-blue-300">Retirement cash flow</p>
                        <h2 className="mt-2 text-2xl font-black">Model premiums as a recurring expense</h2>
                        <p className="mt-2 text-slate-300">Test retirement contributions, income needs and healthcare costs without creating an account or sharing personal data.</p>
                        <Link href="/calculators/retirement" className="mt-5 inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-400">
                            Open the Retirement Calculator →
                        </Link>
                    </div>

                    <h2>How to request a lower IRMAA after income falls</h2>
                    <p>The two-year lookback can overstate current ability to pay after retirement or another major change. Social Security permits a new determination when a recognized life-changing event reduces household income. Listed events include marriage, divorce or annulment, death of a spouse, work stoppage, work reduction, loss of income-producing property beyond the beneficiary&apos;s control, loss of certain pension income and an employer settlement connected to closure, bankruptcy or reorganization.</p>
                    <p>Form SSA-44 asks for evidence of the event and an estimate of modified adjusted gross income for the year income fell. A retirement letter, pay stubs, death certificate, divorce decree, insurance documentation or signed tax return may be relevant depending on the event. Provide honest, supportable estimates; Social Security can later reconcile the decision with tax data.</p>
                    <p>An amended return is not the same as a life-changing event. If the IRS data itself was wrong, correct it with the IRS and contact Social Security using the process in the determination. If the income data is correct but a later qualifying event reduced income, request a new decision based on that event. A beneficiary may also appeal a determination believed to be wrong.</p>

                    <h2>Planning moves that may affect future IRMAA</h2>
                    <ul>
                        <li><strong>Roth conversions:</strong> spreading taxable conversions across years may manage brackets, but future tax rates, required distributions and estate goals matter too.</li>
                        <li><strong>Capital gains:</strong> coordinate discretionary sales while respecting diversification and investment risk; a tax-only decision can leave a portfolio dangerously concentrated.</li>
                        <li><strong>Qualified charitable distributions:</strong> an eligible IRA owner may be able to send funds directly to charity under current QCD rules, potentially satisfying distribution goals without the same AGI effect as taking cash first.</li>
                        <li><strong>Tax-exempt bonds:</strong> include municipal-bond interest in the IRMAA projection even when it is excluded from taxable income.</li>
                        <li><strong>Withdrawal sequencing:</strong> taxable, tax-deferred and Roth accounts affect AGI differently. Coordinate income tax, premiums, liquidity and legacy goals.</li>
                    </ul>
                    <p>People working while receiving Social Security should also separate Medicare premiums from the benefit earnings test. The systems use different definitions and years. See the <Link href="/blog/social-security-earnings-test-2026">2026 Social Security earnings-test guide</Link> for the work-income rules.</p>

                    <h2>2026 IRMAA review checklist</h2>
                    <ol>
                        <li>Find the MAGI and filing status Social Security used, usually from the 2024 return.</li>
                        <li>Verify that MAGI equals AGI plus tax-exempt interest for this purpose.</li>
                        <li>Match the exact boundary language: “above,” “up to,” “less than” and “equal to” matter.</li>
                        <li>Multiply per-person adjustments by each spouse enrolled in Part B or Part D.</li>
                        <li>Keep standard premiums, plan premiums, IRMAA, deductibles and penalties separate.</li>
                        <li>If income fell after a listed event, assemble Form SSA-44 and supporting evidence.</li>
                        <li>If tax data is incorrect, correct it through the IRS and follow the notice instructions.</li>
                    </ol>
                    <p>Add the expected net Medicare deduction to a monthly plan with the <Link href="/calculators/budget">Budget Calculator</Link>. Social Security benefits can also be taxable depending on combined income; the premium displayed here does not estimate that separate tax calculation.</p>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.ssa.gov/benefits/medicare/medicare-premiums.html" target="_blank" rel="noopener noreferrer">Social Security: 2026 Medicare premium and IRMAA tables</a></li>
                        <li><a href="https://secure.ssa.gov/poms.nsf/lnx/0601101020" target="_blank" rel="noopener noreferrer">SSA POMS: official 2026 Part B and Part D sliding-scale tables</a></li>
                        <li><a href="https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles" target="_blank" rel="noopener noreferrer">CMS: 2026 Part B premium and deductible fact sheet</a></li>
                        <li><a href="https://www.ssa.gov/medicare/lower-irmaa" target="_blank" rel="noopener noreferrer">Social Security: request to lower IRMAA</a></li>
                    </ul>

                    <h2>Frequently asked questions</h2>
                    {faqs.map((faq) => (
                        <section key={faq.question}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </section>
                    ))}
                </div>

                <div className="mx-auto mt-12 max-w-3xl">
                    <AuthorBio updatedDate="July 30, 2026" />
                </div>
            </article>
        </main>
    );
}
