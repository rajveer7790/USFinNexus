import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, props: { params: Promise<{ name: string }> }) {
    const params = await props.params;
    const artifactDir = 'C:\\Users\\xiaomi\\.gemini\\antigravity\\brain\\a3011a73-4e73-4708-a44a-fcad3e2aed15';
    try {
        const files = fs.readdirSync(artifactDir);
        const file = files.find(f => f.startsWith(params.name) && f.endsWith('.png'));
        
        if (!file) {
            return new NextResponse('Image not found', { status: 404 });
        }
        
        const filePath = path.join(artifactDir, file);
        const imageBuffer = fs.readFileSync(filePath);
        
        return new NextResponse(imageBuffer, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (e) {
        console.error('Error serving image:', e);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
