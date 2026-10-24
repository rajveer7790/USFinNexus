import { calcMonthlyPI } from '@/lib/formulas';
import { cryptoTax2026, ordinaryTax2026 } from '@/lib/crypto-tax-2026';

const dollars=(n:number)=>n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
/** Server-rendered examples: explicit assumptions, not current offers or approvals. */
export default function CalculatorBenchmarks({slug}:{slug:string}) {
    let caption='', heads:string[]=[], rows:(string|number)[][]=[];
    const terms=[10,15,20,25,30];
    if (/^(mortgage|amortization|extra-payment|biweekly-mortgage|mortgage-payoff|arm|interest-only|comparison|california|texas|florida|arizona|colorado|georgia|illinois|massachusetts|new-jersey|new-york|north-carolina|ohio|pennsylvania|virginia|washington)$/.test(slug)) {
        caption='Fixed-rate benchmark: $300,000 balance at 6.5%; no escrow, insurance or extra principal. ARM and interest-only loans have different reset risks.';
        heads=['Term','Monthly P&I','Scheduled interest']; rows=terms.map(y=>{const m=calcMonthlyPI(300000,6.5,y);return [y+' years',dollars(m),dollars(m*y*12-300000)];});
    } else if(slug==='auto-loan'||slug==='personal-loan'||slug==='student-loan') {
        const p=slug==='auto-loan'?35000:slug==='student-loan'?30000:15000;
        const rate=slug==='personal-loan'?10:6.5;
        caption=dollars(p)+' fixed-rate installment loan at '+rate+'%. Fees, taxes and federal income-driven repayment excluded.';
        heads=['Months','Monthly payment','Total interest'];rows=[24,36,48,60,84].map(n=>{const m=calcMonthlyPI(p,rate,n/12);return [n,dollars(m),dollars(m*n-p)];});
    } else if(slug==='credit-card') {
        caption='Fixed monthly payments on $5,000 at 24% APR, no new charges or fees; monthly accrual approximation. Declining minimum payments are not modeled.';
        heads=['Fixed payment','Months to payoff','Interest']; rows=[125,150,200,250,300].map(m=>{let b=5000,n=0,i=0;while(b>0&&n<1200){const interest=b*.02;i+=interest;b-=Math.min(m,b+interest)-interest;n++;}return [dollars(m),n,dollars(i)];});
    } else if(slug==='dti') {
        caption='Illustrative $2,000 monthly housing cost plus $500 other monthly debt. Gross income before taxes; not approval thresholds.';
        heads=['Annual income','Housing DTI','Total DTI'];rows=[60000,75000,100000,120000,150000].map(y=>[dollars(y),(2000/(y/12)*100).toFixed(1)+'%',(2500/(y/12)*100).toFixed(1)+'%']);
    } else if(slug==='affordability'||slug.includes('salary')) {
        caption='28% housing-budget scenario, 20% down, 30 years, 1.2% property tax, $1,800 annual insurance; no HOA or PMI. Not a lender qualification.';
        heads=['Annual salary','Price at 6.5%','Price at 7%'];rows=[50000,75000,100000,150000,250000].map(y=>[dollars(y),...[6.5,7].map(r=>dollars(Math.max(0,(y/12*.28-150)/(.8*calcMonthlyPI(1,r,30)+.012/12))))]);
    } else if(slug==='down-payment') {
        caption='$400,000 purchase; $5,000 saved and $1,000 monthly contributions. 0% APY example excludes closing costs and reserves.';
        heads=['Down payment','Savings target','Additional months'];rows=[3,3.5,5,10,20].map(p=>[p+'%',dollars(400000*p/100),Math.ceil(Math.max(0,400000*p/100-5000)/1000)]);
    } else if(slug==='heloc') {
        caption='$75,000 drawn balance; interest-only draw versus 20-year amortizing repayment at the same illustrative rate. Index changes and fees excluded.';
        heads=['Rate','Interest-only monthly','20-year P&I'];rows=[7,8,9,10,11].map(r=>[r+'%',dollars(75000*r/1200),dollars(calcMonthlyPI(75000,r,20))]);
    } else if(slug==='refinance'||slug==='points-buydown') {
        caption='Simple cost-recovery examples only. Term changes, remaining balances, tax, opportunity cost and sale timing can reverse the result.';
        heads=['Upfront cost','Monthly saving','Simple break-even'];rows=[2000,3000,4000,5000,6000].map(c=>[dollars(c),dollars(200),Math.ceil(c/200)+' months']);
    } else if(slug==='fha') {
        caption='HUD standard forward-loan annual MIP schedule. Upfront premium generally 1.75%; special refinance and tribal-land exceptions excluded. Base-loan tier is not a county loan limit.';
        heads=['Term / base amount','Original LTV','Annual MIP / duration']; rows=[['Over 15 years, up to $726,200','90% or less','0.50% / 11 years'],['Over 15 years, up to $726,200','Over 90% to 95%','0.50% / term'],['Over 15 years, up to $726,200','Over 95%','0.55% / term'],['Over 15 years, over $726,200','95% or less','0.70% / 11 years if LTV <=90%, otherwise term'],['Over 15 years, over $726,200','Over 95%','0.75% / term'],['15 years or less, up to $726,200','90% or less','0.15% / 11 years'],['15 years or less, up to $726,200','Over 90%','0.40% / term'],['15 years or less, over $726,200','78% or less','0.15% / 11 years'],['15 years or less, over $726,200','Over 78% to 90%','0.40% / 11 years'],['15 years or less, over $726,200','Over 90%','0.65% / term']];
    } else if(slug==='va'||slug==='fha-va-usda') {
        caption='VA purchase funding-fee schedule for non-exempt borrowers; financed fee increases principal. Eligibility is separate from cost. Verify the VA source.';
        heads=['Use / down payment','Funding fee','Fee on $300,000 base loan'];rows=[['First use, under 5%','2.15%',dollars(6450)],['Subsequent use, under 5%','3.30%',dollars(9900)],['Either use, 5% to under 10%','1.50%',dollars(4500)],['Either use, 10% or more','1.25%',dollars(3750)],['Eligible fee exemption','0%',dollars(0)]];
    } else if(slug==='investment'||slug==='retirement'||slug==='fire-planner'||slug==='drip'||slug==='trump-account') {
        caption='$10,000 initial balance and $500 end-of-month deposits for 20 years. Illustrative nominal annual returns compounded monthly; tax, fees and inflation excluded. Returns are not guaranteed.';
        heads=['Assumed return','Contributions','Projected balance']; rows=[0,3,5,7,9].map(r=>{let b=10000;for(let i=0;i<240;i++)b=b*(1+r/1200)+500;return [r+'%',dollars(130000),dollars(b)];});
    } else if(slug==='budget') {
        caption='50/30/20 planning allocation of after-tax income. Adapt to essential costs; not a mandatory rule.';
        heads=['Take-home monthly','Needs 50%','Wants 30%','Savings/debt 20%'];rows=[3000,4000,5000,6000,8000].map(n=>[dollars(n),dollars(n*.5),dollars(n*.3),dollars(n*.2)]);
    } else if(slug==='options-profit') {
        caption='Long call at expiration: $155 strike, $3.50 premium, one standard 100-share contract. Commissions, time value and early exercise excluded.';
        heads=['Underlying price','Intrinsic value','Net payoff'];rows=[140,150,155,158.5,165,180].map(p=>[dollars(p),dollars(Math.max(0,p-155)*100),dollars(Math.max(0,p-155)*100-350)]);
    } else if(slug==='escrow-shortage') {
        caption='Illustrative shortage spread over 12 months, plus a separate $100 ongoing monthly tax/insurance increase. Actual servicer analyses and rules control.';
        heads=['Shortage','Monthly shortage repayment','Combined increase'];rows=[600,1200,1800,2400,3600].map(s=>[dollars(s),dollars(s/12),dollars(s/12+100)]);
    } else if(slug==='temporary-buydown') {
        caption='2-1 temporary buydown example: $300,000, 30 years, 7% note rate. Subsidy supports payments; qualification and contract obligations use program rules.';
        heads=['Period','Payment-support rate','Monthly P&I'];rows=[['Year 1','5%',dollars(calcMonthlyPI(300000,5,30))],['Year 2','6%',dollars(calcMonthlyPI(300000,6,30))],['Year 3','7%',dollars(calcMonthlyPI(300000,7,30))],['Year 4','7%',dollars(calcMonthlyPI(300000,7,30))],['Year 5 onward','7%',dollars(calcMonthlyPI(300000,7,30))]];
    } else if(slug==='pmi-removal'||slug==='pmi') {
        caption='Balance/value arithmetic for a $400,000 original value. This table does not establish PMI cancellation eligibility, seasoning or appraisal requirements.';
        heads=['Loan balance','Original-value LTV','What to verify']; rows=[340000,320000,312000,300000,280000].map(b=>[dollars(b),(b/400000*100).toFixed(0)+'%','Payment history, loan type and servicer requirements']);
    }
    if(slug==='rental-property') {
        caption='$300,000 property, 25% down, 6.5%, 30 years, $6,000 closing and $10,000 repairs. 5% vacancy, 18% management/maintenance/replacement reserves on collected rent, $400 monthly tax/insurance. Conservative reserve-inclusive NOI.';
        heads=['Monthly rent','Monthly cash flow','Cash-on-cash'];rows=[2000,2300,2600,2900,3200].map(r=>{const cf=r*.95*.82-400-calcMonthlyPI(225000,6.5,30);return [dollars(r),dollars(cf),(cf*12/91000*100).toFixed(2)+'%'];});
    } else if(slug==='crypto-tax') {
        caption='2026 single filer with $50,000 other taxable ordinary income and $66,100 MAGI before gains; entirely long-term gains, no losses or other investment income. Federal estimate only.';
        heads=['Long-term gain','Federal gain tax + NIIT','Effective tax on gain'];rows=[1000,10000,50000,150000,600000].map(g=>{const x=cryptoTax2026('single',50000,66100,0,0,g,0);return [dollars(g),dollars(x.total),x.effective.toFixed(2)+'%'];});
    } else if(slug==='income-tax') {
        caption='2026 single filer using the $16,100 standard deduction; federal ordinary income tax only. No credits, payroll tax, state tax or other deductions.';
        heads=['Gross income','Taxable income','Federal ordinary tax'];rows=[40000,60000,80000,100000,150000].map(g=>[dollars(g),dollars(g-16100),dollars(ordinaryTax2026(g-16100,'single'))]);
    } else if(slug==='closing-costs') {
        caption='Prepaid-interest example: $300,000 at 6.5%, actual/365 daily accrual assumption. Actual lender convention and funded dates control; these are not total closing costs.';
        heads=['Prepaid days','Daily interest','Prepaid interest'];rows=[5,10,15,20,25,30].map(d=>[d,dollars(300000*.065/365),dollars(300000*.065/365*d)]);
    } else if(slug==='debt-payoff') {
        caption='Debt-priority illustration. Extra principal is directed after contractual minimums. Avalanche prioritizes rate; snowball prioritizes balance. The result depends on all debt payments, fees and future charges.';
        heads=['Example debt','Balance','APR'];rows=[['Small student loan',dollars(2500),'5%'],['Auto loan',dollars(12000),'6.5%'],['Credit card',dollars(8000),'24.99%'],['Snowball first target','Small student loan','Lowest balance'],['Avalanche first target','Credit card','Highest APR']];
    }
    if(!rows.length)return null;
    return <section className="mx-auto max-w-5xl my-10 px-4" data-benchmark={slug}><h2 className="text-2xl font-bold mb-3">Illustrative comparison scenarios</h2><div className="overflow-x-auto"><table className="w-full text-sm text-left"><caption className="text-left text-slate-600 pb-3">{caption}</caption><thead><tr>{heads.map(h=><th scope="col" key={h} className="border p-3">{h}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i}>{row.map((v,j)=>j===0?<th scope="row" key={j} className="border p-3 font-medium">{v}</th>:<td key={j} className="border p-3">{v}</td>)}</tr>)}</tbody></table></div><p className="text-xs text-slate-600 mt-3">Educational scenarios, not quotes, approvals, investment forecasts or tax advice. See <a href="/methodology" className="underline">methodology</a> and <a href="/disclaimer" className="underline">limitations</a>.</p>{/fha|^va$/.test(slug)&&<p className="text-sm mt-2"><a href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/" className="underline">Official VA funding-fee schedule</a> · <a href="https://www.hud.gov/sites/dfiles/OCHCO/documents/2023-05hsgml.pdf" className="underline">HUD MIP schedule</a></p>}</section>;
}
