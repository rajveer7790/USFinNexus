import Link from 'next/link';
import { StoryPage, storyMetadata, type Story } from '../_components/StoryPage';

const title = "Which Student Loan Should Get Your Extra Payment?";
const description = "Compare the interest impact of sending extra money to three student loans, then check payment directions, accrued interest and paid-ahead status.";
const story: Story = {
  slug: "student-loan-extra-payment-which-loan-first",
  title,
  description,
  category: "Student Loans",
  alt: "Hands organizing unbranded student loan envelopes near a calculator",
  faq: [
  [
    "Which loan should I pay extra on first?",
    "After meeting all required payments, targeting the highest rate generally produces the largest immediate interest reduction per dollar of principal repaid. Check whether forgiveness, subsidies, or other loan terms change your decision."
  ],
  [
    "Can I choose which student loan gets an extra payment?",
    "Check your servicer’s payment instructions. Some servicers let borrowers direct extra funds to a particular loan or save instructions for future payments. Confirm how the payment posted."
  ],
  [
    "Does paying ahead always reduce my next required payment?",
    "It can move or reduce the amount shown as due, depending on the servicer and your instructions. Review the next statement, autopay settings and principal balances to see how your account was treated."
  ]
],
};

export const metadata = storyMetadata(story, '2026-11-26');

export default function Page() {
  return (
    <StoryPage story={story} datePublished="2026-11-26">
      <p><strong>Quick answer.</strong> If all required payments are covered and your goal is to reduce interest, start by comparing the rates on the individual loans. An extra dollar applied to the highest-rate principal generally avoids the most immediate interest. Ask the servicer how to target that loan, then check your statement for accrued interest, principal reduction, and the next due date.</p>
      <h2>Identify the individual loans behind one bill</h2>
      <p>A single servicer bill can cover several separate loans. Open the account details and write down the identifier, outstanding principal, unpaid interest, stated rate and required payment for each loan. If the portal displays both a balance and a payoff amount, keep both labels with the numbers. Your worksheet needs the principal that is accruing interest and the amount that would actually clear the loan if you decided to pay it off today.</p>
      <p>Next, confirm that the required amount for each loan will be paid. The examples here assume the account is current and you have extra cash available after those payments and essential bills. Directing extra money to one account should fit alongside each scheduled obligation. If you are unsure whether one payment satisfies all groups, ask the servicer before moving money between them.</p>
      <h3>Compare three destinations for the same $600</h3>
      <p>Assume a borrower has three loans, each with more than $600 of principal remaining. Suppose the regular payment has already covered accrued interest and the entire $600 extra reduces principal immediately. The annual interest rates below are hypothetical. For the first month estimate, multiply the extra principal by the annual rate and divide by twelve. The annualized column shows the starting difference times twelve, holding that principal difference steady. It is an illustration of the initial effect. A full amortization schedule may yield different savings.</p>
      <div className="overflow-x-auto"><table><caption>Initial interest effect of a $600 principal reduction</caption><thead><tr><th scope="col">Target rate</th><th scope="col">Monthly equivalent</th><th scope="col">Annualized starting difference</th></tr></thead><tbody><tr><td>4%</td><td>$2</td><td>$24</td></tr><tr><td>6%</td><td>$3</td><td>$36</td></tr><tr><td>8%</td><td>$4</td><td>$48</td></tr></tbody></table></div>
      <p>Choosing the 8% loan instead of the 4% loan produces an initial monthly difference of about two dollars in this example. The dollar amounts may look modest for one payment. When repeated across many payments, the order can matter more. When one target balance is nearly gone, set aside only the amount needed to clear it and decide where the rest should go. Request a payoff quote if timing or accrued interest could leave a small balance.</p>
      <h2>Run the actual payoff scenarios</h2>
      <p>Use the <Link href="/calculators/student-loan">student loan calculator</Link> to estimate a single loan’s payment and repayment path with its own balance and rate. Run it separately for each loan when rates differ. A blended rate can be useful for a broad snapshot, but it hides the effect of directing an extra payment to one balance. For an all-debt plan, the <Link href="/calculators/debt-payoff">debt payoff calculator</Link> can help compare how payment order changes the trajectory.</p>
      <p>Keep the amount available across all loans the same in each comparison. Use the same date and regular obligations, then change the destination for the extra money. Once one loan is gone, decide whether to retain its former payment in your budget or send it to the next loan. Keeping the overall payment constant is a meaningful assumption. If you plan to reduce what you send each month once a loan closes, model that decision separately.</p>
      <h3>Check when the highest-rate rule needs adjustment</h3>
      <p>The loan with the highest rate can be a sensible first target when the goal is interest savings and every dollar eventually has to be repaid. Different loan benefits can change that conclusion. If you may qualify for forgiveness or another repayment benefit, verify the terms before accelerating that balance. Compare whether the extra payment would reduce an amount you expect to owe later. Check the official program rules and review your own eligibility and payment history before relying on an expected benefit.</p>
      <p>Also consider immediate cash needs. If sending a lump sum would leave too little for essentials, it can create pressure to borrow elsewhere. A borrower who needs to simplify several payments may value clearing a small balance. To quantify that preference, write down the initial interest difference and the actual required payment that disappears when a particular loan is fully paid. Then compare those outcomes against the size of your cash buffer.</p>
      <h2>How to direct the extra payment</h2>
      <p>The <a href="https://www.consumerfinance.gov/ask-cfpb/can-i-make-additional-payments-on-my-student-loan-en-607/">CFPB’s extra-payment guidance</a> recommends checking how the servicer applies additional money. Review the payment screen for options to select a loan or change allocation. Ask whether your directions apply only to the next payment or remain on file. If you already use automatic payments, ask whether a manual extra payment is treated differently.</p>
      <p><a href="https://aidvantage.studentaid.gov/in-repayment/about-payments">Aidvantage’s published payment policy</a> provides one example. It generally applies an overpayment to the highest-rate loan being paid once total amounts due are covered, subject to its rules and exceptions, including for Auto Pay. Other servicers can use different procedures. Read the policy for your account and keep the confirmation showing the target and amount.</p>
      <h3>Verify principal and the due date after posting</h3>
      <p>Pull the transaction detail after the payment clears. Look for the portion applied to interest and principal, the loan identifier, and whether the due date changed. A different due date and the allocation of cash answer separate questions. Compare the principal before and after posting so you know how much of the payment reduced the balance. Confirm whether scheduled payments will continue and check how the servicer handles any amount already due.</p>
      <p>When the numbers differ from your worksheet, record the payment date and the amounts from the statement. Ask for an allocation breakdown before repeating the same instruction. The <Link href="/blog/private-student-loan-complaints-2026">student loan servicing guide</Link> explains how to organize records if a posting issue needs follow-up. Keep your confirmation alongside the before-and-after statement so you can tell whether a later correction changed the targeted loan.</p>
      <h2>A checklist before making the next extra payment</h2>
      <ol><li>Verify all required payments are covered and list the current rates by loan.</li><li>Check program benefits or forgiveness considerations that apply to each loan.</li><li>Use the same available cash across your comparison scenarios.</li><li>Specify the target through the servicer’s supported method.</li><li>Review the posted allocation, principal and next required payment.</li></ol>
      <p>Repeat the comparison whenever a loan is paid off or the amount you can comfortably send changes. That keeps the plan tied to your actual obligations. A calculator provides estimates, while the agreement and servicing records determine how an individual payment affects your account.</p>
      <h2>What if two loans have the same rate?</h2>
      <p>Under the simplified model, equal rates produce equal immediate interest savings per dollar of principal reduction. Review each loan’s benefits, balance and accrued interest before picking a target. If those details are comparable, clearing a smaller loan may simplify recordkeeping. Ask whether a scheduled payment will disappear or whether the servicer will recalculate the remaining group payment. If the rates are variable, revisit the comparison whenever an adjustment changes either rate.</p>
      <h3>Choose a rule for amounts above the payoff</h3>
      <p>If the target is close to zero, ask how the servicer handles an overpayment that exceeds its payoff amount. The answer can depend on the payment method and instructions. Consider sending the payoff amount using the method the servicer specifies and making a separate extra payment to the next target. Save both confirmations, and check the next statement for any remaining interest or automatic withdrawal.</p>
      <p>For someone expecting a bonus or refund, decide how much will remain available once it has arrived, then run the same comparison with that actual amount. If cash flow varies, a recurring extra payment may need to be smaller than an occasional extra transfer. Put any future extra payments on a separate line in your budget so the regular bill remains covered during lower-income months. For comparisons with other consumer debts, review the <Link href="/blog/debt-payoff-avalanche-vs-snowball-method">avalanche and snowball guide</Link> and use each debt’s actual rate and minimum payment.</p>
    </StoryPage>
  );
}
