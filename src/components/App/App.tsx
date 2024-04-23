import AnimatedCursor from "react-animated-cursor";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNav/TopNavBar";
import ContactOverlay from "../Contact/ContactOverlay";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";
import ContactSection from "../Contact/ContactSection";
import { disclaimerData } from "../../data/disclaimerData";
import { topNavBarButtons } from "../../data/topNavBarData";
import { introDetails } from "../../data/introData";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExpertiseSection from "../Expertise/ExperiseSection";
import ProjectSection from "../Project/ProjectSection";
import ExperiseSection from "../Experience/ExperienceSection";

function App() {
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

			<ExperiseSection />

			<ContactSection />

			<section className="mt-24" id="disclaimerSection">
				<DisclaimerSection disclaimerData={disclaimerData} />
			</section>
			<SpeedInsights />
		</div>
	);
}

export default App;
