import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js, ts, jsx, tsx, mdx}",
        "./src/components/**/*.{js, tsx, ts, jsx, mdx}",
        "./src/app/**/*.{js, ts, jsx, tsx, mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': {'min': '280px', 'max': '850px'},
                'md': {'min': '851px', 'max': '1050px'},
                'log': {'min': '1051px', 'max': '1200px'},
            },
        },
    },
    plugins: [],

};
export default config;