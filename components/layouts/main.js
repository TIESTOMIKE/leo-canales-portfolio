import Head from 'next/head';
import NavBar from '../NavBar/NavBar';

export const siteTitle = 'Leonardo Canales';

export default function main({ children }) {
	return (
		<div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Leonardo Canales - Portfolio"
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<NavBar />
			<main className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
				{children}
			</main>
		</div>
	);
}
