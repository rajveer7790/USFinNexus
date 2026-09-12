import type { Metadata } from 'next';
import Link from 'next/link';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import PmiRemovalClient from '../pmi/PmiRemovalClient';

const url = 'https://usfinnexus.com/calculators/pmi-removal';
export const dynamic = 'force-static';
export const revalidate = 86400;
export const metadata: Metadata = {
  title: 'PMI Removal Calculator 2026: 80% Request & 78% Auto Drop',
  description: 'Estimate when you can request PMI cancellation at 80% LTV and when it auto-terminates at 78%. Model extra payments. Free, no signup.',
  alternates: { canonical: url },
  openGraph: { type: 'website', title: 'PMI Removal Calculator 2026', description: 'Estimate 80% request and 78% automatic PMI targets.', url, siteName: 'USFinNexus' },
  twitter: { card: 'summary_large_image', title: 'PMI Removal Calculator 2026', description: 'Estimate when conventional PMI may end.' },
};
const faqs = [
  { question: 'When can I remove PMI?', answer: 'For many eligible conventional loans, you can request cancellation when the scheduled balance reaches 80% of the original value, subject to the Homeowners Protection Act and servicer requirements.' },
  { question: 'Does PMI drop automatically at 20% equity?', answer: 'Usually no. A request at 80% LTV is different from automatic termination at the scheduled 78% point when applicable conditions are met.' },
  { question: 'Can extra payments remove PMI faster?', answer: 'Extra principal may reduce the balance faster, but ask the servicer how it applies payments and whether the loan permits borrower-requested cancellation based on actual payments.' },
  { question: 'Is FHA mortgage insurance the same as PMI?', answer: 'No. FHA MIP follows different HUD rules. Use the FHA calculator and do not apply conventional PMI rules to an FHA loan.' },
  { question: 'Do I need an appraisal to cancel PMI?', answer: 'Not necessarily for the scheduled-payment path. An appraisal or other valuation may be required for an appreciation-based request, depending on investor and servicer rules.' },
];
export default function PmiRemovalPage() { return <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><WebApplicationSchema name="PMI Removal Calculator 2026" description="Estimate 80% request and 78% automatic PMI targets for eligible conventional loans." url={url} dateModified="2026-09-12" /><Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'PMI Removal Calculator', item: '/calculators/pmi-removal' }]} /><header className="mx-auto mb-8 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Reviewed September 12, 2026 · Homeowners Protection Act planning</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">PMI Removal Calculator</h1><p className="mt-4 text-xl leading-relaxed text-slate-600"><strong>Quick answer:</strong> Eligible conventional borrowers commonly request PMI cancellation at 80% of original value; scheduled automatic termination generally uses 78%. This tool is not for FHA MIP.</p></header><PmiRemovalClient /><article className="prose prose-slate mx-auto mt-10 max-w-3xl"><h2>How this PMI removal calculator works</h2><p>Enter the original value, current balance and annual PMI premium to estimate current LTV, the 80% target balance and monthly premium. The output is a planning estimate; your servicer controls the official date, payment history review and documentation.</p><h2>80% request vs. 78% automatic termination</h2><p>The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-111/" className="text-blue-700 underline">Consumer Financial Protection Bureau</a> describes borrower-requested cancellation and automatic termination as separate paths. Ask the servicer for written requirements before stopping or changing a payment.</p><h2>Use related tools</h2><p>Compare the full PITI payment in the <Link href="/calculators/mortgage">Mortgage Calculator</Link>, model principal timing with the <Link href="/calculators/amortization">Amortization Calculator</Link>, and compare a refinance in the <Link href="/calculators/refinance">Refinance Calculator</Link>. FHA borrowers should use <Link href="/calculators/fha">FHA Calculator</Link>.</p><p className="not-prose rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Educational estimate only—not a servicing instruction, lending offer or guarantee of cancellation. Your note, investor rules and applicable law control.</p></article><CalculatorFAQ faqs={faqs} title="PMI Removal FAQs" /><ContextualInternalLinks currentSlug="pmi-removal" showBlogs showCalculators /></main>; }
