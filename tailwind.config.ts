import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#eef2f9',
                    100: '#d4dff0',
                    200: '#a9bfe1',
                    300: '#7e9fd2',
                    400: '#537fc3',
                    500: '#2860b4',
                    600: '#1a4d9a',
                    700: '#143a80',
                    800: '#0d2866',
                    900: '#0A2540',
                    950: '#060f1e',
                },
                green: {
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#00C853',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'count-up': 'countUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                countUp: {
                    '0%': { transform: 'scale(0.95)', opacity: '0.5' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
