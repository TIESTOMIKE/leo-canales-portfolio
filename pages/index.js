import Head from 'next/head';
import { siteTitle } from '../components/layouts/main';
import withTransition from '../HOC/withTransition';
import AnimatedTitle from '../components/AnimatedTitle';
import WordCloud from '../components/WordCloud';

const Home = () => {
	return (
		<div className="page">
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<AnimatedTitle />
			<WordCloud></WordCloud>
		</div>
	);
};

export default withTransition(Home);
