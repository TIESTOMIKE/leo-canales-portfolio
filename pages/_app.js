import '../styles/global.css';
import Main from '../components/layouts/main';
import PageTransition from '../components/transitions/PageTransition';

export default function App({ Component, pageProps }) {
	return (
		<Main home>
			<PageTransition>
				<Component {...pageProps} />
			</PageTransition>
		</Main>
	);
}
