import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
	const variants = {
		scaleDown: {
			scale: 0.8,
			y: 100,
			transition: {
				duration: 0.4,
			},
		},
		out: {
			x: '-100%',
			transition: {
				duration: 0.4,
				delay: 0.5,
				ease: 'easeInOut',
			},
		},
		in: {
			scale: 0.8,
			y: 100,
			x: '100%',
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
		center: {
			x: 0,
			scale: 0.8,
			transformOrigin: 'top',
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
		scaleUp: {
			scale: 1,
			y: 0,
			transition: {
				duration: 0.4,
				delay: 0.5,
			},
		},
		inactive: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},

		outOp: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
		inOp: {
			y: 100,
			opacity: 0,
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};
	const { asPath } = useRouter();
	return (
		<div className="effect-3 overflow-hidden">
			<AnimatePresence initial={false} exitBeforeEnter>
				<motion.div
					key={asPath}
					variants={variants}
					initial="in"
					animate={['center', 'scaleUp']}
					exit={['scaleDown', 'out']}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
