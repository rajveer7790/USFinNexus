import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import LogoIcon from './LogoIcon';

const MORTGAGE_LINKS = [
    { href: '/mortgage-rates', label: 'Current Mortgage Rates' },
    { href: '/calculators/mortgage', label: 'Mortgage Calculator' },
    { href: '/calculators/mortgage-payoff', label: 'Mortgage Payoff Calculator' },
    { href: '/calculators/affordability', label: 'Affordability Calculator' },
    { href: '/calculators/refinance', label: 'Refinance Calculator' },
    { href: '/calculators/rent-vs-buy', label: 'Rent vs. Buy' },
    { href: '/calculators/fha-va-usda', label: 'FHA / VA / USDA Loans' },
    { href: '/calculators/arm', label: 'ARM Calculator' },
    { href: '/calculators/heloc', label: 'HELOC Calculator' },
    { href: '/calculators/interest-only', label: 'Interest-Only' },
    { href: '/calculators/points-buydown', label: 'Points Buy-Down' },
    { href: '/calculators/amortization', label: 'Amortization Schedule' },
    { href: '/calculators/down-payment', label: 'Down Payment Planner' },
    { href: '/calculators/dti', label: 'DTI Calculator' },
];

const LOAN_LINKS = [
    { href: '/calculators/auto-loan', label: 'Auto Loan Calculator' },
    { href: '/calculators/personal-loan', label: 'Personal Loan' },
    { href: '/calculators/student-loan', label: 'Student Loan' },
    { href: '/calculators/credit-card', label: 'Credit Card Payoff' },
    { href: '/calculators/debt-payoff', label: 'Debt Payoff Planner' },
    { href: '/calculators/comparison', label: 'Loan Comparison' },
    { href: '/calculators/closing-costs', label: 'Closing Costs' },
    { href: '/calculators/retirement', label: 'Retirement Planner' },
    { href: '/calculators/investment', label: 'Compound Interest' },
    { href: '/calculators/income-tax', label: '2026 Federal Income Tax' },
    { href: '/calculators/paycheck', label: 'Paycheck Calculator' },
    { href: '/calculators/budget', label: 'Budget 50/30/20' },
];

const STATE_LINKS = [
    { href: '/calculators/california', label: 'California Closing Costs' },
    { href: '/calculators/texas', label: 'Texas Closing Costs' },
    { href: '/calculators/florida', label: 'Florida Closing Costs' },
    { href: '/calculators/fha', label: 'FHA Calculator' },
    { href: '/calculators/va', label: 'VA Calculator' },
];

const RESOURCE_LINKS = [
    { href: '/blog/mortgage-broker-fees', label: 'Mortgage Broker Fees' },
    { href: '/blog/pay-off-student-loans-vs-invest-decision', label: 'Student Loans vs. Investing' },
    { href: '/data/home-affordability-by-state', label: 'Affordability by State' },
    { href: '/data/home-affordability-by-city', label: 'Affordability by City' },
    { href: '/privacy-focused-mortgage-calculator', label: 'Private Mortgage Calculator' },
    { href: '/why-we-dont-collect-data', label: 'Zero-Data Promise' },
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

const LEGAL = [
    { href: '/methodology', label: 'Methodology' }, { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }, { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' }, { href: '/disclaimer', label: 'Disclaimer' },
];
const PRIMARY = [
    { title: 'Home loans', links: [
        { href: '/calculators/mortgage', label: 'Mortgage Calculator' }, { href: '/mortgage-rates', label: 'Mortgage Rates' },
        { href: '/calculators/affordability', label: 'Affordability' }, { href: '/calculators/refinance', label: 'Refinance' },
    ] },
    { title: 'Money tools', links: [
        { href: '/calculators/paycheck', label: 'Paycheck' }, { href: '/calculators/budget', label: 'Budget' },
        { href: '/calculators/income-tax', label: 'Federal Tax' }, { href: '/calculators/credit-card', label: 'Card Payoff' },
    ] },
    { title: 'Resources', links: [
        { href: '/blog', label: 'Blog' }, { href: '/guides', label: 'Guides' },
        { href: '/articles', label: 'Articles' }, { href: '/data/home-affordability-by-state', label: 'State Data' },
    ] },
];
const visibleLinks = new Set([...PRIMARY.flatMap(group => group.links), ...LEGAL].map(l => l.href));
const DIRECTORY = [
    { title: 'Mortgage tools', links: MORTGAGE_LINKS },
    { title: 'Loans & planning', links: LOAN_LINKS },
    { title: 'State & loan programs', links: STATE_LINKS },
    { title: 'More resources', links: RESOURCE_LINKS },
];

function FooterGroup({ title, links }: { title: string; links: { href: string; label: string }[] }) {
    return <div><p className="fn-footer-label">{title}</p><ul>{links.map(link => <li key={link.href}>
        <Link href={link.href} prefetch={false}>{link.label}</Link>
    </li>)}</ul></div>;
}

export default function Footer() {
    return (
        <footer className="fn-footer">
            <div className="fn-shell">
                <nav className="fn-footer-grid" aria-label="Footer">
                    <div className="fn-footer-brand">
                        <Link href="/" aria-label="USFinNexus home"><LogoIcon size={29} /><span>USFinNexus</span></Link>
                        <p>Free U.S. mortgage and personal finance calculators. No account required.</p>
                    </div>
                    {PRIMARY.map(group => <FooterGroup key={group.title} {...group} />)}
                </nav>
                <details className="fn-footer-directory">
                    <summary>More tools and resources <ChevronDown size={17} aria-hidden="true" /></summary>
                    <nav aria-label="Full footer directory" className="fn-footer-grid">
                        {DIRECTORY.map(group => <FooterGroup key={group.title} title={group.title} links={group.links.filter(l => !visibleLinks.has(l.href))} />)}
                    </nav>
                </details>
                <div className="fn-footer-end">
                    <nav aria-label="Company and policies" className="fn-footer-legal">{LEGAL.map(link => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}</nav>
                    <p>Estimates are for education only, not financial, tax, legal, lending or investment advice. Calculator inputs are intended to stay in your browser. The <Link href="/privacy" prefetch={false}>Privacy Policy</Link> explains analytics and advertising.</p>
                    <p>&copy; {new Date().getFullYear()} USFinNexus.com</p>
                </div>
            </div>
        </footer>
    );
}
