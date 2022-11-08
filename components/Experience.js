import React from 'react';

function Experience({ experience }) {
	const lineInfo = (header, content, customContent) => {
		return (
			<>
				<div className="text-cyan-300 text-base">{header}</div>
				{customContent ? customContent : <div>{content}</div>}
			</>
		);
	};

	const rolesFormatted = (
		<div className="flex flex-row">
			{experience.roles.map((role, i) => (
				<div
					key={role}
					className="first-letter:font-bold first-letter:text-orange-500 mr-2"
				>
					{role}
					{experience.roles.length - 1 === i ? '' : ','}
				</div>
			))}
		</div>
	);

	return (
		<section className="px-5 py-4 mb-4 bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="text-2xl text-amber-400">{experience.position}</div>
			<div className="text-lg pl-2 md:pl-6 grid grid-cols-[150px_1fr] gap-x-2 md:gap-x-4 gap-y-1 justify-items-start">
				{lineInfo('Company:', experience.company)}
				{experience.client &&
					lineInfo(
						'Client:',
						'',
						<div className="font-bold text-orange-400">
							{experience.client}
						</div>,
					)}
				{lineInfo(
					'Period:',
					`${experience.duration.start} - ${experience.duration.end}`,
				)}
				{experience.roles && lineInfo('Roles:', '', rolesFormatted)}
				{lineInfo('Technologies:', experience.technologies.join(', '))}
				{lineInfo(
					'Project Description:',
					'',
					<div className="px-4 p-y4 col-span-2 md:col-span-2">
						<ul className="px-5 py-0 m-0 list-none">
							{experience.description.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>,
				)}
			</div>
		</section>
	);
}

export default Experience;
