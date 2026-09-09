import type { Metadata } from 'next';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import PmiRemovalClient from './PmiRemovalClient';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'PMI Removal Calculator 2026 | When Can PMI End?',
  description: 'Estimate your loan-to-value ratio, 80% PMI target balance and current monthly PMI. Learn conventional PMI cancellation rules with a free, private calculator.',
  alternates: { canonical: 'https://usfinnexus.com/calculators/pmi' },
  openGraph: { type: 'website', title: 'PMI Removal Calculator 2026', description: 'Estimate when conventional mortgage PMI may be cancellable at 80% loan-to-value.', url: 'https://usfinnexus.com/calculators/pmi', siteName: 'USFinNexus' },
  twitter: { card: 'summary_large_image', title: 'PMI Removal Calculator 2026', description: 'Estimate your PMI cancellation target and monthly premium.' },
};

const faqs = [
  { question: 'When can I request conventional PMI cancellation?', answer: 'For many covered conventional loans, you can request cancellation when the principal balance is scheduled to reach 80% of the original value, subject to the Homeowners Protection Act conditions and your servicer process.' },
  { question: 'Does reaching 80% automatically remove PMI?', answer: 'No. A borrower request may require a good payment history, current payments and other conditions. Automatic termination is generally tied to the scheduled 78% point when statutory requirements are met.' },
  { question: 'Can appreciation help remove PMI?', answer: 'Possibly, but appreciation-based cancellation depends on the loan investor, seasoning, valuation and servicer rules. Ask the servicer for its current written requirements.' },
  { question: 'Does FHA mortgage insurance follow the same rule?', answer: 'No. FHA annual MIP has different duration rules based on the case date, loan-to-value and term. Review HUD guidance rather than applying conventional PMI rules.' },
];

export default function PmiPage() {
  return <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><WebApplicationSchema name="PMI Removal Calculator 2026" description="Estimate loan-to-value and the 80% PMI cancellation target." url="https://usfinnexus.com/calculators/pmi" dateModified="2026-09-09" /><Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'PMI Removal Calculator', item: '/calculators/pmi' }]} /><header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Mortgage planning · Updated September 9, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">PMI Removal Calculator</h1><p className="mt-4 text-xl leading-relaxed text-slate-600"><strong>Quick answer:</strong> Conventional PMI planning usually starts with the 80% loan-to-value target. Enter the original value, current balance and annual premium below, then confirm the actual cancellation date and requirements with your servicer.</p></header><PmiRemovalClient /><article className="prose prose-slate mx-auto mt-10 max-w-3xl"><h2>How the PMI target is estimated</h2><p>This tool divides your current balance by the original home value to estimate loan-to-value (LTV). An 80% LTV means the balance is 80% of the original value. The estimate does not replace the servicer’s amortization schedule, valuation or investor rules.</p><h2>Conventional PMI cancellation basics</h2><p>The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-111/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau</a> explains that borrowers may be able to request cancellation at 80% and that automatic termination generally occurs at the scheduled 78% point when conditions are satisfied. Contact the servicer before stopping payments; only the servicer can remove the charge.</p><h2>Use the result with a full payment model</h2><p>Pair this estimate with the <Link href="/calculators/mortgage">Mortgage Calculator</Link> to see principal, interest, taxes and insurance. If you are considering a refinance, compare closing costs and break-even timing in the <Link href="/calculators/refinance">Refinance Calculator</Link>. FHA borrowers should use the <Link href="/calculators/fha">FHA Calculator</Link> and review current <Link href="/blog/fha-mortgage-pmi-mip-2026">FHA MIP guidance</Link>.</p><p className="not-prose rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Educational estimate only—not a servicing instruction, lending offer, tax opinion or guarantee of cancellation. Your note, investor and applicable law control.</p></article><CalculatorFAQ faqs={faqs} title="PMI Removal FAQs" /><ContextualInternalLinks currentSlug="pmi" showBlogs showCalculators /></main>;
}
