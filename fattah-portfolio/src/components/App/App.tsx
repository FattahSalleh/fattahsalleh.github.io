import { ButtonProps, Expertise, MyDetails } from "../../common/types";
import ExpertiseTable from "../ExpertiseTable/ExpertiseTable";
import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";
import frontendIcon from "../../assets/images/expertise/frontend-icon.svg";
import backendIcon from "../../assets/images/expertise/backend-icon.svg";

function App() {
	const buttons: ButtonProps[] = [
		{ label: "hello world!", sectionId: "introSection" },
		{ label: "expertise", sectionId: "secondSectionContainer" },
		{ label: "project", sectionId: "introSection" },
		{ label: "experience", sectionId: "introSection" },
		{ label: "contact", sectionId: "introSection" },
	];

	const introDetails: MyDetails = {
		name: "Fattah Salleh",
		position: "FULL STACK DEVELOPER \xa0&\xa0 SOFTWARE ENGINEER",
	};

	const expertiseFE: Expertise = {
		src: frontendIcon,
		alt: "Frontend Icon",
		title: "Frontend",
		titleColor: "#149ECA",
		desc: "With over 4 years of development experience, I have always loved bringing designs to life.",
		subItems: [
			{
				title: "Languages",
				list: ["HTML, CSS (SASS / SCSS)", "JavaScript, TypeScript"],
			},
			{
				title: "Frameworks",
				list: ["Tailwind CSS, Bootstrap"],
			},
			{
				title: "Libraries",
				list: ["React.js, Vue.js", "jQuery, Pug"],
			},
			{
				title: "Tools",
				list: ["VS Code, Android Studio", "Figma, Framer", "OpenText"],
			},
		],
	};

	const expertiseBE: Expertise = {
		src: backendIcon,
		alt: "Backend Icon",
		title: "Backend",
		titleColor: "#83CD29",
		desc: "As the architect behind the scenes, I engineer efficient solutions for seamless functionality.",
		subItems: [
			{
				title: "Languages",
				list: [
					"JavaScript (Node.js)",
					"Java, Kotlin, PHP, Python",
					"SQL",
				],
			},
			{
				title: "Frameworks",
				list: ["Express.js, Laravel, Flask"],
			},
			{
				title: "Libraries",
				list: ["Axios", "Moment.js"],
			},
			{
				title: "Tools",
				list: ["Postman API", "Jira, Git"],
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
					id="introSection"
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
					<div
						className="flex flex-col items-center"
						id="secondSectionContainer"
					>
						<p className="font-bold h-full text-7xl drop-shadow-md mb-16">
							My Expertise
						</p>
						<article className="flex flex-row justify-center">
							<ExpertiseTable expertise={expertiseFE} />
							<ExpertiseTable expertise={expertiseBE} />
						</article>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
