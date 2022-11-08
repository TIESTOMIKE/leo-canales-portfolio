import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { experienceAtom } from '../atoms';
import Experience from '../components/Experience';
import { useEffect, useState } from 'react';

function skills() {
	const [experience, setExperience] = useAtom(experienceAtom);
	const [experienceFiltered, setExperienceFiltered] = useState(experience);
	const router = useRouter();
	const [skillKey, setSkillKey] = useState(router.query?.key);

	useEffect(() => {
		if (router.isReady) {
			const { key } = router.query;
			if (!key) return null;
			setSkillKey(key);
		}
	}, [router.isReady]);

	useEffect(() => {
		if (skillKey && experience) {
			setExperienceFiltered(
				experience.filter(work => {
					return work.technologies.includes(skillKey);
				}),
			);
		}
	}, [skillKey, experience]);

	return (
		<div className="page">
			<div>
				{skillKey ? (
					<span>
						My experience with{' '}
						<span className="text-orange-500">{skillKey}</span>:
					</span>
				) : (
					'My experience:'
				)}
			</div>

			<div className="p-1 md:p-6 w-full">
				{experienceFiltered.map((value, index) => (
					<Experience key={index} experience={value} />
				))}
			</div>
		</div>
	);
}

export default skills;
