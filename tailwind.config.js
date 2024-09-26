const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		// "./mdx-components.tsx",
		// "content/**/*.mdx",
	],

	theme: {
		extend: {
			transitionDelay: {
				'0ms': '0ms',
				'100ms': '50ms',
				'200ms': '100ms',
				'300ms': '150ms',
				'400ms': '200ms',
				'500ms': '250ms',
				'600ms': '300ms',
				'700ms': '350ms',
				'800ms': '400ms',
				'900ms': '450ms',
				'1000ms': '500ms',
				'1100ms': '550ms',
				'1200ms': '600ms',
				'1300ms': '650ms',
				'1400ms': '700ms',
				'1500ms': '750ms',
				'1600ms': '800ms',
				'1700ms': '840ms',
				'1800ms': '880ms',
				'1900ms': '920ms',
				'2000ms': '960ms',
				'2100ms': '1000ms',
				'2200ms': '1040ms',
				'2300ms': '1080ms',
				'2400ms': '1120ms',
				'2500ms': '1200ms',
				'2600ms': '1240ms',
				'2700ms': '1280ms',
				'2800ms': '1320ms',
				'2900ms': '1360ms',
				'3000ms': '1400ms',
				'3100ms': '1440ms',
				'3200ms': '1480ms',
				'3300ms': '1520ms',
				'3400ms': '1560ms',
				'3500ms': '1600ms',
				'3600ms': '1640ms',
				'3700ms': '1680ms',
				'3800ms': '1720ms',
				'3900ms': '1760ms',
				'4000ms': '1800ms',
				'4100ms': '1840ms',
				'4200ms': '1880ms',
				'4300ms': '1920ms',
				'4400ms': '1960ms',
				'4500ms': '2000ms',
				'4600ms': '2040ms',
				'4700ms': '2080ms',
				'4800ms': '2120ms',
				'4900ms': '2160ms',
				'5000ms': '2200ms',
				'5100ms': '2240ms',
				'5200ms': '2280ms',
				'5300ms': '2320ms',
				'5400ms': '2360ms',
				'5500ms': '2400ms',
				'5600ms': '2440ms',
				'5700ms': '2480ms',
				'5800ms': '2520ms',
				'5900ms': '2560ms',
				'6000ms': '2600ms'
			},
			typography: {
				DEFAULT: {
					css: {

					},
				},
				quoteless: {
					css: {
					},
				},
			},
			fontFamily: {
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 500ms ease-out forwards",
				"fade-out": "fade-in 500ms ease-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-out": {
					"0%": {
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
