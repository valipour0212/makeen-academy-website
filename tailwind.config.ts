import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./**/*.{js,ts,jsx,tsx,mdx}", // اسکن همه فایل‌های پروژه
    ],
    theme: {
        extend: {
            keyframes: {
                scrollUp: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-50%)" },
                },
                scrollDown: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
            animation: {
                "scroll-up": "scrollUp 20s linear infinite",
                "scroll-down": "scrollDown 20s linear infinite",
            },
        },
    },
    plugins: [],
};

export default config;
