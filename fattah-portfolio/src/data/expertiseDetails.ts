import { Expertise } from "../common/types";
import frontendIcon from "../assets/images/expertise/frontend-icon.svg";
import backendIcon from "../assets/images/expertise/backend-icon.svg";

export const expertiseFE: Expertise = {
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
			list: ["VS Code, Android Studio", "Figma, Framer, OpenText"],
		},
	],
};

export const expertiseBE: Expertise = {
	src: backendIcon,
	alt: "Backend Icon",
	title: "Backend",
	titleColor: "#83CD29",
	desc: "As the architect behind the scenes, I engineer efficient solutions for seamless functionality.",
	subItems: [
		{
			title: "Languages",
			list: ["JavaScript (Node.js)", "Java, Kotlin, PHP, Python", "SQL"],
		},
		{
			title: "Frameworks",
			list: ["Express.js, Laravel, Flask"],
		},
		{
			title: "Libraries",
			list: ["Axios, Moment.js"],
		},
		{
			title: "Tools",
			list: ["Postman API", "Jira, Git"],
		},
	],
};
