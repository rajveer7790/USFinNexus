"""Read a GSC XLSX export and audit its URLs plus the current sitemap. Stdlib only."""
import argparse
import concurrent.futures
import hashlib
import json
from pathlib import Path
import re
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
import zipfile
import subprocess
import tempfile
from html.parser import HTMLParser

class Document(HTMLParser):
    def __init__(self):
        super().__init__(); self.h1=[]; self.in_h1=False; self.title=''; self.in_title=False
        self.canonical=''; self.meta={}; self.images=[]; self.links=[]; self.article_words=[]
        self.in_article=False; self.main_words=[]; self.in_main=False; self.skip=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='h1': self.h1.append(''); self.in_h1=True
        if tag=='title': self.in_title=True
        if tag=='article': self.in_article=True
        if tag=='main': self.in_main=True
        if tag in ('script','style'): self.skip+=1
        if tag=='link' and a.get('rel')=='canonical': self.canonical=a.get('href','')
        if tag=='meta': self.meta[a.get('name') or a.get('property')]=a.get('content','')
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='img' and a.get('src'): self.images.append({'src':a['src'],'alt':a.get('alt','')})
    def handle_endtag(self, tag):
        if tag=='h1': self.in_h1=False
        if tag=='title': self.in_title=False
        if tag=='article': self.in_article=False
        if tag=='main': self.in_main=False
        if tag in ('script','style'): self.skip=max(0,self.skip-1)
    def handle_data(self,d):
        if self.skip:return
        if self.in_h1:self.h1[-1]+=d
        if self.in_title:self.title+=d
        if self.in_article:self.article_words.extend(d.split())
        if self.in_main:self.main_words.extend(d.split())

class Redirects(urllib.request.HTTPRedirectHandler):
    def __init__(self):self.chain=[]
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        self.chain.append({'from':req.full_url,'status':code,'to':newurl})
        return super().redirect_request(req,fp,code,msg,headers,newurl)

def fetch(url):
    with tempfile.TemporaryDirectory(prefix='usfinnexus-audit-') as tmp:
        body=Path(tmp)/'body'; head=Path(tmp)/'headers'
        r=subprocess.run(['curl','--max-time','25','-sS','-L','-D',str(head),'-o',str(body),'-w','%{http_code}\n%{url_effective}',url],capture_output=True,text=True)
        if r.returncode:return {'url':url,'error':r.stderr.strip(),'redirects':[]}
        status,final=r.stdout.split('\n',1); data=body.read_bytes(); blocks=re.split(r'\r?\n\r?\n',head.read_text())
        headers={};chain=[];current=url
        for block in blocks:
            if not block.startswith('HTTP/'):continue
            headers={k.lower():v.strip() for k,v in re.findall(r'^([^:\n]+):\s*(.*)$',block,re.M)}
            if 'location' in headers:
                dest=urllib.parse.urljoin(current,headers['location']);chain.append({'from':current,'to':dest});current=dest
    result={'url':url,'status':int(status),'final':final,'redirects':chain,'content_type':headers.get('content-type',''),'x_robots':headers.get('x-robots-tag',''),'bytes':len(data)}
    if 'text/html' in result['content_type']:
        d=Document();d.feed(data.decode('utf-8',errors='replace'))
        result.update({'h1':d.h1,'title':d.title,'canonical':d.canonical,'robots':d.meta.get('robots',''),'description':d.meta.get('description',''),'og_image':d.meta.get('og:image',''),'article_words':len(d.article_words),'main_words':len(d.main_words),'images':d.images,'links':d.links})
    return result

def export_urls(workbook):
    n={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    with zipfile.ZipFile(workbook) as z:
        strings=[''.join(e.itertext()) for e in ET.fromstring(z.read('xl/sharedStrings.xml'))]
        out=[]
        for row in ET.fromstring(z.read('xl/worksheets/sheet2.xml')).findall('.//m:row',n):
            vals=[]
            for c in row:
                v=c.find('m:v',n);v=v.text if v is not None else ''.join(c.itertext())
                if c.get('t')=='s':v=strings[int(v)]
                vals.append(v)
            if vals and vals[0].startswith('https://'):out.append({'url':vals[0],'last_crawled_excel':vals[1]})
        return out

def main():
    p=argparse.ArgumentParser();p.add_argument('workbook');p.add_argument('--output',required=True);args=p.parse_args()
    exported=export_urls(args.workbook)
    sitemap=subprocess.check_output(['curl','--max-time','25','-sS','https://usfinnexus.com/sitemap.xml'],text=True)
    sitemap_urls=re.findall(r'<loc>(.*?)</loc>',sitemap)
    urls=sorted(set([x['url'] for x in exported]+sitemap_urls+['https://usfinnexus.com/robots.txt','https://www.usfinnexus.com/']))
    pages=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for result in pool.map(fetch,urls):
            pages.append(result)
            if len(pages)%25==0:print(f'Pages checked: {len(pages)}/{len(urls)}',flush=True)
    images=sorted(set(urllib.parse.urljoin(p.get('final',p['url']),i['src']) for p in pages for i in p.get('images',[])))
    resources=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        for result in pool.map(fetch,images):
            resources.append({k:v for k,v in result.items() if k not in ('links','images')})
    report={'checked':'2026-10-17','gsc_issue':'Crawled - currently not indexed','exported':exported,'sitemap_urls':sitemap_urls,'pages':pages,'images':resources}
    Path(args.output).write_text(json.dumps(report,indent=2))
    print(json.dumps({'export_rows':len(exported),'urls_checked':len(pages),'images_checked':len(resources),'failed_images':[r for r in resources if r.get('status')!=200 or not r.get('content_type','').startswith('image/')],'non_200_pages':[{'url':r['url'],'status':r.get('status'),'error':r.get('error')} for r in pages if r.get('status')!=200]},indent=2))

if __name__=='__main__':main()
