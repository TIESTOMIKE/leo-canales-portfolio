import { AnimatePresence, motion } from 'framer-motion';
const variants = {
	initial: {
		x: '-100%',
		transition: {
			type: 'linear',
			duration: 1,
		},
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'linear',
			duration: 1,
		},
	},
	exit: {
		x: '100%',
		transition: {
			type: 'linear',
			duration: 1,
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
