import { ButtonProps } from "../../common/types";
import ExpertiseTable from "../ExpertiseTable/ExpertiseTable";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";

function App() {

  const buttons: ButtonProps[] = [
		{ label: "hello world!", sectionId: "firstSection" },
		{ label: "expertise", sectionId: "firstSection" },
		{ label: "project", sectionId: "firstSection" },
		{ label: "experience", sectionId: "firstSection" },
		{ label: "contact", sectionId: "firstSection" },
  ];

	return (
		<div className="App">
			<main
				className="flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText"
				id="main"
			>
				<TopNavBar buttons={buttons} />
				<section
					className="w-full min-h-screen flex flex-col items-center justify-center pb-24"
					id="firstSection"
				>
					<Intro />
				</section>

				<section
					className="z-10 max-w-full w-full p-12"
					id="secondSection"
				>
					<div className="flex flex-col items-center">
						<p className="font-bold h-full text-7xl drop-shadow-md">
							My Expertise
            </p>
            <ExpertiseTable />
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
