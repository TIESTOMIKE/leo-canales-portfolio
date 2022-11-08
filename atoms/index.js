import { atom } from 'jotai';
import experience from '../lib/experience';

export const experienceAtom = atom(experience);

const allSkills = experience.reduce((prev, current) => {
	return [...prev, ...current.technologies];
}, []);

const uniqueSkills = allSkills.filter((value, index, self) => {
	return self.indexOf(value) === index;
});

export const skillsAtom = atom(uniqueSkills);
