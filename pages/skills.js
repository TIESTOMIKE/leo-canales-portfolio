import withTransition from '../HOC/withTransition';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { experienceAtom } from '../atoms';

function skills() {
	const [experience, setExperience] = useAtom(experienceAtom);
	const router = useRouter();
	const skillKey = router.query?.key;

	const experienceFiltered = experience.filter(work => {
		return work.technologies.includes(skillKey);
	});

	console.log(experienceFiltered);

	return (
		<>
			{skillKey ? (
				<div>Experience using {router.query.key}</div>
			) : (
				'My experience'
			)}
			<div>
				{experienceFiltered.map((value, index) => (
					<div key={index}>{JSON.stringify(value)}</div>
				))}
			</div>
		</>
	);
}

export default withTransition(skills);
