import { useState } from "react";
import { Experience } from "../../common/types";

function ExperienceList({
	experience,
	isOpen,
	toggleAccordion,
}: {
	experience: Experience;
	isOpen: boolean;
	toggleAccordion: () => void;
}) {
	return (
		<div className="w-full bg-darkGrayBg text-blueLine rounded-lg shadow-md mb-4 ">
			<div
				className={`px-4 py-2 cursor-pointer text-white flex justify-between items-center font-medium hover:bg-gray-700 hover:text-gray-200 rounded-lg ${
					isOpen ? "bg-greenLine text-white" : ""
				}transition-all duration-500`}
				onClick={toggleAccordion}
			>
				<div>
					{experience.position} @ {experience.company}
				</div>
				<div className="text-base">{isOpen ? "-" : "+"}</div>
			</div>
			{isOpen && (
				<div className="px-4 py-4 bg-lightBg rounded-lg transition-all duration-500 mt-2">
					<div className="text-gray-600 mb-2">
						{experience.location}
					</div>
					<div className="text-gray-600 mb-2">
						{experience.timeRange}
					</div>
					<ul className="list-disc pl-4 mb-4">
						{experience.responsibility.map((resp, index) => (
							<li key={index} className="text-gray-600">
								{resp}
							</li>
						))}
					</ul>
					<div className="font-medium">
						<ul className="flex flex-wrap flex-row">
							{experience.techStack.map((exp, index) => (
								<li
									key={index}
									className={`text-sm bg-greenLine text-white mr-2 my-1 px-4 py-0.5 rounded-2xl transition-all duration-300`}
								>
									{exp}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default ExperienceList;
