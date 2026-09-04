import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/irs-standard-mileage-rate-2026';
const IMAGE = 'https://usfinnexus.com/images/irs-standard-mileage-rate-2026.webp';

export const metadata: Metadata = {
    title: 'IRS Mileage Rate 2026: New July Rates',
    description: 'The 2026 IRS business mileage rate is 72.5¢ through June and 76¢ from July. See medical, moving and charity rates, eligibility and examples.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article',
        title: '2026 IRS Mileage Rate: Midyear Increase and Deduction Rules',
        description: 'Use the correct first-half and second-half 2026 mileage rates, calculate a deduction and document every eligible trip.',
        url: URL,
        publishedTime: '2026-07-30',
        modifiedTime: '2026-07-30',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Self-employed American business owner recording mileage in a parked car' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IRS Standard Mileage Rate for 2026',
        description: 'A practical guide to the revised July 2026 business, medical, moving and charitable mileage rates.',
        images: [IMAGE],
    },
};

const faqs = [
    {
        question: 'What is the IRS business mileage rate for 2026?',
        answer: 'For eligible business driving, the optional IRS standard mileage rate is 72.5 cents per mile for trips from January 1 through June 30, 2026, and 76 cents per mile for trips from July 1 through December 31, 2026. The date of each trip determines which rate applies.',
    },
    {
        question: 'Why did the IRS change the 2026 mileage rate in July?',
        answer: 'The IRS said Announcement 2026-11 revised the rates because of recent increases in fuel prices. The midyear revision raised the business rate from 72.5 to 76 cents and the medical and eligible moving rate from 20.5 to 23.5 cents beginning July 1.',
    },
    {
        question: 'Can W-2 employees deduct unreimbursed mileage in 2026?',
        answer: 'Most employees cannot claim a federal miscellaneous itemized deduction for unreimbursed job mileage. Limited exceptions may apply to certain Armed Forces reservists, qualified performing artists, fee-basis state or local officials and employees with impairment-related work expenses. Employer reimbursement rules are separate.',
    },
    {
        question: 'Can I deduct commuting miles?',
        answer: 'Ordinary travel between your home and regular workplace is generally personal commuting and not deductible. Business travel between work locations, to clients or to a qualifying temporary work location may be different. A qualifying principal place of business at home can also change the treatment of trips to other business locations.',
    },
    {
        question: 'Can I switch from actual vehicle expenses to standard mileage?',
        answer: 'For an owned vehicle, you generally must choose standard mileage in the first year the car is available for business use to preserve the option to switch methods later. If you choose standard mileage for a leased vehicle, the IRS generally requires that method for the entire lease period, including renewals.',
    },
    {
        question: 'What records do I need for a mileage deduction?',
        answer: 'Keep a timely log showing the date, destination, business or other deductible purpose and miles for each trip, plus the vehicle’s total annual mileage and supporting records. An estimate created only at tax time is weaker than a contemporaneous app, calendar or written log.',
    },
];

export default function IrsStandardMileageRate2026Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema
                title="IRS Standard Mileage Rate 2026: New July Rates and Deduction Rules"
                description="A practical guide to the two 2026 IRS mileage-rate periods, eligible driving, recordkeeping and standard-versus-actual expense decisions."
                url={URL}
                datePublished="2026-07-30"
                dateModified="2026-07-30"
                authorName="USFinNexus Editorial Team"
                image={IMAGE}
                keywords={[
                    'IRS mileage rate 2026',
                    'standard mileage rate 2026',
                    'business mileage deduction 2026',
                    '2026 mileage reimbursement rate',
                    'medical mileage rate 2026',
                    'self employed mileage deduction',
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
                { name: 'IRS Mileage Rate 2026', item: '/blog/irs-standard-mileage-rate-2026' },
            ]} />

            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Taxes • Updated July 30, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                        IRS Standard Mileage Rate 2026: Use the New July Rate Correctly
                    </h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">
                        A rare midyear IRS revision means 2026 business drivers need two mileage totals—not one annual number—before calculating a federal deduction or reimbursement.
                    </p>
                </header>

                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/irs-standard-mileage-rate-2026.webp"
                        alt="Self-employed American business owner recording mileage on a phone and notebook while safely parked"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 960px"
                    />
                </div>

                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> Use 72.5 cents per eligible business mile driven from January 1 through June 30, 2026, and 76 cents per mile from July 1 through December 31. The medical and qualifying moving rate is 20.5 cents in the first half and 23.5 cents in the second half. Charitable mileage remains 14 cents for the full year.</p>

                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
                        This guide provides general educational information, not individualized tax or legal advice. Eligibility depends on who drove, why, where, employment status, reimbursement and the vehicle-expense method already selected. Confirm your facts with current IRS instructions or a qualified tax professional.
                    </aside>

                    <h2>2026 IRS mileage rates at a glance</h2>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-950 text-white">
                                <tr><th className="p-4">Eligible use</th><th className="p-4">Jan. 1–June 30</th><th className="p-4">July 1–Dec. 31</th></tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr><td className="p-4 font-semibold">Business</td><td className="p-4">72.5¢ per mile</td><td className="p-4">76¢ per mile</td></tr>
                                <tr><td className="p-4 font-semibold">Medical</td><td className="p-4">20.5¢ per mile</td><td className="p-4">23.5¢ per mile</td></tr>
                                <tr><td className="p-4 font-semibold">Qualifying moving</td><td className="p-4">20.5¢ per mile</td><td className="p-4">23.5¢ per mile</td></tr>
                                <tr><td className="p-4 font-semibold">Charitable service</td><td className="p-4">14¢ per mile</td><td className="p-4">14¢ per mile</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The IRS first announced the January rates in Notice 2026-10. It then issued Announcement 2026-11 after fuel prices increased, revising the business, medical and moving rates for expenses paid or incurred on or after July 1. The charitable rate did not change because Congress fixes it in the tax code.</p>
                    <p>The rate applies to an eligible car, van, pickup or panel truck. It is available for gasoline, diesel, hybrid and fully electric vehicles; it is not an EV-only or gasoline-only allowance. The cents-per-mile figure is a simplified proxy for vehicle costs, not a promise that every driver actually spends that amount.</p>

                    <h2>How to calculate a 2026 mileage deduction</h2>
                    <p>Split the log at midnight on June 30. Multiply eligible first-half miles by the first rate, multiply eligible second-half miles by the revised rate, then add the results. Do not average the two rates or apply 76 cents to trips that occurred before July.</p>
                    <p><strong>Example:</strong> A sole proprietor records 5,000 eligible business miles through June 30 and 7,000 from July 1 through December 31. The first portion is 5,000 × $0.725 = $3,625. The second is 7,000 × $0.76 = $5,320. The preliminary standard-mileage deduction is $8,945.</p>
                    <p>That $8,945 is a deduction, not an $8,945 tax credit. It generally reduces business income before the applicable federal income and self-employment tax calculations. The actual tax effect depends on the complete return. Use the <Link href="/calculators/income-tax">Income Tax Calculator</Link> only as a planning estimate, not a substitute for the filed forms.</p>

                    <h2>Who may use the business mileage rate?</h2>
                    <h3>Self-employed people and business owners</h3>
                    <p>A sole proprietor, independent contractor or gig worker can generally use an eligible vehicle method for ordinary and necessary business transportation. Examples can include driving from a qualifying business location to meet a client, deliver products, visit a job site, obtain supplies or travel between work locations. Personal use must be excluded.</p>
                    <p>A business organized as a corporation or partnership has additional questions: who owns or leases the vehicle, whether the worker is reimbursed under an accountable plan, and how personal use is reported. The standard mileage rate can help determine a substantiated reimbursement, but the worker should not automatically duplicate that reimbursement as a personal deduction.</p>

                    <h3>Employees face stricter rules</h3>
                    <p>Most W-2 employees cannot deduct ordinary unreimbursed job mileage on their federal return. Narrow statutory exceptions may apply to certain Armed Forces reservists, qualified performing artists, fee-basis state or local government officials and workers claiming impairment-related work expenses. Eligible educators have separate rules for specified expenses. A company can still reimburse legitimate business travel under its policy even when the employee cannot claim a personal deduction.</p>

                    <h2>Business travel versus nondeductible commuting</h2>
                    <p>Ordinary travel from home to a regular workplace and back is generally commuting, even when you answer calls during the drive or carry work materials. Putting an advertisement on the car does not convert the commute into business mileage. Personal errands and family trips are also excluded.</p>
                    <p>Travel between one business location and another is generally different. So can travel to a qualifying temporary work location. If a home office qualifies as the taxpayer&apos;s principal place of business under federal rules, trips from that home office to another business location in the same trade or business may be business transportation. Merely working occasionally at a kitchen table does not automatically establish that treatment.</p>
                    <p>Document the business purpose, not just the odometer. “12 miles” says little. “July 18—office to client site for contract review—12 miles” provides the date, destination, relationship and purpose a reviewer can understand.</p>

                    <h2>Standard mileage versus actual vehicle expenses</h2>
                    <p>The optional rate is one method. An eligible taxpayer may instead allocate actual expenses such as gas, electricity, oil, repairs, insurance, registration, tires, lease payments or depreciation between business and personal use. The method producing the larger deduction is not necessarily the best method after administrative effort, depreciation rules and future flexibility are considered.</p>
                    <p>For a vehicle you own, the IRS generally requires choosing standard mileage in the first year it is available for business use if you want the ability to switch between eligible methods later. For a leased vehicle, choosing standard mileage generally commits the taxpayer to that method for the entire lease period, including renewals. Certain fleet use and depreciation choices can also make the standard rate unavailable.</p>
                    <p>Do not claim standard mileage and actual operating costs for the same vehicle and period. Business parking fees and tolls may generally be separately deductible when properly substantiated, but parking at a regular workplace is normally part of commuting. Financing decisions are also separate from mileage eligibility; compare the cash-flow effect with the <Link href="/calculators/auto-loan">Auto Loan Calculator</Link>.</p>

                    <h2>Medical, moving and charitable mileage rules</h2>
                    <h3>Medical transportation</h3>
                    <p>The medical rate can apply to transportation primarily for and essential to qualifying medical care. A federal medical-expense deduction generally requires itemizing and only counts eligible expenses above the applicable adjusted-gross-income threshold. The mileage rate does not transform an elective or personal trip into deductible medical transportation.</p>

                    <h3>Moving transportation</h3>
                    <p>The federal moving deduction remains limited. For 2026, it can apply to qualifying moves by active-duty members of the Armed Forces under a permanent-change-of-station order and, under newer law, certain members of the intelligence community. An ordinary civilian relocation for a new job does not become deductible merely because the move is work-related.</p>

                    <h3>Charitable service</h3>
                    <p>Eligible mileage driven in service of a qualified charitable organization remains 14 cents per mile for all of 2026. The trip must primarily serve the organization, not provide a substantial personal vacation or recreation benefit. Keep the organization, date, purpose and mileage, and verify that the organization and contribution rules qualify.</p>

                    <div className="not-prose my-10 rounded-3xl bg-slate-950 p-7 text-white">
                        <p className="text-sm font-black uppercase tracking-widest text-blue-300">Cash-flow check</p>
                        <h2 className="mt-2 text-2xl font-black">Budget vehicle costs before choosing a method</h2>
                        <p className="mt-2 text-slate-300">Compare fuel, payments, insurance, maintenance and tax reserves without sharing personal information.</p>
                        <Link href="/calculators/budget" className="mt-5 inline-flex rounded-xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-400">
                            Open the Budget Calculator →
                        </Link>
                    </div>

                    <h2>Build an audit-ready mileage log</h2>
                    <p>The strongest record is made at or near the time of the trip. A paper log, calendar, spreadsheet or mileage app can work if it captures reliable facts. Record the date, starting point and destination, deductible purpose, miles driven and any separately claimed parking or tolls. Retain receipts and appointment, invoice or calendar evidence that supports the purpose.</p>
                    <p>Also record the vehicle&apos;s beginning- and end-of-year odometer readings, or another reliable measure of total annual mileage. Total miles help establish the business-use percentage when actual expenses or listed-property rules require it. If two vehicles are used, keep separate records rather than combining every trip in one undifferentiated total.</p>
                    <p>For the 2026 midyear change, preserve separate January–June and July–December subtotals. A mileage app should export trip dates, not only one annual count. Review categorization monthly so client trips are not mixed with commuting or personal errands.</p>

                    <h2>2026 mileage checklist</h2>
                    <ul>
                        <li>Confirm the driver, vehicle owner or lessee, business entity and reimbursement arrangement.</li>
                        <li>Separate personal commuting from eligible business, medical, moving or charitable trips.</li>
                        <li>Use 72.5¢ and 20.5¢ through June 30; use 76¢ and 23.5¢ beginning July 1.</li>
                        <li>Keep charitable mileage at 14¢ for both periods.</li>
                        <li>Compare standard mileage with the actual-expense method before making an irrevocable or long-lived choice.</li>
                        <li>Retain a timely trip log and supporting business-purpose records.</li>
                        <li>Reconcile reimbursements so the same expense is not deducted twice.</li>
                    </ul>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://www.irs.gov/irb/2026-29_IRB#ANN-2026-11" target="_blank" rel="noopener noreferrer">IRS Announcement 2026-11: revised rates effective July 1, 2026</a></li>
                        <li><a href="https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" target="_blank" rel="noopener noreferrer">IRS: original 2026 standard mileage rates and method rules</a></li>
                        <li><a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer">IRS standard mileage rate reference</a></li>
                        <li><a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS Publication 463: travel, vehicle and recordkeeping rules</a></li>
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
            <ContextualInternalLinks currentSlug="irs-standard-mileage-rate-2026" showBlogs showCalculators />
            </article>
        </main>
    );
}
