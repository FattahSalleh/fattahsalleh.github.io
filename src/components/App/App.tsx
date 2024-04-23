import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNav/TopNavBar";
import ExperienceList from "../Experience/ExperienceList";
import ContactOverlay from "../Contact/ContactOverlay";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";
import ContactSection from "../Contact/ContactSection";
import { experience } from "../../data/experienceData";
import { disclaimerData } from "../../data/disclaimerData";
import { topNavBarButtons } from "../../data/topNavBarData";
import { introDetails } from "../../data/introData";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExpertiseSection from "../Expertise/ExperiseSection";
import ProjectSection from "../Project/ProjectSection";

function App() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="App flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText">
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

			<TopNavBar navBarButtons={topNavBarButtons} />

			<Intro name={introDetails.name} subTitle={introDetails.position} />

			<ExpertiseSection />

			<ProjectSection />

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
						Get In Touch
					</p>
					<ContactSection />
				</div>
			</section>

			<section className="mt-24" id="disclaimerSection">
				<DisclaimerSection disclaimerData={disclaimerData} />
			</section>
			<SpeedInsights />
		</div>
	);
}

export default App;
