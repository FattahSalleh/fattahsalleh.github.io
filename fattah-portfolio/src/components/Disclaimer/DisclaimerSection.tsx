import { Disclaimer } from "../../common/types";

export default function DisclaimerSection({
	disclaimerData,
}: {
	disclaimerData: Disclaimer[];
}) {
	return (
		<div className="w-fit">
			<a
				href="https://github.com/FattahSalleh/fattahsalleh.github.io"
				target="_blank"
				rel="noreferrer"
			>
				<div className="text-xs text-center">
					Designed and built by Fattah Salleh
				</div>
			</a>
			<div className="h-auto w-auto flex flex-row flex-no-wrap items-center justify-center">
				<ul>
					<li className="mt-4 mb-12 hover:scale-150 transition-transform duration-300">
						{disclaimerData.map((tech, index) => (
							<a
								href={tech.src}
								target="_blank"
								rel="noreferrer"
								key={index}
							>
								<img
									src={tech.src}
									alt={tech.alt}
									className="w-6 h-auto"
								/>
							</a>
						))}
					</li>
				</ul>
			</div>
		</div>
	);
}
