import React from 'react';

function Experience({ experience }) {
	let Client = null;
	if (experience.client) {
		Client = (
			<>
				<div className="text-cyan-300 text-base">Client:</div>
				<div className="text-orange-500">{experience.client}</div>
			</>
		);
	}
	return (
		<section className="pb-6">
			<div className="text-2xl text-amber-400">{experience.role}</div>
			<div className="text-lg pl-2 md:pl-6 grid grid-cols-[100px_1fr] gap-x-2 md:gap-x-4 gap-y-2 justify-items-start">
				<div className="text-cyan-300 text-base">Company:</div>
				<div>{experience.company}</div>
				{Client}
				<div className="text-cyan-300 text-base">Duration:</div>
				<div>
					{experience.duration.start} - {experience.duration.end}
				</div>
				<div className="text-cyan-300 text-base">Technologies:</div>
				<div>{experience.technologies.join(', ')}</div>
				<div className="text-cyan-300 text-base">Description:</div>
				<div className="px-4 p-y4 col-span-2 md:col-span-2">
					<ul className="px-5 py-0 m-0">
						{experience.description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<hr className="border-t border-solid border-cyan-300"></hr>
		</section>
	);
}

export default Experience;
