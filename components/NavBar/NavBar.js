import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import navigation from '../../lib/navigation';
import { motion } from 'framer-motion';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const moveToLeft = {
	initial: {
		x: 150,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: 'easeIn',
		},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function NavBar() {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="relative">
			{({ open }) => (
				<>
					<motion.div
						initial="initial"
						animate="animate"
						exit={{ opacity: 0 }}
						className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8"
					>
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md bg-transparent text-orange-500 ring-2 ring-orange-500  focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-orange-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-around sm:items-center sm:justify-between">
								<div className="flex-shrink-0 flex items-center">
									<Link href={'/'}>
										<p className="home-button h-auto w-auto text-cyan-100">
											LEO
										</p>
									</Link>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<motion.div
										variants={stagger}
										className="flex justify-end space-x-4"
									>
										{navigation.map(item => (
											<Link
												key={item.name}
												href={item.href}
											>
												<motion.a
													variants={moveToLeft}
													className={classNames(
														router.pathname ===
															item.href
															? 'bg-gradient-blue text-white border-none'
															: 'bg-transparent text-cyan-100 border-transparent hover:text-shadow-blue-light hover:border-solid hover:border-2 hover:border-cyan-400 hover:text-cyan-400',
														'px-3 py-2 rounded-md text-lg font-medium no-underline border-solid border-2',
													)}
													aria-current={
														item.current
															? 'page'
															: undefined
													}
												>
													{item.name}
												</motion.a>
											</Link>
										))}
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
					<MobileMenu
						navigation={navigation}
						pathName={router.pathname}
					/>
				</>
			)}
		</Disclosure>
	);
}
