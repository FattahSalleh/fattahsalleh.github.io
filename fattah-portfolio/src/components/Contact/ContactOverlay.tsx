import { contactData } from "../../data/contactDetails";
import ContactOption from "./ContactOption";

export default function ContactOverlay() {
	return (
		<div>
			<div className="h-auto w-fit fixed bottom-0 left-8 right-auto z-10 flex flex-column flex-no-wrap justify-between items-center">
				<ul>
					{contactData.map((contact, index) => (
						<ContactOption contact={contact} key={index} />
					))}
					<div className="block w-1 h-16 my-0 mx-auto bg-greenTurquoise"></div>
				</ul>
			</div>
		</div>
	);
}
