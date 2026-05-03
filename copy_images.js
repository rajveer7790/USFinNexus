const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\xiaomi\\.gemini\\antigravity\\brain\\a3011a73-4e73-4708-a44a-fcad3e2aed15';
const destDir = 'e:\\UsFinNexus\\public\\images\\blog';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);
for (const file of files) {
    if (file.endsWith('.png')) {
        const baseNameMatch = file.match(/^(.*?)_\d+\.png$/);
        const targetName = baseNameMatch ? baseNameMatch[1] + '.png' : file;
        fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, targetName));
        console.log(`Copied ${file} to ${targetName}`);
    }
}
