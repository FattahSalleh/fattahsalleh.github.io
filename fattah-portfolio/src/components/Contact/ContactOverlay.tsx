import { contactData } from "../../data/contactDetails";
import ContactOption from "./ContactOption";

export default function ContactOverlay() {
	// Find the contactData of name 'Email'
	const emailContact = contactData.find(
		(contact) => contact.name === "Email"
	);

	const mailtoUrl = "mailto:" + emailContact?.url;

	return (
		<div>
			<div className="h-auto w-fit fixed bottom-0 left-12 right-auto z-10 flex flex-column flex-no-wrap justify-between items-center">
				<ul>
					{contactData.map((contact, index) => (
						<ContactOption contact={contact} key={index} />
					))}
					<div className="block w-0.5 h-24 my-0 mx-auto bg-greenTurquoise"></div>
				</ul>
			</div>

			<div className="h-auto w-fit fixed bottom-0 right-12 left-auto z-10 flex flex-column flex-no-wrap justify-between items-center">
				<ul>
					<div className="text-lightText my-8 text-xs [writing-mode:vertical-rl] font-mono">
						<a href={mailtoUrl} target="_blank" rel="noreferrer">
							<p>{emailContact ? emailContact.url : ""}</p>
						</a>
					</div>
					<div className="block w-0.5 h-24 my-0 mx-auto bg-greenTurquoise"></div>
				</ul>
			</div>
		</div>
	);
}
