import { ReactNode, createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../Intro/Intro";
import NavBar from "../Navigation/NavBar";
import ContactOverlay from "../Contact/ContactOverlay";
import DisclaimerSection from "../Disclaimer/DisclaimerSection";
import ContactSection from "../Contact/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExpertiseSection from "../Expertise/ExpertiseSection";
import ProjectSection from "../Project/ProjectSection";
import ExperienceSection from "../Experience/ExperienceSection";
import Cursor from "../Cursor/Cursor";
import ScrollToTop from "../Navigation/ScrollToTop";
import LoginAdmin from "../Admin/LoginAdmin";

interface OverlayContextProps {
	isOverlayOpen: boolean;
	setIsOverlayOpen: (isOpen: boolean) => void;
}

export const OverlayContext = createContext<OverlayContextProps>({
	isOverlayOpen: false,
	setIsOverlayOpen: () => {},
});

export const OverlayProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

	return (
		<OverlayContext.Provider value={{ isOverlayOpen, setIsOverlayOpen }}>
			{children}
		</OverlayContext.Provider>
	);
};

function App() {
	const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

	return (
		<OverlayProvider>
			<BrowserRouter>
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
						<Routes>
							<Route path="/admin" element={<LoginAdmin />} />
							<Route path="/" element={<PortfolioContent />} />
						</Routes>
					</div>
					<SpeedInsights />
				</div>
			</BrowserRouter>
		</OverlayProvider>
	);
}

function PortfolioContent() {
	const { isOverlayOpen } = useContext(OverlayContext);

	return (
		<div className={`${isOverlayOpen ? "blur" : ""}`}>
			<Intro />
			<ExpertiseSection />
			<ProjectSection />
			<ExperienceSection />
			<ContactSection />
			<DisclaimerSection />
		</div>
	);
}

export default App;
