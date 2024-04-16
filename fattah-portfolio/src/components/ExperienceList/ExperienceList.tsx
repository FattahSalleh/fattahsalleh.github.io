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
		<div className="w-3/4 rounded-lg shadow-md mb-4 ">
			<div
				className={`px-4 py-4 cursor-pointer flex justify-between items-center font-medium hover:shadow-[0_0px_30px_5px_rgba(80,200,120,1.0)] rounded-lg bg-primary ${
					isOpen
						? "shadow-[0_0px_30px_5px_rgba(80,200,120,1.0)]"
						: " "
				}transition-all duration-500`}
				onClick={toggleAccordion}
			>
				<div className="flex justify-between items-center">
					<span>{experience.position} </span>
					<span className="text-greenLine">
						@ {experience.company}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<div className="mr-8">{experience.timeRange}</div>
					<div className="text-base">{isOpen ? "-" : "+"}</div>
				</div>
			</div>
			{isOpen && (
				<div className="px-4 py-4 bg-darkGrayBg rounded-lg transition-all duration-500 mt-2">
					<div className=" mb-2">{experience.location}</div>
					<ul className="list-disc pl-4 mb-4">
						{experience.responsibility.map((resp, index) => (
							<li key={index} className="">
								{resp}
							</li>
						))}
					</ul>
					<div className="font-medium my-1">
						<ul className="flex flex-wrap flex-row">
							{experience.techStack.map((exp, index) => (
								<li
									key={index}
									className={`text-sm text-lightText bg-secondary mr-2 my-1 px-4 py-0.5 border rounded-2xl transition-all duration-300`}
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
