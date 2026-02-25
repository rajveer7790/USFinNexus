import Link from 'next/link';
import { Shield } from 'lucide-react';

const CALC_LINKS = [
    { href: '/calculators/mortgage', label: 'Mortgage Calculator' },
    { href: '/calculators/affordability', label: 'Affordability Calculator' },
    { href: '/calculators/refinance', label: 'Refinance Calculator' },
    { href: '/calculators/auto-loan', label: 'Auto Loan Calculator' },
    { href: '/calculators/personal-loan', label: 'Personal Loan Calculator' },
    { href: '/calculators/comparison', label: 'Loan Comparison' },
    { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy' },
    { href: '/calculators/points-buydown', label: 'Points Buy-Down' },
    { href: '/calculators/heloc', label: 'HELOC Calculator' },
    { href: '/calculators/fha-va-usda', label: 'FHA / VA / USDA' },
    { href: '/calculators/closing-costs', label: 'Closing Costs' },
    { href: '/calculators/debt-payoff', label: 'Debt Payoff' },
    { href: '/calculators/budget', label: 'Budget 50/30/20' },
    { href: '/calculators/arm', label: 'ARM Calculator' },
    { href: '/calculators/interest-only', label: 'Interest-Only' },
];

const RESOURCE_LINKS = [
    { href: '/blog', label: 'Blog & Resources' },
    { href: '/about', label: 'About Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t mt-20" style={{ background: 'var(--color-navy)', borderColor: 'rgba(255,255,255,0.08)' }}>
            {/* Disclaimer Bar */}
            <div className="border-b px-4 py-4 text-center text-xs text-white/50" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <Shield size={12} className="inline mr-1.5 align-middle" />
                <strong className="text-white/70">Disclaimer:</strong>{' '}
                All calculations on USFinNexus.com are for estimation and educational purposes only. They do not constitute financial, tax, or legal advice. Always consult a licensed financial professional before making any financial decisions.{' '}
                <span className="text-white/40">No personal data is collected by our calculators.</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm font-bold" style={{ background: '#00C853' }}>
                                US
                            </div>
                            <span className="font-black text-white text-lg">FinNexus</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Free mortgage &amp; personal finance calculators for everyday Americans. No signup, no email, no lender spam.
                        </p>
                        <p className="mt-4 text-xs text-white/30">
                            Built with ❤️ for American homebuyers
                        </p>
                    </div>

                    {/* Calculators */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Calculators</h4>
                        <ul className="space-y-2">
                            {CALC_LINKS.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Resources</h4>
                        <ul className="space-y-2">
                            {RESOURCE_LINKS.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Stats */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">2026 US Limits</h4>
                        <ul className="space-y-3">
                            <li>
                                <p className="text-xs text-white/40 uppercase tracking-wide">Conforming Loan Limit</p>
                                <p className="text-sm font-bold text-white">$832,750</p>
                            </li>
                            <li>
                                <p className="text-xs text-white/40 uppercase tracking-wide">FHA Floor</p>
                                <p className="text-sm font-bold text-white">$541,287</p>
                            </li>
                            <li>
                                <p className="text-xs text-white/40 uppercase tracking-wide">CFPB Max DTI</p>
                                <p className="text-sm font-bold text-white">43% (Qualified Mortgage)</p>
                            </li>
                            <li>
                                <p className="text-xs text-white/40 uppercase tracking-wide">PMI Threshold</p>
                                <p className="text-sm font-bold text-white">&lt;20% Down Payment</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-sm text-white/30">
                        &copy; {year} USFinNexus.com — For estimation purposes only. Not financial advice.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
                        <Link href="/disclaimer" className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
