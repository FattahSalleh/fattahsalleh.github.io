import { contactData } from "../../data/contactDetails";
import ContactOption from "./ContactOption";

export default function ContactOverlay() {
	return (
		<div className="bg-primary">
			{contactData.map((contact, index) => (
				<ContactOption contact={contact} key={index} />
			))}
		</div>
	);
}
