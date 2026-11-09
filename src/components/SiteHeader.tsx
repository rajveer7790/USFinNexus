'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
    Home, TrendingUp, Car, DollarSign, Scale, ArrowLeftRight,
    Menu, X, ChevronDown, Landmark, FileText, Target, PiggyBank,
    Activity, Percent, BarChart2, Table2, LineChart, Map, Calculator,
    BookOpen, Newspaper, Info, Phone, Search, ArrowRight,
} from 'lucide-react';
import LogoIcon from './LogoIcon';

const NAV_CALCULATORS = [
    {
        category: 'Mortgage & Housing',
        color: '#0da6f2',
        items: [
            { href: '/calculators/mortgage', label: 'Mortgage Calculator', icon: Home, desc: 'Full PITI + amortization' },
            { href: '/calculators/mortgage-payoff', label: 'Mortgage Payoff', icon: Target, desc: 'Extra payments & interest saved' },
            { href: '/calculators/affordability', label: 'Affordability', icon: DollarSign, desc: 'How much can I afford?' },
            { href: '/calculators/refinance', label: 'Refinance', icon: TrendingUp, desc: 'Savings & break-even' },
            { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy', icon: ArrowLeftRight, desc: 'True cost comparison' },
            { href: '/calculators/rental-property', label: 'Rental Property ROI', icon: Home, desc: 'Cash flow & Cap Rate' },
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
            { href: '/calculators/fire-planner', label: 'FIRE Planner', icon: TrendingUp, desc: 'Early retirement timeline' },
            { href: '/calculators/investment', label: 'Compound Interest', icon: LineChart, desc: 'Investment growth' },
            { href: '/calculators/trump-account', label: 'Trump Account 2026', icon: PiggyBank, desc: '$1,000 child account projection' },
            { href: '/calculators/drip', label: 'DRIP Forecaster', icon: LineChart, desc: 'Dividend reinvestment' },
            { href: '/calculators/income-tax', label: 'Income Tax 2026', icon: FileText, desc: 'Federal & state taxes' },
            { href: '/calculators/crypto-tax', label: 'Crypto Tax Estimator', icon: FileText, desc: 'Capital gains calculator' },
            { href: '/calculators/budget', label: 'Budget 50/30/20', icon: PiggyBank, desc: 'Monthly budget rule' },
            { href: '/calculators/options-profit', label: 'Options Profit/Loss', icon: BarChart2, desc: 'Visualizer for Calls/Puts' },
        ],
    },
    {
        category: 'Regional & Canada',
        color: '#8b5cf6',
        items: [
            { href: '/canada/mortgage-calculator', label: 'Canada Mortgage', icon: Map, desc: 'CAD payment & stress test' },
            { href: '/calculators/california', label: 'California', icon: Map, desc: 'CA transfer taxes & fees' },
            { href: '/calculators/texas', label: 'Texas', icon: Map, desc: 'TX property tax closing' },
            { href: '/calculators/florida', label: 'Florida', icon: Map, desc: 'FL documentary stamps' },
            { href: '/calculators/fha', label: 'FHA Calculator', icon: Home, desc: 'FHA loans & MIP' },
            { href: '/calculators/va', label: 'VA Calculator', icon: Home, desc: 'VA funding fee & $0 down' },
        ],
    },
];

const NAV_RESOURCES = [
    { href: '/mortgage-rates', label: 'Current Mortgage Rates', icon: TrendingUp, desc: 'Freddie Mac weekly averages' },
    { href: '/blog', label: 'Resources & Blog', icon: Newspaper, desc: 'Mortgage tips and finance news' },
    { href: '/guides', label: 'Financial Guides', icon: BookOpen, desc: 'In-depth homebuyer guides' },
    { href: '/articles', label: 'Articles', icon: FileText, desc: 'CFPB, FinCEN, tax updates' },
    { href: '/methodology', label: 'Our Methodology', icon: Calculator, desc: 'How our math works' },
    { href: '/about', label: 'About Us', icon: Info, desc: 'Our mission and team' },
    { href: '/contact', label: 'Contact', icon: Phone, desc: 'Get in touch' },
];

const reportLinks = [
    { href: '/data/home-affordability-by-state', label: 'Affordability by state' },
    { href: '/data/home-affordability-by-city', label: 'Affordability by city' },
    { href: '/methodology', label: 'How the numbers are calculated' },
];

const additional = [
    { href: '/calculators', label: 'All calculators', desc: 'Financial planning tools' },
    { href: '/calculators/paycheck', label: 'Paycheck Calculator', desc: 'Salary, hourly and take-home pay' },
    { href: '/data/home-affordability-by-state', label: 'Affordability by state', desc: 'Housing data and reports' },
    { href: '/data/home-affordability-by-city', label: 'Affordability by city', desc: 'Housing data and reports' },
];
const searchItems = [...additional, ...NAV_CALCULATORS.flatMap(group => group.items), ...NAV_RESOURCES];

function SiteSearch() {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const input = useRef<HTMLInputElement>(null);
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = terms.length ? searchItems.filter(item => terms.every(term => `${item.label} ${item.desc} ${item.href}`.toLowerCase().includes(term))).slice(0, 6) : [];
    return <div className="fn-search" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }} onKeyDown={e => {
        if (e.key === 'Escape' && open) { e.stopPropagation(); setOpen(false); input.current?.focus(); }
    }}>
        <form action="/blog" method="get" role="search" aria-label="Search USFinNexus" onSubmit={() => setOpen(false)}>
            <Search size={18} aria-hidden="true" />
            <input ref={input} type="search" aria-label="Search USFinNexus" name="q" value={query} onChange={e => { setQuery(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} placeholder="Search USFinNexus" maxLength={100} autoComplete="off" />
        </form>
        {open && terms.length > 0 && <div className="fn-search-results" aria-label="Suggested pages">
            {matches.map(item => <Link key={item.href} href={item.href} onClick={() => { setOpen(false); setQuery(''); }}>{item.label}</Link>)}
            <Link href={`/blog?q=${encodeURIComponent(query.trim())}#blog-search`} onClick={() => { setOpen(false); setQuery(''); }}>Search articles for “{query.trim()}” <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>}
    </div>;
}

export default function SiteHeader() {
    const pathname = usePathname();
    const [mobile, setMobile] = useState(false);
    const [menu, setMenu] = useState<'calculators' | 'news' | 'reports' | null>(null);
    const header = useRef<HTMLElement>(null);
    const mobileButton = useRef<HTMLButtonElement>(null);
    const menuButtons = useRef<Record<string, HTMLButtonElement | null>>({});
    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
    const current = (href: string) => pathname === href ? 'page' as const : undefined;

    useEffect(() => { setMobile(false); setMenu(null); }, [pathname]);
    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1050px)');
        const reset = () => { setMobile(false); setMenu(null); };
        const outside = (e: PointerEvent) => { if (e.target instanceof Node && !header.current?.contains(e.target)) reset(); };
        desktop.addEventListener('change', reset);
        document.addEventListener('pointerdown', outside);
        return () => { desktop.removeEventListener('change', reset); document.removeEventListener('pointerdown', outside); };
    }, []);

    const close = () => { setMobile(false); setMenu(null); };
    const links = (items: ReadonlyArray<{ href: string; label: string }>) => items.map(item => <Link key={item.href} href={item.href} aria-current={current(item.href)} onClick={close}>{item.label}</Link>);
    const resources = NAV_RESOURCES.filter(item => item.href !== '/mortgage-rates');
    const controls = [
        { id: 'calculators', label: 'Calculators', active: isActive('/calculators') || isActive('/canada') },
        { id: 'news', label: 'News & Guides', active: ['/blog', '/guides', '/articles'].some(isActive) },
        { id: 'reports', label: 'Data & Reports', active: isActive('/data') },
    ] as const;

    function menuControl(control: (typeof controls)[number]) {
        return <button ref={el => { menuButtons.current[control.id] = el; }} type="button" data-active={control.active} aria-expanded={menu === control.id} aria-controls={menu === control.id ? 'fn-desktop-panel' : undefined} onClick={() => setMenu(menu === control.id ? null : control.id)}>
            {control.label}<ChevronDown size={15} aria-hidden="true" />
        </button>;
    }

    return <>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <header className="fn-header" ref={header} onKeyDown={e => {
            if (e.key !== 'Escape') return;
            if (mobile) mobileButton.current?.focus();
            if (menu) menuButtons.current[menu]?.focus();
            close();
        }}>
            <div className="fn-shell fn-header-row">
                <Link href="/" className="fn-brand" onClick={close} aria-label="USFinNexus home">
                    <LogoIcon size={34} /><span><b>US</b>FinNexus</span>
                </Link>
                <nav className="fn-desktop-nav" aria-label="Main navigation" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setMenu(null); }}>
                    {menuControl(controls[0])}
                    <Link href="/mortgage-rates" aria-current={current('/mortgage-rates')} onClick={close}>Mortgage Rates</Link>
                    {menuControl(controls[1])}
                    {menuControl(controls[2])}
                    {menu && <div id="fn-desktop-panel" className={`fn-nav-panel ${menu === 'calculators' ? 'fn-nav-panel-wide' : ''}`}>
                        {menu === 'calculators' ? <>
                            <div className="fn-panel-top">{links(additional.slice(0, 2))}</div>
                            <div className="fn-nav-columns">{NAV_CALCULATORS.map(group => <div key={group.category}><strong>{group.category}</strong>{links(group.items)}</div>)}</div>
                        </> : links(menu === 'news' ? resources : reportLinks)}
                    </div>}
                </nav>
                <div className="fn-desktop-search"><SiteSearch key={pathname} /></div>
                <button ref={mobileButton} className="fn-mobile-toggle" type="button" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} aria-controls={mobile ? 'mobile-nav' : undefined} onClick={() => setMobile(!mobile)}>{mobile ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
            </div>
            {mobile && <nav id="mobile-nav" className="mobile-nav-panel fn-mobile-panel" aria-label="Mobile navigation">
                <div className="fn-shell">
                    <SiteSearch key={pathname} />
                    <div className="fn-mobile-links">{links([additional[0], NAV_RESOURCES[0], NAV_RESOURCES[1], NAV_RESOURCES[2]])}</div>
                    {NAV_CALCULATORS.map(group => <details className="fn-disclosure" key={group.category}><summary>{group.category}<ChevronDown size={16} aria-hidden="true" /></summary><div className="fn-mobile-links">{links(group.items)}</div></details>)}
                    <details className="fn-disclosure"><summary>Data &amp; reports<ChevronDown size={16} aria-hidden="true" /></summary><div className="fn-mobile-links">{links(reportLinks)}</div></details>
                    <div className="fn-mobile-links">{links([additional[1], ...resources.slice(2).filter(item => item.href !== '/methodology')])}</div>
                </div>
            </nav>}
        </header>
    </>;
}
