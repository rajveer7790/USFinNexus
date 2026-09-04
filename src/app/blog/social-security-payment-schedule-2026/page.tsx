import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/social-security-payment-schedule-2026';
const IMAGE = 'https://usfinnexus.com/images/social-security-payment-schedule-2026.webp';

export const metadata: Metadata = {
    title: 'Social Security Payment Schedule 2026: Complete Calendar',
    description: 'Find every 2026 Social Security payment date by birthday, plus SSI and pre-May 1997 rules, holiday changes and what to do if a payment is late.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: 'Social Security Payment Schedule 2026: Dates by Birthday',
        description: 'The official 2026 Social Security calendar, Wednesday payment groups, SSI timing and holiday adjustments explained clearly.',
        url: URL,
        publishedTime: '2026-08-14',
        modifiedTime: '2026-08-14',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Retired American couple reviewing a benefit payment calendar and household budget at home' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Social Security Payment Calendar',
        description: 'Check your payment date by birthday, including SSI and holiday exceptions.',
        images: [IMAGE],
    },
};

const faqs = [
    { question: 'What day will my Social Security check arrive in 2026?', answer: 'For most people who started receiving benefits after April 1997, the date depends on the birthday attached to the benefit record: the second Wednesday for birthdays from the 1st through 10th, third Wednesday for the 11th through 20th, and fourth Wednesday for the 21st through 31st. Different rules apply to SSI and certain earlier beneficiaries.' },
    { question: 'Why is the November 2026 payment for birthdays 1 through 10 paid on November 10?', answer: 'The normal second-Wednesday date is November 11, 2026, which is Veterans Day, a federal legal holiday. SSA states that when a scheduled Wednesday is a federal legal holiday, payment is made on the first preceding day that is not a federal legal holiday.' },
    { question: 'When is SSI paid in 2026?', answer: 'SSI is normally paid on the first day of the month. When the first falls on a weekend or federal holiday, SSA issues payment on the preceding business day. An early payment is for the following month; it is not an extra benefit.' },
    { question: 'When are benefits paid if I received Social Security before May 1997?', answer: 'SSA says beneficiaries who were entitled before May 1997 generally continue to receive recurring Social Security benefits on the third day of the month. People receiving both SSI and Social Security generally receive SSI on the first and Social Security on the third, subject to calendar adjustments.' },
    { question: 'What should I do if my Social Security payment is late?', answer: 'SSA asks beneficiaries to allow three additional mailing days after the expected date before contacting the agency. First check the deposit account, confirm there is no bank hold, and review your my Social Security account. Report a missing payment promptly if it still has not arrived.' },
    { question: 'Does the payment schedule change the amount of my benefit?', answer: 'No. The calendar determines when an authorized benefit is paid, not how much it is. Benefit amounts can change because of the annual COLA, Medicare deductions, withholding, overpayment recovery, work-related adjustments or other case-specific factors.' },
];

const schedule = [
    ['January', 'January 14', 'January 21', 'January 28'],
    ['February', 'February 11', 'February 18', 'February 25'],
    ['March', 'March 11', 'March 18', 'March 25'],
    ['April', 'April 8', 'April 15', 'April 22'],
    ['May', 'May 13', 'May 20', 'May 27'],
    ['June', 'June 10', 'June 17', 'June 24'],
    ['July', 'July 8', 'July 15', 'July 22'],
    ['August', 'August 12', 'August 19', 'August 26'],
    ['September', 'September 9', 'September 16', 'September 23'],
    ['October', 'October 14', 'October 21', 'October 28'],
    ['November', 'November 10*', 'November 18', 'November 25'],
    ['December', 'December 9', 'December 16', 'December 23'],
];

export default function SocialSecurityPaymentSchedule2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema title="Social Security Payment Schedule 2026: Complete Calendar by Birthday" description="Official 2026 Social Security payment dates by birthday, with SSI, pre-May 1997, holiday and missing-payment rules." url={URL} datePublished="2026-08-14" dateModified="2026-08-14" authorName="USFinNexus Editorial Team" image={IMAGE} keywords={['Social Security payment schedule 2026', 'Social Security payment dates 2026', 'SSI payment schedule 2026', 'when will Social Security pay', 'Social Security calendar 2026']} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />

            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'Social Security Payment Schedule 2026', item: '/blog/social-security-payment-schedule-2026' }]} />
            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Social Security • Updated August 14, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Social Security Payment Schedule 2026: Complete Calendar by Birthday</h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">Use your birthday group to find each 2026 payment date, then check the separate SSI and pre-May 1997 rules before assuming a deposit is late.</p>
                </header>

                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image src="/images/social-security-payment-schedule-2026.webp" alt="Retired American couple reviewing a benefit payment calendar and household budget at home" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" />
                </div>

                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> Most people who began receiving Social Security after April 1997 are paid according to the beneficiary birthday: birthdays from the 1st through 10th are paid on the second Wednesday, the 11th through 20th on the third Wednesday, and the 21st through 31st on the fourth Wednesday. In November 2026, the first group is paid Tuesday, November 10, because the normal date falls on Veterans Day.</p>

                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">This calendar is general educational information. Your benefit record, payment method, representative payee, bank processing, overpayment recovery or eligibility change can affect what you receive. Confirm case-specific information in your official <em>my Social Security</em> account or with SSA.</aside>

                    <h2>2026 Social Security payment dates by birthday</h2>
                    <p>The table below follows the official SSA payment rule and calendar. Use the birthday of the person whose earnings record supports the benefit. For example, a spouse or child receiving benefits on a worker&apos;s record generally follows the payment day assigned to that record rather than choosing a new date based on their own birthday.</p>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">2026 month</th><th className="p-4">Birthday 1–10</th><th className="p-4">Birthday 11–20</th><th className="p-4">Birthday 21–31</th></tr></thead><tbody className="divide-y divide-slate-200">{schedule.map((row) => <tr key={row[0]}><td className="p-4 font-semibold">{row[0]}</td><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td><td className="p-4">{row[3]}</td></tr>)}</tbody></table>
                    </div>
                    <p className="text-sm"><strong>*November 10:</strong> The normal second Wednesday is November 11, Veterans Day. SSA&apos;s published rule moves a Wednesday payment that lands on a federal legal holiday to the first preceding non-holiday day.</p>

                    <h2>How to identify your payment group</h2>
                    <p>Start with the date of birth used for the benefit record and then find the matching range. A birthday on the 10th belongs to the second-Wednesday group; a birthday on the 11th moves to the third-Wednesday group. A birthday on the 20th is still in the third group, while the 21st begins the fourth-Wednesday group.</p>
                    <p>This three-Wednesday schedule applies to most retirement, survivor and Social Security Disability Insurance beneficiaries whose entitlement began after April 1997. It does not replace special rules for people who were already entitled before May 1997, people who receive both Social Security and SSI, or certain payments administered through other arrangements.</p>
                    <p>If your normal day recently changed, do not assume the birthday table is wrong. A change in the underlying record, such as moving from one type of benefit to another, can affect the payment schedule. Use the benefit-verification or payment information shown in your official account to resolve the discrepancy.</p>

                    <h2>SSI payment schedule rules for 2026</h2>
                    <p>Supplemental Security Income is normally paid on the first day of each month. When the first falls on Saturday or Sunday, SSA issues the payment on the preceding Friday. Federal holidays can also move a payment earlier. That means some deposits arrive in the prior calendar month.</p>
                    <p>An early SSI deposit is not a bonus or a second benefit for the earlier month. It is the next month&apos;s scheduled payment arriving early because of the calendar. Budgeting systems should label the deposit for the month it covers; otherwise, a recipient may mistakenly spend two payments in one month and face a long gap before the next one.</p>
                    <p>For 2026, the first day falls on a weekend in February, March, August and November. January 1 is a federal holiday, so the January 2026 SSI payment was scheduled for December 31, 2025. Always use the official SSA calendar for the exact early date, especially near New Year&apos;s Day.</p>

                    <h2>Payment timing for beneficiaries before May 1997</h2>
                    <p>SSA says people who were entitled to recurring Social Security benefits before May 1997 generally continue to be paid on the third day of the month. People who receive both Social Security and SSI generally receive SSI on the first and Social Security on the third.</p>
                    <p>Weekend and holiday adjustments can move those deposits. The correct way to plan is to begin with the first-or-third-day rule and then compare it with SSA&apos;s annual calendar. Do not substitute the birthday Wednesday table if your award record follows the earlier schedule.</p>
                    <p>The term &ldquo;received Social Security before May 1997&rdquo; describes the benefit entitlement arrangement, not simply the beneficiary&apos;s age. A retiree who turned 65 before 1997 but did not begin benefits until much later may be on the Wednesday schedule.</p>

                    <h2>Direct deposit, Direct Express and bank posting</h2>
                    <p>SSA&apos;s schedule identifies the payment date. The time of day a deposit becomes visible depends on the financial institution or payment card system. Some institutions show pending deposits early, but recipients should not rely on an early-access feature as the official due date.</p>
                    <p>Keep bank and address information current. A closed account can cause a payment to be returned, while a recently changed account can create confusion about which destination was used. Use official SSA channels rather than responding to unsolicited calls, texts or emails that ask for banking credentials.</p>
                    <p>If a representative payee manages the benefit, the payee should keep the funds separate, use them for the beneficiary&apos;s needs and maintain records. The public calendar does not change those responsibilities.</p>

                    <h2>What to do when a payment does not arrive</h2>
                    <ol>
                        <li>Confirm that you used the correct schedule: birthday Wednesday, SSI first-day rule, or the pre-May 1997 third-day rule.</li>
                        <li>Check whether a weekend or federal legal holiday moved the payment to an earlier business day.</li>
                        <li>Review the correct bank account or Direct Express balance and ask the institution whether a deposit is pending or held.</li>
                        <li>Check your official <em>my Social Security</em> account for payment information, notices or a changed benefit amount.</li>
                        <li>SSA&apos;s calendar says to allow three additional mailing days before contacting the agency about a missing payment.</li>
                    </ol>
                    <p>Never pay anyone to &ldquo;release&rdquo; a Social Security deposit. SSA does not demand payment by gift card, cryptocurrency or wire transfer. If a caller creates urgency or threatens suspension, end the call and use contact information from SSA.gov.</p>

                    <h2>Build a monthly plan around a fixed payment date</h2>
                    <p>A predictable deposit date makes cash-flow planning easier, but monthly expenses do not always align with the schedule. List housing, utilities, food, insurance, medical costs and debt minimums by due date. Ask service providers whether due dates can be moved closer to the benefit date, and keep a small checking buffer for weekends and processing delays.</p>
                    <p>Use the <Link href="/calculators/budget">free budget calculator</Link> to organize needs, wants and savings without entering bank credentials. If you are evaluating long-term income needs, the <Link href="/calculators/retirement">retirement calculator</Link> can model savings and withdrawals, but it does not determine an official Social Security benefit.</p>
                    <p>The payment schedule and benefit amount are separate. SSA announced a 2.8% cost-of-living adjustment for 2026, but Medicare premiums, tax withholding, overpayment collection and other deductions can change the net deposit. Review the gross benefit and every deduction on your notice before treating a smaller deposit as a missing payment.</p>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.ssa.gov/pubs/EN-05-10031-2026.pdf" target="_blank" rel="noopener noreferrer">SSA: Schedule of Social Security Benefit Payments 2026</a></li>
                        <li><a href="https://www.ssa.gov/kc/rp_paybenefits.htm" target="_blank" rel="noopener noreferrer">SSA: Rules for paying monthly Social Security and SSI benefits</a></li>
                        <li><a href="https://www.ssa.gov/agency/holidays.html" target="_blank" rel="noopener noreferrer">SSA: 2026 federal holiday closings</a></li>
                        <li><a href="https://www.ssa.gov/news/en/press/releases/2025-10-24.html" target="_blank" rel="noopener noreferrer">SSA: 2.8% cost-of-living adjustment for 2026</a></li>
                    </ul>

                    <h2>Frequently asked questions</h2>
                    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
                </div>
                <div className="mx-auto mt-12 max-w-3xl"><AuthorBio updatedDate="August 14, 2026" /></div>
            <ContextualInternalLinks currentSlug="social-security-payment-schedule-2026" showBlogs showCalculators />
            </article>
        </main>
    );
}
