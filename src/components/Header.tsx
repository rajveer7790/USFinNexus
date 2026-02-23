'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
    Calculator, Home, TrendingUp, Car, DollarSign,
    Scale, ArrowLeftRight, Menu, X, Sun, Moon, ChevronDown,
} from 'lucide-react';
import LogoIcon from './LogoIcon';

const CALCULATORS = [
    { href: '/calculators/mortgage', label: 'Mortgage Calculator', icon: Home, desc: 'PITI + full amortization' },
    { href: '/calculators/affordability', label: 'Affordability', icon: DollarSign, desc: 'How much can I afford?' },
    { href: '/calculators/refinance', label: 'Refinance', icon: TrendingUp, desc: 'Savings & break-even' },
    { href: '/calculators/arm', label: 'ARM Calculator', icon: TrendingUp, desc: 'Adjustable rate analysis' },
    { href: '/calculators/interest-only', label: 'Interest-Only', icon: DollarSign, desc: 'Payment bump analysis' },
    { href: '/calculators/auto-loan', label: 'Auto Loan', icon: Car, desc: 'Vehicle financing' },
    { href: '/calculators/personal-loan', label: 'Personal Loan', icon: Calculator, desc: 'Debt payoff planner' },
    { href: '/calculators/comparison', label: 'Loan Comparison', icon: Scale, desc: 'Side-by-side scenarios' },
    { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy', icon: ArrowLeftRight, desc: 'Which makes more sense?' },
    { href: '/calculators/points-buydown', label: 'Points Buy-Down', icon: TrendingUp, desc: 'Rate reduction analysis' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

    return (
        <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--color-navy)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <LogoIcon size={32} />
                        <span className="font-black text-white text-lg tracking-tight">
                            FinNexus
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {/* Tools Dropdown */}
                        <div className="relative" onMouseLeave={() => setToolsOpen(false)}>
                            <button
                                onMouseEnter={() => setToolsOpen(true)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Calculator size={15} />
                                All Tools
                                <ChevronDown size={14} className={`transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {toolsOpen && (
                                <div
                                    className="absolute top-full left-0 mt-1 w-80 rounded-xl shadow-2xl border overflow-hidden animate-fade-in"
                                    style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                                >
                                    <div className="p-2">
                                        {CALCULATORS.map((calc) => (
                                            <Link
                                                key={calc.href}
                                                href={calc.href}
                                                onClick={() => setToolsOpen(false)}
                                                className="flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-green-600/10 group"
                                            >
                                                <div className="mt-0.5 p-1.5 rounded-md" style={{ background: 'rgba(0,200,83,0.12)' }}>
                                                    <calc.icon size={14} style={{ color: '#00C853' }} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{calc.label}</p>
                                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{calc.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all">
                            Resources
                        </Link>
                        <Link href="/articles" className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all">
                            Articles
                        </Link>
                        <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all">
                            About
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                                aria-label="Toggle theme"
                            >
                                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}

                        {/* CTA Button */}
                        <Link
                            href="/calculators/mortgage"
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5"
                            style={{ background: '#00C853', color: '#060f1e' }}
                        >
                            Calculate Now
                        </Link>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t px-4 pb-4 animate-fade-in" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'var(--color-navy)' }}>
                    <div className="pt-3 space-y-1">
                        {CALCULATORS.map((calc) => (
                            <Link
                                key={calc.href}
                                href={calc.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <calc.icon size={16} style={{ color: '#00C853' }} />
                                {calc.label}
                            </Link>
                        ))}
                        <Link href="/blog" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-white/80 hover:bg-white/10">
                            Resources / Blog
                        </Link>
                        <Link href="/articles" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-white/80 hover:bg-white/10">
                            Articles
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
