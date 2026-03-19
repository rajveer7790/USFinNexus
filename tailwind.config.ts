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
                    900: '#0A192F', // Deeper navy
                    950: '#020C1B', // Very deep rich black-blue
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
            boxShadow: {
                'card-hover': '0 8px 30px rgba(10,25,47,0.12)',
                'blue-glow': '0 4px 20px rgba(13,166,242,0.25)',
                'green-glow': '0 4px 20px rgba(0,200,83,0.25)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'count-up': 'countUp 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'gradient-x': 'gradientX 15s ease infinite',
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
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
                    '50%': { opacity: '1', filter: 'brightness(1.2)' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
