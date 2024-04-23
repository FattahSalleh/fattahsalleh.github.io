import { expertiseBE, expertiseFE } from "../../data/expertiseData";
import ExpertiseTable from "./ExpertiseTable";

export default function ExpertiseSection() {
	return (
		<section
			className="max-w-full w-full px-12 py-16"
			id="expertiseSection"
		>
			<div
				className="flex flex-col items-center"
				id="expertiseSectionContainer"
			>
				<p className="font-bold h-full text-6xl drop-shadow-md mb-12">
					My Expertise
				</p>
				<article className="flex flex-row justify-center">
					<ExpertiseTable expertise={expertiseFE} />
					<ExpertiseTable expertise={expertiseBE} />
				</article>
			</div>
		</section>
	);
}
