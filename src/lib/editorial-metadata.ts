import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';

export function editorialImageDimensions(src: string): { width: number; height: number } | undefined {
    const local = src.replace(/^https:\/\/usfinnexus\.com/, '');
    if (!local.startsWith('/images/') || !local.endsWith('.png')) return undefined;
    const file = path.join(process.cwd(), 'public', local);
    if (!fs.existsSync(file)) return undefined;
    const data = fs.readFileSync(file);
    if (data.length >= 24 && data.toString('hex', 0, 8) === '89504e470d0a1a0a') return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
    return undefined;
}

/** Complete per-page social metadata rather than inheriting a generic homepage card. */
export function completeEditorialMetadata(input: Metadata): Metadata {
    const title = typeof input.title === 'string' ? input.title : undefined;
    const description = input.description || undefined;
    const og = input.openGraph || {};
    const imageList = og.images ? (Array.isArray(og.images) ? og.images : [og.images]).map(image => {
        const src = typeof image === 'string' ? image : image instanceof URL ? image.toString() : image.url.toString();
        const size = editorialImageDimensions(src);
        return size ? { ...(typeof image === 'object' && !(image instanceof URL) ? image : { url: image }), ...size } : image;
    }) : undefined;
    return {
        ...input,
        openGraph: { ...og, type: 'article', locale: 'en_US', siteName: 'USFinNexus', ...(title ? { title } : {}), ...(description ? { description } : {}), ...(imageList ? { images: imageList } : {}) },
        twitter: { ...input.twitter, card: 'summary_large_image', ...(title ? { title } : {}), ...(description ? { description } : {}), ...(imageList ? { images: imageList } : {}) },
    };
}
