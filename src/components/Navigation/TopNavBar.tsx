import { useCallback, useEffect, useRef, useState } from "react";
import fsIcon from "../../assets/images/fsicon/fs-icon.svg";
import burgerMenu from "../../assets/images/general/burger-menu.svg";
import closeIcon from "../../assets/images/general/close.svg";
import resume from "../../assets/pdf/Resume_FattahSalleh_2024.pdf";
import { topNavBarButtons } from "../../data/topNavBarData";

interface TopNavBarProps {
	isOverlayOpen: boolean;
	setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopNavBar({
	isOverlayOpen,
	setIsOverlayOpen,
}: TopNavBarProps) {
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
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
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
				className={`md:max-h-24 w-full md:flex flex-no-wrap fixed top-0 z-10 flex-row justify-between px-12 py-4 items-center transition-all duration-500 
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
						className={`transition-all duration-500 ${
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
					className="absolute top-6 right-6 text-lightText text-2xl"
					onClick={toggleOverlay}
				>
					<img
						src={closeIcon}
						alt="Close Icon"
						width={36}
						height={36}
					/>
				</button>
				<div className="flex flex-col justify-center items-center text-lightText font-semibold">
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
					<div className="border rounded py-2 px-4 mt-16 hover:shadow-[0_0px_10px_5px_rgba(80,200,120,1.0)] hover:border-greenTurquoise transition-all">
						<a href={resume} target="_blank" rel="noreferrer">
							Resume
						</a>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<nav
				className={`md:max-h-24 w-full md:hidden flex-no-wrap fixed top-0 z-10 flex-row justify-between px-6 md:px-12 py-4 items-center`}
				id="topNavBarMobile"
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
						/>
					</button>
				</div>

				{/* TODO: Remove this notice when responsive view is done. */}
				<p className="absolute top-36 text-xs p-4 text-lightBlue">
					*Please be informed that the responsive view (mobile &
					tablet) is still in development. For the best experience,
					please open this portfolio on desktop.
				</p>
			</nav>
		</>
	);
}
