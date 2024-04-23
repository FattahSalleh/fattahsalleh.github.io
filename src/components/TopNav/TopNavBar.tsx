import { useEffect, useState } from "react";
import fsIcon from "../../assets/images/fsicon/fs-icon.svg";
import { topNavBarButtons } from "../../data/topNavBarData";
import resume from "../../assets/pdf/Resume_FattahSalleh_2024.pdf";


function TopNavBar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			// Change background and text color when scrolled down
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`md:max-h-24 w-full md:flex flex-no-wrap fixed top-0 z-10 flex-row justify-between px-12 py-4 items-center transition-all duration-1000 
			hidden 
            ${
				isScrolled
					? "bg-darkBg text-secondary opacity-95"
					: "bg-darkBg text-lightText"
			}`}
			id="topNavBar"
		>
			<div>
				<img
					src={fsIcon}
					alt="FS Icon"
					width={32}
					height={32}
					className={`transition-all duration-1000 ${
						isScrolled ? "opacity-0" : "opacity-100"
					}`}
				/>
			</div>
			<div className="flex flex-row justify-between font-semibold items-center">
				{topNavBarButtons.map((button, index) => (
					<button
						className="mx-4"
						key={index}
						onClick={() => scrollToSection(button.sectionId)}
					>
						{button.label}
					</button>
				))}
			</div>
			<div className="">
				<a href={resume} target="_blank" rel="noreferrer">
					Resume
				</a>
			</div>
		</nav>
	);
}

export default TopNavBar;
