import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import NavBar from '../NavBar/NavBar';

export const siteTitle = 'Leonardo Canales';

export default function main({ children }) {
	return (
		<div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8 w-full">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo {...SEO} />
			<NavBar />
			<main className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
				{children}
			</main>
		</div>
	);
}
