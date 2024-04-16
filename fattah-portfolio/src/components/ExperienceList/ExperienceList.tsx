import { useState } from "react";
import { Experience } from "../../common/types";

function ExperienceList({ experience }: { experience: Experience }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div>
				{experience.position} @ {experience.company}
			</div>
			<div>{experience.timeRange}</div>
			<div>
				<ul>
					{experience.responsibility.map((resp, index) => (
						<li key={index}>{resp}</li>
					))}
				</ul>
			</div>
			<div className="font-medium my-1">
				<ul className="flex flex-wrap flex-row">
					{experience.techStack.map((exp, index) => (
						<li
							key={index}
							className={`text-sm bg-secondary mr-2 my-1 px-4 py-0.5 border rounded-2xl transition-all duration-300 ${
								isHovered ? "opacity-100" : "opacity-85 "
							}`}
						>
							{exp}
						</li>
					))}
				</ul>
			</div>{" "}
		</div>
	);
}

export default ExperienceList;
