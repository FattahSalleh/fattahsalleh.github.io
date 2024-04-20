import { Contact } from "../../common/types";

export default function ContactOption({ contact }: { contact: Contact }) {
	return (
		<li className="my-8">
			<a href={contact.url}>
				<img src={contact.src} alt={contact.alt} className="w-6 h-auto" />
			</a>
		</li>
	);
}
