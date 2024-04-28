import "./Intro.css";
import { introDetails } from "../../data/introData";

function Intro() {
	const handleSmoothScroll = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();

		const target = document.querySelector<HTMLDivElement>(
			event.currentTarget.getAttribute("href")!
		);

		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			className="w-full h-[calc(100dvh)] lg:min-h-screen flex flex-col items-center justify-center text-center"
			id="introSection"
		>
			<div className="text-center">
				<div
					id="introName"
					className="font-bold text-4xl md:text-6xl lg:text-8xl tracking-wider leading-none drop-shadow-md uppercase overflow-hidden whitespace-nowrap"
				>
					{introDetails.name}
				</div>
				<div
					id="introSubTitle"
					className="font-semibold pt-4 lg:pt-8 text-xs md:text-base lg:text-lg tracking-widest overflow-hidden whitespace-nowrap"
				>
					{introDetails.position}
				</div>
				<div className="field">
					<a href="#expertiseSection" onClick={handleSmoothScroll}>
						<div className="mouseArrow"></div>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Intro;
