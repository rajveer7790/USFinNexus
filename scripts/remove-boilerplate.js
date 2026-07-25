const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
let removedCount = 0;

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // The boilerplate typically starts with a specific string
            const searchString = 'The 2026 Macroeconomic Landscape: A Comprehensive Deep Dive';
            const index = content.indexOf(searchString);
            
            if (index !== -1) {
                // Find the <hr> before it
                const hrIndex = content.lastIndexOf('<hr', index);
                if (hrIndex !== -1) {
                    // Find the end of the boilerplate
                    // Usually it ends before <AuthorBio or <RelatedCalculators
                    const endTags = ['<AuthorBio', '<RelatedCalculators', '<RelatedArticles'];
                    let endIndex = content.length;
                    
                    for (const tag of endTags) {
                        const tagIndex = content.indexOf(tag, index);
                        if (tagIndex !== -1 && tagIndex < endIndex) {
                            endIndex = tagIndex;
                        }
                    }
                    
                    if (endIndex < content.length) {
                        // We also need to strip any trailing spaces or closing divs that were part of the boilerplate
                        // We'll replace the chunk with nothing
                        const newContent = content.substring(0, hrIndex) + '\n                ' + content.substring(endIndex);
                        fs.writeFileSync(fullPath, newContent, 'utf8');
                        removedCount++;
                        console.log(`Cleaned: ${fullPath}`);
                    }
                }
            }
        }
    }
}

walkDir(blogDir);
console.log(`\nSuccessfully removed duplicate boilerplate from ${removedCount} blog posts!`);
