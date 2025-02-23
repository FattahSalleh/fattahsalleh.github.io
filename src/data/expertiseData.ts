import { Expertise } from "../common/types";
import frontendIcon from "../assets/images/expertise/frontend-icon.svg";
import backendIcon from "../assets/images/expertise/backend-icon.svg";

export const expertiseFE: Expertise = {
	src: frontendIcon,
	alt: "Frontend Icon",
	title: "Frontend",
	titleColor: "#149ECA",
	desc: "With over 5 years of development experience, I have always loved bringing designs to life.",
	subItems: [
		{
			title: "Languages",
			list: ["HTML, CSS (SASS / SCSS)", "JavaScript, TypeScript"],
		},
		{
			title: "Frameworks",
			list: ["Next.js, Jest", "Tailwind CSS, Bootstrap"],
		},
		{
			title: "Libraries",
			list: ["React.js, Vue.js", "TanStack, jQuery"],
		},
		{
			title: "Tools",
			list: ["Cypress, ESLint, Mermaid.js", "Figma, Framer, OpenText"],
		},
	],
};

export const expertiseBE: Expertise = {
	src: backendIcon,
	alt: "Backend Icon",
	title: "Backend",
	titleColor: "#50C878",
	desc: "As the architect behind the scenes, I engineer efficient solutions for seamless functionality.",
	subItems: [
		{
			title: "Languages",
			list: ["JavaScript (Node.js)", "Java, Kotlin",  "PHP, Python", "SQL"],
		},
		{
			title: "Frameworks",
			list: ["Express.js, Flask"],
		},
		{
			title: "Libraries",
			list: ["Axios, Moment.js"],
		},
		{
			title: "Tools",
			list: ["Postman API, PM2", "Jira, Git"],
		},
	],
};
