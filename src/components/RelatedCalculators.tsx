import Link from 'next/link';
import { Calculator } from 'lucide-react';

export interface RelatedCalc {
    label: string;
    href: string;
    description: string;
    emoji: string;
}

const ALL_CALCS: RelatedCalc[] = [
    { label: 'Mortgage Calculator', href: '/calculators/mortgage', description: 'Full PITI breakdown + PDF download', emoji: '🏠' },
    { label: 'Affordability Calculator', href: '/calculators/affordability', description: 'How much house can you afford?', emoji: '💰' },
    { label: 'Refinance Calculator', href: '/calculators/refinance', description: 'Break-even point + savings', emoji: '🔄' },
    { label: 'DTI Calculator', href: '/calculators/dti', description: 'Debt-to-income ratio checker', emoji: '📊' },
    { label: 'Rent vs. Buy', href: '/calculators/rent-vs-buy', description: 'Which option wins long-term?', emoji: '🏡' },
    { label: 'Down Payment Calc', href: '/calculators/down-payment', description: 'Savings timeline + milestones', emoji: '🎯' },
    { label: 'Closing Costs', href: '/calculators/closing-costs', description: 'Buyer + seller cost breakdown', emoji: '📋' },
    { label: 'Debt Payoff Calc', href: '/calculators/debt-payoff', description: 'Snowball vs Avalanche strategy', emoji: '⚡' },
    { label: 'Budget Calculator', href: '/calculators/budget', description: '50/30/20 rule planner', emoji: '📅' },
    { label: 'HELOC Calculator', href: '/calculators/heloc', description: 'Home equity line of credit', emoji: '🏦' },
    { label: 'ARM Calculator', href: '/calculators/arm', description: 'Adjustable rate scenarios', emoji: '📈' },
    { label: 'FHA / VA / USDA', href: '/calculators/fha-va-usda', description: 'Government loan calculator', emoji: '🏛️' },
];

interface RelatedCalculatorsProps {
    exclude?: string[];  // hrefs to exclude (current page)
    limit?: number;
    title?: string;
    variant?: 'grid' | 'sidebar';
}

export default function RelatedCalculators({ 
    exclude = [], 
    limit = 4, 
    title = 'Related Calculators',
    variant = 'grid'
}: RelatedCalculatorsProps) {
    const filtered = ALL_CALCS.filter(c => !exclude.includes(c.href)).slice(0, limit);

    if (variant === 'sidebar') {
        return (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                    <Calculator size={16} className="text-[#0da6f2]" />
                    <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
                </div>
                <div className="divide-y divide-slate-100">
                    {filtered.map(calc => (
                        <Link
                            key={calc.href}
                            href={calc.href}
                            className="flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors group"
                        >
                            <span className="text-lg shrink-0">{calc.emoji}</span>
                            <div>
                                <p className="text-xs font-bold text-slate-800 group-hover:text-[#0da6f2] transition-colors">
                                    {calc.label}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{calc.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-[#0da6f2]/10 border border-[#0da6f2]/20">
                        <Calculator size={18} className="text-[#0da6f2]" />
                    </div>
                    <h2 className="text-lg font-black" style={{ color: 'var(--color-text)' }}>{title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filtered.map(calc => (
                        <Link
                            key={calc.href}
                            href={calc.href}
                            className="flex items-start gap-3 p-4 rounded-xl border transition-all hover:border-[#0da6f2]/50 hover:bg-[#0da6f2]/5 group"
                            style={{ borderColor: 'var(--color-border)' }}
                        >
                            <span className="text-xl shrink-0 mt-0.5">{calc.emoji}</span>
                            <div>
                                <p className="text-sm font-bold group-hover:text-[#0da6f2] transition-colors" style={{ color: 'var(--color-text)' }}>
                                    {calc.label}
                                </p>
                                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{calc.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
