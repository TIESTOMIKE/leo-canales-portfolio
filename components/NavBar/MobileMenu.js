import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import HeroIcon from '../HeroIcon';
import { motion } from 'framer-motion';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			type: 'linear',
			duration: 1,
		},
	},
};

const menuItemVar = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

function MobileMenu({ navigation, pathName }) {
	return (
		<Disclosure.Panel className="sm:hidden">
			<motion.div
				initial="initial"
				animate="animate"
				variants={variants}
				className="px-2 pt-2 pb-3 space-y-1 absolute bottom main-menu rounded-lg w-full ring-2 ring-orange-500 z-50"
			>
				{navigation.map(item => (
					<Link key={item.name} href={item.href}>
						<motion.a
							variants={menuItemVar}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							href={item.href}
							className={classNames(
								pathName === item.href
									? 'bg-gradient-blue text-white border-none'
									: 'bg-transparent text-cyan-100 border-transparent hover:text-shadow-blue-light hover:border-solid hover:border-2 hover:border-cyan-400 hover:text-cyan-400',
								'block px-3 py-2 rounded-md text-base font-medium no-underline border-solid border-2',
							)}
							aria-current={
								pathName === item.href ? 'page' : undefined
							}
						>
							<div className="inline-flex items-center flex-row align-baseline justify-start">
								<HeroIcon
									className="w-5 h-5 text-orange-500 mr-2 inline-block"
									icon={item.icon}
								/>
								{item.name}
							</div>
						</motion.a>
					</Link>
				))}
			</motion.div>
		</Disclosure.Panel>
	);
}

export default MobileMenu;
