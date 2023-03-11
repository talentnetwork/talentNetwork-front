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
					100: "#FFF4EE",
					200: "#FFC29D",
					300: "#9C5A35",
					400: "#4E2D1A",
				},
				secondary: {
					100: "#DDEBFF",
					200: "#90B9F6",
					300: "#355E9C",
					400: "#1A2F4E",
				},
				typoDark: {
					100: "#BABABA",
					200: "#989898",
					300: "#757575",
					400: "#535353",
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
