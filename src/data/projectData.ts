import { Projects } from "../types/types";
import allianceBizsmart from "../assets/images/project/alliance_bizsmart.png";
import ocbcDuitNowQR from "../assets/images/project/ocbcduitnowqr-all-lg.png";
import tmGlobal from "../assets/images/project/tmglobal-logo.png";
import ocbccalc from "../assets/images/project/ocbccalc.jpg";
import maybankpage from "../assets/images/project/maybankpage.jpg";
import ocbcpage from "../assets/images/project/ocbcpage.jpg";
import katsana from "../assets/images/project/katsana.jpg";

export const projects: Projects[] = [
	{
		src: allianceBizsmart,
		alt: "Alliance Bank BizSmart Solution",
		title: "Alliance Bank BizSmart Solution",
		desc: "The Alliance BizSmart® is your daily business banking solution at your fingertips.",
		techStack: ["jQuery", "Bootstrap", "Axios"],
		url: "https://bizsmartsolution.alliancebank.com.my/banking/",
	},
	{
		src: tmGlobal,
		alt: "Telekom Malaysia Global",
		title: "Telekom Malaysia Global",
		desc: "Enhance your business with catered solutions domestically and internationally.",
		techStack: ["jQuery", "Bootstrap"],
		url: "https://tmglobal.com.my/products-and-solutions/data-solutions/",
	},
	{
		src: ocbcDuitNowQR,
		alt: "OCBC Malaysia DuitNow QR",
		title: "OCBC Malaysia DuitNow QR",
		desc: "It's simpler and faster with OCBC DuitNow QR. Simply scan or flash your DuitNow QR code for funds transfer or payments.",
		techStack: ["Kotlin"],
		url: "https://play.google.com/store/apps/details?id=com.ocbc.mobilebv.my&hl=en_ZA",
	},
	{
		src: ocbccalc,
		alt: "OCBC Malaysia Mortgage Calculator",
		title: "OCBC Malaysia Mortgage Calculator",
		desc: "",
		techStack: [],
		url: "https://www.ocbc.com.my/personal-banking/life-goals/mortgage-planner",
	},
	{
		src: maybankpage,
		alt: "Maybank Investment Banking",
		title: "Maybank Investment Banking",
		desc: "",
		techStack: [],
		url: "https://www.maybank.com/investment-banking/sg/index.html",
	},
	{
		src: ocbcpage,
		alt: "OCBC Group Malaysia Revamp",
		title: "OCBC Group Malaysia Revamp",
		desc: "",
		techStack: [],
		url: "https://www.ocbc.com.my/group/gateway",
	},
	{
		src: katsana,
		alt: "Katsana Platform Software",
		title: "Katsana Platform Software",
		desc: "",
		techStack: [],
		url: "https://my.katsana.com/login",
	},
];
