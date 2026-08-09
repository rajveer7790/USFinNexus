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
        // Static export previously produced intermittent empty HTML files and
        // ENOTEMPTY errors while parallel workers finalized the same output tree.
        // Serialize export work for deterministic Cloudflare Pages artifacts.
        cpus: 1,
        workerThreads: false,
    },

    // ── Strip console.log from production bundles ──────────────────────────────
    compiler: {
        removeConsole: { exclude: ['error', 'warn'] },
    },

    // ── Image optimization ─────────────────────────────────────────────────────
    images: {
        unoptimized: true,
    },
    
    // ── Static Export ─────────────────────────────────────────────────────────
    output: 'export',

    // ── Compression ───────────────────────────────────────────────────────────
    compress: true,

    // ── Powered by header removal (tiny perf + security) ─────────────────────
    poweredByHeader: false,
};

export default nextConfig;
