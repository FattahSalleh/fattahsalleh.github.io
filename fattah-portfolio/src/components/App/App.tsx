import ExpertiseTable from "../ExpertiseTable/ExpertiseTable";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";
import AnimatedCursor from "react-animated-cursor";
import { topNavBarButtons } from "../../data/topNavBarData";
import { introDetails } from "../../data/introData";
import { expertiseBE, expertiseFE } from "../../data/expertiseData";
import ProjectItem from "../ProjectItem/ProjectItem";
import { projects } from "../../data/projectData";
import ExperienceList from "../ExperienceList/ExperienceList";
import { experience } from "../../data/experienceData";
import { useState } from "react";
import ContactOverlay from "../Contact/ContactOverlay";
import Disclaimer from "../Disclaimer/DisclaimerSection";
import { disclaimerData } from "../../data/disclaimerData";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";

function App() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="App">
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				innerStyle={{
					backgroundColor: "#50C878",
					boxShadow: "0px 0px 10000px 20px #50C878",
				}}
				outerStyle={{
					border: "1px solid #2E4B35",
				}}
			/>

			<ContactOverlay />

			<main
				className="flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText"
				id="main"
			>
				<TopNavBar navBarButtons={topNavBarButtons} />
				<section
					className="w-full min-h-screen flex flex-col items-center justify-center pb-24"
					id="introSection"
				>
					<Intro
						name={introDetails.name}
						subTitle={introDetails.position}
					/>
				</section>

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

				<section
					className="max-w-full w-full px-32 py-16"
					id="projectSection"
				>
					<div className="flex flex-col items-center">
						<p className="font-bold h-full text-6xl drop-shadow-md mb-12">
							Projects Done
						</p>
						<article className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-3">
							{projects.map((project, index) => (
								<ProjectItem key={index} project={project} />
							))}
						</article>
					</div>
				</section>

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

				<section
					className="max-w-full w-full px-32 py-16"
					id="contactSection"
				>
					<div className="flex flex-col items-center">
						<p className="font-bold h-full text-6xl drop-shadow-md mb-12">
							-
						</p>
					</div>
				</section>

				<section>
					<DisclaimerSection disclaimerData={disclaimerData} />
				</section>
			</main>
		</div>
	);
}

export default App;
