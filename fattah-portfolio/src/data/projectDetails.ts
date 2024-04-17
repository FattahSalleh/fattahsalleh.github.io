import { Projects } from "../common/types";
import allianceBizsmart from "../assets/images/project/alliance_bizsmart.png";
import ocbcDuitNowQR from "../assets/images/project/ocbcduitnowqr-all-lg.png";
import tmGlobal from "../assets/images/project/tm-global-logo.svg";

export const projects: Projects[] = [
	{
		src: allianceBizsmart,
		alt: "Alliance Bank BizSmart Solution",
		title: "Alliance BizSmart Solution",
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
];
