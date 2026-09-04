import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/social-security-spousal-benefits-2026';
const IMAGE = 'https://usfinnexus.com/images/social-security-spousal-benefits-2026.webp';

export const metadata: Metadata = {
    title: 'Social Security Spousal Benefits 2026: Complete Guide',
    description: 'Learn 2026 Social Security spousal benefit eligibility, the 50% maximum, early-claim reductions, ex-spouse rules and claiming steps.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: 'Social Security Spousal Benefits 2026: Eligibility, Amounts and Ex-Spouse Rules',
        description: 'An SSA-sourced guide to how spouse benefits are calculated, when early claiming reduces them and how divorced-spouse benefits work.',
        url: URL,
        publishedTime: '2026-09-01',
        modifiedTime: '2026-09-01',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Retired couple reviewing Social Security spousal benefit estimates together at home' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Security Spousal Benefits 2026 Explained',
        description: 'The 50% ceiling, age-62 reductions, own-benefit coordination and divorced-spouse rules in one practical guide.',
        images: [IMAGE],
    },
};

const faqs = [
    { question: 'What is the maximum Social Security spousal benefit in 2026?', answer: 'At the spouse’s full retirement age, the maximum spouse benefit is generally 50% of the worker’s primary insurance amount—the benefit payable to the worker at full retirement age. It is not necessarily 50% of the worker’s current check.' },
    { question: 'Can I collect my own Social Security and a spousal benefit?', answer: 'SSA pays your own retirement benefit first. If the spouse benefit is higher, SSA may add a spousal amount so the combined payment reaches the higher eligible amount. The two full benefits are not added together.' },
    { question: 'Can I claim a spousal benefit at age 62?', answer: 'Yes, if the eligibility conditions are met, but the payment is generally permanently reduced when claimed before full retirement age. For a person whose full retirement age is 67, an age-62 spouse benefit can be as little as 32.5% of the worker’s primary insurance amount.' },
    { question: 'Do spousal benefits increase if I wait past full retirement age?', answer: 'The spouse benefit itself does not earn delayed retirement credits after full retirement age. Waiting past full retirement age can increase a worker’s own retirement benefit, but a living spouse’s maximum remains based on 50% of the worker’s full-retirement-age amount.' },
    { question: 'Can a divorced person receive Social Security on an ex-spouse’s record?', answer: 'Potentially. The marriage generally must have lasted at least 10 years, the applicant generally must be unmarried and age 62 or older, and the applicant’s own benefit must not be equal to or larger than the full divorced-spouse benefit. Special independently entitled rules can apply after two continuous years of divorce.' },
    { question: 'Does my spouse or ex-spouse lose money if I claim on their record?', answer: 'A current spouse’s family benefit does not reduce the worker’s own retirement or disability payment. SSA also states that payments to an eligible divorced spouse do not count toward the family maximum and do not reduce benefits paid to the worker or current family.' },
];

export default function SocialSecuritySpousalBenefits2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema title="Social Security Spousal Benefits 2026: Eligibility, 50% Maximum, Reductions and Ex-Spouse Rules" description="Official SSA-sourced 2026 guide to spouse and divorced-spouse Social Security benefits, calculations, claiming ages, deemed filing and application steps." url={URL} datePublished="2026-09-01" dateModified="2026-09-01" authorName="USFinNexus Editorial Team" image={IMAGE} keywords={['Social Security spousal benefits 2026', 'spousal benefit calculator', 'Social Security spouse benefit amount', 'divorced spouse Social Security', '50 percent spousal benefit', 'claim Social Security at 62']} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />

            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Social Security Spousal Benefits 2026', item: '/blog/social-security-spousal-benefits-2026' }]} />
            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Social Security &amp; Retirement • Published September 1, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Social Security Spousal Benefits 2026: Eligibility, 50% Maximum, Reductions and Ex-Spouse Rules</h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">A spouse can receive up to half of a worker&apos;s full-retirement-age benefit, but claiming age, the spouse&apos;s own record, marital history and filing rules shape the actual payment.</p>
                </header>

                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image src="/images/social-security-spousal-benefits-2026.webp" alt="Retired couple reviewing Social Security spousal benefit estimates together at home" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" />
                </div>

                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> A qualifying spouse at full retirement age can receive up to <strong>50% of the worker&apos;s primary insurance amount</strong>—the amount the worker is entitled to at full retirement age. Claiming before the spouse&apos;s full retirement age usually reduces the payment permanently. If the spouse also qualifies on their own work record, Social Security pays that benefit first and adds only enough spouse benefit to reach the higher eligible amount.</p>

                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">This article provides general Social Security and financial education, not individualized legal, tax or claiming advice. SSA determines entitlement using exact birth dates, earnings records, marital history, pensions, work and application dates. Verify estimates in each person&apos;s my Social Security account or with SSA.</aside>

                    <h2>Social Security spousal benefits at a glance</h2>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Rule</th><th className="p-4">Typical requirement</th><th className="p-4">Important limit</th></tr></thead><tbody className="divide-y divide-slate-200">
                            <tr><td className="p-4 font-semibold">Maximum at spouse&apos;s FRA</td><td className="p-4">Up to 50% of worker&apos;s PIA</td><td className="p-4">Not 50% of a delayed age-70 check</td></tr>
                            <tr><td className="p-4 font-semibold">Earliest age</td><td className="p-4">Generally 62</td><td className="p-4">Permanent early-claim reduction may apply</td></tr>
                            <tr><td className="p-4 font-semibold">Current marriage</td><td className="p-4">Generally married at least 1 year</td><td className="p-4">Exceptions apply, including some child-in-care cases</td></tr>
                            <tr><td className="p-4 font-semibold">Divorced spouse</td><td className="p-4">Marriage generally lasted at least 10 years</td><td className="p-4">Applicant generally must be unmarried</td></tr>
                            <tr><td className="p-4 font-semibold">Own retirement benefit</td><td className="p-4">Paid first</td><td className="p-4">SSA does not stack two full checks</td></tr>
                        </tbody></table>
                    </div>

                    <h2>Who qualifies for a spouse benefit?</h2>
                    <p>A current spouse may qualify if married to an insured worker for at least one year and either age 62 or older, caring for the worker&apos;s child who is younger than 16, or caring for a child of any age who has a qualifying disability and is entitled on the worker&apos;s record. Several exceptions can satisfy the marriage-duration rule, including some situations involving a prior entitlement or the parent of the worker&apos;s child.</p>
                    <p>For an age-based spouse benefit, the worker generally must be receiving Social Security retirement or disability benefits. That filing dependency is important for couples considering whether the higher earner should delay. A current spouse usually cannot begin a spouse benefit merely because the worker reached age 62 but has not filed.</p>
                    <p>A child-in-care spouse benefit operates differently from an age-62 retirement spouse claim. It may be payable before age 62 and may avoid the normal age reduction while the qualifying child is in care, but the family maximum, child entitlement and later termination rules matter.</p>

                    <h2>How the 50% maximum is calculated</h2>
                    <p>The maximum spouse benefit is based on the worker&apos;s primary insurance amount, commonly called PIA. PIA is the worker&apos;s benefit at full retirement age before reductions for early retirement or additions for delayed retirement. At the spouse&apos;s own full retirement age, the full spouse rate can be 50% of that PIA.</p>
                    <p>Suppose the worker&apos;s PIA is $2,400 per month. The full spouse benchmark is $1,200. If the spouse has no benefit on their own earnings record and claims at full retirement age, the spouse benefit could be $1,200 before deductions, offsets or other adjustments. The worker&apos;s actual check might be lower because the worker claimed early or higher because the worker delayed, but that does not change the living-spouse 50% benchmark.</p>

                    <h3>When the spouse has an earnings record</h3>
                    <p>Assume the spouse&apos;s own PIA is $700 and the full spouse benchmark is $1,200. At full retirement age, SSA generally pays the spouse&apos;s $700 retirement benefit first, then a $500 spouse excess, producing the same $1,200 combined amount. SSA does not pay $700 plus a separate full $1,200 check.</p>
                    <p>If either component begins early, reductions can be more complicated because SSA applies retirement and spouse reduction rules to their respective pieces. Do not estimate an early combined benefit by multiplying the full $1,200 by a single guessed percentage. Use SSA&apos;s account estimate or spouse calculator.</p>

                    <h2>Claiming at 62 versus full retirement age</h2>
                    <p>A spouse can generally claim as early as age 62, but the spouse benefit is reduced for each month before full retirement age. SSA&apos;s formula reduces the spouse amount by 25/36 of 1% per month for the first 36 early months and 5/12 of 1% for each additional early month.</p>
                    <p>For someone whose full retirement age is 67, claiming a pure spouse benefit at 62 can reduce it to 32.5% of the worker&apos;s PIA instead of 50%. On a $2,400 PIA, that benchmark is $780 rather than $1,200. Exact results can differ when the claimant also has their own benefit, begins in a month other than the birthday month or is subject to work withholding.</p>
                    <p>Full retirement age depends on birth year. It is 67 for people born in 1960 or later. Use the correct birth-date rule rather than assuming every 2026 claimant has the same FRA.</p>

                    <h2>Why waiting past full retirement age does not raise a spouse benefit</h2>
                    <p>A worker&apos;s own retirement benefit can earn delayed retirement credits through age 70. For a worker born in 1943 or later, the annual delayed credit is generally 8%, applied monthly. But a living spouse benefit does not earn delayed retirement credits after the spouse reaches FRA.</p>
                    <p>If the higher earner&apos;s PIA is $2,400 and the higher earner delays to age 70, their own check may rise above $2,400. The full living-spouse benchmark still generally tops out at $1,200, not half of the higher age-70 check. Delayed credits can, however, increase a future survivor benefit, which is one reason a couple may still value delaying the higher earner&apos;s claim.</p>

                    <h2>Deemed filing: why “spouse only” usually is not an option</h2>
                    <p>For people subject to deemed-filing rules, applying for either retirement or spouse benefits is treated as applying for both. SSA pays the higher combined entitlement. The old strategy of taking only a spouse benefit at full retirement age while allowing one&apos;s own retirement benefit to grow is generally unavailable to people born January 2, 1954 or later.</p>
                    <p>Exceptions remain, including certain survivor claims and some benefits for a person caring for an entitled child. Survivor benefits follow different claiming and switching rules, so do not use a spouse-benefit article to decide a widow or widower claim.</p>

                    <h2>Social Security divorced-spouse benefits</h2>
                    <p>An ex-spouse may qualify on a former spouse&apos;s record when the marriage lasted at least 10 years immediately before divorce, the applicant is generally unmarried, the applicant is at least 62, and the applicant&apos;s own retirement or disability benefit is not equal to or larger than the full divorced-spouse benefit. The worker must be insured for Social Security.</p>
                    <p>If the former spouse is entitled to retirement or disability benefits, the divorced spouse can apply when the other conditions are met. A special independently entitled divorced-spouse rule may permit payment even when the worker has not applied, provided the worker is at least 62 and the couple has been divorced for at least two continuous years.</p>
                    <p>An eligible divorced spouse&apos;s payment does not reduce the worker&apos;s benefit, the current spouse&apos;s benefit or another qualifying ex-spouse&apos;s benefit. SSA also excludes divorced-spouse payments from the family maximum. A divorce decree attempting to waive Social Security entitlement generally does not override federal law.</p>

                    <h3>What happens after remarriage?</h3>
                    <p>A person generally cannot receive a divorced-spouse benefit on a living former spouse&apos;s record while married to someone else. If the later marriage ends, eligibility on the earlier record may be reconsidered. Survivor rules for remarriage are different, especially for remarriage after age 60 or age 50 when disabled, so confirm the correct benefit type with SSA.</p>

                    <h2>Working while receiving a spouse benefit</h2>
                    <p>If a claimant is below full retirement age and works, the retirement earnings test can temporarily withhold benefits when earnings exceed the applicable annual limit. The test applies to the claimant&apos;s own earnings, not the other spouse&apos;s wages. Once the claimant reaches FRA, the earnings test no longer withholds benefits, and SSA later adjusts the monthly benefit to account for months withheld.</p>
                    <p>Review the current thresholds and special first-year rule in the <Link href="/blog/social-security-earnings-test-2026">2026 Social Security earnings test guide</Link>. Earnings-test withholding is not the same as federal income tax on benefits, and it is not necessarily a permanent loss.</p>

                    <h2>Government pensions after repeal of WEP and GPO</h2>
                    <p>The Social Security Fairness Act repealed the Windfall Elimination Provision and Government Pension Offset. SSA states that beginning with benefits payable for January 2024, a spouse or surviving spouse benefit is no longer reduced or eliminated merely because the claimant also receives a retirement or disability pension from federal, state or local work not covered by Social Security.</p>
                    <p>That repeal can materially change an estimate for teachers, police officers, firefighters and other public employees with noncovered pensions. It does not waive basic spouse eligibility, age reductions, deemed filing or the rule that SSA pays the higher eligible combination rather than two full benefits.</p>

                    <h2>Does claiming affect the worker or other family members?</h2>
                    <p>Paying a spouse benefit does not reduce the worker&apos;s own retirement or disability check. When several family members receive benefits on one worker&apos;s record, a family maximum may reduce benefits paid to spouses and children. The worker&apos;s own benefit is not reduced by that family maximum.</p>
                    <p>Divorced-spouse benefits are treated differently: SSA says payments to an eligible divorced spouse do not count toward the family maximum. This means a worker&apos;s current family should not assume an ex-spouse claim will shrink their checks.</p>

                    <h2>How to estimate your 2026 spouse benefit</h2>
                    <ol>
                        <li>Have the worker open a my Social Security account and record the estimated benefit at full retirement age—not only the age-62 or age-70 estimate.</li>
                        <li>Have the spouse open their own account and record their retirement estimate at each contemplated claiming age.</li>
                        <li>Use SSA&apos;s “Calculate a Benefit as a Spouse” or comparison feature, which coordinates the two records more accurately than taking half of a current check.</li>
                        <li>Test early claiming, full retirement age and household longevity assumptions.</li>
                        <li>Check the earnings test if the claimant will work before FRA and evaluate survivor protection if the higher earner delays.</li>
                    </ol>
                    <p>For the rest of the household plan, use the <Link href="/calculators/retirement">Retirement Calculator</Link> to combine savings, contributions and a conservative Social Security estimate. The calculator is for planning and does not replace SSA&apos;s benefit computation.</p>

                    <h2>How to apply for spouse or divorced-spouse benefits</h2>
                    <p>SSA says an applicant can apply online when within three months of age 62 or older, call 1-800-772-1213, or contact a Social Security office. Prepare identifying information, marriage and divorce dates, the worker&apos;s identifying details, banking information and any requested birth, marriage or divorce documents.</p>
                    <p>Apply several months before the desired start date when possible, but do not select a month solely to meet an administrative timeline. Claiming decisions can affect lifetime income and survivor protection. Also coordinate Medicare enrollment at 65; delaying Social Security does not automatically remove Medicare deadlines.</p>

                    <h2>Common spouse-benefit mistakes</h2>
                    <ul>
                        <li>Taking 50% of the worker&apos;s current check instead of the worker&apos;s PIA.</li>
                        <li>Assuming two full benefits are added together.</li>
                        <li>Ignoring permanent reductions for claiming before FRA.</li>
                        <li>Waiting past FRA for delayed credits on the spouse benefit itself.</li>
                        <li>Using current-spouse filing rules for a divorced-spouse or survivor claim.</li>
                        <li>Assuming an ex-spouse claim reduces benefits for the worker&apos;s current family.</li>
                        <li>Overlooking the earnings test while working before FRA.</li>
                        <li>Using an old estimate that still applies the repealed Government Pension Offset.</li>
                    </ul>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.ssa.gov/family/eligibility" target="_blank" rel="noopener noreferrer">SSA: who can get family benefits</a></li>
                        <li><a href="https://www.ssa.gov/family/amount" target="_blank" rel="noopener noreferrer">SSA: spouse benefit amounts and family maximum</a></li>
                        <li><a href="https://www.ssa.gov/oact/quickcalc/spouse.html" target="_blank" rel="noopener noreferrer">SSA: spouse early-retirement reduction calculator</a></li>
                        <li><a href="https://www.ssa.gov/benefits/retirement/planner/claiming.html" target="_blank" rel="noopener noreferrer">SSA: deemed filing and spouse claiming rules</a></li>
                        <li><a href="https://www.ssa.gov/OP_Home/cfr20/404/404-0331.htm" target="_blank" rel="noopener noreferrer">SSA regulations: divorced-spouse entitlement</a></li>
                        <li><a href="https://www.ssa.gov/forms/ssa-2.html" target="_blank" rel="noopener noreferrer">SSA: applying for spouse or divorced-spouse benefits</a></li>
                    </ul>

                    <h2>Frequently asked questions</h2>
                    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
                </div>
                <AuthorBio />
            <ContextualInternalLinks currentSlug="social-security-spousal-benefits-2026" showBlogs showCalculators />
            </article>
        </main>
    );
}
