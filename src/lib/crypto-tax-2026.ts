export type CryptoStatus = 'single' | 'married' | 'separate' | 'hoh';
const rates = [.10, .12, .22, .24, .32, .35, .37];
const limits: Record<CryptoStatus, number[]> = {
    single: [12400,50400,105700,201775,256225,640600,Infinity],
    married: [24800,100800,211400,403550,512450,768700,Infinity],
    separate: [12400,50400,105700,201775,256225,384350,Infinity],
    hoh: [17700,67450,105700,201750,256200,640600,Infinity],
};
const capital: Record<CryptoStatus, [number,number]> = {
    single: [49450,545500], married: [98900,613700],
    separate: [49450,306850], hoh: [66200,579600],
};
export function ordinaryTax2026(income: number, status: CryptoStatus): number {
    let tax=0, lower=0;
    limits[status].forEach((upper,i) => { tax += Math.max(0, Math.min(income,upper)-lower)*rates[i]; lower=upper; });
    return tax;
}
/** Income input is taxable ordinary income; MAGI is separate for NIIT. Excludes other investments/carryovers. */
export function cryptoTax2026(status: CryptoStatus, ordinary: number, magiBefore: number, stGains: number, stLosses: number, ltGains: number, ltLosses: number) {
    let st=stGains-stLosses, lt=ltGains-ltLosses;
    if(st<0 && lt>0){const offset=Math.min(-st,lt);st+=offset;lt-=offset;}
    if(lt<0 && st>0){const offset=Math.min(-lt,st);lt+=offset;st-=offset;}
    const taxableST=Math.max(0,st), taxableLT=Math.max(0,lt), base=Math.max(0,ordinary);
    const shortTax=ordinaryTax2026(base+taxableST,status)-ordinaryTax2026(base,status);
    const [zero,fifteen]=capital[status];
    const zeroPart=Math.min(taxableLT,Math.max(0,zero-base-taxableST));
    const fifteenPart=Math.min(taxableLT-zeroPart,Math.max(0,fifteen-Math.max(zero,base+taxableST)));
    const longTax=fifteenPart*.15+(taxableLT-zeroPart-fifteenPart)*.20;
    const gain=taxableST+taxableLT;
    const threshold=status==='married'?250000:status==='separate'?125000:200000;
    const niit=Math.min(gain,Math.max(0,magiBefore+gain-threshold))*.038;
    const total=shortTax+longTax+niit;
    return { st,lt,shortTax,longTax,niit,total,effective:gain>0?total/gain*100:0 };
}
