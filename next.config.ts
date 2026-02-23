import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    experimental: {
        // @ts-expect-error - Next.js 15 experimental feature not yet in types
        allowedDevOrigins: ['10.208.206.12', 'localhost', '127.0.0.1'],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
