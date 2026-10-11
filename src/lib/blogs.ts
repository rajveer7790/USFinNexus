Warning: truncated output (original token count: 1849)
Total output lines: 141

import fs from 'fs';
import path from 'path';

export interface BlogPostEntry {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    image: string;
    date: string;
  …1749 tokens truncated…const diffCategory = shuffled.filter(a => a.category !== targetCategory);
        
        return [...sameCategory, ...diffCategory].slice(0, count);
    }
    
    return shuffled.slice(0, count);
}
