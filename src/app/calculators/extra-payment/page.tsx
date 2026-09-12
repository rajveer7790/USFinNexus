import type { Metadata } from 'next';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import MortgageCalculator from '../mortgage/MortgageCalculatorClient';

export const dynamic = 'force-static';
export const revalidate = 86400;
export const metadata: Metadata = {
  title: 'Extra Payment Mortgage Calculator 2026',
  description: 'See how extra monthly mortgage payments can shorten payoff time and reduce interest. Free private calculator with amortization and scenario comparisons.',
  alternates: { canonical: 'https://usfinnexus.com/calculators/extra-payment' },
  openGraph: { type: 'website', title: 'Extra Payment Mortgage Calculator 2026', description: 'Model extra principal payments and mortgage interest savings.', url: 'https://usfinnexus.com/calculators/extra-payment', siteName: 'USFinNexus' },
  twitter: { card: 'summary_large_image', title: 'Extra Payment Mortgage Calculator 2026', description: 'Model payoff and interest savings from extra mortgage payments.' },
};
const faqs = [
  { question: 'How much can an extra mortgage payment save?', answer: 'The savings depend on balance, rate, remaining term and the timing of each extra principal payment. Use the amortization and extra-payment tabs with your statement figures.' },
  { question: 'Should extra payments be applied to principal?', answer: 'Ask your servicer to apply additional funds to principal and confirm the transaction posted correctly. A payment marked as “paid ahead” may not reduce principal as expected.' },
  { question: 'Can I make one extra mortgage payment each year?', answer: 'One additional principal-and-interest payment per year can shorten a long loan, but the exact result varies. Compare the annual lump sum with a monthly extra amount in the calculator.' },
];
export default function ExtraPaymentPage() { return <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><WebApplicationSchema name="Extra Payment Mortgage Calculator 2026" description="Model mortgage payoff and interest savings from extra principal payments." url="https://usfinnexus.com/calculators/extra-payment" dateModified="2026-09-09" /><Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'Extra Payment Mortgage Calculator', item: '/calculators/extra-payment' }]} /><MortgageCalculator initialTab="extra" heading="Extra Payment Mortgage Calculator" showHeading={false} intro="Compare your regular mortgage with extra monthly principal payments and see payoff and interest changes." /><article className="prose prose-slate mx-auto mt-10 max-w-3xl"><h1>Extra Payment Mortgage Calculator</h1><p><strong>Quick answer:</strong> Extra principal can reduce future interest and shorten the payoff timeline, but confirm prepayment terms and cash-flow priorities before sending more than required.</p><h2>Model a realistic strategy</h2><p>Try a small monthly amount, a yearly lump sum and a pause during high-expense months. Keep an emergency reserve and compare the guaranteed interest savings with other high-interest debt.</p><h2>Related planning tools</h2><p>Use the <a href="/calculators/mortgage">Mortgage Calculator</a> for a full PITI view and the <a href="/calculators/debt-payoff">Debt Payoff Calculator</a> for credit-card or personal-loan balances.</p></article><CalculatorFAQ faqs={faqs} title="Extra Payment FAQs" /><ContextualInternalLinks currentSlug="extra-payment" showBlogs showCalculators /></main>; }
