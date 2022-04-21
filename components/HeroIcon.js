import * as HIcons from '@heroicons/react/outline';

const DynamicHeroIcon = props => {
	const { ...icons } = HIcons;
	const TheIcon = icons[props.icon];

	return <TheIcon className={props.className} aria-hidden="true" />;
};

export default DynamicHeroIcon;
