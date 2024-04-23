import "./Intro.css";

function Intro({ name, subTitle }: { name: string; subTitle: string }) {
	return (
		<div className="text-center">
			<div
				id="introName"
				className="font-bold text-4xl md:text-9xl tracking-wider leading-none drop-shadow-md uppercase"
			>
				{name}
			</div>
			<div
				id="introSubTitle"
				className="font-semibold pt-4 md:pt-8 text-base md:text-lg tracking-widest"
			>
				{subTitle}
			</div>
		</div>
	);
}

export default Intro;
