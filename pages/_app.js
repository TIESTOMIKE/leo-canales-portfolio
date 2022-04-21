import '../styles/global.css';
import Main from '../components/layouts/main';
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
	return (
		<Main home>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</Main>
	);
}
