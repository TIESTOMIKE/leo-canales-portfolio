import { atom } from 'jotai';
import experience from '../lib/experience';

export const countryAtom = atom('Japan');
export const experienceAtom = atom(experience);

const allSkills = experience.reduce((prev, current) => {
	return [...prev, ...current.technologies];
}, []);

const skillsUnique = allSkills.filter((value, index, self) => {
	return self.indexOf(value) === index;
});

export const skillsAtom = atom(skillsUnique);
