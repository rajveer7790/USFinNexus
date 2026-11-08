'use client';

import { useState } from 'react';
import { calcPaycheck, calcStatePaycheck, PAY_PERIODS, STATE_PAYROLL_SOURCES, type FilingStatus } from '@/lib/paycheck';
import { formatCurrency } from '@/lib/formulas';
import { STATE_TAX_RATES } from '@/lib/taxEstimates';

const money = (value: number) => formatCurrency(value, 2);
const states = Object.keys(STATE_TAX_RATES).map(code => {
    const names: Record<string, string> = { AK:'Alaska', AL:'Alabama', AR:'Arkansas', AZ:'Arizona', CA:'California', CO:'Colorado', CT:'Connecticut', DC:'District of Columbia', DE:'Delaware', FL:'Florida', GA:'Georgia', HI:'Hawaii', IA:'Iowa', ID:'Idaho', IL:'Illinois', IN:'Indiana', KS:'Kansas', KY:'Kentucky', LA:'Louisiana', MA:'Massachusetts', MD:'Maryland', ME:'Maine', MI:'Michigan', MN:'Minnesota', MO:'Missouri', MS:'Mississippi', MT:'Montana', NC:'North Carolina', ND:'North Dakota', NE:'Nebraska', NH:'New Hampshire', NJ:'New Jersey', NM:'New Mexico', NV:'Nevada', NY:'New York', OH:'Ohio', OK:'Oklahoma', OR:'Oregon', PA:'Pennsylvania', RI:'Rhode Island', SC:'South Carolina', SD:'South Dakota', TN:'Tennessee', TX:'Texas', UT:'Utah', VA:'Virginia', VT:'Vermont', WA:'Washington', WI:'Wisconsin', WV:'West Virginia', WY:'Wyoming' };
    return { code, name: names[code] ?? code };
}).sort((a, b) => a.name.localeCompare(b.name, 'en-US'));

function Field({ label, value, onChange, placeholder }: { label: string; value?: number; onChange: (v?: number) => void; placeholder?: string }) {
    return <label className="block text-sm font-semibold">{label}
        <input type="number" min={0} step="any" className="input-field mt-1" value={value ?? ''} placeholder={placeholder}
            onChange={e => onChange(e.target.value === '' ? undefined : Math.max(0, Number(e.target.value) || 0))} />
    </label>;
}

export default function PaycheckClient() {
    const [mode, setMode] = useState<'salary' | 'hourly'>('salary');
    const [period, setPeriod] = useState<keyof typeof PAY_PERIODS>('biweekly');
    const [filing, setFiling] = useState<FilingStatus>('single');
    const [state, setState] = useState('');
    const [multipleJobs, setMultipleJobs] = useState(false);
    const [values, setValues] = useState<Record<string, number | undefined>>({ salary: 75000, hourly: 30, hours: 40 });
    const field = (label: string, key: string, placeholder = '0') => <Field key={key} label={label} value={values[key]} placeholder={placeholder} onChange={v => setValues(prev => ({ ...prev, [key]: v }))} />;
    const n = (key: string) => values[key] ?? 0;
    const periods = PAY_PERIODS[period];
    const gross = (mode === 'salary' ? n('salary') : n('hourly') * n('hours') * 52) / periods;
    const section125 = n('hsa') + n('fsa') + n('insurance');
    const autoState = calcStatePaycheck(state, Math.max(0, gross - section125 - n('retirement')), periods, Math.floor(n('stateAllowances')), Math.floor(n('stateExtraAllowances')));
    const stateTax = values.stateTax ?? autoState;
    const stateSource = STATE_PAYROLL_SOURCES[state];
    const result = calcPaycheck({
        gross, periods, filing, multipleJobs, section125, stateTax,
        otherIncome: n('other'), w4Deductions: n('deductions'), credits: n('credits'), extraFederal: n('extra'),
        retirement: n('retirement'), postTax: n('postTax'), ytdFicaWages: n('ytd'), localTax: n('local'),
    });
    const valid = gross > 0 && result.deductions <= result.gross;

    return <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-5 space-y-4">
            <h2 className="text-xl font-bold">Pay and withholding inputs</h2>
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">Pay type<select className="input-field mt-1" value={mode} onChange={e => setMode(e.target.value as typeof mode)}><option value="salary">Annual salary</option><option value="hourly">Hourly wages</option></select></label>
                <label className="text-sm font-semibold">Pay frequency<select className="input-field mt-1" value={period} onChange={e => setPeriod(e.target.value as typeof period)}><option value="weekly">Weekly (52)</option><option value="biweekly">Biweekly (26)</option><option value="semimonthly">Semimonthly (24)</option><option value="monthly">Monthly (12)</option></select></label>
                {mode === 'salary' ? field('Annual gross salary ($)', 'salary') : <>{field('Hourly wage ($)', 'hourly')}{field('Paid hours per week', 'hours')}</>}
                <label className="text-sm font-semibold">Federal W-4 status<select className="input-field mt-1" value={filing} onChange={e => setFiling(e.target.value as FilingStatus)}><option value="single">Single or married filing separately</option><option value="joint">Married filing jointly</option><option value="head">Head of household</option></select></label>
                <label className="text-sm font-semibold">Work state<select className="input-field mt-1" value={state} onChange={e => { setState(e.target.value); setValues(v => ({ ...v, stateTax: undefined, local: undefined, stateAllowances: undefined, stateExtraAllowances: undefined })); }}><option value="">Select a state</option>{states.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}</select></label>
                {field('State income tax override per paycheck ($)', 'stateTax', autoState === undefined ? 'Use your payroll estimate' : money(autoState) + ' automatic')}
                {field('Local income tax per paycheck ($)', 'local')}
                {stateSource && field(state === 'IL' ? 'IL-W-4 Line 1 allowances' : 'MI-W4 exemptions', 'stateAllowances')}
                {state === 'IL' && field('IL-W-4 Line 2 allowances', 'stateExtraAllowances')}
            </div>
            <p className="text-sm text-slate-600">{stateSource && <><a href={stateSource} className="underline">State withholding method</a> assumes the same taxable wages as federal and zero state allowances if not entered. </>}State and local payroll rules depend on where you work and live. Use your paystub or employer’s estimate to override. A blank local amount assumes zero. Other state payroll premiums are not automatically calculated.</p>
            <details className="border-t pt-3"><summary className="cursor-pointer font-semibold">Deductions and W-4 adjustments</summary>
                <div className="grid gap-4 mt-4 sm:grid-cols-2">
                    {field('Traditional 401(k) per paycheck ($)', 'retirement')}
                    {field('Qualified payroll HSA per paycheck ($)', 'hsa')}
                    {field('Qualified health FSA per paycheck ($)', 'fsa')}
                    {field('Qualified pre-tax health premium per paycheck ($)', 'insurance')}
                    {field('After-tax deductions per paycheck ($)', 'postTax')}
                    {field('Year-to-date FICA wages before this check ($)', 'ytd')}
                    {field('W-4 Step 3: annual credits ($)', 'credits')}
                    {field('W-4 Step 4(a): annual other income ($)', 'other')}
                    {field('W-4 Step 4(b): annual deductions ($)', 'deductions')}
                    {field('W-4 Step 4(c): extra tax per paycheck ($)', 'extra')}
                </div>
                <label className="flex gap-2 mt-4 text-sm"><input type="checkbox" checked={multipleJobs} onChange={e => setMultipleJobs(e.target.checked)} />Use the checked Step 2(c) schedule from my W-4</label>
            </details>
        </div>
        <div className="glass-card p-5 self-start" aria-live="polite">
            <h2 className="text-xl font-bold">{result.net === undefined ? 'Estimated pay before state withholding' : 'Estimated take-home pay'}</h2>
            {valid ? <>
                <p className="mt-2 mb-5 text-4xl font-black text-emerald-700">{money(result.net ?? result.beforeState)}</p>
                {result.net === undefined && <p className="mb-4 text-sm">Enter state withholding to include it. This is not your final deposit.</p>}
                {(result.net ?? result.beforeState) < 0 && <p className="mb-4 text-sm">Entered withholdings and deductions exceed this paycheck. Check your inputs.</p>}
                <dl className="divide-y">
                    {([
                        ['Gross pay', result.gross], ['Federal income tax', result.federal], ['Social Security', result.socialSecurity],
                        ['Medicare', result.medicare], ['Additional Medicare withholding', result.additionalMedicare],
                        ['State income tax', stateTax], ['Local income tax', n('local')], ['Payroll deductions', result.deductions],
                    ] as const).map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-2 text-sm"><dt>{label}</dt><dd className="font-semibold tabular-nums">{value === undefined ? 'Not included' : money(value)}</dd></div>)}
                </dl>
            </> : <p className="mt-3">Enter positive gross wages and deductions no greater than gross pay.</p>}
        </div>
    </div>;
}
