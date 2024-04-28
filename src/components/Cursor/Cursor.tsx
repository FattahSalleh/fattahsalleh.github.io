import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
	const [showCursor, setShowCursor] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			// Check if the window width is greater than or equal to 768px (non-mobile), True/False
			setShowCursor(window.innerWidth >= 768);
		};

		// Call handleResize once to set initial state
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array ensures the effect runs only once

	// Render the AnimatedCursor component only if showCursor is true
	return showCursor ? (
		<AnimatedCursor
			innerSize={8}
			outerSize={35}
			innerScale={1}
			outerScale={2}
			outerAlpha={0}
			innerStyle={{
				backgroundColor: "#50C878",
				boxShadow: "0px 0px 10000px 20px #50C878",
			}}
			outerStyle={{
				border: "1px solid #2E4B35",
			}}
		/>
	) : null;
}
