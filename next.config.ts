import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    eslint: {
        ignoreDuringBuilds: true,
    },

    // ── Tree-shake lucide-react & other heavy packages ─────────────────────────
    // This alone can cut ~30-50 kB from the shared bundle by only bundling
    // the specific icons used, instead of the entire lucide-react library.
    experimental: {
        optimizePackageImports: ['lucide-react', 'sonner', 'recharts'],
    },

    // ── Strip console.log from production bundles ──────────────────────────────
    compiler: {
        removeConsole: { exclude: ['error', 'warn'] },
    },

    // ── Image optimization ─────────────────────────────────────────────────────
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year cache for images
    },

    // ── Compression ───────────────────────────────────────────────────────────
    compress: true,

    // ── Aggressive cache headers for static assets ────────────────────────────
    async headers() {
        return [
            {
                // JS/CSS chunks — immutable (content-hashed filenames)
                source: '/_next/static/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
            {
                // HTML pages — short cache, revalidate frequently
                source: '/:path*',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                ],
            },
            {
                // API routes disabled — all static
                source: '/sitemap.xml',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
                ],
            },
        ];
    },

    // ── Powered by header removal (tiny perf + security) ─────────────────────
    poweredByHeader: false,
};

export default nextConfig;
