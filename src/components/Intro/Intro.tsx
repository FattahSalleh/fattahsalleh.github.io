import "./Intro.css";
import { introDetails } from "../../data/introData";

function Intro() {
	return (
		<section
			className="w-full min-h-screen flex flex-col items-center justify-center pb-8 md:pb-24"
			id="introSection"
		>
			<div className="text-center">
				<div
					id="introName"
					className="font-bold text-4xl md:text-9xl tracking-wider leading-none drop-shadow-md uppercase"
				>
					{introDetails.name}
				</div>
				<div
					id="introSubTitle"
					className="font-semibold pt-4 md:pt-8 text-base md:text-lg tracking-widest"
				>
					{introDetails.position}
				</div>
			</div>
		</section>
	);
}

export default Intro;
