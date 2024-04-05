import fsIcon from "../../assets/images/fsicon/fs-icon.svg";
import { ButtonProps } from "../../common/types";

function TopNavBar({ buttons }: { buttons: ButtonProps[] }) {
	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className="max-h-24 w-full flex flex-row justify-between p-12 items-center"
			id="topNavBar"
		>
			<div className="">
				<img src={fsIcon} alt="FS Icon" width={32} height={32} />
			</div>
			<div className="flex flex-row justify-between font-semibold items-center">
				{buttons.map((button, index) => (
					<button
						className="mx-4"
						key={index}
						onClick={() => scrollToSection(button.sectionId)}
					>
						{button.label}
					</button>
				))}
			</div>
			<div className=""></div>
		</nav>
	);
}

export default TopNavBar;
