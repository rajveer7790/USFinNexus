'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
    Home, TrendingUp, Car, DollarSign, Scale, ArrowLeftRight,
    Menu, X, ChevronDown, Landmark, FileText, Target, PiggyBank,
    Activity, Percent, BarChart2, Table2, LineChart, Map, Calculator,
    BookOpen, Newspaper, Info, Phone, ChevronRight,
} from 'lucide-react';
import LogoIcon from './LogoIcon';

const NAV_CALCULATORS = [
    {
        category: 'Mortgage & Housing',
        color: '#0da6f2',
        items: [
            { href: '/calculators/mortgage', label: 'Mortgage Calculator', icon: Home, desc: 'Full PITI + amortization' },
            { href: '/calculators/affordability', label: 'Affordability', icon: DollarSign, desc: 'How much can I afford?' },
            { href: '/calculators/refinance', label: 'Refinance', icon: TrendingUp, desc: 'Savings & break-even' },
            { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy', icon: ArrowLeftRight, desc: 'True cost comparison' },
            { href: '/calculators/fha-va-usda', label: 'FHA / VA / USDA', icon: Landmark, desc: 'Government loan options' },
            { href: '/calculators/heloc', label: 'HELOC', icon: Home, desc: 'Home equity credit line' },
            { href: '/calculators/arm', label: 'ARM Calculator', icon: Activity, desc: 'Adjustable rate analysis' },
            { href: '/calculators/interest-only', label: 'Interest-Only', icon: Percent, desc: 'IO payment scenarios' },
            { href: '/calculators/points-buydown', label: 'Points Buy-Down', icon: BarChart2, desc: 'Rate reduction analysis' },
            { href: '/calculators/amortization', label: 'Amortization', icon: Table2, desc: 'Full payoff schedule' },
            { href: '/calculators/down-payment', label: 'Down Payment', icon: PiggyBank, desc: 'Savings goal planner' },
            { href: '/calculators/dti', label: 'DTI Calculator', icon: Scale, desc: 'Debt-to-income ratio' },
            { href: '/calculators/closing-costs', label: 'Closing Costs', icon: FileText, desc: 'Buyer & seller costs' },
        ],
    },
    {
        category: 'Loans & Debt',
        color: '#00C853',
        items: [
            { href: '/calculators/auto-loan', label: 'Auto Loan', icon: Car, desc: 'Vehicle financing' },
            { href: '/calculators/personal-loan', label: 'Personal Loan', icon: Calculator, desc: 'Any debt payment' },
            { href: '/calculators/student-loan', label: 'Student Loan', icon: BookOpen, desc: 'Education debt payoff' },
            { href: '/calculators/credit-card', label: 'Credit Card Payoff', icon: Target, desc: 'Clear balances faster' },
            { href: '/calculators/debt-payoff', label: 'Debt Payoff', icon: Target, desc: 'Snowball vs Avalanche' },
            { href: '/calculators/comparison', label: 'Loan Comparison', icon: Scale, desc: '3 scenarios side-by-side' },
        ],
    },
    {
        category: 'Wealth & Tax',
        color: '#f59e0b',
        items: [
            { href: '/calculators/retirement', label: 'Retirement Planner', icon: PiggyBank, desc: 'Future nest egg goal' },
            { href: '/calculators/investment', label: 'Compound Interest', icon: LineChart, desc: 'Investment growth' },
            { href: '/calculators/income-tax', label: 'Income Tax 2026', icon: FileText, desc: 'Federal & state taxes' },
            { href: '/calculators/budget', label: 'Budget 50/30/20', icon: PiggyBank, desc: 'Monthly budget rule' },
        ],
    },
    {
        category: 'State-Specific',
        color: '#8b5cf6',
        items: [
            { href: '/calculators/california', label: 'California', icon: Map, desc: 'CA transfer taxes & fees' },
            { href: '/calculators/texas', label: 'Texas', icon: Map, desc: 'TX property tax closing' },
            { href: '/calculators/florida', label: 'Florida', icon: Map, desc: 'FL documentary stamps' },
            { href: '/calculators/fha', label: 'FHA Calculator', icon: Home, desc: 'FHA loans & MIP' },
            { href: '/calculators/va', label: 'VA Calculator', icon: Home, desc: 'VA funding fee & $0 down' },
        ],
    },
];

const NAV_RESOURCES = [
    { href: '/blog', label: 'Resources & Blog', icon: Newspaper, desc: 'Mortgage tips and finance news' },
    { href: '/guides', label: 'Financial Guides', icon: BookOpen, desc: 'In-depth homebuyer guides' },
    { href: '/articles', label: 'Articles', icon: FileText, desc: 'CFPB, FinCEN, tax updates' },
    { href: '/methodology', label: 'Our Methodology', icon: Calculator, desc: 'How our math works' },
    { href: '/about', label: 'About Us', icon: Info, desc: 'Our mission and team' },
    { href: '/contact', label: 'Contact', icon: Phone, desc: 'Get in touch' },
];

export default function SiteHeader() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ── Close menu & unlock scroll on route change ──────── */
    useEffect(() => {
        setMobileOpen(false);
        setActiveMenu(null);
    }, [pathname]);

    /* ── Lock body scroll when mobile menu is open ───────── */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    /* ── Scroll shadow ───────────────────────────────────── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── ESC closes all menus ────────────────────────────── */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveMenu(null);
                setMobileOpen(false);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const openMenu = useCallback((name: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMenu(name);
    }, []);

    const scheduleClose = useCallback(() => {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
    }, []);

    /* ── Active route helpers ────────────────────────────── */
    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + '/');

    const isCalcActive = NAV_CALCULATORS.some(col =>
        col.items.some(item => isActive(item.href))
    );
    const isResourceActive = NAV_RESOURCES.some(item => isActive(item.href));

    return (
        <>
            <a href="#main-content" className="skip-to-content">Skip to main content</a>

            <header
                className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
                    scrolled ? 'shadow-md border-gray-200' : 'border-gray-100'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 gap-3 lg:gap-4">

                        {/* ── Logo ──────────────────────────────────────── */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group"
                            aria-label="USFinNexus — Home"
                        >
                            <LogoIcon size={30} />
                            <div className="leading-none">
                                <span className="font-black text-[#0A192F] text-sm sm:text-base tracking-tight">
                                    <span className="text-[#0da6f2]">US</span>FinNexus
                                </span>
                                <p className="hidden sm:block text-[9px] text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                                    Free Finance Tools
                                </p>
                            </div>
                        </Link>

                        {/* ── Desktop Nav ───────────────────────────────── */}
                        <nav
                            className="hidden lg:flex items-center gap-0.5 flex-1 ml-1"
                            aria-label="Main navigation"
                        >
                            {/* Calculators mega-menu */}
                            <div
                                className="relative"
                                onMouseEnter={() => openMenu('tools')}
                                onMouseLeave={scheduleClose}
                            >
                                <button
                                    onClick={() => setActiveMenu(activeMenu === 'tools' ? null : 'tools')}
                                    onFocus={() => openMenu('tools')}
                                    aria-expanded={activeMenu === 'tools'}
                                    aria-haspopup="true"
                                    className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                        activeMenu === 'tools' || isCalcActive
                                            ? 'text-[#0da6f2] bg-blue-50'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    Calculators
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${activeMenu === 'tools' ? 'rotate-180' : ''}`}
                                    />
                                    {isCalcActive && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0da6f2] rounded-full" />
                                    )}
                                </button>

                                {activeMenu === 'tools' && (
                                    <div
                                        onMouseEnter={() => openMenu('tools')}
                                        onMouseLeave={scheduleClose}
                                        className="absolute top-full left-0 mt-1.5 bg-white rounded-xl border border-gray-100 overflow-hidden animate-fade-in"
                                        style={{
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
                                            /* Responsive: 4-col on xl, 2-col on lg */
                                            width: 'min(860px, calc(100vw - 2rem))',
                                        }}
                                        role="menu"
                                    >
                                        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/70">
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                                28+ Free Calculators
                                            </p>
                                            <Link
                                                href="/#tools"
                                                onClick={() => setActiveMenu(null)}
                                                className="flex items-center gap-1 text-xs font-semibold text-[#0da6f2] hover:underline"
                                            >
                                                View all <ChevronRight size={12} />
                                            </Link>
                                        </div>

                                        {/* 2 cols on lg (1024-1279px), 4 cols on xl (1280px+) */}
                                        <div className="grid grid-cols-2 xl:grid-cols-4 divide-x divide-gray-100">
                                            {NAV_CALCULATORS.map(col => (
                                                <div key={col.category} className="p-3">
                                                    <p
                                                        className="text-xs font-black uppercase tracking-widest px-2 py-1.5 mb-1"
                                                        style={{ color: col.color }}
                                                    >
                                                        {col.category}
                                                    </p>
                                                    {col.items.map(item => {
                                                        const active = isActive(item.href);
                                                        return (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                onClick={() => setActiveMenu(null)}
                                                                role="menuitem"
                                                                className={`flex items-center gap-2.5 px-2 py-2 rounded-lg group transition-colors ${
                                                                    active ? 'bg-blue-50' : 'hover:bg-gray-50'
                                                                }`}
                                                            >
                                                                <item.icon
                                                                    size={14}
                                                                    className={`flex-shrink-0 transition-colors ${
                                                                        active ? 'text-[#0da6f2]' : 'text-gray-400 group-hover:text-[#0da6f2]'
                                                                    }`}
                                                                />
                                                                <div>
                                                                    <p className={`text-sm font-semibold leading-none transition-colors ${
                                                                        active ? 'text-[#0da6f2]' : 'text-gray-800 group-hover:text-[#0da6f2]'
                                                                    }`}>
                                                                        {item.label}
                                                                    </p>
                                                                    <p className="text-xs text-gray-400 mt-0.5 leading-tight">
                                                                        {item.desc}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Quick-links with active indicators */}
                            {[
                                { href: '/calculators/mortgage', label: 'Mortgage' },
                                { href: '/calculators/affordability', label: 'Affordability' },
                                { href: '/calculators/refinance', label: 'Refinance' },
                            ].map(({ href, label }) => {
                                const active = isActive(href);
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                            active
                                                ? 'text-[#0da6f2] bg-blue-50'
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {label}
                                        {active && (
                                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0da6f2] rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* Resources dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => openMenu('resources')}
                                onMouseLeave={scheduleClose}
                            >
                                <button
                                    onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
                                    onFocus={() => openMenu('resources')}
                                    aria-expanded={activeMenu === 'resources'}
                                    aria-haspopup="true"
                                    className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                        activeMenu === 'resources' || isResourceActive
                                            ? 'text-[#0da6f2] bg-blue-50'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    Resources
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`}
                                    />
                                    {isResourceActive && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0da6f2] rounded-full" />
                                    )}
                                </button>

                                {activeMenu === 'resources' && (
                                    <div
                                        onMouseEnter={() => openMenu('resources')}
                                        onMouseLeave={scheduleClose}
                                        className="absolute top-full right-0 mt-1.5 w-72 bg-white rounded-xl border border-gray-100 overflow-hidden animate-fade-in"
                                        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.14)' }}
                                        role="menu"
                                    >
                                        <div className="p-2">
                                            {NAV_RESOURCES.map(item => {
                                                const active = isActive(item.href);
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setActiveMenu(null)}
                                                        role="menuitem"
                                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-colors ${
                                                            active ? 'bg-blue-50' : 'hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                                                            active ? 'bg-[#0da6f2]/10' : 'bg-gray-100 group-hover:bg-[#0da6f2]/10'
                                                        }`}>
                                                            <item.icon
                                                                size={15}
                                                                className={`transition-colors ${
                                                                    active ? 'text-[#0da6f2]' : 'text-gray-500 group-hover:text-[#0da6f2]'
                                                                }`}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className={`text-sm font-semibold leading-none transition-colors ${
                                                                active ? 'text-[#0da6f2]' : 'text-gray-800 group-hover:text-[#0da6f2]'
                                                            }`}>
                                                                {item.label}
                                                            </p>
                                                            <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>

                        {/* ── Right: CTA + Mobile toggle ────────────────── */}
                        <div className="flex items-center gap-2 ml-auto">
                            <Link
                                href="/calculators/mortgage"
                                className="hidden lg:flex items-center gap-1.5 px-4 py-2 bg-[#0A192F] hover:bg-[#0d2640] text-white text-sm font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                            >
                                Free Calculator
                            </Link>

                            {/* Mobile hamburger — min 44×44 tap target */}
                            <button
                                onClick={() => setMobileOpen(prev => !prev)}
                                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-nav"
                            >
                                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Mobile Menu ───────────────────────────────────── */}
                {mobileOpen && (
                    <>
                        {/* Tap-outside backdrop */}
                        <div
                            className="lg:hidden fixed inset-0 top-16 bg-black/25 backdrop-blur-sm z-40"
                            onClick={() => setMobileOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Animated drawer */}
                        <div
                            id="mobile-nav"
                            className="lg:hidden relative z-50 border-t border-gray-100 bg-white overflow-y-auto animate-slide-down"
                            style={{ maxHeight: 'calc(100svh - 4rem)' }}
                            aria-label="Mobile navigation"
                        >
                            <div className="px-4 py-5 space-y-5">

                                {/* Calculator categories */}
                                {NAV_CALCULATORS.map(col => (
                                    <div key={col.category}>
                                        <p
                                            className="text-xs font-black uppercase tracking-widest px-1 py-1 mb-2"
                                            style={{ color: col.color }}
                                        >
                                            {col.category}
                                        </p>
                                        <div className="grid grid-cols-2 gap-1">
                                            {col.items.map(item => {
                                                const active = isActive(item.href);
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className={`flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                                                            active
                                                                ? 'bg-blue-50 text-[#0da6f2]'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#0da6f2]'
                                                        }`}
                                                    >
                                                        <item.icon
                                                            size={15}
                                                            className={`flex-shrink-0 ${active ? 'text-[#0da6f2]' : 'text-gray-400'}`}
                                                        />
                                                        <span className="leading-tight text-xs sm:text-sm">{item.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}

                                {/* Resources */}
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs font-black uppercase tracking-widest px-1 py-1 mb-2 text-gray-400">
                                        Resources
                                    </p>
                                    <div className="space-y-1">
                                        {NAV_RESOURCES.map(item => {
                                            const active = isActive(item.href);
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                                                        active
                                                            ? 'bg-blue-50 text-[#0da6f2]'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#0da6f2]'
                                                    }`}
                                                >
                                                    <item.icon
                                                        size={15}
                                                        className={`flex-shrink-0 ${active ? 'text-[#0da6f2]' : 'text-gray-400'}`}
                                                    />
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                    {/* Mobile CTA — same navy as desktop */}
                                    <Link
                                        href="/calculators/mortgage"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0A192F] hover:bg-[#0d2640] active:bg-[#0d2640] text-white font-bold rounded-xl transition-colors text-sm"
                                    >                                  <Home size={16} />
                                    Free Mortgage Calculator
                                </Link>

                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}
