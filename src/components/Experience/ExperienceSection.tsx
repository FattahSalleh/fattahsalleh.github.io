import ExperienceList from "../Experience/ExperienceList";
import { experience } from "../../data/experienceData";
import { useState } from "react";

export default function ExpertiseSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<section
			className="max-w-full w-full px-4 lg:px-32 py-12 lg:py-16"
			id="experienceSection"
		>
			<div className="flex flex-col items-center">
				<p className="font-bold h-full text-4xl lg:text-6xl drop-shadow-md mb-12">
					Experience
				</p>
				{experience.map((experience, index) => (
					<ExperienceList
						key={index}
						experience={experience}
						isOpen={openIndex === index}
						toggleAccordion={() => toggleAccordion(index)}
					/>
				))}
			</div>
		</section>
	);
}
