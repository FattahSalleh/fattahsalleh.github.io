function Intro({ name, subTitle }: { name: string; subTitle: string }) {
	return (
		<>
			<div
				className="font-bold h-full text-9xl tracking-wider leading-none drop-shadow-md uppercase"
				id="firstSectionContent-title"
			>
				{name}
			</div>
			<div className="font-semibold pt-8 text-lg">{subTitle}</div>
		</>
	);
}

export default Intro;
