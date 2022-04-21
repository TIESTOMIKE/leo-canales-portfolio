import { motion } from 'framer-motion';

const withTransition =
	Component =>
	({ ...props }) =>
		(
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<Component {...props} />
			</motion.div>
		);

export default withTransition;
