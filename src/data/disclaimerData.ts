import { Disclaimer } from "../common/types";
import figma from "../assets/images/disclaimer/figma.svg";
import vscode from "../assets/images/disclaimer/vscode.svg";
import react from "../assets/images/disclaimer/react.svg";
import tailwind from "../assets/images/disclaimer/tailwind.svg";
import vercel from "../assets/images/disclaimer/vercel.svg";

export const disclaimerData: Disclaimer[] = [
	{
		name: "Figma",
		url: "https://www.figma.com/",
		src: figma,
		alt: "Figma Icon",
	},
	{
		name: "Visual Studio Code",
		url: "https://code.visualstudio.com/",
		src: vscode,
		alt: "VS Code Icon",
	},
	{
		name: "React.js",
		url: "https://react.dev/",
		src: react,
		alt: "React.js Icon",
	},
	{
		name: "Tailwind CSS",
		url: "https://tailwindcss.com/",
		src: tailwind,
		alt: "Tailwind CSS Icon",
	},
	{
		name: "Vercel",
		url: "https://vercel.com/",
		src: vercel,
		alt: "Vercel Icon",
	},
];
