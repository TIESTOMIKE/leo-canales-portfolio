const title = 'Leonardo Canales';
const description =
	"Web UI and Front End developer, I have a master's degree in computer science with more than 12 years of experience.";

export default {
	defaultTitle: title,
	title,
	description,
	openGraph: {
		type: 'website',
		locale: 'en',
		description,
		url: 'https://www.leonardo-canales.me/',
		site_name: title,
	},
	twitter: {
		handle: '@GOD_LEO',
		site: '@GOD_LEO',
		cardType: 'summary_large_image',
	},
	robotsProps: {
		notranslate: true,
	},
};
