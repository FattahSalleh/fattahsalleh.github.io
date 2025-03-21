import { Contact } from "../types/types";
import github from "../assets/images/contact/github.svg";
import linkedin from "../assets/images/contact/linkedin.svg";
import email from "../assets/images/contact/email.svg";

export const contactData: Contact[] = [
	{
		name: "Github",
		url: "https://github.com/FattahSalleh",
		src: github,
		alt: "Github Icon",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/fattah-salleh/",
		src: linkedin,
		alt: "LinkedIn Icon",
	},
	{
		name: "Email",
		url: "fattah.sallehuddin@gmail.com",
		src: email,
		alt: "Email Icon",
	},
];
