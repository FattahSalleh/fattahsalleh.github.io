import Intro from "../Intro/Intro";
import NavBar from "../Navigation/NavBar";
import ContactOverlay from "../Contact/ContactOverlay";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";
import ContactSection from "../Contact/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExpertiseSection from "../Expertise/ExpertiseSection";
import ProjectSection from "../Project/ProjectSection";
import ExperiseSection from "../Experience/ExperienceSection";
import { useState } from "react";
import Cursor from "../Cursor/Cursor";
import ScrollToTop from "../Navigation/ScrollToTop";

function App() {

	const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

	return (
		<div
			className={`App flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText overflow-x-clip`}
		>
			<Cursor />

			<ScrollToTop />

			<ContactOverlay />

			<NavBar
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
