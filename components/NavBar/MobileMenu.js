import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import HeroIcon from '../HeroIcon';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function MobileMenu({ navigation, pathName }) {
	return (
		<Disclosure.Panel className="sm:hidden">
			<div className="px-2 pt-2 pb-3 space-y-1 absolute bottom main-menu rounded-lg w-full ring-2 ring-orange-500 ">
				{navigation.map(item => (
					<Link key={item.name} href={item.href}>
						<Disclosure.Button
							as="a"
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
						</Disclosure.Button>
					</Link>
				))}
			</div>
		</Disclosure.Panel>
	);
}

export default MobileMenu;
