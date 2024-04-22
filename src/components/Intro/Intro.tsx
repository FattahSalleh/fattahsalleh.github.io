import "./Intro.css";

function Intro({ name, subTitle }: { name: string; subTitle: string }) {
	return (
		<div className="text-center">
			<div
				id="introName"
				className="font-bold h-full text-9xl tracking-wider leading-none drop-shadow-md uppercase"
			>
				{name}
			</div>
			<div
				id="introSubTitle"
				className="font-semibold pt-8 text-lg tracking-widest"
			>
				{subTitle}
			</div>
		</div>
	);
}

export default Intro;
