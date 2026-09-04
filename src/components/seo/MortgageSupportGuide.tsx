import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

const guides = {
  'selling-house-with-mortgage': {
    title: 'Selling a House With a Mortgage: Payoff, Equity and Closing',
    intro: 'Yes, you can sell a house before the mortgage is paid off. The closing agent generally uses sale proceeds to pay the lender’s payoff amount, then applies other closing charges before any remaining net proceeds are delivered to the seller.',
    sections: [
      ['Request a payoff statement', 'A payoff statement is not the same as the balance on a monthly statement. It can include interest through a stated date, fees and instructions for sending funds. Request it through the servicer and allow for the closing date.'],
      ['Estimate net proceeds', 'Start with the expected sale price, subtract mortgage and lien payoffs, agent compensation if applicable, seller concessions, taxes, title or escrow charges and other closing costs. The remainder is estimated seller proceeds.'],
      ['What if the mortgage is larger than the sale proceeds?', 'Negative equity means the sale proceeds may not cover the mortgage and selling costs. The seller may need cash at closing or lender approval for another resolution, such as a short sale. Do not sign a contract assuming the lender must release its lien.'],
      ['Can the buyer take over the mortgage?', 'Most conventional loans are not freely transferable. Some FHA, VA or USDA loans may be assumable subject to program and lender approval. A due-on-sale clause and release of the original borrower’s liability require careful review.'],
    ],
    faqs: [
      ['Can I sell my house if I still owe on the mortgage?', 'Usually yes. The mortgage and other liens are normally paid from closing funds so the liens can be released.'],
      ['Can I sell before two years?', 'You can sell earlier, but transaction costs, loan terms and tax treatment may affect the result. The federal principal-residence gain exclusion has ownership and use tests; consult current IRS guidance or a tax professional.'],
      ['What happens to escrow?', 'The servicer typically performs an escrow analysis after payoff and returns an eligible surplus separately; confirm timing and mailing details with the servicer.'],
    ],
    links: [['/calculators/mortgage-payoff', 'Mortgage payoff calculator'], ['/calculators/closing-costs', 'Closing-cost calculator'], ['/calculators/rent-vs-buy', 'Rent-versus-buy calculator']],
  },
  'pay-mortgage-with-credit-card': {
    title: 'Can You Pay a Mortgage With a Credit Card?',
    intro: 'Most mortgage servicers do not accept a credit card directly. A third-party workaround can add service fees, cash-advance treatment, interest, debt and payment-processing risk. Rewards rarely justify those costs without a carefully verified, fee-free path.',
    sections: [
      ['Why direct card payments are uncommon', 'Card acceptance can create interchange costs and chargeback risk for a large secured-debt payment. Servicers commonly support bank transfer, ACH, check or other methods listed in the account portal.'],
      ['Third-party payment services', 'A service may charge the card and send funds to the servicer, but fees can exceed the value of rewards. Confirm that the transaction will post as a purchase, that the lender will receive funds before the deadline and that the service is legitimate.'],
      ['Cash advances and convenience checks', 'Cash advances can begin accruing interest immediately and may carry a separate fee and lower limit. Convenience checks may receive cash-advance treatment under the card agreement.'],
      ['If the goal is avoiding a missed payment', 'Contact the mortgage servicer before the due date and ask about available options. Adding high-cost card debt can make a temporary cash-flow problem worse and does not change the mortgage obligation.'],
    ],
    faqs: [
      ['Can I earn points by paying my mortgage?', 'Only if the payment route is permitted and the reward value exceeds every fee and financing cost. Verify the card and service terms before acting.'],
      ['Does paying by card count as extra principal?', 'Not automatically. The servicer controls payment application. Use its principal-only instructions for an extra payment.'],
      ['Can I use a balance transfer?', 'A balance-transfer offer generally cannot be sent directly as a mortgage payment, and checks or deposited proceeds may have fees and promotional-rate conditions.'],
    ],
    links: [['/calculators/mortgage-payoff', 'Mortgage payoff calculator'], ['/calculators/credit-card', 'Credit-card payoff calculator'], ['/blog/how-does-mortgage-escrow-work', 'Mortgage escrow guide']],
  },
  'second-mortgage-guide': {
    title: 'How to Get a Second Mortgage: HELOC vs Home Equity Loan',
    intro: 'A second mortgage is debt secured by a home while another mortgage usually remains in first position. Common forms are a fixed home equity loan and a revolving HELOC. Approval depends on equity, combined loan-to-value, income, debts, credit and lender rules.',
    sections: [
      ['Calculate available equity', 'Estimate property value, subtract all mortgage balances, then apply the lender’s maximum combined loan-to-value. An appraisal or automated valuation may determine the value used for approval.'],
      ['HELOC versus home equity loan', 'A HELOC usually permits draws up to a limit and often has a variable rate. A home equity loan usually provides a lump sum with a fixed payment. Compare draw rules, rate structure, fees and repayment timing.'],
      ['Application and closing', 'Expect income, asset, debt and property documentation. The lender may obtain a valuation, review title and disclose loan costs. Federal rescission rights can apply to certain principal-residence transactions.'],
      ['Risks and alternatives', 'Because the home secures the debt, default can put the property at risk. Compare an unsecured loan, cash-out refinance, savings or a smaller project before converting other spending into home-secured debt.'],
    ],
    faqs: [
      ['Can I get a second mortgage with bad credit?', 'Standards vary, but weaker credit can reduce approval odds or raise cost. Equity alone does not guarantee approval.'],
      ['How much can I borrow?', 'The result depends on lender CLTV limits, supported property value, existing balances, repayment ability and program rules.'],
      ['Can I refinance a first mortgage while keeping a HELOC?', 'Possibly, but the HELOC lender may need to subordinate its lien. Approval is not automatic and timing matters.'],
    ],
    links: [['/calculators/heloc', 'HELOC calculator'], ['/calculators/refinance', 'Refinance calculator'], ['/blog/heloc-vs-home-equity-loan-2026', 'HELOC comparison']],
  },
  'mortgage-broker-fees': {
    title: 'How Much Does a Mortgage Broker Cost?',
    intro: 'Mortgage-broker compensation can be paid by the borrower or lender and is disclosed in the loan transaction. The practical comparison is the complete loan offer—rate, points, lender credits, broker compensation, third-party charges and total cost—not one fee in isolation.',
    sections: [
      ['Borrower-paid and lender-paid compensation', 'The payment source can change the visible upfront charges and rate economics. Ask how the broker is compensated and compare standardized Loan Estimates for the same loan structure and lock timing.'],
      ['Compare annual percentage rate carefully', 'APR can help compare certain credit costs, but it does not replace reviewing cash to close, rate, monthly payment, loan term, prepayment features and how long you expect to keep the loan.'],
      ['Questions to ask', 'Ask which lenders were considered, whether compensation changes across options, what services are included, which fees are refundable and when the rate can be locked. Verify licensing through official channels.'],
      ['Avoid a false “free” claim', 'A no-upfront-fee offer may use lender-paid compensation or a higher rate. That can still be reasonable, but the cost is not necessarily zero over the time you keep the loan.'],
    ],
    faqs: [
      ['Is a mortgage broker cheaper than a bank?', 'Sometimes, but there is no universal winner. Compare written offers for the same product on the same day.'],
      ['Can broker fees be negotiated?', 'Some costs may vary, while legal and compensation rules apply. Ask for options and review the disclosures rather than assuming every charge is negotiable.'],
      ['Do brokers guarantee approval?', 'No. The lender makes the credit decision under its underwriting and program rules.'],
    ],
    links: [['/calculators/mortgage', 'Mortgage calculator'], ['/calculators/closing-costs', 'Closing-cost calculator'], ['/blog/lender-quote-vs-online-calculator', 'Lender quote comparison']],
  },
} as const;

export type MortgageSupportGuideSlug = keyof typeof guides;

export function supportGuideMetadata(slug: MortgageSupportGuideSlug) {
  const guide = guides[slug];
  return { title: `${guide.title} | Guide`, description: guide.intro, alternates: { canonical: `/blog/${slug}` } };
}

export default function MortgageSupportGuide({ slug }: { slug: MortgageSupportGuideSlug }) {
  const guide = guides[slug];
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <article className="prose prose-slate max-w-none">
        <p className="text-sm text-slate-500">Reviewed August 9, 2026 · Educational planning guide</p>
        <h1>{guide.title}</h1>
        <p className="lead"><strong>Quick answer:</strong> {guide.intro}</p>
        {guide.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
        <h2>Frequently asked questions</h2>
        {guide.faqs.map(([question, answer]) => <section key={question}><h3>{question}</h3><p>{answer}</p></section>)}
        <h2>Use the related tools</h2>
        <ul>{guide.links.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
        <ContextualInternalLinks currentSlug={slug} showBlogs showCalculators={false} />
        <p className="text-sm">This guide provides general education, not personalized lending, legal, tax or investment advice. Confirm current terms with the lender, servicer, closing professional or appropriate adviser.</p>
      </article>
    </main>
  );
}
