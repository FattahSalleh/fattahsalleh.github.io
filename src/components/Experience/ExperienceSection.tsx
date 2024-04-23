import ExperienceList from "../Experience/ExperienceList";
import { experience } from "../../data/experienceData";
import { useState } from "react";

export default function ExperiseSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<section
			className="max-w-full w-full px-32 py-16"
			id="experienceSection"
		>
			<div className="flex flex-col items-center">
				<p className="font-bold h-full text-6xl drop-shadow-md mb-12">
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
