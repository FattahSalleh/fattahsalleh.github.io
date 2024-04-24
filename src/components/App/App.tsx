import AnimatedCursor from "react-animated-cursor";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNav/TopNavBar";
import ContactOverlay from "../Contact/ContactOverlay";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";
import ContactSection from "../Contact/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExpertiseSection from "../Expertise/ExperiseSection";
import ProjectSection from "../Project/ProjectSection";
import ExperiseSection from "../Experience/ExperienceSection";
import { useState } from "react";

function App() {
	// TODO: Add btn to go top of page in mobile view

	const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

	return (
		<div
			className={`App flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText overflow-x-clip`}
		>
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

			<TopNavBar
				isOverlayOpen={isOverlayOpen}
				setIsOverlayOpen={setIsOverlayOpen}
			/>

			<div className={`${isOverlayOpen ? "blur" : ""}`}>
				<Intro />

				<ExpertiseSection />

				<ProjectSection />

				<ExperiseSection />

				<ContactSection />

				<DisclaimerSection />
			</div>

			<SpeedInsights />
		</div>
	);
}

export default App;
