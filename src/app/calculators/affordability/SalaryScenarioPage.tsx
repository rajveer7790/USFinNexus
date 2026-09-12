import Link from 'next/link';
import AffordabilityClient from './AffordabilityClient';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';

export default function SalaryScenarioPage({ amount }: { amount: number }) {
  const n = amount.toLocaleString();
  const faqs = [
    { question: `How much house can I afford on $${n} in 2026?`, answer: 'It depends on debts, down payment, rate, taxes, insurance and reserves. Use this as a planning scenario, then confirm with a lender.' },
    { question: 'Is the salary before or after taxes?', answer: 'The calculator uses gross monthly income before taxes for DTI-style planning. Your household budget should also consider take-home pay.' },
    { question: 'How much income do I need for a larger house?', answer: 'Use the main affordability calculator to reverse the scenario with your target payment, debts, rate and down payment.' },
  ];
  return <main className="mx-auto max-w-7xl px-4 py-8"><header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Reviewed September 12, 2026 · Gross-income planning scenario</p><h1 className="mt-3 text-4xl font-black">How Much House Can I Afford on ${n}?</h1><p className="mt-4 text-xl text-slate-600"><strong>Quick answer:</strong> Salary is only one input. Debts, rate, down payment, taxes, insurance and reserves change the affordable range.</p></header><AffordabilityClient initialMonthlyIncome={amount / 12}/><article className="prose prose-slate mx-auto mt-10 max-w-3xl"><h2>Use this salary scenario carefully</h2><p>The 28% and 43% outputs are planning scenarios—not universal approval limits. Compare the result with the <Link href="/calculators/mortgage">Mortgage Calculator</Link> and <Link href="/calculators/dti">DTI Calculator</Link>, while keeping cash reserves for maintenance and irregular costs.</p></article><CalculatorFAQ faqs={faqs} title="Salary Affordability FAQs"/><ContextualInternalLinks currentSlug={`affordability-salary-${amount}`} showBlogs showCalculators/></main>;
}
