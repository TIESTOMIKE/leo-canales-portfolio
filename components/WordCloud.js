import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { skillsAtom } from '../atoms';

function WordCloud() {
	const [skills, setskills] = useAtom(skillsAtom);
	return (
		<motion.div>
			{skills.map(skill => (
				<Link
					key={skill}
					href={{ pathname: `/skills`, query: { key: skill } }}
				>
					<motion.span>{skill}</motion.span>
				</Link>
			))}
		</motion.div>
	);
}

export default WordCloud;
