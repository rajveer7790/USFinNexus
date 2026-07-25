import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/app/blog');
const blogIndexFile = path.join(blogDir, 'page.tsx');

const IMG = {
    housing: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mortgage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    taxes: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    investing: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    retirement: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    auto: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    finance: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

function determineCategory(slug) {
    if (slug.includes('mortgage') || slug.includes('refinance') || slug.includes('fha') || slug.includes('va')) return 'Mortgage';
    if (slug.includes('tax')) return 'Taxes';
    if (slug.includes('invest')) return 'Investing';
    if (slug.includes('retire') || slug.includes('401k') || slug.includes('ira') || slug.includes('fire')) return 'Retirement';
    if (slug.includes('auto') || slug.includes('car')) return 'Auto Loans';
    if (slug.includes('home') || slug.includes('housing') || slug.includes('real-estate')) return 'Housing Market';
    return 'Personal Finance';
}

function determineImage(category) {
    switch (category) {
        case 'Mortgage': return 'IMG.mortgage';
        case 'Taxes': return 'IMG.taxes';
        case 'Investing': return 'IMG.investing';
        case 'Retirement': return 'IMG.retirement';
        case 'Auto Loans': return 'IMG.auto';
        case 'Housing Market': return 'IMG.housing';
        default: return 'IMG.finance';
    }
}

async function auditAndFix() {
    console.log('🔍 Starting Massive Blog Audit...');
    const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    let totalPosts = 0;
    let thinPosts = [];
    let generatedPostsArray = [];

    for (const slug of dirs) {
        const pagePath = path.join(blogDir, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        const content = fs.readFileSync(pagePath, 'utf8');
        
        // Count words roughly by removing tags and splitting by spaces
        const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/import.*?['"]/g, '');
        const wordCount = textOnly.split(/\s+/).filter(w => w.length > 1).length;
        
        if (wordCount < 1000) {
            thinPosts.push({ slug, wordCount });
        }

        totalPosts++;

        // Extract metadata
        let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(' | USFinNexus', '');
        }

        const category = determineCategory(slug);
        const image = determineImage(category);

        generatedPostsArray.push(`    { slug: '${slug}', title: '${title.replace(/'/g, "\\'")}', date: 'May 2026', category: '${category}', readTime: '10 min', image: ${image} }`);
    }

    console.log(`\n📊 AUDIT RESULTS:`);
    console.log(`Total Posts Scanned: ${totalPosts}`);
    if (thinPosts.length > 0) {
        console.log(`⚠️ FOUND ${thinPosts.length} THIN POSTS (< 1,000 words):`);
        thinPosts.forEach(p => console.log(`   - ${p.slug} (${p.wordCount} words)`));
    } else {
        console.log(`✅ ALL POSTS PASSED WORD COUNT CHECK (Substantial Content Verified)`);
    }

    // Now fix the blog index page
    console.log('\n🛠️ Fixing Orphaned Blog Posts on the Index Page...');
    let indexContent = fs.readFileSync(blogIndexFile, 'utf8');
    
    const postsStart = indexContent.indexOf('const POSTS = [');
    const postsEnd = indexContent.indexOf('];', postsStart) + 2;

    if (postsStart !== -1 && postsEnd !== -1) {
        const newPostsBlock = `const POSTS = [\n${generatedPostsArray.join(',\n')}\n];`;
        indexContent = indexContent.substring(0, postsStart) + newPostsBlock + indexContent.substring(postsEnd);
        fs.writeFileSync(blogIndexFile, indexContent, 'utf8');
        console.log(`✅ Successfully injected all ${totalPosts} blog posts into src/app/blog/page.tsx`);
    } else {
        console.log('❌ Could not find POSTS array in page.tsx');
    }
}

auditAndFix();
