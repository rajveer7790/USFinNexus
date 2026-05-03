const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        var pending = list.length;
        if (!pending) return callback(null);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        if (!--pending) callback(null);
                    });
                } else {
                    if (file.endsWith('page.tsx')) {
                        let content = fs.readFileSync(file, 'utf8');
                        let newContent = content
                            .replace(/max-w-4xl/g, 'max-w-3xl')
                            .replace(/prose prose-lg/g, 'prose')
                            .replace(/md:text-5xl/g, 'md:text-4xl');
                        if (content !== newContent) {
                            fs.writeFileSync(file, newContent, 'utf8');
                            console.log('Updated', file);
                        }
                    }
                    if (!--pending) callback(null);
                }
            });
        });
    });
}

walk(path.join(__dirname, 'src', 'app', 'blog'), (err) => {
    if (err) console.error(err);
    else console.log('Done');
});
