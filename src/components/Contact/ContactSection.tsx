import hello from "../../assets/images/disclaimer/hello.svg";
import wave from "../../assets/images/disclaimer/wave.svg";
import { useState } from "react";
import { contactData } from "../../data/contactData";
import ContactOption from "./ContactOption";

export default function ContactSection() {
	const [isHovered, setIsHovered] = useState(false);

	// Find the contactData of name 'Email'
	const emailContact = contactData.find(
		(contact) => contact.name === "Email"
	);

	const mailtoUrl = "mailto:" + emailContact?.url;

	return (
		<>
			<section
				className="max-w-full w-full px-4 md:px-24 py-18 md:py-16"
				id="contactSection"
			>
				<div className="flex flex-col items-center">
					<p className="font-bold h-full text-4xl md:text-6xl drop-shadow-md mb-12">
						Get In Touch
					</p>
					<p className="w-full md:w-4/6 text-center">
						I'm actively seeking new opportunities! Whether you have
						an exciting prospect or simply want to connect, feel
						free to reach out. My inbox is always open and I'm eager
						to explore potential collaborations.
					</p>
					<a
						href="mailto:fattah.sallehuddin@gmail.com"
						className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-darkText transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-lightGray group mt-16"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
						<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
							<img src={wave} alt="wave" />
						</span>
						<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
							<img src={hello} alt="hello" />
						</span>
						<span className="relative w-full text-left transition-colors duration-200 ease-in-out">
							{isHovered ? "One more click!" : "Come say hello"}
						</span>
					</a>{" "}
					<div className="block md:hidden">
						<div className="h-auto w-full flex flex-row justify-center items-center">
							<ul className="flex flex-row flex-nowrap">
								{contactData.map((contact, index) => (
									<ContactOption
										contact={contact}
										key={index}
									/>
								))}
							</ul>
						</div>
						<div className="h-auto w-full flex flex-row justify-center items-center">
							<a
								href={mailtoUrl}
								target="_blank"
								rel="noreferrer"
							>
								<p>{emailContact ? emailContact.url : ""}</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
