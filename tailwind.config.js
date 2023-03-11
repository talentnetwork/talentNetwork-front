module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		fontFamily: {
			serif: ["Poppins"],
			sans: ["Poppins"],
			desplay: ["Poppins"],
			body: ["Poppins"],
			mono: ["Poppins"],
		},
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primary: {
					50: "#FFF4EE",
					200: "#FFC29D",
					400: "#EA874F",
					600: "#9C5A35",
					900: "#4E2D1A",
				},
				secondary: {
					50: "#DDEBFF",
					200: "#90B9F6",
					400: "#4F8DEA",
					600: "#355E9C",
					900: "#1A2F4E",
				},
				typoLight: {
					50: "#BABABA",
					200: "#989898",
					400: "#303030",
					600: "#757575",
					900: "#535353",
				},
				success: {
					100: "#50CB82",
				},
				error: {
					100: "#E56857",
				},
				warning: {
					100: "#FFDB7D",
				},
			},
		},
	},
	plugins: [],
};
