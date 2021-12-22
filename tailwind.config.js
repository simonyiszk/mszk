const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				mszk: {
					blue: "#19B4D2",
					"light-blue": "#87D8E8",
					green: "#529742",
					orange: "#E14B32",
				},
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
