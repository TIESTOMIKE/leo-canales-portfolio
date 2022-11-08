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
	const [roleKey, setRoleKey] = useState(router.query?.role);

	useEffect(() => {
		if (router.isReady) {
			const { key, role } = router.query;

			if (key) setSkillKey(key);
			if (role) setRoleKey(role);
			return null;
		}
	}, [router.isReady]);

	useEffect(() => {
		if (skillKey && experience) {
			setExperienceFiltered(
				experience.filter(work => {
					return roleKey
						? work.roles.includes(skillKey)
						: work.technologies.includes(skillKey);
				}),
			);
		}
	}, [skillKey, roleKey, experience]);

	return (
		<div className="page">
			<div>
				{skillKey ? (
					<span>
						{roleKey ? 'My experience as ' : 'My experience with '}
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
