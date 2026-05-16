import fs from 'fs';
import path from 'path';

const blogDir = 'e:/UsFinNexus/src/app/blog';
const dirs = fs.readdirSync(blogDir, { withFileTypes: true });

let shortBlogs = [];

for (const dir of dirs) {
    if (dir.isDirectory()) {
        const pagePath = path.join(blogDir, dir.name, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            const content = fs.readFileSync(pagePath, 'utf8');
            const lines = content.split('\n').length;
            if (lines < 80) {
                shortBlogs.push({ name: dir.name, lines });
            }
        }
    }
}

console.log('Found ' + shortBlogs.length + ' short blogs:');
for (const blog of shortBlogs) {
    console.log(`- ${blog.name} (${blog.lines} lines)`);
}
