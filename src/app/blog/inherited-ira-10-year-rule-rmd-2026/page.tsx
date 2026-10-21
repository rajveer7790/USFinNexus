import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = 'Inherited IRA 10-Year Rule: Do You Need an RMD in 2026?';
const description = 'Use this inherited IRA decision guide to understand the 10-year rule, annual RMDs, spouse options, deadlines and tax traps for 2026.';
const url = 'https://usfinnexus.com/blog/inherited-ira-10-year-rule-rmd-2026';
const image = 'https://usfinnexus.com/images/inherited-ira-10-year-rule-rmd-2026.webp';
const faqs = [
  { question: 'Does every inherited IRA have to be emptied within 10 years?', answer: 'No. The result depends on when the original owner died, the beneficiary category and whether the beneficiary is an individual. Many non-spouse individual beneficiaries of owners who died after 2019 are subject to the 10-year rule, but eligible designated beneficiaries and some older inherited accounts can follow different rules.' },
  { question: 'Do I need an annual inherited IRA RMD during the 10-year period?', answer: 'It depends. Under current IRS rules, a non-eligible designated beneficiary generally has annual RMDs when the owner died on or after the required beginning date, while an owner who died before that date can generally leave the timing flexible until the account must be emptied by the end of year 10.' },
  { question: 'What is the deadline for the 10-year inherited IRA rule?', answer: 'The account generally must be fully distributed by December 31 of the calendar year containing the tenth anniversary of the original owner’s death. For example, an owner who died in 2021 generally creates a December 31, 2031 deadline when the 10-year rule applies.' },
  { question: 'Is an inherited Roth IRA subject to the 10-year rule?', answer: 'A non-spouse beneficiary can be subject to the 10-year rule for an inherited Roth IRA. Because a Roth IRA owner is treated as dying before the required beginning date, annual distributions generally are not required in years one through nine under that rule, but the account still must be emptied by the applicable year-10 deadline.' },
  { question: 'Can I combine inherited IRA RMDs with my own IRA RMD?', answer: 'No. An inherited IRA RMD is not satisfied by withdrawing from your own IRA. Limited aggregation can be available among inherited IRAs of the same type inherited from the same decedent, so confirm the account history and calculation with the custodian or a qualified tax professional.' },
  { question: 'What happens if I miss an inherited IRA RMD?', answer: 'An excise tax can apply to the shortfall. Current federal law generally sets it at 25%, potentially reduced to 10% when corrected within the applicable correction window. Form 5329 and reasonable-cause relief can be relevant, so address a missed distribution promptly with a tax professional.' },
];

export const metadata: Metadata = {
  title: 'Inherited IRA 10-Year Rule 2026: RMD Decision Guide', description,
  alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-10-21', modifiedTime: '2026-10-21', images: [{ url: image, width: 1200, height: 630, alt: 'Beneficiary reviewing an inherited retirement account folder, calculator and calendar at home' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-10-21" dateModified="2026-10-21" authorName="USFinNexus Editorial Team" keywords={['inherited IRA 10-year rule', 'inherited IRA RMD 2026', 'beneficiary IRA withdrawal rules', 'inherited Roth IRA 10-year rule']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8"><Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/inherited-ira-10-year-rule-rmd-2026' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Retirement tax planning · Published and reviewed October 21, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead">Many non-spouse beneficiaries must empty an inherited IRA by the end of the tenth year after the owner’s death. Whether you also need a distribution in 2026 depends mainly on the owner’s year of death, whether the owner had reached the required beginning date and what kind of beneficiary you are. Do not use the ten-year deadline alone as your withdrawal plan.</p>
        <figure><EditorialImage src="/images/inherited-ira-10-year-rule-rmd-2026.webp" width={1200} height={630} priority alt="Beneficiary reviewing an inherited retirement account folder, calculator and calendar at home" className="h-auto w-full rounded-2xl" /><figcaption>Original AI-generated editorial photograph; no real beneficiary or retirement account is shown.</figcaption></figure>

        <h2>Quick answer: the owner’s required beginning date changes the schedule</h2>
        <p>For many individual beneficiaries who are not eligible designated beneficiaries, the decision separates into two common cases. If the owner died before the required beginning date, the account generally can be withdrawn on a flexible schedule as long as it is empty by the end of year 10. If the owner died on or after that date, annual RMDs generally continue during the ten-year period and the remaining balance still must be gone by the final deadline.</p>
        <p>The <a href="https://www.irs.gov/publications/p590b">IRS Publication 590-B</a> is the central source for IRA beneficiary rules. The IRS also maintains a <a href="https://www.irs.gov/retirement-plans/required-minimum-distributions-for-ira-beneficiaries">beneficiary RMD chart</a>. Use the version applicable to the distribution year and verify the decedent’s information; a rule summary cannot determine the answer without those facts.</p>

        <div className="not-prose overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th className="border p-3">Common situation</th><th className="border p-3">Typical federal rule</th><th className="border p-3">2026 question</th></tr></thead><tbody>
          <tr><td className="border p-3">Non-eligible individual; owner died before required beginning date</td><td className="border p-3">Empty by year 10; no annual amount generally required in years 1–9</td><td className="border p-3">How much should you take now to manage later taxes?</td></tr>
          <tr><td className="border p-3">Non-eligible individual; owner died on/after required beginning date</td><td className="border p-3">Annual RMDs plus full distribution by year 10</td><td className="border p-3">What is the 2026 life-expectancy calculation?</td></tr>
          <tr><td className="border p-3">Eligible designated beneficiary</td><td className="border p-3">Life-expectancy treatment may be available; special rules vary</td><td className="border p-3">Which beneficiary category and election apply?</td></tr>
          <tr><td className="border p-3">Estate, certain trusts or another non-individual</td><td className="border p-3">Different five-year or remaining-life rules can apply</td><td className="border p-3">Who is treated as the beneficiary for tax purposes?</td></tr>
        </tbody></table></div>
        <p>This table is a starting map, not a substitute for the IRA agreement. Accounts inherited before 2020 can follow older rules, and successor beneficiaries can face a different deadline. Employer plans may also impose distribution terms that require coordination before money is moved to an inherited IRA.</p>

        <h2>Step 1: confirm five facts before calculating anything</h2>
        <ol><li>The original owner’s date of death.</li><li>The owner’s date of birth and required beginning date.</li><li>Whether the year-of-death RMD was fully taken.</li><li>Your relationship and beneficiary classification.</li><li>Whether the account is traditional, Roth, or an employer plan account.</li></ol>
        <p>Ask the custodian for the beneficiary designation, prior year-end balance, distribution history and its 2026 calculation. Do not assume that the custodian’s automated reminder covers every account you inherited. Our broader <Link href="/blog/required-minimum-distributions-2026">2026 RMD guide</Link> explains owner RMD basics, but beneficiary rules require this additional decision tree.</p>

        <h2>Step 2: determine whether you are an eligible designated beneficiary</h2>
        <p>Under current rules, eligible designated beneficiaries generally include a surviving spouse, the owner’s minor child, a disabled or chronically ill individual, and an individual not more than ten years younger than the owner. Each label has technical requirements. A minor child’s special treatment does not simply apply to every minor beneficiary, and the transition after majority needs its own deadline review.</p>
        <p>A surviving spouse often has more choices than another beneficiary, including treating an inherited IRA as the spouse’s own in appropriate circumstances or keeping it inherited. Age, current cash needs, the owner’s age and the effect on later RMDs all matter. Moving first and analyzing later can eliminate a useful option, so obtain qualified advice before retitling or combining an inherited account.</p>
        <h3>Why beneficiary labels matter</h3>
        <p>An eligible beneficiary may be able to use life expectancy rather than the ordinary ten-year schedule. A non-eligible designated beneficiary generally cannot stretch a post-2019 inherited account over a lifetime. An estate or nonqualifying trust is not treated like an ordinary named individual. That is why “I inherited an IRA” is not enough information to produce a reliable deadline.</p>

        <h2>Step 3: identify the correct year-10 deadline</h2>
        <p>The ten-year deadline is generally December 31 of the calendar year containing the tenth anniversary of death. If an owner died in 2021 and the ten-year rule applies, the account generally must be empty by December 31, 2031. It is not ten years from the date you opened the inherited IRA, received paperwork or first learned about the account.</p>
        <p>Keep the death certificate, beneficiary paperwork and statements that establish the starting balance. A successor beneficiary should not automatically restart a fresh ten years. Ask the custodian to document the deadline it has recorded and compare that with a professional’s analysis of the original owner and beneficiary chain.</p>

        <h2>Step 4: decide whether 2026 requires an annual RMD</h2>
        <p>If a non-eligible designated beneficiary inherited from an owner who died on or after the required beginning date, the 2024 final regulations generally require annual distributions during the ten-year window. The transition relief that protected certain missed distributions through 2024 should not be treated as a continuing waiver for 2026. The <a href="https://www.irs.gov/irb/2024-33_IRB">IRS final-regulation bulletin</a> and current Publication 590-B should guide the calculation.</p>
        <p>If the owner died before the required beginning date and the ten-year rule applies, Publication 590-B generally does not require a distribution in years one through nine. “Not required” does not mean “always wise to wait.” Deferring the whole taxable balance to year 10 can concentrate ordinary income in one year. Model a measured schedule using the <Link href="/calculators/income-tax">income-tax calculator</Link>, while remembering that future brackets, investment results and personal income are unknown.</p>
        <h3>Year-of-death RMD is a separate check</h3>
        <p>When the owner had an RMD for the year of death and did not complete it, the beneficiary generally must ensure that remaining amount is distributed. This is separate from the beneficiary’s first annual RMD. Confirm how much the owner already withdrew across all relevant accounts before assuming the obligation was satisfied.</p>

        <h2>Inherited Roth IRAs still have a deadline</h2>
        <p>A Roth IRA owner is treated as dying before the required beginning date for these beneficiary rules. A non-eligible beneficiary under the ten-year rule therefore generally does not have annual RMDs in years one through nine, but must empty the inherited Roth IRA by the end of year 10. That distinction makes the timing flexible; it does not make the final deadline optional.</p>
        <p>Qualified Roth distributions can be tax-free, but inherited account ordering and the five-year qualification period can still matter. Ask the custodian to preserve the owner’s contribution and conversion history. Do not apply a traditional IRA tax estimate to a Roth account—or assume every dollar is automatically qualified—without checking the record.</p>

        <h2>How the annual amount is generally calculated</h2>
        <p>An annual inherited IRA RMD commonly starts with the prior December 31 account balance and a life-expectancy factor from the IRS Single Life Expectancy Table, then applies the beneficiary rules for later years. Custodian calculations can help, but the beneficiary remains responsible for the correct amount. Transfers, multiple inherited accounts and missing balance records can cause mismatches.</p>
        <p>Do not combine an inherited IRA RMD with the RMD from your own IRA. IRS instructions for <a href="https://www.irs.gov/instructions/i5329">Form 5329</a> note that aggregation is limited: inherited IRAs generally need to be tied to the same decedent and compatible account type before their distributions can be coordinated. Ask before taking one large distribution from an unrelated account.</p>

        <h2>Tax planning inside the ten-year window</h2>
        <p>Traditional inherited IRA distributions are generally ordinary income to the extent they come from pretax money. They are not automatically subject to the 10% early-distribution tax merely because the beneficiary is under age 59½, but regular income tax can still be substantial. Nondeductible basis, estate-tax deductions and state law can change the result.</p>
        <p>Compare several withdrawal schedules rather than only “minimum” and “everything now.” Years with lower wages, retirement, business losses or large deductions may create room for a planned distribution. Conversely, a distribution can affect Medicare premiums, taxation of Social Security, credits or income-based programs. A <Link href="/blog/roth-conversion-tax-planning-2026">Roth conversion plan</Link> for your own accounts should be coordinated with inherited IRA income, because an inherited non-spouse IRA generally cannot simply be converted as if it were your own.</p>
        <p>The <Link href="/calculators/retirement">retirement calculator</Link> can compare long-term scenarios, but do not treat an assumed return as a forecast. The legal deadline, cash need, portfolio risk and tax bracket all belong in the plan.</p>

        <h2>What if the 2026 RMD was missed?</h2>
        <p>Act promptly rather than waiting for the year-10 deadline. The excise tax on an RMD shortfall is generally 25% under current law and can be reduced to 10% when a timely correction meets the rules. Form 5329 is used to report the shortfall, and the IRS can waive the tax for reasonable error when reasonable steps are being taken to remedy it.</p>
        <p>Ask the custodian for the calculated shortfall and distribution record, take corrective action based on professional advice, and keep a clear explanation with supporting documents. A late distribution does not automatically erase the reporting issue, and an online calculator cannot determine whether reasonable-cause relief applies.</p>

        <h2>Frequently asked questions</h2>{faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}
        <h2>Sources and financial disclaimer</h2>
        <p>IRS Publication 590-B, beneficiary RMD tables, Form 5329 instructions and the 2024 final-regulation bulletin linked above were reviewed October 21, 2026. Rules can differ for deaths before 2020, eligible designated beneficiaries, trusts, estates, successor beneficiaries and employer plans. This article is general federal tax education, not tax, legal or investment advice. Confirm the owner’s facts, account agreement, state tax treatment and your deadline with the custodian and a qualified professional.</p>
      </article>
    </main>
  </>;
}
