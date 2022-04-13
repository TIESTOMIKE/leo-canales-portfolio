const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
