// e:\UsFinNexus\src\components\LogoIcon.tsx
export default function LogoIcon({ className, size = 32 }: { className?: string, size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="256" cy="256" r="256" fill="#0A2540" />
            <path d="M256 126 L368 191 L368 321 L256 386 L144 321 L144 191 Z" fill="url(#nexusGrad)" />
            <path
                d="M256 256 L368 191 M256 256 L144 191 M256 256 L256 386"
                stroke="#0A2540"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="256" cy="256" r="28" fill="#00E676" stroke="#0A2540" strokeWidth="12" />
            <defs>
                <linearGradient id="nexusGrad" x1="144" y1="126" x2="368" y2="386" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E676" />
                    <stop offset="1" stopColor="#00A040" />
                </linearGradient>
            </defs>
        </svg>
    );
}
