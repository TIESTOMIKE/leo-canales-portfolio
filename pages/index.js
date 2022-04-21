import Head from 'next/head';
import { siteTitle } from '../components/layouts/main';
import withTransition from '../HOC/withTransition';

const Home = () => {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			Hola Home
		</>
	);
};

export default withTransition(Home);
