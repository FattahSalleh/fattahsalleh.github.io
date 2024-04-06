import { ButtonProps, Expertise, MyDetails } from "../../common/types";
import ExpertiseTable from "../ExpertiseTable/ExpertiseTable";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";
import frontendIcon from "../../assets/images/expertise/frontend-icon.svg";
import backendIcon from "../../assets/images/expertise/backend-icon.svg";

function App() {
	const buttons: ButtonProps[] = [
		{ label: "hello world!", sectionId: "firstSection" },
		{ label: "expertise", sectionId: "firstSection" },
		{ label: "project", sectionId: "firstSection" },
		{ label: "experience", sectionId: "firstSection" },
		{ label: "contact", sectionId: "firstSection" },
	];

	const introDetails: MyDetails = {
		name: "Fattah Salleh",
		position: "FULL STACK DEVELOPER \xa0&\xa0 SOFTWARE ENGINEER",
	};

	const expertiseFE: Expertise = {
		src: frontendIcon,
		alt: "Frontend Icon",
		title: "Frontend",
		desc: "I have always loved seeing the things I created come to life. With an eye for design, I have always strived to craft the optimal experience for my clients that perfectly aligns with their needs.",
		subItems: [
			{
				title: "Languages",
				list: ["HTML & CSS", "JavaScript", "TypeScript"],
			},
			{
				title: "Frameworks",
				list: ["React", "Vue"],
			},
			{
				title: "Tools",
				list: ["OpenText CMS", "VSCode", "Figma / Framer"],
			},
		],
	};

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
					<Intro
						name={introDetails.name}
						subTitle={introDetails.position}
					/>
				</section>

				<section
					className="z-10 max-w-full w-full p-12"
					id="secondSection"
				>
					<div className="flex flex-col items-center">
						<p className="font-bold h-full text-7xl drop-shadow-md mb-16">
							My Expertise
						</p>
						<ExpertiseTable expertise={expertiseFE} />
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
