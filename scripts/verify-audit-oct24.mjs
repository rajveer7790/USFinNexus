import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const decode=s=>s.replace(/&#x([0-9a-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#(\d+);/g,(_,x)=>String.fromCodePoint(+x)).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replace(/\s+/g,' ').trim();
const plain=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]*>/g,' '));
const xml=fs.readFileSync('out/sitemap.xml','utf8');
const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const failures=[],pages=[];
for(const url of urls){
    const route=new URL(url).pathname;
    const file=route==='/'?'out/index.html':'out'+route+'.html';
    if(!fs.existsSync(file)){failures.push({route,error:'Missing export'});continue;}
    const html=fs.readFileSync(file,'utf8'),withoutScripts=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
    const h1=html.indexOf('<h1'),footer=html.indexOf('<footer');
    if(h1<0||footer<h1)failures.push({route,error:'Footer before H1 or missing H1'});
    const main=withoutScripts.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1]||withoutScripts;
    const visible=plain(main);
    const schemas=[...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
    let faqAnswers=0;
    for(const schema of schemas.filter(s=>s['@type']==='FAQPage'))for(const q of schema.mainEntity||[]){faqAnswers++;if(!visible.includes(decode(q.acceptedAnswer.text)))failures.push({route,error:'FAQ answer absent from visible/server HTML',question:q.name});}
    pages.push({route,h1BeforeFooter:h1>=0&&h1<footer,faqAnswers,benchmark:html.includes('data-benchmark='),words:visible.split(/\s+/).length});
}
assert(pages.find(p=>p.route==='/blog/pay-off-student-loans-vs-invest-decision')?.words>=1800,'Student-loan guide depth');
const home=fs.readFileSync('out/index.html','utf8');
assert(!plain(home).includes('FinancialCalculators'),'Homepage word boundary');
const contact=fs.readFileSync('out/contact.html','utf8');assert(!contact.includes('Suite 100, Financial District'),'Unverified address removed');assert(contact.includes('mailto:contact@usfinnexus.com'));
assert(!fs.readFileSync('out/calculators/credit-card.html','utf8').includes('Loading chart'),'No client-only chart placeholder');
const mod=file=>{const source=fs.readFileSync(file,'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;const module={exports:{}};new Function('exports','module','require',js)(module.exports,module,()=>({}));return module.exports;};
const f=mod('src/lib/formulas.ts'),tax=mod('src/lib/crypto-tax-2026.ts');
assert(Math.abs(f.calcMonthlyPI(300000,6.5,30)-1896.204)<.01);
const crossing=tax.cryptoTax2026('single',50000,66100,1000,0,0,0);assert(Math.abs(crossing.shortTax-180)<.01,'Progressive short-term crossing');
const long=tax.cryptoTax2026('single',49000,65100,0,0,1000,0);assert(Math.abs(long.longTax-82.5)<.01,'LTCG stacking crosses 0% band');
assert(Math.abs(tax.cryptoTax2026('separate',100000,125000,0,0,10000,0).niit-380)<.01,'MFS NIIT threshold');
assert.equal(tax.cryptoTax2026('hoh',0,0,0,0,1000,0).total,0);
const affordability={grossMonthlyIncome:7500,monthlyDebts:500,downPayment:50000,annualInterestRate:6.75,loanTermYears:30,annualPropertyTax:1.2,annualInsurance:1800,monthlyHOA:0,creditScore:'good'};
const a=f.calcAffordability(affordability),b=f.calcAffordability({...affordability,annualInsurance:5000,monthlyHOA:400});assert(b.maxHomePrice<a.maxHomePrice,'Local costs reduce affordability');assert(a.frontEndDTI<=28.00001);
const rv=f.calcRentVsBuy({homePrice:400000,downPayment:80000,mortgageRate:6.75,loanTermYears:30,annualPropertyTax:1.2,annualInsurance:1400,monthlyHOA:0,annualHomeAppreciation:3.5,monthlyRent:2200,annualRentIncrease:3,yearsToStay:15,investmentReturn:7,sellingCostPercent:7});assert(rv.netBuyCost>rv.netRentCost || rv.breakEvenYear!==1,'No inverted year-one break-even');
const g={loanType:'fha',homePrice:350000,downPaymentPercent:10,annualInterestRate:6.25,loanTermYears:15,annualPropertyTax:4200,annualInsurance:1400,vaFirstTimeUse:true,vaDisabilityExempt:false};assert.equal(f.calcGovLoan(g).annualFeePercent,.15);assert.equal(f.calcGovLoan({...g,loanTermYears:30,downPaymentPercent:3.5}).annualFeePercent,.55);
const report={checked:'2026-10-24',pagesChecked:pages.length,faqAnswersChecked:pages.reduce((s,p)=>s+p.faqAnswers,0),benchmarkPages:pages.filter(p=>p.benchmark).length,financialRegressionTests:'passed',failures,pages};
fs.writeFileSync('reports/audit-oct24-verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,pages:undefined},null,2));
assert.equal(failures.length,0,'Document regression failures; inspect report');
