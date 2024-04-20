import { Contact } from "../../common/types";

export default function ContactOption({ contact }: { contact: Contact }) {
	// Check if the contact given is an email, returns True
	const emailUrl = contact.name === "Email" ? true : false;

	return (
		<li className="my-8">
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
