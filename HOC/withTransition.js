import { AnimatePresence, motion } from 'framer-motion';
const variants = {
	initial: {
		y: '-100%',
		transition: {
			duration: 0.7,
		},
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
		},
	},
	exit: {
		y: '100%',
		transition: {
			duration: 0.7,
		},
	},
};
const withTransition =
	Component =>
	({ ...props }) =>
		(
			<AnimatePresence>
				<motion.div
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<Component {...props} />
				</motion.div>
			</AnimatePresence>
		);

export default withTransition;
