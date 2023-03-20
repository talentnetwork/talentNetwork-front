module.exports = {
	darkMode: "class",

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
					400: "#757575",
					600: "#535353",
					900: "#303030",
				},
				darkMode: {
					50: "#F9F9F9",
					200: "#F1F1F1",
					400: "#888888",
					600: "#656565",
					900: "#292929",
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
		boxShadow: {
			btn: "1px 2px 12px rgba(0, 0, 0, 0.12)",
		},
	},
	plugins: [],
};
