import fs from 'fs';
import path from 'path';

// The deployment redirect file is the single source of truth for internal URLs.
const redirects = new Map<string, string>();
const file = path.join(process.cwd(), 'public', '_redirects');
if (fs.existsSync(file)) {
    for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
        const [source, target, status] = line.trim().split(/\s+/);
        if (source?.startsWith('/') && target?.startsWith('/') && status === '301' && !source.includes('*')) redirects.set(source, target);
    }
}

export function canonicalPath(value: string): string {
    let current = value.replace(/\/$/, '') || '/';
    const visited = new Set<string>();
    while (redirects.has(current)) {
        if (visited.has(current)) throw new Error(`Redirect cycle: ${value}`);
        visited.add(current);
        current = redirects.get(current)!;
    }
    return current;
}

export const BLOG_ALIASES = new Set([...redirects.keys()].filter(p => p.startsWith('/blog/')).map(p => p.slice(6)));
