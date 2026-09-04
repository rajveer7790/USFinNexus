import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';

const URL = 'https://usfinnexus.com/blog/fafsa-2027-28';
const IMAGE = 'https://usfinnexus.com/images/fafsa-2027-28.webp';

export const metadata: Metadata = {
    title: 'FAFSA 2027–28: Opening Date, Deadlines & Checklist',
    description: 'The 2027–28 FAFSA opens to everyone by October 1, 2026. Get the official timeline, 2025 tax-year checklist, contributor steps and deadlines.',
    alternates: { canonical: URL },
    openGraph: {
        type: 'article', title: 'FAFSA 2027–28: Opening Date, Deadlines and Complete Checklist',
        description: 'Prepare for the 2027–28 FAFSA with the official launch timeline, required accounts, contributor rules, 2025 tax information and next steps.',
        url: URL, publishedTime: '2026-09-04', modifiedTime: '2026-09-04',
        images: [{ url: IMAGE, width: 1200, height: 630, alt: 'College-bound student and parent preparing financial records for the 2027–28 FAFSA at home' }],
    },
    twitter: { card: 'summary_large_image', title: 'FAFSA 2027–28: Dates and Checklist', description: 'Official opening timeline, deadlines, contributor rules and a practical filing checklist for 2027–28 financial aid.', images: [IMAGE] },
};

const faqs = [
    { question: 'When does the 2027–28 FAFSA open?', answer: 'Federal Student Aid says the 2027–28 FAFSA will be available to everyone by October 1, 2026. The form is in an early-access testing period before wide release, so families should use the official StudentAid.gov availability page rather than an unofficial launch date.' },
    { question: 'Which school year does the 2027–28 FAFSA cover?', answer: 'The 2027–28 FAFSA is for federal student aid for attendance from July 1, 2027, through June 30, 2028. Students seeking aid for an earlier term may need the 2026–27 form instead.' },
    { question: 'Which tax return does the 2027–28 FAFSA use?', answer: 'The 2027–28 FAFSA asks about 2025 federal tax information. Students and required contributors must provide consent and approval for the direct exchange of federal tax information, even when a person did not file a U.S. return.' },
    { question: 'What is the federal FAFSA deadline for 2027–28?', answer: 'The federal deadline is June 30, 2028, but state and college deadlines can be much earlier and some limited aid can run out. Federal Student Aid advises submitting as soon as possible after October 1, 2026.' },
    { question: 'Does a FAFSA contributor have to pay for college?', answer: 'No. A parent, spouse or other person identified as a contributor provides required information and a signature, but contributor status does not make that person financially responsible for the student’s education costs.' },
    { question: 'Should I skip FAFSA if my family income seems too high?', answer: 'No. FAFSA eligibility depends on more than a single income number, and schools or states may use FAFSA information for grants, work-study or other aid. File the form and compare the resulting aid offers instead of self-disqualifying.' },
];

export default function FAFSA202728Page() {
    return (
        <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <ArticleSchema title="FAFSA 2027–28: Opening Date, Deadlines and Complete Checklist" description="Official 2027–28 FAFSA opening timeline, deadline, 2025 tax-year requirements, contributor steps, filing checklist and aid-offer guidance." url={URL} datePublished="2026-09-04" dateModified="2026-09-04" authorName="USFinNexus Editorial Team" image={IMAGE} keywords={['FAFSA 2027-28', 'FAFSA opening date 2027-28', 'FAFSA deadline 2027-28', '2027 FAFSA checklist', 'FAFSA contributors', 'FAFSA 2025 tax return']} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: 'FAFSA 2027–28', item: '/blog/fafsa-2027-28' }]} />
            <article>
                <header className="mx-auto mb-8 max-w-4xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Education • Published September 4, 2026</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">FAFSA 2027–28: Opening Date, Deadlines and Complete Checklist</h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-600">A mistake-free FAFSA starts before the form opens. Use this official-source guide to choose the right award year, prepare contributors and records, and protect access to limited aid.</p>
                </header>
                <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl">
                    <Image src="/images/fafsa-2027-28.webp" alt="College-bound student and parent preparing financial records for the 2027–28 FAFSA at home" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 960px" />
                </div>
                <div className="prose prose-slate mx-auto max-w-3xl prose-headings:font-black prose-a:text-blue-700">
                    <p><strong>Quick answer:</strong> The <strong>2027–28 FAFSA will be available to everyone by October 1, 2026</strong>. It covers attendance from July 1, 2027, through June 30, 2028 and asks about 2025 federal tax information. The federal deadline is June 30, 2028, but state and college deadlines can be much earlier, so prepare accounts and contributor information now and submit as soon as practical after the form becomes widely available.</p>
                    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">This article is general educational and financial information, not individualized financial-aid, tax or legal advice. Deadlines, documentation and institutional aid rules vary. Confirm requirements with StudentAid.gov, your state agency and each school&apos;s financial-aid office.</aside>

                    <h2>FAFSA 2027–28 dates at a glance</h2>
                    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="p-4">Milestone</th><th className="p-4">Official timing</th><th className="p-4">What to do</th></tr></thead><tbody className="divide-y divide-slate-200">
                            <tr><td className="p-4 font-semibold">Early access</td><td className="p-4">Testing before wide release</td><td className="p-4">Use the official access page; do not pay for access</td></tr>
                            <tr><td className="p-4 font-semibold">Available to everyone</td><td className="p-4">By October 1, 2026</td><td className="p-4">Submit after all required sections and signatures are complete</td></tr>
                            <tr><td className="p-4 font-semibold">Aid period</td><td className="p-4">July 1, 2027–June 30, 2028</td><td className="p-4">Choose this form only for terms in that award year</td></tr>
                            <tr><td className="p-4 font-semibold">Federal deadline</td><td className="p-4">June 30, 2028</td><td className="p-4">Treat earlier state and school deadlines as controlling</td></tr>
                            <tr><td className="p-4 font-semibold">Tax information</td><td className="p-4">2025 federal tax year</td><td className="p-4">Every required person provides consent and approval</td></tr>
                        </tbody></table>
                    </div>
                    <p>Federal Student Aid is testing the form through an early-access process before making it broadly available. Participation in testing is not required to receive aid. If you do not have access yet, prepare your StudentAid.gov accounts, school list and financial records; everyone is expected to have access by October 1.</p>

                    <h2>Which FAFSA form should you complete?</h2>
                    <p>The year in the FAFSA title refers to the academic award year, not the day you submit it. Use the 2027–28 FAFSA for a program or term that falls between July 1, 2027 and June 30, 2028. A student starting college in fall 2027 ordinarily uses this form. A student seeking aid for spring or summer 2027 may still need the 2026–27 FAFSA, depending on the school&apos;s academic calendar.</p>
                    <p>Summer terms cause the most confusion because colleges can assign summer to different aid years. Ask the school which FAFSA applies before assuming. Filing the wrong form can delay an aid offer even when both forms are open.</p>

                    <h2>What you need before starting</h2>
                    <h3>StudentAid.gov accounts for every required person</h3>
                    <p>The student needs a StudentAid.gov account, commonly called an FSA ID. Each required contributor also uses their own account. An account is personal: family members should not create or sign with one another&apos;s credentials. Complete identity verification early because a contributor problem can keep the form from being submitted.</p>
                    <p>A contributor may be the student&apos;s spouse, a biological or adoptive parent, or a parent&apos;s spouse, depending on the answers in the form. Being a contributor does not create an obligation to pay the student&apos;s bill. It means the person must supply required information, give consent and approval for the federal tax-information exchange, and sign their section.</p>

                    <h3>2025 tax information and current asset records</h3>
                    <p>The 2027–28 FAFSA asks about the 2025 federal tax return. Federal Student Aid&apos;s year-specific help page explicitly identifies 2025 as the tax year. Students and contributors must consent to the direct exchange of federal tax information with the IRS even if they did not file a U.S. return. Without the required consent and approval, the student is not eligible for federal student aid.</p>
                    <p>Have tax records available even though much of the data is transferred. The form may also request current balances for cash, checking and savings, the net worth of investments, and certain business or income-producing farm information. “Current” means the value when the form is completed, not the 2025 year-end value. Do not include assets the instructions exclude, and do not move or hide assets to manipulate eligibility.</p>

                    <h3>School list and family details</h3>
                    <p>Prepare the names of every college, career school or eligible program that should receive the FAFSA information. Listing a school is not a commitment to apply or attend. Include realistic options even when admission is pending so the school can build an aid offer after it has the necessary records.</p>
                    <p>You may also need Social Security numbers where required, dates of birth, email addresses, marital status, records of child support received and information needed to determine dependency status. The 2027–28 dependency questions are published on StudentAid.gov; being claimed on a parent&apos;s tax return is not the FAFSA&apos;s sole dependency test.</p>

                    <h2>How to complete the 2027–28 FAFSA</h2>
                    <ol>
                        <li><strong>Start at StudentAid.gov.</strong> The FAFSA is free. Avoid ads or services that charge to unlock or submit it.</li>
                        <li><strong>Confirm the award year.</strong> Select 2027–28 for attendance beginning July 1, 2027 through June 30, 2028.</li>
                        <li><strong>Enter student information carefully.</strong> Match legal identity records and use an email address the student controls.</li>
                        <li><strong>Invite the correct contributors.</strong> Enter the requested identifying information exactly so invitations connect to the correct accounts.</li>
                        <li><strong>Complete every assigned section.</strong> Contributors work in their own accounts; one person should not impersonate another.</li>
                        <li><strong>Give tax-data consent and approval.</strong> This step is required even for a contributor who did not file a return.</li>
                        <li><strong>Add schools.</strong> Send information to all reasonable choices rather than waiting for an admission decision.</li>
                        <li><strong>Review, sign and submit.</strong> The form is not complete until all required signatures and sections are present.</li>
                        <li><strong>Save confirmation details.</strong> Watch for the FAFSA Submission Summary and school requests.</li>
                    </ol>

                    <h2>Federal, state and college deadlines are different</h2>
                    <p>The federal deadline for the 2027–28 FAFSA is June 30, 2028. That date is not a safe universal target. States, colleges and scholarship programs can impose earlier priority deadlines, and some funds are awarded until available money is exhausted. Federal Student Aid tells applicants to submit as soon as possible after October 1, 2026.</p>
                    <p>Create a simple deadline sheet with separate rows for the federal form, state grant agency, each college and any scholarship requiring FAFSA data. “Priority deadline” often means the date that protects consideration for a broader pool of institutional or state aid; it does not necessarily mean the FAFSA website closes after that date.</p>

                    <h2>What happens after submission?</h2>
                    <p>After processing, the student receives a FAFSA Submission Summary. Review it for reported information, estimated federal aid and any action items. An estimate is not a final award. Schools use FAFSA information with their cost of attendance and aid policies, and they may request verification or clarification before issuing or finalizing an offer.</p>
                    <p>The Student Aid Index, or SAI, is not a bill and is not the amount a family must pay. It is an eligibility measure used in federal aid calculations. Compare offers by separating grants and scholarships from work-study and loans, then subtract gift aid from the full cost of attendance. The <Link href="/calculators/budget">Budget Calculator</Link> can organize housing, food, transportation and books that may not be obvious in a tuition-only comparison.</p>
                    <p>For 2027–28, Federal Student Aid&apos;s estimator already lets families explore potential federal aid before filing. Treat it as planning information, not a promise. When official loan terms are offered, model the monthly and total cost with the <Link href="/calculators/student-loan">Student Loan Calculator</Link> rather than comparing only the amount available to borrow.</p>

                    <h2>Income changed after 2025: what should you do?</h2>
                    <p>Use the tax year requested by the FAFSA even if 2025 no longer reflects the household&apos;s reality. Federal Student Aid says families generally cannot replace the required tax information with a later year on their own. Submit accurate requested data, then contact each school&apos;s financial-aid office about a professional-judgment review.</p>
                    <p>A job loss, pay reduction, death, divorce, unusually high medical costs or another documented special circumstance may support a review. The school decides whether an adjustment is warranted and what evidence is required. Prepare termination notices, recent pay records, benefit statements or other relevant documents, but do not upload sensitive information anywhere except the school&apos;s approved channel.</p>

                    <h2>How FAFSA connects to Pell Grants and loans</h2>
                    <p>Submitting FAFSA is the gateway to federal grants, work-study and student loans, but it does not guarantee each type of aid. For context, the current <Link href="/blog/pell-grant-2026-27">2026–27 Pell Grant guide</Link> explains how SAI, enrollment intensity, cost of attendance and lifetime eligibility affect that earlier award year. The 2027–28 Pell maximum should be confirmed only after an official announcement; do not reuse the prior year&apos;s maximum as a promise.</p>
                    <p>Federal loan rates are fixed for the life of each loan but change for new loans by disbursement window. The <Link href="/blog/federal-student-loan-interest-rates-2026-27">2026–27 federal student loan rates</Link> apply only to loans first disbursed in that statutory period. A loan for 2027–28 may carry a different official rate, which is typically determined later.</p>

                    <h2>Common FAFSA mistakes to avoid</h2>
                    <ul>
                        <li>Completing 2026–27 when the student actually needs 2027–28.</li>
                        <li>Waiting for the federal deadline while missing a state or college priority deadline.</li>
                        <li>Using a parent&apos;s account to sign the student section, or vice versa.</li>
                        <li>Inviting the wrong contributor or entering mismatched identity information.</li>
                        <li>Refusing tax-data consent because a contributor did not file a return.</li>
                        <li>Reporting 2026 taxes when the 2027–28 form asks about 2025.</li>
                        <li>Assuming a contributor becomes responsible for tuition.</li>
                        <li>Leaving off a possible school while waiting for admission.</li>
                        <li>Ignoring the Submission Summary or a school&apos;s verification request.</li>
                        <li>Paying a third party for a form that is free on StudentAid.gov.</li>
                    </ul>

                    <h2>Official sources</h2>
                    <ul>
                        <li><a href="https://studentaid.gov/announcements-events/fafsa-support" target="_blank" rel="noopener noreferrer">Federal Student Aid: early access to the 2027–28 FAFSA</a></li>
                        <li><a href="https://studentaid.gov/apply-for-aid/fafsa/filling-out" target="_blank" rel="noopener noreferrer">Federal Student Aid: filling out the correct FAFSA form</a></li>
                        <li><a href="https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines" target="_blank" rel="noopener noreferrer">Federal Student Aid: 2027–28 deadlines</a></li>
                        <li><a href="https://studentaid.gov/articles/things-you-need-for-fafsa/" target="_blank" rel="noopener noreferrer">Federal Student Aid: FAFSA records checklist and tax-data consent</a></li>
                        <li><a href="https://studentaid.gov/help/filed-1040-1040nr" target="_blank" rel="noopener noreferrer">Federal Student Aid: 2025 tax return requirement for 2027–28</a></li>
                        <li><a href="https://studentaid.gov/aid-estimator" target="_blank" rel="noopener noreferrer">Federal Student Aid Estimator for 2027–28</a></li>
                    </ul>

                    <h2>Frequently asked questions</h2>
                    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
                </div>
                <div className="mx-auto mt-12 max-w-3xl"><AuthorBio updatedDate="September 4, 2026" /></div>
            </article>
        </main>
    );
}
