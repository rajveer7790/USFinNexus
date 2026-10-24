'use client';
type ChartRow={month:number;yearStr?:string;balance:number};
export default function CreditCardChart({chartData}:{chartData:ChartRow[]}) {
if(!chartData.length)return <p>No declining-balance payoff path under these inputs.</p>;
const maxX=Math.max(1,...chartData.map(x=>x.month)),maxY=Math.max(1,...chartData.map(x=>x.balance));
const points=chartData.map(p=>(45+p.month/maxX*510)+','+(220-p.balance/maxY*185)).join(' ');
return <svg viewBox="0 0 600 260" className="h-full w-full" role="img" aria-label="Estimated card balance over the payoff period"><title>Estimated card balance over time</title><desc>Starts at {chartData[0].balance} dollars and ends after {maxX} months. Assumes the fixed payment shown, no new purchases and unchanged APR.</desc><path d="M45 20 V220 H570" fill="none" stroke="#64748b" /><polyline points={points} fill="none" stroke="#b45309" strokeWidth={3} /><text x={45} y={245} fontSize={12}>Month 0</text><text x={490} y={245} fontSize={12}>Month {maxX}</text><text x={45} y={15} fontSize={12}>Balance: {Math.round(maxY)} dollars</text></svg>;
}
