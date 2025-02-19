import { Experience } from "../common/types";
import trinergyLogo from "../assets/images/experience/trinergy-wbg.png";
// import fujifilmLogo from "../assets/images/experience/fujifilm.svg";
import katsanaLogo from "../assets/images/experience/katsana.svg";
import tmalLogo from "../assets/images/experience/TMAlphaLab.svg";
import accentureLogo from "../assets/images/experience/accenture.png";

export const experience: Experience[] = [
	{
		position: "Software Developer",
		company: "Accenture",
		timeRange: "June 2024 - Current",
		responsibility: [
			"Point 1",
			"Point 2",
			"Point 3"
		],
		techStack: [
			"React.js",
			"Next.js",
			"ShadCN",
			"TanStack Query",
			"Tailwind CSS",
		],
		url: "https://www.accenture.com/my-en",
		location: "Kuala Lumpur, Malaysia",
		src: accentureLogo,
		alt: "Accenture Logo",
	},
	{
		position: "Web Developer",
		company: "Katsana Fleet Services",
		timeRange: "Nov 2023 - June 2024",
		responsibility: [
			"Designed cohesive websites, tablet, and mobile mock-ups using Figma, while also presenting design concepts and proposals to management for approval and implementation.",
			"Led UI/UX enhancements for both existing and new products, guiding the process from conceptualization to high-fidelity web designs and prototypes.",
			"Developed reusable components using Vue.js while delving into PHP Laravel, elevating user experience and interactions through refined coding practices.",
		],
		techStack: [
			"Vue.js",
			"Tailwind CSS",
			"SASS/SCSS",
			"Chart.js",
			"PHP",
			"Laravel",
			"Figma",
		],
		url: "https://www.katsana.com/",
		location: "Kuala Lumpur, Malaysia",
		src: katsanaLogo,
		alt: "Katsana Logo",
	},
	{
		position: "Digital Developer",
		company: "Trinergy Digital",
		timeRange: "Mar 2021 - Oct 2023",
		responsibility: [
			"Contributed to over 6 projects using various libraries and frameworks such as jQuery, Pug, Vue, React, NodeJS and Bootstrap, ensuring the creation of responsive, error-free and intuitive websites experiences tailored to the specific needs of banking clients.",
			"Pioneered the implementation of OpenText CMS, leading a team of developers using Agile methodology to revamp corporate websites while maintaining existing functionality.",
			"Trained customers and team members on website maintenance and updates while creating comprehensive documentation, increasing maintainability and reduction in support requests.",
			"Built an Online Banking DuitNow QR native mobile application using Kotlin in Android Studio.",
		],
		techStack: [
			"jQuery",
			"Vue",
			"React",
			"Pug",
			"Bootstrap",
			"Node.js",
			"Axios",
			"Java",
			"Kotlin",
			"Android Studio",
			"OpenText CMS",
			"Git",
		],
		url: "https://www.trinergydigital.com/",
		location: "Selangor, Malaysia",
		src: trinergyLogo,
		alt: "Trinergy Logo",
	},
	// {
	// 	position: "Technical Support Exec. - NZ Department",
	// 	company: "Fuji Xerox / FujiFilm",
	// 	timeRange: "July 2020 - Feb 2021",
	// 	responsibility: [
	// 		"Provided technical support to customers from New Zealand, troubleshooting hardware, software and network issues, resulting in a 95% customer satisfaction rating.",
	// 	],
	// 	techStack: ["Computer Network", "Communication"],
	// 	url: "https://www.fujifilm.com/fbmy/en/contact-us",
	// 	location: "Selangor, Malaysia",
	// 	src: fujifilmLogo,
	// 	alt: "FujiFilm Logo",
	// },
	{
		position: "Internship",
		company: "Telekom Malaysia Alpha Lab",
		timeRange: "Apr 2019 - June 2019",
		responsibility: [
			"Researched and implemented front-end enhancements for the company’s web portal via ColdFusion, making the portal more user friendly and accessible.",
		],
		techStack: ["HTML", "CSS", "JavaScript", "ColdFusion"],
		url: "https://www.youtube.com/watch?v=Jp-EX1dRSB8&ab_channel=FATTAHSALLEHUDDIN",
		location: "Putrajaya, Malaysia",
		src: tmalLogo,
		alt: "Telekom Malaysia Alpha Lab Logo",
	},
];
