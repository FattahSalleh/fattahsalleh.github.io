import { useState } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", 
		});
	};

	const handleScroll = () => {
		// Show the button when user scrolls down
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Add scroll event listener to show/hide the button
	window.addEventListener("scroll", handleScroll);

	return (
		<div
			className={`block lg:hidden fixed bottom-5 right-5 z-50 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<button
				className="bg-secondary text-primary rounded-full p-3 focus:outline-none shadow-[0_0px_1px_1px_rgba(80,200,120,1.0)]"
				onClick={scrollToTop}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</button>
		</div>
	);
}
