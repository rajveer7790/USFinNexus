import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/app/blog');

console.log('🔍 Scanning all blog posts for missing Lucide icon imports...');

const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let fixCount = 0;

for (const slug of dirs) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if AlertTriangle is used in the JSX
    if (content.includes('<AlertTriangle')) {
        // Check if it's already imported
        const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/;
        const match = content.match(importRegex);
        
        if (match) {
            const imports = match[1];
            if (!imports.includes('AlertTriangle')) {
                // Add it to the import list
                const newImports = imports.trim() + ', AlertTriangle';
                content = content.replace(importRegex, `import { ${newImports} } from 'lucide-react'`);
                fs.writeFileSync(pagePath, content, 'utf8');
                console.log(`✅ Fixed missing import in: ${slug}`);
                fixCount++;
            }
        } else {
            // No lucide-react import exists at all, add it below next/link
            if (content.includes("import Link from 'next/link';")) {
                content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { AlertTriangle } from 'lucide-react';");
                fs.writeFileSync(pagePath, content, 'utf8');
                console.log(`✅ Added lucide-react import to: ${slug}`);
                fixCount++;
            }
        }
    }
}

console.log(`\n🎉 Scan complete! Successfully fixed ${fixCount} files.`);
