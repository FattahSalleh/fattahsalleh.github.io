import { useCallback, useEffect, useRef, useState } from "react";
import fsIcon from "../../assets/images/fsicon/fs-icon.svg";
import burgerMenu from "../../assets/images/general/burger-menu.svg";
import closeIcon from "../../assets/images/general/close.svg";
import resume from "../../assets/pdf/Resume_FattahSalleh_2024.pdf";
import { navBarButtons } from "../../data/navBarData";
import { NavBarProps } from "../../common/types";

export default function NavBar({
	isOverlayOpen,
	setIsOverlayOpen,
}: NavBarProps) {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const overlayRef = useRef<HTMLDivElement>(null);

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

	const closeOverlay = useCallback(() => {
		setIsOverlayOpen(false);
	}, [setIsOverlayOpen]);

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

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				overlayRef.current &&
				!overlayRef.current.contains(event.target as Node)
			) {
				closeOverlay();
			}
		};

		if (isOverlayOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOverlayOpen, closeOverlay]);

	return (
		<>
			{/* Desktop */}
			<nav
				className={`lg:max-h-24 w-full lg:flex flex-no-wrap fixed top-0 z-10 flex-row justify-between px-12 py-4 items-center transition-all duration-500 
			hidden 
            ${
				isScrolled
					? "bg-darkBg text-secondary opacity-95"
					: "text-lightText"
			}`}
				id="navBar"
			>
				<div>
					<img
						src={fsIcon}
						alt="FS Icon"
						width={32}
						height={32}
						className={`transition-all duration-500 ${
							isScrolled ? "opacity-0" : "opacity-100"
						}`}
						loading="lazy"
					/>
				</div>
				<div className="flex flex-row justify-between font-semibold items-center">
					{navBarButtons.map((button, index) => (
						<button
							className="mx-4 hover:scale-110 transition-all duration-300"
							key={index}
							onClick={() => scrollToSection(button.sectionId)}
						>
							{button.label}
						</button>
					))}
				</div>
				<div className="border border-greenTurquoise text-greenTurquoise rounded py-2 px-4 hover:scale-110 hover:shadow-[0_0px_10px_5px_rgba(80,200,120,1.0)] hover:border-greenTurquoise transition-all duration-300">
					<a href={resume} target="_blank" rel="noreferrer">
						Resume
					</a>
				</div>
			</nav>

			{/* Mobile Overlay */}
			<div
				ref={overlayRef}
				className={`fixed top-0 right-0  w-8/12 h-full bg-black bg-opacity-90 bg-darkGrayBg flex flex-col justify-center items-center z-20 transition-all duration-500 ${
					isOverlayOpen
						? "opacity-100 translate-x-0"
						: "opacity-0 translate-x-full"
				}`}
			>
				<button
					className="absolute top-6 right-6 text-lightText"
					onClick={toggleOverlay}
				>
					<img
						src={closeIcon}
						alt="Close Icon"
						width={36}
						height={36}
						loading="lazy"
					/>
				</button>
				<div className="flex flex-col justify-center items-start text-lightText font-semibold md:max-lg:text-2xl">
					{navBarButtons.map((button, index) => (
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
					<div className="border rounded border-greenTurquoise text-greenTurquoise py-2 px-4 mt-16 hover:shadow-[0_0px_10px_5px_rgba(80,200,120,1.0)] hover:border-greenTurquoise transition-all duration-300">
						<a href={resume} target="_blank" rel="noreferrer">
							Resume
						</a>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<nav
				className={`lg:max-h-24 w-full lg:hidden flex-no-wrap fixed top-0 z-10 flex-row justify-between px-6 lg:px-12 py-4 items-center`}
				id="navBarMobile"
			>
				<div
					className={`w-full flex flex-row justify-between items-center ${
						isScrolled ? "-translate-y-full" : ""
					} transition-all duration-500`}
				>
					<img
						src={fsIcon}
						alt="FS Icon"
						width={32}
						height={32}
						className={`transition-all duration-500 ${
							isScrolled ? "opacity-0" : "opacity-100"
						}`}
						loading="lazy"
					/>
					<button onClick={toggleOverlay}>
						<img
							src={burgerMenu}
							alt="Burger Menu Icon"
							width={32}
							height={32}
							className={`transition-all duration-500 ${
								isScrolled ? "opacity-0" : "opacity-100"
							}`}
							loading="lazy"
						/>
					</button>
				</div>
			</nav>
		</>
	);
}
