import { Contact } from "../../common/types";

export default function ContactOption({ contact }: { contact: Contact }) {
	// Check if the contact given is an email, returns True
	const emailUrl = contact.name === "Email" ? true : false;

	return (
		<li className="my-8 mx-4 md:mx-0 hover:scale-150 transition-all duration-300 opacity-100 md:opacity-70 md:hover:opacity-100">
			<a href={emailUrl ? "mailto:" + contact.url : contact.url} target="_blank" rel="noreferrer">
				<img
					src={contact.src}
					alt={contact.alt}
					className="w-6 h-auto"
				/>
			</a>
		</li>
	);
}
