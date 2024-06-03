import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["Inter var", ...fontFamily.sans], // Ensure Inter is included in your sans-serif stack
				Suprapower: ["Suprapower"],
			},
			animation: {
				"gradient-x": "gradient-x 5s ease infinite",
				"gradient-x-1000": "gradient-x 1000ms ease infinite",
				"gradient-x-2000": "gradient-x 2000ms ease infinite",
				"gradient-x-5000": "gradient-x 5000ms ease infinite",
				"gradient-y": "gradient-y 5s ease infinite",
				"gradient-xy": "gradient-xy 5s ease infinite",
				blob: "blob 20s linear infinite",
				widen: "widen 20s linear infinite",
			},
			keyframes: {
				"gradient-y": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "center top",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "center center",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"gradient-xy": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": { transform: "translate(90px, -90px) scale(1.2)" },
					"66%": { transform: "translate(-60px, 60px) scale(0.9)" },
					"100%": { transform: "translate(0px, 0px) scale(1)" },
				},
				widen: {
					"0%": {
						transform: "scale(1)",
					},
					"33%": { transform: "scale(1.5)" },
					"66%": { transform: "scale(0.5)" },
					"100%": { transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
