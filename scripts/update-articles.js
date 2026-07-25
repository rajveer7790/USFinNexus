const fs = require('fs');
const path = require('path');
const blogDir = 'src/app/blog';
const dirs = fs.readdirSync(blogDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(d => d.name);
let articles = [];

for (const dir of dirs) {
    const pagePath = path.join(blogDir, dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Extract metadata
    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
    const imgMatch = content.match(/url:\s*['"]([^'"]+)['"]/); // looking for openGraph image URL
    const dateMatch = content.match(/datePublished=["']([^"']+)["']/);
    const readTimeMatch = content.match(/>(\d+)\s*min\s*read</);
    const categoryMatch = content.match(/<span[^>]*bg-[a-z]+-100[^>]*>\s*([^<]+)\s*<\/span>/) || content.match(/<span[^>]*uppercase[^>]*>\s*([^<]+)\s*<\/span>/);

    const title = titleMatch ? titleMatch[1] : dir.replace(/-/g, ' ');
    const excerpt = descMatch ? descMatch[1] : '';
    // handle full URLs in image
    let image = imgMatch ? imgMatch[1] : '/images/default.png';
    if(image.startsWith('https://usfinnexus.com')) {
        image = image.replace('https://usfinnexus.com', '');
    }
    const date = dateMatch ? dateMatch[1] : '2026-01-01';
    const readTime = readTimeMatch ? readTimeMatch[1] + ' min' : '5 min';
    let category = categoryMatch ? categoryMatch[1].trim() : 'Finance';
    if(category === 'By {USFinNexusEditorialTeam.name}' || category.length > 20) category = 'Finance';

    articles.push({
        slug: dir,
        title,
        category,
        readTime,
        excerpt,
        image,
        date
    });
}

const libPath = 'src/lib/articles.ts';
let currentLibContent = fs.readFileSync(libPath, 'utf8');
const newArticlesCode = JSON.stringify(articles, null, 4).replace(/"([^"]+)":/g, '$1:');

// Replace ALL_ARTICLES array content
const regex = /export const ALL_ARTICLES:\s*ArticleEntry\[\]\s*=\s*\[[\s\S]*?\];/;
const replacement = 'export const ALL_ARTICLES: ArticleEntry[] = ' + newArticlesCode + ';';

currentLibContent = currentLibContent.replace(regex, replacement);
fs.writeFileSync('src/lib/articles.ts', currentLibContent);
console.log('Processed ' + articles.length + ' articles.');
