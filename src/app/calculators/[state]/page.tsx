import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContextualInternalLinks from '@/components/ContextualInternalLinks';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import MortgageCalculator from '../mortgage/MortgageCalculatorClient';

const STATES: Record<string, { name: string; note: string }> = {
  arizona: { name: 'Arizona', note: 'Property-tax bills vary by county and assessed value; enter the current bill from the listing or assessor.' },
  colorado: { name: 'Colorado', note: 'Use the county assessor bill and a current homeowners-insurance quote; local assessments can change the escrow estimate.' },
  georgia: { name: 'Georgia', note: 'County tax millage, exemptions and insurance costs differ widely, so replace the planning defaults with your parcel figures.' },
  illinois: { name: 'Illinois', note: 'Property taxes are highly local. Use the latest county bill and confirm exemptions before relying on a payment estimate.' },
  massachusetts: { name: 'Massachusetts', note: 'Municipal tax rates and assessments drive the escrow amount; enter the city or town bill for a realistic estimate.' },
  'new-jersey': { name: 'New Jersey', note: 'Municipal property taxes can be a large part of PITI. Use the latest local assessment and tax bill.' },
  'new-york': { name: 'New York', note: 'Taxes, insurance and co-op or condo charges vary by county and property type; enter the charges quoted for the home.' },
  'north-carolina': { name: 'North Carolina', note: 'County tax rates and homeowners insurance differ by location. Coastal properties may need separate wind or flood coverage.' },
  ohio: { name: 'Ohio', note: 'County auditor values, local levies and exemptions affect the tax estimate. Enter the current bill when available.' },
  pennsylvania: { name: 'Pennsylvania', note: 'School-district and municipal levies can materially change PITI. Replace defaults with the property’s current tax data.' },
  virginia: { name: 'Virginia', note: 'Local assessments and city or county rates determine property tax; insurance also varies by region.' },
  washington: { name: 'Washington', note: 'County assessments and levy rates set property tax. Enter the parcel’s annual bill for a better estimate.' },
};

export function generateStaticParams() { return Object.keys(STATES).map((state) => ({ state })); }

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const entry = STATES[state];
  if (!entry) return {};
  const title = `${entry.name} Mortgage Calculator 2026 | PITI & Taxes`;
  const description = `Free ${entry.name} mortgage calculator for principal, interest, property taxes, insurance, PMI and HOA. Enter local costs for a realistic 2026 PITI estimate.`;
  return { title, description, alternates: { canonical: `https://usfinnexus.com/calculators/${state}` }, openGraph: { type: 'website', title, description, url: `https://usfinnexus.com/calculators/${state}`, siteName: 'USFinNexus' }, twitter: { card: 'summary_large_image', title, description } };
}

export default async function StateMortgagePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const entry = STATES[state];
  if (!entry) notFound();
  const url = `https://usfinnexus.com/calculators/${state}`;
  const faqs = [
    { question: `How accurate is the ${entry.name} mortgage calculator?`, answer: `It is a planning estimate. Enter the property’s actual tax bill, insurance quote, PMI and HOA dues because ${entry.name} costs vary by county, property type and lender.` },
    { question: `Does this include ${entry.name} property taxes?`, answer: 'Yes, the calculator accepts an annual property-tax amount. Replace the default with the latest assessor or closing disclosure figure; taxes are not a single statewide percentage.' },
    { question: 'What should I verify before applying?', answer: 'Compare a lender Loan Estimate, current insurance quote, tax bill, HOA or condo dues, loan-program limits and your debt-to-income ratio. This tool does not approve or price a loan.' },
  ];
  return <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><WebApplicationSchema name={`${entry.name} Mortgage Calculator 2026`} description={`Estimate ${entry.name} mortgage PITI with local tax and insurance assumptions.`} url={url} dateModified="2026-09-09" /><Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: `${entry.name} Mortgage Calculator`, item: `/calculators/${state}` }]} /><header className="mx-auto mb-6 max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">State mortgage planning · Updated September 9, 2026</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{entry.name} Mortgage Calculator</h1><p className="mt-4 text-xl leading-relaxed text-slate-600"><strong>Quick answer:</strong> Enter the home price, down payment, rate, annual tax, insurance and HOA charges to estimate a {entry.name} monthly PITI payment. {entry.note}</p></header><MortgageCalculator heading={`${entry.name} Mortgage Calculator`} intro={`Model a ${entry.name} payment with your own county tax, insurance and HOA assumptions.`} /><article className="prose prose-slate mx-auto mt-10 max-w-3xl"><h2>How to make a local PITI estimate</h2><p>Start with a written Loan Estimate or the property’s latest tax bill and insurance quote. Property taxes and insurance are not uniform statewide, and a lender may use escrow cushions or updated assessments. This calculator lets you replace every planning assumption.</p><h2>Compare loan programs and affordability</h2><p>Use the <Link href="/calculators/affordability">Home Affordability Calculator</Link> to set a budget, the <Link href="/calculators/dti">DTI Calculator</Link> to organize recurring debts and the <Link href="/calculators/fha-va-usda">FHA/VA/USDA Calculator</Link> to compare program scenarios. For a buyer-specific closing estimate, open the <Link href="/calculators/closing-costs">Closing Costs Calculator</Link>.</p><p className="not-prose rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Educational planning estimate only—not a lender quote, approval, appraisal, tax opinion or insurance offer. Confirm local figures with the assessor, insurer and lender.</p></article><CalculatorFAQ faqs={faqs} title={`${entry.name} Mortgage Calculator FAQs`} /><ContextualInternalLinks currentSlug={state} showBlogs showCalculators /></main>;
}
