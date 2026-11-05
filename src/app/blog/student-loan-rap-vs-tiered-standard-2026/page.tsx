import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSchema from '@/components/ArticleSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorialImage from '@/components/EditorialImage';

const title = 'RAP vs. Tiered Standard Student Loan Plans (2026)';
const description = 'Compare the new Repayment Assistance Plan and Tiered Standard Plan by payment formula, term, eligibility, interest and forgiveness path.';
const url = 'https://usfinnexus.com/blog/student-loan-rap-vs-tiered-standard-2026';
const image = 'https://usfinnexus.com/images/student-loan-rap-vs-tiered-standard-2026.webp';
const faqs = [
  { question: 'What is the main difference between RAP and Tiered Standard?', answer: 'RAP is an income-driven plan with a payment based on adjusted gross income and dependents, while Tiered Standard uses a fixed payment designed to repay the balance over a term determined by the amount owed.' },
  { question: 'How is a RAP payment calculated?', answer: 'Federal Student Aid says RAP generally uses 1% to 10% of adjusted gross income, divided by 12, then reduces the monthly amount by $50 for each dependent claimed on the federal tax return. The payment cannot be less than $10.' },
  { question: 'How long is the Tiered Standard repayment term?', answer: 'The listed term is 10 years for balances under $25,000, 15 years for balances under $50,000, 20 years for balances under $100,000, and 25 years for balances above $100,000.' },
  { question: 'Do RAP payments count toward PSLF?', answer: 'Federal Student Aid says full, on-time IDR payments generally count toward Public Service Loan Forgiveness when the borrower also satisfies the program’s employment, loan and other requirements.' },
  { question: 'Can Parent PLUS loans use RAP?', answer: 'No. Federal Student Aid says Parent PLUS loans and consolidation loans that repaid Parent PLUS debt are not eligible for RAP. Parent borrowers should use the official calculator and loan-specific guidance.' },
  { question: 'What happens if a SAVE borrower misses the plan-selection deadline?', answer: 'After the servicer’s 90-day notice and final 30-day notice, a borrower who does not choose another eligible plan may be placed in Standard or Tiered Standard, depending on loan disbursement dates.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { type: 'article', title, description, url, publishedTime: '2026-11-05', modifiedTime: '2026-11-05', siteName: 'USFinNexus', images: [{ url: image, width: 1200, height: 630, alt: 'Borrower comparing income-based and fixed student loan repayment worksheets' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default function Page() {
  return <>
    <ArticleSchema title={title} description={description} url={url} image={image} datePublished="2026-11-05" dateModified="2026-11-05" authorName="USFinNexus Editorial Team" keywords={['RAP vs Tiered Standard', 'Repayment Assistance Plan 2026', 'Tiered Standard student loan plan', 'SAVE repayment plan replacement', 'student loan repayment plan comparison']} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: title, item: '/blog/student-loan-rap-vs-tiered-standard-2026' }]} />
      <article className="prose prose-slate max-w-none">
        <p className="text-sm font-semibold text-blue-700">Student loans · Published and reviewed November 5, 2026 · USFinNexus Editorial Team</p>
        <h1>{title}</h1>
        <p className="lead"><strong>Answer first:</strong> RAP may fit borrowers who need payments tied to income, expect their income to change, have eligible Direct Loans or are pursuing an income-driven discharge or PSLF path. Tiered Standard may fit borrowers who want a predictable fixed payment and a defined payoff date. The right choice is not simply the lowest first payment: compare eligibility, total interest, term, dependent adjustment, forgiveness goals and the exact loans shown in your StudentAid.gov account.</p>
        <figure><EditorialImage src="/images/student-loan-rap-vs-tiered-standard-2026.webp" width={1200} height={630} priority alt="Borrower comparing income-based and fixed student loan repayment worksheets" className="h-auto w-full rounded-2xl" /><figcaption>Original editorial image illustrating a side-by-side repayment-plan review.</figcaption></figure>

        <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Check your disbursement dates first.</strong> A July 1, 2026 dividing line affects which plans may be available. Mixed loan types and dates can produce different eligibility results for different loans.</aside>

        <h2>RAP versus Tiered Standard at a glance</h2>
        <div className="overflow-x-auto"><table><thead><tr><th scope="col">Feature</th><th scope="col">Repayment Assistance Plan</th><th scope="col">Tiered Standard Plan</th></tr></thead><tbody>
          <tr><th scope="row">Payment basis</th><td>1%–10% of AGI, divided by 12, minus $50 per claimed dependent; $10 minimum</td><td>Balance and interest rate, amortized over a balance-based fixed term</td></tr>
          <tr><th scope="row">Payment changes</th><td>Can change when income or dependents change</td><td>Fixed payment unless the loan or plan changes</td></tr>
          <tr><th scope="row">Repayment term</th><td>30 years</td><td>10, 15, 20 or 25 years based on balance</td></tr>
          <tr><th scope="row">Potential discharge</th><td>Remaining eligible balance after the repayment period, subject to rules</td><td>None expected because payments amortize the loan</td></tr>
          <tr><th scope="row">PSLF use</th><td>IDR payments may qualify when every PSLF requirement is met</td><td>Do not assume it advances PSLF; verify with StudentAid.gov</td></tr>
          <tr><th scope="row">Parent PLUS</th><td>Not eligible, including affected consolidation loans</td><td>May be the fixed option for eligible post-July 1, 2026 loans</td></tr>
        </tbody></table></div>

        <h2>How the RAP payment works</h2>
        <p>Federal Student Aid describes RAP as an income-driven repayment plan. Its base monthly amount is calculated as 1% to 10% of adjusted gross income, depending on the applicable income band, divided by 12. The calculation then subtracts $50 for each dependent claimed on the borrower&apos;s federal tax return, but it does not produce a payment below $10.</p>
        <p>That structure means two borrowers with the same loan balance can have different payments. A borrower with lower AGI or more qualifying dependents may pay less, while a borrower whose income rises can see the required amount rise. Married borrowers should confirm how filing status and household information affect the official calculation instead of estimating from take-home pay.</p>
        <p>RAP has a 30-year repayment period. A smaller monthly bill can protect near-term cash flow, but a long term can also change total interest and the time required to reach discharge. Federal Student Aid also notes that full and on-time RAP payments may receive protections when the payment does not cover monthly accrued interest, plus a possible matching principal benefit. Use the official Repayment Calculator for the personalized projection rather than reproducing those rules in a spreadsheet.</p>

        <h2>How Tiered Standard works</h2>
        <p>Tiered Standard is a fixed-payment plan. Federal Student Aid lists a 10-year term for balances under $25,000, 15 years for balances under $50,000, 20 years for balances under $100,000, and 25 years for balances over $100,000. The servicer calculates a payment intended to retire principal and interest within the assigned term.</p>
        <p>A longer term generally lowers the required monthly payment compared with amortizing the same balance over ten years, but it can increase lifetime interest. The plan does not automatically become cheaper because the payment is fixed. Compare the total paid, payoff date and interest—not only the next bill.</p>
        <p>Direct Loans first disbursed on or after July 1, 2026 use Tiered Standard as the fixed-payment option. If a borrower does not choose a repayment plan, the servicer may place eligible newer loans into Tiered Standard. Older loans can have different fixed-plan choices.</p>

        <h2>The July 1, 2026 eligibility divide</h2>
        <h3>Loans entirely after July 1, 2026</h3>
        <p>For borrowers whose loans were all disbursed on or after that date, RAP is the only listed income-driven option. Tiered Standard is the listed fixed option. Parent PLUS debt remains outside RAP.</p>
        <h3>Loans entirely before July 1, 2026</h3>
        <p>Depending on loan type and borrower history, older loans may have access to RAP, IBR, PAYE or ICR. PAYE and ICR are scheduled to end no later than July 1, 2028. That does not mean every older loan qualifies for every plan.</p>
        <h3>Mixed loan dates or FFEL loans</h3>
        <p>Mixed portfolios may need separate treatment. Some FFEL and Perkins loans can become RAP-eligible only through Direct Consolidation. Consolidation creates a new loan and can affect benefits, payment counts and other rights, so review the personalized official results before consolidating.</p>

        <h2>What SAVE borrowers need to do</h2>
        <p>A federal court order ended the SAVE Plan in March 2026. Federal Student Aid says servicers began sending plan-change notices July 1 and will notify all affected borrowers before the end of 2026. The borrower&apos;s 90-day action window starts from the servicer notice—not a general news date. A final 30-day notice follows if no selection is made.</p>
        <p>If the final deadline passes, borrowers with no loan disbursed on or after July 1, 2026 may be placed in Standard, while borrowers with a newer loan that entered repayment may be placed in Tiered Standard. Because auto-pay can withdraw the new amount, check the servicer inbox, bank balance and first due date. Federal Student Aid says servicers provide the new payment amount at least 21 days before that due date.</p>

        <h2>How to make the decision</h2>
        <ol>
          <li><strong>Inventory every loan.</strong> Record type, disbursement date, balance, rate, servicer and current plan from the StudentAid.gov Dashboard.</li>
          <li><strong>Run the official calculator.</strong> Compare monthly payment, term, principal, interest, total paid and projected discharge.</li>
          <li><strong>Test an income increase.</strong> RAP payments can rise; do not budget only for the current-year result.</li>
          <li><strong>Confirm PSLF status.</strong> Check employer eligibility, loan type and qualifying-payment records before choosing around forgiveness.</li>
          <li><strong>Review taxes.</strong> IDR discharge may have federal or state tax consequences depending on law at the time; PSLF discharge is federally tax-free under current guidance.</li>
          <li><strong>Save proof.</strong> Keep the application, confirmation number, servicer notices and the first statement under the new plan.</li>
        </ol>
        <p>Use the <Link href="/calculators/student-loan">USFinNexus student-loan calculator</Link> to understand basic amortization, then use the official federal calculator for eligibility and forgiveness estimates. Our <Link href="/blog/student-loan-idr-recertification-2026">IDR recertification guide</Link>, <Link href="/blog/federal-student-loan-interest-rates-2026-27">2026–27 rate guide</Link> and <Link href="/calculators/budget">budget calculator</Link> can help organize the cash-flow side.</p>

        <h2>Frequently asked questions</h2>
        {faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}

        <h2>Sources and student-loan disclaimer</h2>
        <p>Primary sources reviewed November 5, 2026: Federal Student Aid&apos;s <a href="https://studentaid.gov/manage-loans/repayment/plans">repayment-plan comparison</a>, <a href="https://studentaid.gov/articles/faqs-idr-plan/">IDR FAQs</a>, and <a href="https://studentaid.gov/articles/save/">SAVE borrower transition FAQs</a>, plus the Education Department&apos;s <a href="https://www.ed.gov/about/news/press-release/fact-sheet-trump-administration-making-higher-education-more-affordable-expanding-opportunity-and-simplifying-student-loan-repayment">July 1 plan fact sheet</a>. This article is general education, not individualized financial, tax or legal advice. Your official account, servicer notice and federal rules control eligibility and payment calculations.</p>
      </article>
    </main>
  </>;
}
