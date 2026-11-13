import Link from 'next/link';
import CalculatorFAQ from '@/components/CalculatorFAQ';

const faqs = [
    { question: 'What does a mortgage amortization schedule show?', answer: 'It estimates each scheduled principal-and-interest payment, the interest portion, the principal reduction and the remaining balance. Taxes, insurance and HOA charges do not reduce the loan principal.' },
    { question: 'Does every 30-year loan pay mostly interest for the same number of years?', answer: 'No. The interest-principal crossover depends on the rate, term and payment history. There is no universal year that applies to every mortgage.' },
    { question: 'Will an extra principal payment lower my required payment?', answer: 'Not necessarily. With a typical fixed payment, extra principal can shorten repayment and reduce future interest without changing the required monthly payment. A recast is a separate process requiring lender approval.' },
    { question: 'Can my amortization schedule change?', answer: 'Yes. Extra payments, a rate adjustment, recast, modification, missed payments or other servicing events can change the actual path. A refinance replaces the loan with a new schedule.' },
    { question: 'Is an amortization balance the same as a payoff quote?', answer: 'No. A payoff quote can include interest through a specified payoff date and applicable charges. Request a dated payoff statement from the servicer before paying off the loan.' },
];

export default function AmortizationSeoContent() {
    return <>
        <section className="bg-white border-t border-gray-100 py-10 mt-6" aria-labelledby="amortization-guide">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
                <h2 id="amortization-guide">How to read a mortgage amortization schedule</h2>
                <p><strong>Quick answer:</strong> A mortgage amortization schedule separates each principal-and-interest payment into borrowing cost and balance reduction. For a typical fixed-rate, fully amortizing loan, the scheduled payment stays level while the interest portion falls as principal is repaid. Extra principal can change the payoff date, but the precise effect depends on the loan and payment timing.</p>
                <h3>Start with principal and interest, not the whole housing bill</h3>
                <p>Principal is the amount still owed. Interest is the borrowing charge for the period. The <a href="https://www.consumerfinance.gov/ask-cfpb/how-does-paying-down-a-mortgage-work-en-1943/">CFPB explains that only the principal portion reduces the mortgage balance</a>. Escrow deposits, homeowners insurance, property taxes and HOA charges are separate. They matter to affordability but are not principal repayment.</p>
                <p>A fixed principal-and-interest payment therefore does not guarantee a fixed total housing payment. Your tax or insurance bill can change even if the loan rate does not. Compare the complete budget using the <Link href="/calculators/mortgage">mortgage payment calculator with taxes and insurance</Link>, then use this schedule to understand the debt itself.</p>
                <h3>The payment formula and a first-month example</h3>
                <p>For a level-payment loan, monthly principal and interest equals P × r ÷ (1 − (1 + r)<sup>−n</sup>), where P is the starting loan principal, r is the annual note rate divided by 12 in decimal form, and n is the number of monthly payments. At a zero interest rate, the payment is simply P divided by n. <a href="https://www.consumerfinance.gov/ask-cfpb/how-do-mortgage-lenders-calculate-monthly-payments-en-1965/">CFPB payment guidance</a> distinguishes this ordinary fixed-rate model from balloon and adjustable-rate structures.</p>
                <p>For an illustrative $300,000 loan at 6% for 30 years, the modeled monthly principal-and-interest payment is about $1,798.65. First-month interest is $1,500: $300,000 × 0.06 ÷ 12. About $298.65 reduces principal, leaving approximately $299,701.35. These are hypothetical inputs, not a current rate offer; rounding and servicing conventions can make statement amounts differ.</p>
                <h3>There is no universal “interest becomes principal” year</h3>
                <p>At a higher rate, interest can dominate for longer; at a lower rate or shorter term, principal can represent more of a payment earlier. Do not rely on a blanket claim that every loan crosses over in year ten, fifteen or twenty. Read the actual schedule generated for your inputs. The rate, loan term and extra-payment history determine the result.</p>
                <p>Nor is accumulated principal repayment the same thing as total home equity. Equity depends on the home’s current value and all debts secured by it. A buyer can repay principal while market value falls, or gain market equity without making an extra payment. Selling expenses also affect the amount available after a sale.</p>
                <h3>How extra payments affect the schedule</h3>
                <p>An extra amount applied to principal lowers the balance used for future interest calculations. With the regular payment unchanged, more of later payments can go toward principal and repayment may finish sooner. The benefit depends on when the extra payment is made and how the servicer applies it. Verify principal-only instructions, the contract and any applicable prepayment terms before sending money.</p>
                <p>Do not assume an extra payment automatically reduces the next required monthly payment. Recasting and refinancing are separate decisions. Use the <Link href="/calculators/extra-payment">extra-payment calculator</Link> to test an affordable additional amount, and compare the result with retaining cash for emergencies or other goals. The calculator does not make that household tradeoff for you.</p>
                <h3>Biweekly scheduling is not twice-monthly scheduling</h3>
                <p>Twenty-six half-payments in a year equal thirteen full monthly-payment amounts. Twenty-four half-payments equal twelve. But the savings depend on when the servicer actually credits funds to principal; a payment service holding partial amounts may not reproduce a model that applies them immediately. Confirm the arrangement and any fees. The <Link href="/calculators/biweekly-mortgage">biweekly mortgage calculator</Link> is the dedicated place to compare that schedule.</p>
                <h3>Reconcile the model with your statement</h3>
                <p>For an existing loan, start with a current balance and the correct remaining term rather than simply recreating the original closing loan. Check the next interest and principal entries against the servicer’s statement. A modification, payment deferral or other servicing event can make the original schedule outdated. Adjustable rates require a new projection when the rate changes.</p>
                <p>A schedule balance is also not an amount to wire at payoff. Read the <Link href="/blog/mortgage-payoff-statement-escrow-refund-2026">payoff-statement and escrow-refund checklist</Link> and request a dated quote. For replacing the loan, use the <Link href="/calculators/refinance">refinance break-even calculator</Link>. <span data-nosnippet="">Reviewed November 13, 2026. Educational projections; verify actual loan terms and servicing records.</span></p>
            </div>
        </section>
        <CalculatorFAQ faqs={faqs} title="Mortgage Amortization Schedule FAQs" />
    </>;
}
