import fs from 'node:fs';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile),base=process.env.AUDIT_BASE||'https://usfinnexus.com';
const get=async route=>{const {stdout}=await exec('curl',['-sS','-L','--max-time','45','-w','\n__AUDIT_STATUS__%{http_code}',base+route],{maxBuffer:16000000});const i=stdout.lastIndexOf('\n__AUDIT_STATUS__');return {body:stdout.slice(0,i),status:Number(stdout.slice(i+17))};};
const decode=s=>s.replace(/&#x([0-9a-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#(\d+);/g,(_,x)=>String.fromCodePoint(+x)).replaceAll('&amp;','&').replaceAll('&quot;','"').replace(/\s+/g,' ').trim();
const plain=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]*>/g,' '));
const concurrency=Math.max(1,Math.min(12,Number(process.env.AUDIT_CONCURRENCY)||6));
const map=async(items,fn)=>{
 let next=0,done=0;const result=[];
 await Promise.all(Array.from({length:concurrency},async()=>{
  while(next<items.length){
   const i=next++;
   try{result[i]=await fn(items[i]);}catch(e){result[i]={route:items[i],error:e.message};}
   if(++done%50===0)console.log('Checked '+done+'/'+items.length);
  }
 }));return result;
};
const sitemap=await get('/sitemap.xml');
if(sitemap.status!==200)throw Error('Production sitemap HTTP '+sitemap.status);
const routes=[...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const images=new Set();
const pages=await map(routes,async route=>{const {body,status}=await get(route);const errors=[];if(status!==200)errors.push('HTTP '+status);
 const h1=[...body.matchAll(/<h1\b[^>]*>/g)];if(h1.length!==1)errors.push('H1 count '+h1.length);
 if(body.indexOf('<footer')<body.indexOf('<h1'))errors.push('Footer precedes H1');
 const canonical=body.match(/<link rel="canonical" href="([^"]+)"/);if(!canonical||new URL(canonical[1]).href!==new URL(base+route).href)errors.push('Canonical '+canonical?.[1]);
 if(/<meta name="robots" content="[^"]*noindex/i.test(body))errors.push('Unexpected noindex');
 const visible=plain(body);
 for(const m of body.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){try{const s=JSON.parse(m[1]);if(s['@type']==='FAQPage')for(const q of s.mainEntity||[])if(!visible.includes(decode(q.acceptedAnswer.text)))errors.push('FAQ parity: '+q.name);}catch{errors.push('Invalid JSON-LD');}}
 for(const m of body.matchAll(/<img\b[^>]*src="([^"]+)"/g))if(m[1].startsWith('/'))images.add(m[1]);
 return {route,status,h1:decode(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]*>/g,' ')||''),errors};});
const imageResults=await map([...images],async route=>{const {stdout}=await exec('curl',['-sS','-o','/dev/null','--max-time','30','-w','%{http_code} %{content_type}',base+route]);const [status,contentType]=stdout.trim().split(' ');return {route,status:Number(status),contentType};});
const discovery=await map(['/robots.txt','/sitemap-index.xml','/sitemap-blog.xml','/sitemap-calculators.xml','/sitemap-pages.xml','/llms.txt','/llms-full.txt','/refinance-calculator','/pmi-removal','/calculators/points'],async route=>{const r=await get(route);return {route,status:r.status};});
const report={checkedAt:new Date().toISOString(),base,pagesChecked:pages.length,imagesChecked:imageResults.length,failures:pages.filter(p=>p.error||p.errors?.length),imageFailures:imageResults.filter(p=>p.error||p.status!==200||!p.contentType?.startsWith('image/')),discoveryFailures:discovery.filter(p=>p.error||p.status!==200),discovery,imageResults,pages};
fs.writeFileSync('reports/audit-oct24-production.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,pages:undefined,discovery:undefined,imageResults:undefined},null,2));
if(report.failures.length||report.imageFailures.length||report.discoveryFailures.length)process.exitCode=1;
