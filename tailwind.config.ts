import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFAF9", // Warm White
                foreground: "#1B365D", // Navy Blue
                primary: {
                    DEFAULT: "#1B365D", // Navy Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#10B981", // Emerald Green
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F59E0B", // Gold
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F3F4F6",
                    foreground: "#6B7280",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#1B365D",
                },
            },
            fontFamily: {
                sans: ["var(--font-rajdhani)", "sans-serif"],
                heading: ["var(--font-orbitron)", "sans-serif"],
            },
            animation: {
                "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow-cycle": "glow-cycle 10s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "slide-up": "slide-up 0.5s ease-out forwards",
            },
            keyframes: {
                "pulse-glow": {
                    "0%, 100%": { opacity: "1", filter: "brightness(1.2) drop-shadow(0 0 5px currentColor)" },
                    "50%": { opacity: ".8", filter: "brightness(1) drop-shadow(0 0 2px currentColor)" },
                },
                "glow-cycle": {
                    "0%, 100%": {
                        opacity: "0.8",
                        transform: "scale(1.1)",
                    },
                    "50%": {
                        opacity: "0.4",
                        transform: "scale(1)",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
};
export default config;
