import fs from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const exec = promisify(execFile);
const targets = JSON.parse(fs.readFileSync('reports/indexing-review-2026-11-17-targets.json', 'utf8'));
const redirects = new Map(fs.readFileSync('public/_redirects', 'utf8').split('\n').map(l=>l.trim().split(/\s+/)).filter(p=>p[2]==='301').map(p=>[p[0],p[1]]));
const resolve = p => { const seen=new Set();while(redirects.has(p)){if(seen.has(p))throw Error('Redirect cycle');seen.add(p);p=redirects.get(p);}return p; };
const mode=process.argv[2]||'live';
const tag=(s,r)=>s.match(r)?.[1]||'';
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim();
const records=[];
let cursor=0;
async function worker(){while(cursor<targets.length){const path=targets[cursor++],canonical=resolve(path),resource=!/^\/(blog|articles)\//.test(path);let html='',status=0,final='',error='';
 try{if(mode==='built'){const file=`out${canonical}.html`;if(fs.existsSync(file)){html=fs.readFileSync(file,'utf8');status=200;final=canonical;}}else{const {stdout}=await exec('curl',['-sS','-L','--max-time','35','-w','\n%{http_code}\n%{url_effective}','https://usfinnexus.com'+path],{maxBuffer:8e6});const parts=stdout.split('\n');final=parts.pop();status=Number(parts.pop());html=parts.join('\n');}}catch(e){error=e.message;}
 const article=tag(html,/<article\b[^>]*>([\s\S]*?)<\/article>/),main=tag(html,/<main\b[^>]*>([\s\S]*?)<\/main>/),text=clean(article||main);
 records.push({path,kind:resource?'supporting resource':path!==canonical?'canonical alias':'canonical article',preferred:resource?'':canonical,status,final,error,title:tag(html,/<title>(.*?)<\/title>/),description:tag(html,/<meta name="description" content="([^"]*)"/),canonical:tag(html,/<link rel="canonical" href="([^"]*)"/),h1:[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m=>clean(m[1])),words:text?text.split(' ').length:0,robots:tag(html,/<meta name="robots" content="([^"]*)"/),articleLinks:[...new Set([...article.matchAll(/href="(\/(?:blog|articles|calculators)\/[^"#?]+)"/g)].map(m=>m[1]))],sourceLinks:[...new Set([...article.matchAll(/href="(https:\/\/[^"#]+)"/g)].map(m=>m[1]))],schemaTypes:[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>{try{const x=JSON.parse(m[1]);return [x['@type']||'graph'];}catch{return ['INVALID'];}})});
 if(records.length%10===0)console.log(`${mode}: ${records.length}/${targets.length}`);
}}
await Promise.all(Array.from({length:4},worker));records.sort((a,b)=>targets.indexOf(a.path)-targets.indexOf(b.path));
fs.writeFileSync(`reports/indexing-review-2026-11-17-${mode}.json`,JSON.stringify({checked:'2026-11-17',scope:targets.length,googleIndexStatus:'Not independently accessible; user supplied exclusion examples without category heading',records},null,2));
console.log(JSON.stringify({mode,count:records.length,kinds:records.reduce((a,r)=>(a[r.kind]=(a[r.kind]||0)+1,a),{}),failed:records.filter(r=>!r.status||r.status>=400).map(r=>({path:r.path,status:r.status,error:r.error})),canonicalPages:records.filter(r=>r.kind==='canonical article').map(r=>({path:r.path,words:r.words,links:r.articleLinks.length,sources:r.sourceLinks.length,description:r.description.length}))},null,2));
