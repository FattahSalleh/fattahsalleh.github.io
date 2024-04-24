import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
	return (
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
	);
}
