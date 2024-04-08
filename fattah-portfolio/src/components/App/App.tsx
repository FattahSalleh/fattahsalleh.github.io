import ExpertiseTable from "../ExpertiseTable/ExpertiseTable";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";
import AnimatedCursor from "react-animated-cursor";
import { topNavBarButtons } from "../../data/topNavBarButtons";
import { introDetails } from "../../data/introDetails";
import { expertiseBE, expertiseFE } from "../../data/expertiseDetails";

function App() {
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
				}}
				outerStyle={{
					border: "1px solid #2E4B35",
				}}
			/>
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

				<section className="max-w-full w-full p-12" id="projectSection">
					<div className="flex flex-col items-center">
						<p className="font-bold h-full text-6xl drop-shadow-md mb-12">
							My Projects
						</p>
						<article className="flex flex-row justify-center">
							Filter by ...
							{/* TODO: To create and add project component */}
						</article>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
