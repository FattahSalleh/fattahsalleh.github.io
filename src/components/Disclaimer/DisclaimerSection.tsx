import { Disclaimer } from "../../common/types";

export default function DisclaimerSection({
	disclaimerData,
}: {
	disclaimerData: Disclaimer[];
}) {
	return (
		<section className="mt-24" id="disclaimerSection">
			<div className="w-full text-center">
				<a
					href="https://github.com/FattahSalleh/fattahsalleh.github.io"
					target="_blank"
					rel="noreferrer"
					className="text-xs text-center font-mono hover:scale-110 hover:text-greenTurquoise transition-all duration-300"
				>
					Designed and built by Fattah Salleh
				</a>
				<div className="h-auto w-auto flex flex-row flex-no-wrap items-center justify-center">
					<ul className="flex flex-row flex-no-wrap">
						{disclaimerData.map((tech, index) => (
							<li
								className="mt-4 mb-12 mx-4 hover:scale-150 transition-transform duration-300"
								key={index}
							>
								<a
									href={tech.url}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={tech.src}
										alt={tech.alt}
										className="w-6 h-auto"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
