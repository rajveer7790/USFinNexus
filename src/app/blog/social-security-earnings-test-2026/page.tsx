import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/social-security-earnings-test-2026';
const IMAGE = 'https://usfinnexus.com/images/social-security-earnings-test-2026.webp';

export const metadata: Metadata = {
    title: 'Social Security Earnings Test 2026: Limits & Examples',
    description: 'Learn the 2026 Social Security earnings limits of $24,480 and $65,160, what income counts, benefit withholding and full-retirement-age rules.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: '2026 Social Security Earnings Test: Working While Receiving Benefits',
        description: 'See how wages can temporarily reduce retirement or survivor benefits before full retirement age, with official 2026 limits and examples.',
        url: URL,
        publishedTime: '2026-07-29',
        modifiedTime: '2026-07-29',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Older American worker reviewing a paycheck and retirement benefit documents at a desk' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Security Earnings Test 2026',
        description: '$24,480 and $65,160 limits, what counts as earnings and how withheld benefits are handled.',
        images: [IMAGE],
    },
};

const faqs = [
    {
        question: 'How much can I earn while receiving Social Security in 2026?',
        answer: 'If you are below full retirement age for all of 2026, the annual earnings-test limit is $24,480. If you reach full retirement age during 2026, the limit is $65,160 for earnings in the months before your full-retirement-age month. Starting that month, there is no earnings limit.',
    },
    {
        question: 'How much does Social Security withhold if I exceed the 2026 limit?',
        answer: 'SSA generally withholds $1 in benefits for every $2 of earnings above $24,480 when you are under full retirement age all year. In the year you reach full retirement age, it withholds $1 for every $3 above $65,160, counting only earnings before the month you reach that age.',
    },
    {
        question: 'Do pensions and investment income count for the earnings test?',
        answer: 'No. SSA says it counts wages from work and net profit from self-employment, including bonuses, commissions and vacation pay. It does not count pensions, annuities, investment income, interest, veterans benefits or other government or military retirement benefits.',
    },
    {
        question: 'Are benefits withheld by the earnings test lost forever?',
        answer: 'Not necessarily. When you reach full retirement age, SSA recalculates the retirement benefit to give credit for months in which benefits were reduced or withheld because of excess earnings. That adjustment is not an immediate dollar-for-dollar refund.',
    },
    {
        question: 'Does the earnings test apply after full retirement age?',
        answer: 'No. Beginning with the month you reach full retirement age, work earnings no longer reduce Social Security retirement or survivor benefits under the earnings test.',
    },
    {
        question: 'Does the retirement earnings test apply to SSDI or SSI?',
        answer: 'This guide covers retirement and survivor benefits. Social Security Disability Insurance and Supplemental Security Income use different work and income rules, including separate 2026 thresholds. Contact SSA or a qualified benefits counselor for those programs.',
    },
];

export default function SocialSecurityEarningsTest2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema
                title="Social Security Earnings Test 2026: Limits, Withholding and Examples"
                description="A practical guide to the 2026 Social Security retirement earnings test for people who claim benefits and continue working."
                url={URL}
                datePublished="2026-07-29"
                dateModified="2026-07-29"
                authorName="USFinNexus Editorial Team"
                image={IMAGE}
                keywords={[
                    'Social Security earnings limit 2026',
                    'Social Security earnings test 2026',
                    'working while receiving Social Security',
                    '2026 retirement earnings limit',
                    'full retirement age 2026',
                    'Social Security benefit withholding',
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
                { name: 'Social Security Earnings Test 2026', item: '/blog/social-security-earnings-test-2026' },
            ]} />

            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Retirement benefits • Updated July 29, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        Social Security Earnings Test 2026: How Working Changes Your Benefits
                    </h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">
                        Claiming retirement or survivor benefits before full retirement age while continuing to work can cause temporary withholding—but only earned income counts, and a higher limit applies in the year you reach full retirement age.
                    </p>
                </header>

                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/social-security-earnings-test-2026.webp"
                        alt="Older American worker reviewing a paycheck and retirement benefit documents at a desk"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 960px"
                    />
                </div>

                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> If you are below full retirement age for all of 2026, Social Security can withhold $1 of retirement or survivor benefits for every $2 you earn above $24,480. If you reach full retirement age during 2026, the limit is $65,160 for earnings before the month you reach that age, and SSA withholds $1 for every $3 above it. From the full-retirement-age month onward, the earnings test no longer applies.</p>

                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
                        This is general educational information, not individualized benefits, tax, legal or financial advice. The retirement earnings test is different from SSDI and SSI work rules. Verify your full retirement age, benefit type and earnings estimate directly with the Social Security Administration.
                    </aside>

                    <h2>2026 Social Security earnings limits</h2>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-950 text-white">
                                <tr><th className="p-4">Your 2026 situation</th><th className="p-4">Earnings limit</th><th className="p-4">Withholding</th></tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr><td className="p-4 font-semibold">Under full retirement age all year</td><td className="p-4">$24,480</td><td className="p-4">$1 for each $2 over</td></tr>
                                <tr><td className="p-4 font-semibold">Reach full retirement age in 2026</td><td className="p-4">$65,160 before FRA month</td><td className="p-4">$1 for each $3 over</td></tr>
                                <tr><td className="p-4 font-semibold">At or above full retirement age</td><td className="p-4">No limit</td><td className="p-4">None under this test</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The test applies when a person receives Social Security retirement or survivor benefits before full retirement age and has work earnings. It does not mean a beneficiary is prohibited from working, and it is not the same as income taxation of Social Security benefits.</p>

                    <h2>Example 1: under full retirement age all year</h2>
                    <p>Suppose a worker receives $1,500 per month in retirement benefits, or $18,000 for the year, and earns $34,480 from a job during 2026. Earnings are $10,000 above the $24,480 limit. At $1 withheld for every $2 above the limit, the calculated withholding is $5,000.</p>
                    <p>SSA generally withholds whole monthly payments until the required amount is covered and then adjusts as applicable; it does not necessarily trim every check by the same fraction. The timing can therefore affect monthly cash flow even when the annual calculation is understood. Report expected earnings changes promptly instead of waiting for SSA to reconcile reported wages later.</p>

                    <h2>Example 2: reaching full retirement age in 2026</h2>
                    <p>Assume a beneficiary reaches full retirement age in October 2026 and earns $72,660 from January through September. Only pre-full-retirement-age earnings are measured against the $65,160 special limit. The excess is $7,500, so the calculated withholding is $2,500 under the $1-for-$3 rule.</p>
                    <p>Starting in October—the month full retirement age is reached—work earnings do not reduce benefits under the earnings test. Earnings from October through December are not added to the special $65,160 calculation. The full-retirement-age month, not merely the calendar year, matters.</p>

                    <h2>What income counts as earnings?</h2>
                    <p>SSA counts wages from employment and net earnings from self-employment. It includes bonuses, commissions and vacation pay. For employees, the agency generally counts wages when earned rather than when paid in some special situations; self-employment income is generally counted when received, subject to SSA rules.</p>
                    <p>SSA specifically says pensions, annuities, investment income, interest, veterans benefits and other government or military retirement benefits do not count for this earnings test. Rental income may require fact-specific treatment, particularly when services are provided or the activity is a trade or business. Ask SSA about unusual compensation, deferred pay, severance, agricultural income or business arrangements.</p>
                    <p>Income excluded from the earnings test can still affect federal or state income taxes, Medicare income-related premiums, investment planning or eligibility for other programs. “Does not count for the earnings test” does not mean “has no financial effect.”</p>

                    <h2>What is full retirement age in 2026?</h2>
                    <p>Full retirement age depends on birth year. It is 66 and 10 months for people born in 1959 and 67 for people born in 1960 or later. SSA notes that the current full retirement age is 67 for people attaining age 62 in 2026. A January 1 birthday can be treated under the prior birth year in SSA&apos;s age chart.</p>
                    <p>Full retirement age is different from Medicare eligibility, which generally begins at 65, and different from age 70, when delayed retirement credits stop increasing a retirement benefit. The earnings test does not itself determine the best claiming age; it is one part of a broader claiming decision involving health, work plans, household income and survivor protection.</p>

                    <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white">
                        <p className="text-sm font-black uppercase tracking-widest text-blue-300">Build a retirement cash-flow plan</p>
                        <h2 className="mt-2 text-2xl font-black">Test income, savings and time horizon</h2>
                        <p className="mt-2 text-slate-300">Use an educational projection alongside your official my Social Security estimate.</p>
                        <Link href="/calculators/retirement" className="mt-5 inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-400">
                            Open the Retirement Calculator →
                        </Link>
                    </div>

                    <h2>Are withheld benefits permanently lost?</h2>
                    <p>The earnings test is often described as a tax, but that label is misleading. When a beneficiary reaches full retirement age, SSA recalculates the retirement benefit to give credit for months in which payments were reduced or withheld due to excess earnings. The new monthly amount can be higher because the early-claiming reduction is adjusted.</p>
                    <p>This is not an immediate dollar-for-dollar refund of every withheld payment, and the time required to recover the value depends on longevity and the recalculated benefit. Meanwhile, continued work can independently raise benefits when a new earnings year replaces a lower year in the 35-year benefit formula. SSA reviews wage records and can pay a resulting increase retroactive to January of the year after the earnings were received.</p>

                    <h2>The special monthly rule for a first retirement year</h2>
                    <p>A person who retires midyear may have already earned more than the annual limit before retirement. SSA has a special one-year monthly rule that can allow a full benefit for any whole month the person is considered retired, even when total annual earnings exceed the annual limit.</p>
                    <p>The monthly threshold and whether substantial services were performed in self-employment matter. The rule is designed for transition years, not as a permanent choice between the annual and monthly test. If you leave a high-paying job, begin benefits and then do limited work, contact SSA with the retirement date and monthly earnings rather than assuming annual wages automatically eliminate every payment.</p>

                    <h2>How SSA handles withholding</h2>
                    <p>SSA asks beneficiaries to estimate annual earnings and report changes. If the estimate is too low, benefits may be overpaid and SSA can seek recovery. If it is too high, SSA may withhold too much and later reconcile the record. Keep pay statements, note bonuses and track net self-employment profit.</p>
                    <p>Because full checks may be held back, include a buffer in the household budget. Use the <Link href="/calculators/budget">USFinNexus Budget Calculator</Link> to model the months without payments, not just the annual net. If early retirement is still under consideration, compare the claiming decision with the <Link href="/blog/social-security-cola-increase-2026">2026 Social Security COLA guide</Link> and obtain personalized estimates from a my Social Security account.</p>

                    <h2>Earnings test versus benefit taxation</h2>
                    <p>Two separate rules are frequently confused. The retirement earnings test can withhold benefits before full retirement age based on work earnings. Federal income-tax rules can make part of Social Security benefits taxable based on combined income, regardless of whether the earnings test applies. Reaching full retirement age ends the earnings test, but it does not automatically make benefits free from income tax.</p>
                    <p>Medicare premiums are another separate system. Higher modified adjusted gross income can produce an income-related monthly adjustment amount for Parts B and D, generally using an earlier tax return. A work decision should therefore consider benefits withholding, income tax, payroll tax, health coverage and cash flow—not only the $24,480 or $65,160 threshold.</p>

                    <h2>Practical checklist before working and claiming</h2>
                    <ol>
                        <li>Find your exact full-retirement-age month using SSA&apos;s official calculator.</li>
                        <li>Confirm whether the payment is retirement, survivor, disability or SSI.</li>
                        <li>Estimate 2026 wages and net self-employment earnings, including bonuses and commissions.</li>
                        <li>Apply the correct $24,480 or $65,160 limit and withholding ratio.</li>
                        <li>Model whole-check withholding in the monthly household budget.</li>
                        <li>Report material earnings changes to SSA and retain documentation.</li>
                        <li>Review taxes and Medicare effects separately with qualified help when needed.</li>
                    </ol>
                    <p>There is no universal rule that working after claiming is a mistake. Earnings can support current spending and may improve the benefit record, while the earnings test can disrupt near-term cash flow. The best choice depends on the actual benefit, pay, retirement age and household needs.</p>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.ssa.gov/cola/factsheets/2026.html" target="_blank" rel="noopener noreferrer">SSA: 2026 COLA fact sheet and earnings-test limits</a></li>
                        <li><a href="https://www.ssa.gov/benefits/retirement/planner/whileworking.html" target="_blank" rel="noopener noreferrer">SSA: Receiving benefits while working</a></li>
                        <li><a href="https://www.ssa.gov/retirement/full-retirement-age" target="_blank" rel="noopener noreferrer">SSA: Full retirement age calculator</a></li>
                        <li><a href="https://www.ssa.gov/oact/progdata/nra.html" target="_blank" rel="noopener noreferrer">SSA: Full retirement age by birth year</a></li>
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
                    <AuthorBio updatedDate="July 29, 2026" />
                </div>
            </article>
        </main>
    );
}
