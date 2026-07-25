import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/app/blog');

async function fixBug() {
    console.log('🛠️ Starting JSX Syntax Fix...');
    
    const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    let fixedCount = 0;

    for (const slug of dirs) {
        const pagePath = path.join(blogDir, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        let content = fs.readFileSync(pagePath, 'utf8');
        
        let originalContent = content;
        
        // Fix the regex replacement bugs
        content = content.replace(/<AuthorBio,000/g, '$1,000');
        content = content.replace(/<RelatedCalculators,000/g, '$1,000');
        content = content.replace(/<RelatedArticles,000/g, '$1,000');

        if (content !== originalContent) {
            fs.writeFileSync(pagePath, content, 'utf8');
            fixedCount++;
            console.log(`✅ Fixed syntax error in: ${slug}`);
        }
    }

    console.log(`\n🎉 Bug Fix Complete! Successfully repaired JSX in ${fixedCount} files.`);
}

fixBug();
