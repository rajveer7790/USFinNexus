"""Create a per-export-URL review and link inventory from audited live data and built HTML."""
import argparse
import csv
import json
import re
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import urlsplit
import importlib.util

spec = importlib.util.spec_from_file_location('audit_gsc', Path(__file__).with_name('audit-gsc.py'))
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('baseline')
    args = parser.parse_args()
    baseline = json.loads(Path(args.baseline).read_text())
    redirects = {}
    for line in Path('public/_redirects').read_text().splitlines():
        parts = line.split()
        if len(parts) == 3 and parts[2] == '301' and parts[0].startswith('/') and parts[1].startswith('/'):
            redirects[parts[0]] = parts[1]
    def canonical(path):
        seen = set()
        while path in redirects:
            if path in seen: raise ValueError('Redirect loop: ' + path)
            seen.add(path); path = redirects[path]
        return path
    docs = {}
    for file in Path('out').rglob('*.html'):
        route = '/' + str(file.relative_to('out')).removesuffix('.html').removesuffix('/index')
        if route == '/index': route = '/'
        if canonical(route) != route: continue
        doc = audit.Document(); doc.feed(file.read_text())
        docs[route] = doc
    before = {p['url']: p for p in baseline['pages']}
    reviewed = {'roth-ira-vs-401k-comparison-2026', 'personal-loan-vs-credit-card-comparison',
                'mega-backdoor-roth-ira-guide-2026', 'social-security-cola-2027',
                'inflation-reduction-act-home-upgrades-2026', 'estimated-tax-payment-january-15-2027',
                'new-york-llc-transparency-act-2026-foreign-owners',
                'fincen-real-estate-reporting-rule-what-llc-buyers-must-do',
                'california-new-york-texas-state-boi-rules-2026'}
    rows = []
    for exported in baseline['exported']:
        url = exported['url']; path = urlsplit(url).path; target = canonical(path)
        b = before.get(url, {}); doc = docs.get(target)
        asset = path.startswith('/_next/') or path == '/manifest.json'
        incoming = sorted(s for s, d in docs.items() if s != target and target in {urlsplit(h).path for h in d.links})
        disposition = 'Resource: no web-page indexing action' if asset else ('Redirect to canonical; do not promote alias' if target != path else 'Canonical content page')
        editorial = 'Substantive content correction/restoration completed' if target.split('/')[-1] in reviewed else 'Technical and discovery review completed; full claim-by-claim editorial review not completed'
        if asset: editorial = 'Fonts/manifest serve the application; not article targets'
        rows.append({'exported_url': url, 'last_crawled': str((datetime(1899,12,30) + timedelta(days=float(exported['last_crawled_excel']))).date()),
                     'baseline_http': b.get('status', b.get('error','')), 'disposition': disposition,
                     'preferred_url': '' if asset else 'https://usfinnexus.com'+target,
                     'built_h1_count': len(doc.h1) if doc else '', 'built_h1': ' | '.join(doc.h1) if doc else '',
                     'built_robots': doc.meta.get('robots','') if doc else '',
                     'article_words': len(doc.article_words) if doc else '',
                     'incoming_source_pages': len(incoming) if doc else '',
                     'example_source_urls': ' | '.join('https://usfinnexus.com'+s for s in incoming[:5]),
                     'source_google_index_status': 'Not supplied; not asserted', 'editorial_status': editorial})
    target = Path('reports/indexing-2026-10-17-urls.csv')
    with target.open('w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
    images = [{k:v for k,v in x.items() if k in ('url','status','content_type','bytes','error')} for x in baseline['images']]
    Path('reports/indexing-2026-10-17-images.json').write_text(json.dumps(images, indent=2)+'\n')
    print(json.dumps({'rows': len(rows), 'resources': sum('Resource:' in r['disposition'] for r in rows),
                      'redirected': sum('Redirect to' in r['disposition'] for r in rows),
                      'canonical': sum(r['disposition']=='Canonical content page' for r in rows)}))

if __name__ == '__main__': main()
