const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors,
		},
	},
	corePlugins: {
		preflight: false,
	},
	variants: {
		extend: {
			textShadow: [
				'responsive',
				'hover',
				'focus',
				'active',
				'group-hover',
			],
		},
	},
	plugins: [],
};
