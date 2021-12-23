const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			spacing: {
				200: "50rem",
			},
			borderRadius: {
				"4xl": "250px",
			},
			boxShadow: {
				"mszk-sponsor": "6px 4px 9px rgba(0, 0, 0, 0.25)",
			},
			fontSize: {
				"11xl": "12rem",
			},
			colors: {
				mszk: {
					blue: "#19B4D2",
					"light-blue": "#87D8E8",
					green: "#529742",
					orange: "#E14B32",
				},
			},
			backgroundImage: {
				"hero-img": "url('http://placekitten.com/g/200/300')",
			},
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
		},
	},
	corePlugins: {
		animation: false,
	},
};
