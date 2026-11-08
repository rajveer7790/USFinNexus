import type { Metadata } from 'next';
import Link from 'next/link';
import PaycheckClient from './PaycheckClient';

const url = 'https://usfinnexus.com/calculators/paycheck';
const title = '2026 Paycheck Calculator: Salary & Hourly Take-Home Pay';
const description = 'Estimate weekly, biweekly, semimonthly or monthly take-home pay from salary or hourly wages using 2026 federal withholding and payroll deductions.';
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };

export default function PaycheckPage() {
    return <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm font-semibold text-sky-700">2026 U.S. W-2 payroll estimator</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-black">Paycheck Take-Home Pay Calculator</h1>
        <p className="mt-4 mb-8 max-w-3xl">Estimate what a regular paycheck leaves after federal withholding, Social Security, Medicare, payroll deductions and the state and local withholding you enter.</p>
        <PaycheckClient />
        <section className="mt-10 space-y-3 max-w-3xl">
            <h2 className="text-2xl font-bold">How is take-home pay calculated?</h2>
            <p>Subtract withholding and payroll deductions from gross pay. This tool applies IRS Publication 15-T Worksheet 1A to regular wages and uses same-employer year-to-date FICA wages for Social Security and Additional Medicare thresholds.</p>
            <p>Hourly pay assumes the entered hours for 52 paid weeks, without overtime or unpaid leave. A traditional 401(k) reduces modeled federal income-tax wages, but not FICA wages. The tool assumes eligible Section 125 HSA, health FSA and health premiums reduce both wage bases. It does not enforce plan contribution limits or calculate bonuses, self-employment taxes, state benefits, reciprocity or final tax liability.</p>
            <p>Official sources: <a className="underline" href="https://www.irs.gov/publications/p15t">IRS Publication 15-T</a>, <a className="underline" href="https://www.irs.gov/publications/p15">Publication 15</a> and <a className="underline" href="https://www.irs.gov/publications/p15b">Publication 15-B</a>. For a different planning question, use the <Link className="underline" href="/calculators/income-tax">federal income tax calculator</Link> or the <Link className="underline" href="/calculators/budget">monthly budget calculator</Link>.</p>
            <p className="text-sm text-slate-600">Educational estimate, not payroll, tax or legal advice. Check your actual withholding with your employer or a tax professional.</p>
        </section>
    </div>;
}
