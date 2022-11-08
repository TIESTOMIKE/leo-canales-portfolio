import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { skillsAtom, rolesAtom } from '../atoms';

function WordCloud() {
	const skills = useAtom(skillsAtom)[0];
	const roles = useAtom(rolesAtom)[0];
	return (
		<div>
			<div>
				Click on any of the following skills to know where was used:
			</div>
			<div className="flex flex-wrap p-4">
				{roles.map(role => (
					<Link
						key={role}
						href={{
							pathname: `/skills`,
							query: { key: role, role: true },
						}}
					>
						<motion.span
							whileHover={{
								scale: 1.1,
								textShadow: '0px 0px 4px black',
							}}
							className="first-letter:font-bold first-letter:text-cyan-500 cursor-pointer mx-2 bg-transparent text-3xl text-cyan-100 border-transparent hover:text-shadow-blue-light hover:text-cyan-400"
						>
							{role}
						</motion.span>
					</Link>
				))}
				{skills.map(skill => (
					<Link
						key={skill}
						href={{ pathname: `/skills`, query: { key: skill } }}
					>
						<motion.span
							whileHover={{
								scale: 1.1,
								textShadow: '0px 0px 4px black',
							}}
							className="first-letter:font-bold first-letter:text-orange-500 cursor-pointer mx-2 bg-transparent text-3xl text-cyan-100 border-transparent hover:text-shadow-blue-light hover:text-cyan-400"
						>
							{skill}
						</motion.span>
					</Link>
				))}
			</div>
		</div>
	);
}

export default WordCloud;
