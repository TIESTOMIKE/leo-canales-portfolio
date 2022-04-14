import Head from 'next/head';
import Main, { siteTitle } from '../components/layouts/main';
import Link from 'next/link';

export default function Home({ allPostsData }) {
	return (
		<Main home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
		</Main>
	);
}
