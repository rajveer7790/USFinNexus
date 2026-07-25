import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/app/blog');

async function fixMissingHeaders() {
    console.log('🛠️ Starting Missing Header Repair...');
    
    const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    let fixedCount = 0;

    for (const slug of dirs) {
        const pagePath = path.join(blogDir, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Find if it has the exact broken pattern:
        // mainEntity: [
        //    <div className="flex flex-wrap items-center
        const brokenPatternRegex = /mainEntity:\s*\[\s*<div className="flex flex-wrap items-center/s;
        
        if (brokenPatternRegex.test(content)) {
            // It is broken! Let's extract Title and Description from metadata
            let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            let description = '';
            
            const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
            if (titleMatch && titleMatch[1]) {
                title = titleMatch[1].replace(' | USFinNexus', '');
            }
            
            const descMatch = content.match(/description:\s*['"](.*?)['"]/);
            if (descMatch && descMatch[1]) {
                description = descMatch[1];
            }
            
            const shortTitle = title.split(':')[0].substring(0, 40);

            const replacementJSX = `] }) }} />
        <ArticleSchema
            title="${title.replace(/"/g, '&quot;')}"
            description="${description.replace(/"/g, '&quot;')}"
            url="https://usfinnexus.com/blog/${slug}"
            datePublished="2026-05-26"
            dateModified="2026-05-26"
            authorName="USFinNexus Editorial Team"
            keywords={['Finance', '2026']}
        />
        <div className="max-w-4xl mx-auto px-4 py-7 sm:py-9">
            <Breadcrumbs items={[{ name: 'Blog', item: '/blog' }, { name: '${shortTitle.replace(/'/g, "\\'")}', item: '/blog/${slug}' }]} />
            <article className="prose prose-slate max-w-none">

            <header className="mb-10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#2563eb' }}>
                    Finance Guide
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                    ${title}
                </h1>
                <div className="flex flex-wrap items-center`;

            content = content.replace(/mainEntity:\s*\[\s*<div className="flex flex-wrap items-center/s, replacementJSX);
            
            fs.writeFileSync(pagePath, content, 'utf8');
            fixedCount++;
            console.log(`✅ Repaired missing header in: ${slug}`);
        }
    }

    console.log(`\n🎉 Header Repair Complete! Successfully fixed ${fixedCount} files.`);
}

fixMissingHeaders();
