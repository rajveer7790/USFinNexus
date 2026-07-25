const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

if (!fs.existsSync(blogDir)) {
    console.error('Could not find blog directory at:', blogDir);
    process.exit(1);
}

const entries = fs.readdirSync(blogDir, { withFileTypes: true });
const results = [];

for (const entry of entries) {
    if (entry.isDirectory()) {
        const pagePath = path.join(blogDir, entry.name, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            const content = fs.readFileSync(pagePath, 'utf8');
            
            // Very basic strip of tags and imports to approximate human-readable word count
            let textOnly = content
                .replace(/import.*?['"];?/g, '')       // Remove imports
                .replace(/<[^>]*>?/gm, ' ')           // Remove JSX/HTML tags
                .replace(/className=(['"]).*?\1/g, '') // Remove classNames
                .replace(/style=\{\{.*?\}\}/g, '')     // Remove inline styles
                .replace(/[^\w\s-]/g, ' ');           // Remove punctuation except hyphens
                
            const words = textOnly.split(/\s+/).filter(word => word.length > 2); // filter tiny fragments
            
            results.push({
                slug: entry.name,
                wordCount: words.length
            });
        }
    }
}

// Sort by word count, ascending
results.sort((a, b) => a.wordCount - b.wordCount);

const under1000 = results.filter(r => r.wordCount < 1000);

console.log('--- USFinNexus Blog Content Audit ---');
console.log(`Total blogs analyzed: ${results.length}`);
console.log(`Blogs under 1,000 words: ${under1000.length}\n`);

if (under1000.length > 0) {
    console.log('--- Blogs Requiring Expansion ---');
    under1000.forEach((r, idx) => {
        console.log(`${idx + 1}. ${r.slug} (${r.wordCount} words)`);
    });
} else {
    console.log('Great news! All blogs are over 1,000 words.');
}
