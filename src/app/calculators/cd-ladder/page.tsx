import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorAnswer from '@/components/CalculatorAnswer';
import CalculatorFAQ from '@/components/CalculatorFAQ';
import WebApplicationSchema from '@/components/WebApplicationSchema';
import CDLadderClient from './CDLadderClient';

const title = 'CD Ladder Calculator: Compare CD Maturities & Interest';
const description = 'Compare three certificate of deposit terms. Enter deposits, APYs and terms to estimate interest and see when each CD becomes available.';
const path = '/calculators/cd-ladder';
const url = 'https://usfinnexus.com' + path;
export const metadata: Metadata = { title, description, alternates: { canonical: path }, openGraph: { title, description, url, type: 'website' } };

const faqs = [
    { question: 'What is a CD ladder?', answer: 'A CD ladder splits savings across certificates of deposit with staggered maturity dates. As each CD matures, you can withdraw it or compare new rates before reinvesting.' },
    { question: 'Does this assume I roll over my CD?', answer: 'No. The calculator ends each deposit at its first maturity. Future rates are unknown, so it does not assume an automatic rollover or add returns after maturity.' },
    { question: 'Are taxes and early withdrawal penalties included?', answer: 'No. This is a pre-tax illustration that assumes each deposit stays in place through maturity. Check the institution’s disclosures for actual interest crediting, fees and penalties.' },
];

export default function CDLadderPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-8">
            <WebApplicationSchema name="CD Ladder Calculator" description={description} url={url} dateModified="2026-11-07" />
            <Breadcrumbs items={[{ name: 'Calculators', item: '/calculators' }, { name: 'CD Ladder Calculator', item: path }]} />
            <h1 className="my-4 text-3xl font-black">CD Ladder Calculator</h1>
            <CalculatorAnswer>Split savings across CDs with different maturity dates to plan when cash becomes available. Enter the deposit, annual percentage yield and term for each CD. The schedule estimates each maturity amount and total interest before taxes, with no assumed renewal.</CalculatorAnswer>
            <CDLadderClient />
            <article className="prose mt-8 max-w-none">
                <h2>How the calculator estimates maturity values</h2>
                <p>Estimated maturity value = deposit × (1 + APY ÷ 100)<sup>months ÷ 12</sup>. Interest is the maturity value minus the deposit. The estimate assumes constant APY and interest remaining on deposit through maturity.</p>
                <h2>Worked example</h2>
                <p>A $5,000 one-year CD at an illustrative 4% APY earns $200 before tax and matures at $5,200. Enter the APY from each bank disclosure rather than using the illustrative starting values.</p>
                <p>Compare a single growth scenario with the <Link href="/calculators/investment">compound interest calculator</Link> or work toward a purchase with the <Link href="/calculators/down-payment">down-payment savings calculator</Link>.</p>
            </article>
            <CalculatorFAQ faqs={faqs} title="CD ladder questions" />
        </div>
    );
}
