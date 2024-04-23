import { useEffect, useState } from "react";
import fsIcon from "../../assets/images/fsicon/fs-icon.svg";
import burgerMenu from "../../assets/images/general/burger-menu.svg";
import closeIcon from "../../assets/images/general/close.svg";
import resume from "../../assets/pdf/Resume_FattahSalleh_2024.pdf";
import { topNavBarButtons } from "../../data/topNavBarData";

export default function TopNavBar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			isOverlayOpen && closeOverlay();
		}
	};

	const toggleOverlay = () => {
		setIsOverlayOpen(!isOverlayOpen);
	};

	const closeOverlay = () => {
		setIsOverlayOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{/* Desktop */}
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
				<div className="border rounded py-2 px-4 hover:shadow-[0_0px_10px_5px_rgba(80,200,120,1.0)] hover:border-greenTurquoise transition-all">
					<a href={resume} target="_blank" rel="noreferrer">
						Resume
					</a>
				</div>
			</nav>

			{/* Mobile */}
			<nav
				className={`md:max-h-24 w-full md:hidden flex-no-wrap fixed top-0 z-10 flex-row justify-between px-6 md:px-12 py-4 items-center`}
				id="topNavBar"
			>
				<div
					className={`w-full flex flex-row justify-between items-center ${
						isScrolled ? "-translate-y-full" : ""
					} transition-all duration-1000`}
				>
					<img
						src={fsIcon}
						alt="FS Icon"
						width={32}
						height={32}
						className={`transition-all duration-1000 ${
							isScrolled ? "opacity-0" : "opacity-100"
						}`}
					/>
					<button onClick={toggleOverlay}>
						<img
							src={burgerMenu}
							alt="Burger Menu Icon"
							width={32}
							height={32}
							className={`transition-all duration-1000 ${
								isScrolled ? "opacity-0" : "opacity-100"
							}`}
						/>
					</button>
				</div>

				{/* TODO: Remove this notice when responsive view is done. */}
				<p className="absolute top-36 text-xs p-4 text-lightBlue">
					*Please be informed that the responsive view (mobile &
					tablet) is still in development. For the best experience,
					please open this portfolio on desktop.
				</p>

				{isOverlayOpen && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-20">
						<button
							className="absolute top-6 right-6 text-white text-2xl"
							onClick={toggleOverlay}
						>
							<img
								src={closeIcon}
								alt="Close Icon"
								width={32}
								height={32}
							/>
						</button>
						<div className="flex flex-col justify-center items-center text-white">
							{topNavBarButtons.map((button, index) => (
								<button
									className="my-4"
									key={index}
									onClick={() => {
										scrollToSection(button.sectionId);
									}}
								>
									{button.label}
								</button>
							))}
							<div className="border rounded py-2 px-4 hover:shadow-[0_0px_10px_5px_rgba(80,200,120,1.0)] hover:border-greenTurquoise transition-all">
								<a
									href={resume}
									target="_blank"
									rel="noreferrer"
								>
									Resume
								</a>
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
