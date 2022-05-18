import React from 'react';

const titleElements = [
	{
		letter: 'L',
		firstDesc: 'eonardo',
		secondDesc: 'lerning from mistakes',
	},
	{
		letter: 'C',
		firstDesc: 'anales',
		secondDesc: 'hanging the perspective',
	},
];

export default function AnimatedTitle() {
	return (
		<div className="flex flex-col content-center m-auto w-fit">
			{titleElements.map(el => {
				return (
					<div className="flex flex-row align-middle items-baseline">
						<h1 className="m-0">{el.letter}</h1>
						<h3 className="m-0">{el.firstDesc}</h3>
					</div>
				);
			})}
		</div>
	);
}
