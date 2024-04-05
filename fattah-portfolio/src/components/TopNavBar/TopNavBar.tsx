import fsIcon from "../../assets/images/fsicon/fs-icon.svg";

function TopNavBar() {
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
				<button
					onClick={() => scrollToSection("firstSection")}
					className="mx-4"
				>
					hello world!
				</button>
				<button
					onClick={() => scrollToSection("firstSection")}
					className="mx-4"
				>
					expertise
				</button>
				<button
					onClick={() => scrollToSection("firstSection")}
					className="mx-4"
				>
					project
				</button>
				<button
					onClick={() => scrollToSection("firstSection")}
					className="mx-4"
				>
					experience
				</button>
				<button
					onClick={() => scrollToSection("firstSection")}
					className="mx-4"
				>
					contact
				</button>
			</div>
			<div className=""></div>
		</nav>
	);
}

export default TopNavBar;
