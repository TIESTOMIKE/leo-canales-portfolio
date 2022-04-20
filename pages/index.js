import Head from 'next/head';
import { siteTitle } from '../components/layouts/main';

export default function Home() {
	return (
		<Head>
			<title>{siteTitle}</title>
		</Head>
	);
}
