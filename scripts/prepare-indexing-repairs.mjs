/** Emit a reviewable patch; this script does not overwrite page sources. */
import fs from 'node:fs';
import ts from 'typescript';
const targets=JSON.parse(fs.readFileSync('reports/indexing-review-2026-11-17-targets.json','utf8'));
const redirects=new Map(fs.readFileSync('public/_redirects','utf8').split('\n').map(l=>l.trim().split(/\s+/)).filter(p=>p[2]==='301').map(p=>[p[0],p[1]]));
const resolve=p=>{while(redirects.has(p))p=redirects.get(p);return p;};
const pages=new Set(targets.filter(p=>/^\/(blog|articles)\//.test(p)).map(resolve));
for(const section of ['blog','articles'])for(const e of fs.readdirSync(`src/app/${section}`,{withFileTypes:true})){
 const p=`/${section}/${e.name}`,f=`src/app${p}/page.tsx`;if(!e.isDirectory()||!fs.existsSync(f)||resolve(p)!==p)continue;
 if(/(?:datePublished|published)=["']2026-11-/.test(fs.readFileSync(f,'utf8')))pages.add(p);
}
let patch='*** Begin Patch\n';
for(const route of pages){
 const file=`src/app${route}/page.tsx`;if(!fs.existsSync(file))continue;
 const original=fs.readFileSync(file,'utf8');let s=original;
 if(!s.includes('completeEditorialMetadata(')){
  const ast=ts.createSourceFile(file,s,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);let init;
  const visit=n=>{if(ts.isVariableDeclaration(n)&&n.name.getText(ast)==='metadata')init=n.initializer;ts.forEachChild(n,visit);};visit(ast);
  if(init&&ts.isObjectLiteralExpression(init)){s=s.slice(0,init.getStart(ast))+'completeEditorialMetadata('+s.slice(init.getStart(ast),init.end)+')'+s.slice(init.end);s="import { completeEditorialMetadata } from '@/lib/editorial-metadata';\n"+s;}
 }
 if(!s.includes('<ReviewedGuide')&&!s.includes('<ContextualInternalLinks')&&s.includes('</article>')){
  s=s.replace(/^[ \t]*<Related(?:Articles|Calculators)\b[^>]*\/>\s*$/gm,'');
  if(!s.includes("import ContextualInternalLinks"))s="import ContextualInternalLinks from '@/components/ContextualInternalLinks';\n"+s;
  const end=s.lastIndexOf('</article>');s=s.slice(0,end)+`<ContextualInternalLinks currentSlug="${route.split('/').pop()}" />\n            `+s.slice(end);
 }
 if(s===original)continue;
 // Emit minimal hunks with surrounding context, not hundreds of unchanged article lines.
 const a=original.trimEnd().split('\n'),b=s.trimEnd().split('\n');
 const dp=Array.from({length:a.length+1},()=>new Uint32Array(b.length+1));
 for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)dp[i][j]=a[i]===b[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
 const ops=[];let i=0,j=0;
 while(i<a.length||j<b.length){if(i<a.length&&j<b.length&&a[i]===b[j]){ops.push(' '+a[i]);i++;j++;}else if(j<b.length&&(i===a.length||dp[i][j+1]>=dp[i+1][j]))ops.push('+'+b[j++]);else ops.push('-'+a[i++]);}
 const ranges=[];for(let k=0;k<ops.length;k++)if(ops[k][0]!==' '){const lo=Math.max(0,k-3),hi=Math.min(ops.length,k+4);if(ranges.length&&lo<=ranges.at(-1)[1])ranges.at(-1)[1]=hi;else ranges.push([lo,hi]);}
 patch+=`*** Update File: ${file}\n`+ranges.map(([lo,hi])=>'@@\n'+ops.slice(lo,hi).join('\n')+'\n').join('');
}
process.stdout.write(patch+'*** End Patch');
