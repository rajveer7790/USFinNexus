import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, Home, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Canada Finance Tools & Mortgage Guides',
    description: 'Free Canada-focused mortgage calculators and plain-language home financing guides. CAD results, federal rules, primary sources and no signup.',
    alternates: { canonical: 'https://usfinnexus.com/canada' },
    openGraph: {
        type: 'website',
        title: 'Canada Finance Tools & Mortgage Guides',
        description: 'Canada-focused mortgage tools with CAD results and official-source methodology.',
        url: 'https://usfinnexus.com/canada',
        siteName: 'USFinNexus',
    },
};

const upcoming = [
    'Canadian Home Affordability Calculator',
    'Land Transfer Tax Calculator by Province',
    'Mortgage Prepayment Calculator',
];

export default function CanadaHubPage() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'Canada', item: '/canada' }]} />
            <header className="mt-6 rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10">
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-widest">Canada</span>
                <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Canadian mortgage tools built around Canadian rules</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">
                    Free CAD calculators using federal qualification rules and primary Canadian sources. No account, email or personal-data collection.
                </p>
            </header>

            <section className="py-12">
                <h2 className="text-2xl font-black text-slate-900">Available Canada tools</h2>
                <Link href="/canada/mortgage-calculator" className="mt-6 block max-w-2xl rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-4">
                        <span className="rounded-xl bg-red-50 p-3 text-red-700"><Home size={24} /></span>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-red-700">New calculator</span>
                            <h3 className="mt-1 text-xl font-black text-slate-900">Canadian Mortgage Calculator</h3>
                            <p className="mt-2 text-gray-600">Monthly payment, minimum down payment, mortgage-default insurance and federal stress-test estimate.</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-red-700">Open calculator <ArrowRight size={16} /></span>
                        </div>
                    </div>
                </Link>
            </section>

            <section className="grid gap-5 border-t border-gray-200 py-12 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-5">
                    <Calculator className="text-red-700" />
                    <h2 className="mt-3 font-black text-slate-900">Canadian calculations</h2>
                    <p className="mt-2 text-sm text-gray-600">CAD currency and Canadian fixed-rate mortgage compounding—not renamed US formulas.</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                    <ShieldCheck className="text-red-700" />
                    <h2 className="mt-3 font-black text-slate-900">Primary-source rules</h2>
                    <p className="mt-2 text-sm text-gray-600">Federal rules link directly to Canada.ca, FCAC and CMHC sources.</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                    <Home className="text-red-700" />
                    <h2 className="mt-3 font-black text-slate-900">Coming next</h2>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {upcoming.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                </div>
            </section>
        </main>
    );
}
