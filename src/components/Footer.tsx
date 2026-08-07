import Link from 'next/link';
import { Shield, Home, DollarSign, TrendingUp, BookOpen, FileText } from 'lucide-react';
import LogoIcon from './LogoIcon';

const MORTGAGE_LINKS = [
    { href: '/calculators/mortgage', label: 'Mortgage Calculator' },
    { href: '/calculators/affordability', label: 'Home Affordability Calculator' },
    { href: '/calculators/refinance', label: 'Mortgage Refinance Calculator' },
    { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy Calculator' },
    { href: '/calculators/fha-va-usda', label: 'FHA / VA / USDA Loans' },
    { href: '/calculators/arm', label: 'ARM Calculator' },
    { href: '/calculators/heloc', label: 'HELOC Calculator' },
    { href: '/calculators/interest-only', label: 'Interest-Only Mortgage' },
    { href: '/calculators/points-buydown', label: 'Mortgage Points Calculator' },
    { href: '/calculators/amortization', label: 'Amortization Calculator' },
    { href: '/calculators/down-payment', label: 'Down Payment Calculator' },
    { href: '/calculators/dti', label: 'Debt-to-Income Calculator' },
];

const LOAN_LINKS = [
    { href: '/calculators/auto-loan', label: 'Auto Loan Calculator' },
    { href: '/calculators/personal-loan', label: 'Personal Loan Calculator' },
    { href: '/calculators/student-loan', label: 'Student Loan Calculator' },
    { href: '/calculators/credit-card', label: 'Credit Card Payoff Calculator' },
    { href: '/calculators/debt-payoff', label: 'Debt Payoff Calculator' },
    { href: '/calculators/comparison', label: 'Loan Comparison Calculator' },
    { href: '/calculators/closing-costs', label: 'Closing Cost Calculator' },
    { href: '/calculators/retirement', label: 'Retirement Calculator' },
    { href: '/calculators/investment', label: 'Compound Interest Calculator' },
    { href: '/calculators/income-tax', label: '2026 Federal Income Tax' },
    { href: '/calculators/budget', label: 'Budget Calculator' },
];

const STATE_LINKS = [
    { href: '/calculators/california', label: 'California Closing Costs' },
    { href: '/calculators/texas', label: 'Texas Closing Costs' },
    { href: '/calculators/florida', label: 'Florida Closing Costs' },
    { href: '/calculators/fha', label: 'FHA Loan Calculator' },
    { href: '/calculators/va', label: 'VA Loan Calculator' },
];

const RESOURCE_LINKS = [
    { href: '/blog', label: 'Resources & Blog' },
    { href: '/guides', label: 'Financial Guides' },
    { href: '/articles', label: 'Articles' },
    { href: '/methodology', label: 'Our Methodology' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
];

const QUICK_CALCS = [
    { href: '/calculators/mortgage', icon: Home, label: 'Mortgage' },
    { href: '/calculators/affordability', icon: DollarSign, label: 'Affordability' },
    { href: '/calculators/refinance', icon: TrendingUp, label: 'Refinance' },
    { href: '/calculators/budget', icon: BookOpen, label: 'Budget' },
    { href: '/calculators/income-tax', icon: FileText, label: 'Tax 2026' },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#0a0f1c] border-t border-white/5">
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 hidden sm:block">Quick Access:</span>
                        {QUICK_CALCS.map(q => (
                            <Link key={q.href} href={q.href} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-colors text-xs font-medium min-h-[36px]">
                                <q.icon size={12} /> {q.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-b border-white/5 bg-white/3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-start gap-2.5 text-xs text-white/60">
                        <Shield size={11} className="text-[#0da6f2]/50 flex-shrink-0 mt-0.5" />
                        <p>
                            <strong className="text-white/60">Disclaimer:</strong>{' '}
                            USFinNexus calculators provide estimates for educational and planning purposes only and are not financial, tax, legal, lending, or investment advice. Calculator inputs are designed to be processed in your browser; the website may still use third-party advertising or analytics technologies as described in the Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                            <LogoIcon size={32} />
                            <div className="leading-none">
                                <span className="font-black text-white text-base tracking-tight"><span className="text-[#0da6f2]">US</span>FinNexus</span>
                                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mt-0.5">Free Finance Tools</p>
                            </div>
                        </Link>
                        <p className="text-xs text-white/60 leading-relaxed mb-6">
                            Free mortgage and personal finance calculators for U.S. consumers. No calculator signup or lender referral form required.
                        </p>
                        <Link href="/calculators/mortgage" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] transition-colors">
                            Mortgage Calculator
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-[#0da6f2] uppercase tracking-widest mb-5">Mortgage Tools</h3>
                        <ul className="space-y-2.5">
                            {MORTGAGE_LINKS.map(l => <li key={l.href}><Link href={l.href} className="text-xs text-white/60 hover:text-white/70 transition-colors">{l.label}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-[#00C853] uppercase tracking-widest mb-5">Loans &amp; Planning</h3>
                        <ul className="space-y-2.5">
                            {LOAN_LINKS.map(l => <li key={l.href}><Link href={l.href} className="text-xs text-white/60 hover:text-white/70 transition-colors">{l.label}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-[#f59e0b] uppercase tracking-widest mb-5">State-Specific</h3>
                        <ul className="space-y-2.5 mb-7">
                            {STATE_LINKS.map(l => <li key={l.href}><Link href={l.href} className="text-xs text-white/60 hover:text-white/70 transition-colors">{l.label}</Link></li>)}
                        </ul>
                        <div className="rounded-xl border border-white/8 bg-white/4 p-4">
                            <p className="text-xs font-black text-[#0da6f2] uppercase tracking-widest mb-3">2026 Key Limits</p>
                            <ul className="space-y-2">
                                {[
                                    { label: 'Conforming Baseline', value: '$832,750' },
                                    { label: 'High-Cost Ceiling', value: '$1,249,125' },
                                    { label: 'FHA Floor', value: '$541,287' },
                                ].map(item => (
                                    <li key={item.label} className="flex justify-between gap-3">
                                        <span className="text-xs text-white/60">{item.label}</span>
                                        <span className="text-xs font-bold text-[#0da6f2]">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-black text-[#8b5cf6] uppercase tracking-widest mb-5">Resources</h3>
                        <ul className="space-y-2.5">
                            {RESOURCE_LINKS.map(l => <li key={l.href}><Link href={l.href} className="text-xs text-white/60 hover:text-white/70 transition-colors">{l.label}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/50 text-center sm:text-left">
                        &copy; {year} USFinNexus.com &mdash; Educational estimates only. Not financial advice.
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 flex-shrink-0">
                        <Link href="/privacy" className="text-xs text-white/60 hover:text-white/60 transition-colors uppercase tracking-wider py-1">Privacy</Link>
                        <Link href="/terms" className="text-xs text-white/60 hover:text-white/60 transition-colors uppercase tracking-wider py-1">Terms</Link>
                        <Link href="/disclaimer" className="text-xs text-white/60 hover:text-white/60 transition-colors uppercase tracking-wider py-1">Disclaimer</Link>
                        <Link href="/methodology" className="text-xs text-white/60 hover:text-white/60 transition-colors uppercase tracking-wider py-1">Methodology</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
