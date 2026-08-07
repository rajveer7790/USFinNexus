import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight, Calculator, CheckCircle2, FileText, Home, Landmark,
    Lock, Scale, ShieldCheck, TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mortgage Calculator & Financial Calculators | USFinNexus',
    description:
        'Use free mortgage, home affordability, refinance, DTI, closing cost, loan and financial calculators for U.S. consumers. Clear assumptions, source references and no email required for standard calculator results.',
    alternates: { canonical: 'https://usfinnexus.com/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://usfinnexus.com/',
        siteName: 'USFinNexus',
        title: 'Mortgage Calculator & Financial Calculators | USFinNexus',
        description: 'Mortgage, affordability, refinance, DTI, closing cost, loan and personal-finance calculators with transparent assumptions.',
        images: [{ url: 'https://usfinnexus.com/icon-512.png', width: 512, height: 512, alt: 'USFinNexus financial calculators' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mortgage Calculator & Financial Calculators | USFinNexus',
        description: 'Free mortgage and financial calculators with clear assumptions and source references.',
        images: ['https://usfinnexus.com/icon-512.png'],
    },
};

const PRIMARY_TOOLS = [
    {
        href: '/calculators/mortgage',
        icon: Home,
        title: 'Mortgage Calculator',
        description: 'Estimate principal, interest, property taxes, insurance, PMI and HOA costs with an amortization schedule.',
        keyword: 'Monthly mortgage payment',
    },
    {
        href: '/calculators/affordability',
        icon: Scale,
        title: 'Home Affordability Calculator',
        description: 'Model a home-price range using income, debts, down payment, interest rate and property-specific housing costs.',
        keyword: 'How much house can I afford?',
    },
    {
        href: '/calculators/refinance',
        icon: TrendingUp,
        title: 'Mortgage Refinance Calculator',
        description: 'Compare a current mortgage with a refinance scenario, including payment savings, costs and break-even.',
        keyword: 'Refinance break-even',
    },
    {
        href: '/calculators/dti',
        icon: Scale,
        title: 'Debt-to-Income Ratio Calculator',
        description: 'Calculate monthly debt obligations as a percentage of gross monthly income and understand underwriting context.',
        keyword: 'DTI calculator',
    },
    {
        href: '/calculators/closing-costs',
        icon: FileText,
        title: 'Closing Cost Calculator',
        description: 'Estimate selected buyer and seller closing-cost items for a home-purchase scenario.',
        keyword: 'Closing costs',
    },
    {
        href: '/calculators/amortization',
        icon: Calculator,
        title: 'Mortgage Amortization Calculator',
        description: 'See how each scheduled payment is divided between principal and interest over time.',
        keyword: 'Amortization schedule',
    },
];

const SECONDARY_TOOLS = [
    ['FHA Mortgage Calculator', '/calculators/fha'],
    ['VA Loan Calculator', '/calculators/va'],
    ['FHA vs. VA vs. USDA Calculator', '/calculators/fha-va-usda'],
    ['ARM Mortgage Calculator', '/calculators/arm'],
    ['HELOC Calculator', '/calculators/heloc'],
    ['Rent vs. Buy Calculator', '/calculators/rent-vs-buy'],
    ['Down Payment Calculator', '/calculators/down-payment'],
    ['Mortgage Points Calculator', '/calculators/points-buydown'],
    ['Auto Loan Calculator', '/calculators/auto-loan'],
    ['Personal Loan Calculator', '/calculators/personal-loan'],
    ['Credit Card Payoff Calculator', '/calculators/credit-card'],
    ['2026 Federal Income Tax Calculator', '/calculators/income-tax'],
    ['Retirement Calculator', '/calculators/retirement'],
    ['Compound Interest Calculator', '/calculators/investment'],
];

const FACTS = [
    {
        label: '2026 conforming baseline',
        value: '$832,750',
        note: 'One-unit baseline conforming loan limit published by FHFA.',
    },
    {
        label: '2026 high-cost ceiling',
        value: '$1,249,125',
        note: 'One-unit conforming ceiling in qualifying high-cost areas.',
    },
    {
        label: '2026 FHA floor',
        value: '$541,287',
        note: 'One-unit FHA low-cost-area floor published by HUD.',
    },
];

export default function HomePage() {
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Popular USFinNexus Mortgage Calculators',
        itemListElement: PRIMARY_TOOLS.map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.title,
            url: `https://usfinnexus.com${tool.href}`,
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="bg-white text-navy-900">
                <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-sky-50 via-white to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-blue-700 mb-6">
                                <Calculator size={14} /> U.S. financial calculators
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] mb-6">
                                Mortgage Calculator &amp; Home Buying Tools
                            </h1>
                            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mb-8">
                                Estimate mortgage payments, home affordability, refinancing, debt-to-income ratio, closing costs and more. Standard calculator results require no email or phone number, and time-sensitive assumptions are documented with source references.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/calculators/mortgage" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-black text-white hover:bg-blue-700 transition-colors">
                                    Mortgage Calculator <ArrowRight size={18} />
                                </Link>
                                <Link href="/calculators/affordability" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-black text-navy-900 hover:border-blue-300 transition-colors">
                                    Home Affordability Calculator
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-4xl text-sm text-gray-600">
                            <div className="flex items-start gap-2"><CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" /><span>No email required for ordinary calculator results</span></div>
                            <div className="flex items-start gap-2"><ShieldCheck size={17} className="text-emerald-600 shrink-0 mt-0.5" /><span>Primary-source policy for material financial rules</span></div>
                            <div className="flex items-start gap-2"><Lock size={17} className="text-emerald-600 shrink-0 mt-0.5" /><span>Calculator inputs designed for browser-side processing</span></div>
                        </div>
                    </div>
                </section>

                <section id="calculators" className="py-14 sm:py-20 scroll-mt-24">
                    <span id="tools" className="block -translate-y-24" aria-hidden="true" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mb-9">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Popular calculators</p>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Mortgage &amp; Home Buying Calculators</h2>
                            <p className="text-gray-600 mt-3">Each page targets one clear search intent and explains the assumptions behind the result.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {PRIMARY_TOOLS.map((tool) => (
                                <Link key={tool.href} href={tool.href} className="group rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
                                    <div className="flex items-center justify-between gap-3 mb-5">
                                        <div className="rounded-xl bg-blue-50 p-3 text-blue-700"><tool.icon size={22} /></div>
                                        <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="text-xl font-black mb-2">{tool.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{tool.description}</p>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{tool.keyword}</p>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-7 text-center">
                            <Link href="/calculators" className="inline-flex items-center gap-2 font-black text-blue-700 hover:underline">
                                Browse all financial calculators <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-14 sm:py-18 bg-slate-50 border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mb-8">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">2026 reference values</p>
                            <h2 className="text-3xl font-black">Current statutory loan-limit context</h2>
                            <p className="text-gray-600 mt-3">These values are annual limits, not current mortgage rates and not approval guarantees.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {FACTS.map((fact) => (
                                <div key={fact.label} className="rounded-2xl border border-gray-200 bg-white p-6">
                                    <p className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">{fact.label}</p>
                                    <p className="text-3xl font-black text-blue-700 mb-2">{fact.value}</p>
                                    <p className="text-sm text-gray-600">{fact.note}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-5">
                            See <Link href="/methodology" className="font-bold text-blue-700 hover:underline">Methodology &amp; Data Sources</Link> for FHFA, HUD, CFPB, IRS and other primary-source references.
                        </p>
                    </div>
                </section>

                <section className="py-14 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Transparent methodology</p>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">Financial math should show its assumptions</h2>
                            <div className="space-y-4 text-gray-600">
                                <p><strong className="text-navy-900">Mortgage math:</strong> principal and interest use standard amortization formulas; taxes, insurance, PMI/MIP and HOA costs are modeled separately where relevant.</p>
                                <p><strong className="text-navy-900">DTI:</strong> a ratio is a planning and underwriting input, not a universal approval rule. The current General Qualified Mortgage definition does not use the former universal 43% DTI cap.</p>
                                <p><strong className="text-navy-900">Tax:</strong> year-specific federal tax pages use current IRS schedules rather than old assumptions about automatic law changes.</p>
                                <p><strong className="text-navy-900">Market rates:</strong> volatile rates should be dated when shown as market observations. Calculator users can enter the rate relevant to their own scenario.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/methodology" className="rounded-2xl border border-gray-200 p-5 hover:border-blue-300 transition-colors">
                                <Landmark className="text-blue-600 mb-3" size={23} />
                                <h3 className="font-black mb-1">Methodology &amp; Sources</h3>
                                <p className="text-sm text-gray-600">Formulas, official sources and calculator limitations.</p>
                            </Link>
                            <Link href="/editorial-guidelines" className="rounded-2xl border border-gray-200 p-5 hover:border-blue-300 transition-colors">
                                <FileText className="text-blue-600 mb-3" size={23} />
                                <h3 className="font-black mb-1">Editorial Guidelines</h3>
                                <p className="text-sm text-gray-600">Research, update and corrections standards.</p>
                            </Link>
                            <Link href="/privacy" className="rounded-2xl border border-gray-200 p-5 hover:border-blue-300 transition-colors">
                                <Lock className="text-blue-600 mb-3" size={23} />
                                <h3 className="font-black mb-1">Privacy Policy</h3>
                                <p className="text-sm text-gray-600">Calculator inputs, hosting, advertising and cookies.</p>
                            </Link>
                            <Link href="/about" className="rounded-2xl border border-gray-200 p-5 hover:border-blue-300 transition-colors">
                                <ShieldCheck className="text-blue-600 mb-3" size={23} />
                                <h3 className="font-black mb-1">About USFinNexus</h3>
                                <p className="text-sm text-gray-600">Purpose, source policy and editorial responsibility.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-14 bg-slate-50 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-black mb-6">More Financial Calculators</h2>
                        <div className="flex flex-wrap gap-2.5">
                            {SECONDARY_TOOLS.map(([label, href]) => (
                                <Link key={href} href={href} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
