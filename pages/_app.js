import '../styles/global.css';
import Main from '../components/layouts/main';

export default function App({ Component, pageProps }) {
	return (
		<Main home>
			<Component {...pageProps} />
		</Main>
	);
}
