import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import ts from 'typescript';
const native=createRequire(import.meta.url),cache=new Map();
function load(file){file=path.resolve(file);if(cache.has(file))return cache.get(file).exports;const module={exports:{}};cache.set(file,module);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;const require=id=>id.startsWith('@/')?load('src/'+id.slice(2)+'.ts'):native(id);vm.runInThisContext(`(function(require,module,exports){${code}\n})`,{filename:file})(require,module,module.exports);return module.exports;}
const {getRelatedBlogPosts}=load('src/lib/blogs.ts');
const {completeEditorialMetadata}=load('src/lib/editorial-metadata.ts');
const {editorialTopic,TOPIC_CALCULATORS}=load('src/lib/editorial-topics.ts');
for(const slug of ['debt-to-income-ratio-dti-calculator-2026','treasury-bill-ladder','buy-now-pay-later-holiday-budget','pmi-explained-cost-removal-2026','2026-federal-tax-brackets-standard-deduction']){
 const related=getRelatedBlogPosts(slug,3);assert(related.length>0);assert(!related.some(r=>r.slug===slug));if(slug.startsWith('debt-to-income'))assert(related.every(r=>editorialTopic(r.slug)==='affordability'));console.log(slug,'=>',related.map(r=>r.slug));
}
for(const values of Object.values(TOPIC_CALCULATORS))for(const slug of values)assert(fs.existsSync(`src/app/calculators/${slug}/page.tsx`),'Missing calculator '+slug);
const metadata=completeEditorialMetadata({title:'Specific article title',description:'Specific description',alternates:{canonical:'https://usfinnexus.com/blog/test'},openGraph:{type:'article',url:'https://usfinnexus.com/blog/test',images:[{url:'/images/test.webp',width:1200,height:630}]}});
assert.equal(metadata.twitter.title,'Specific article title');assert.equal(metadata.twitter.description,'Specific description');assert.equal(metadata.openGraph.title,'Specific article title');assert.equal(metadata.alternates.canonical,'https://usfinnexus.com/blog/test');
const a=350000*(.075/12)/(1-(1+.075/12)**-360),b=350000*(.065/12)/(1-(1+.065/12)**-360);assert.equal(a.toFixed(2),'2447.25');assert.equal(b.toFixed(2),'2212.24');assert.equal((7000/(a-b)).toFixed(1),'29.8');
console.log('Editorial discovery, metadata and refinance example regression checks passed.');
