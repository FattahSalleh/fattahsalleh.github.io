import { Experience } from "../../common/types";
import locationIcon from "../../assets/images/experience/location.svg";
import plusIcon from "../../assets/images/general/plus.svg";
import minusIcon from "../../assets/images/general/minus.svg";
import { useEffect, useRef, useState } from "react";

function ExperienceList({
	experience,
	isOpen,
	toggleAccordion,
}: {
	experience: Experience;
	isOpen: boolean;
	toggleAccordion: () => void;
}) {
	const [contentLoaded, setContentLoaded] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setContentLoaded(true);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (contentRef.current) {
			if (isOpen) {
				contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
			} else {
				contentRef.current.style.height = "0px";
			}
		}
	}, [isOpen]);
	return (
		<div className="w-3/4 rounded-lg shadow-md mb-4 ">
			<div
				className={`px-8 py-4 cursor-pointer flex justify-between items-center font-medium hover:shadow-[0_0px_30px_5px_rgba(80,200,120,1.0)] rounded-lg bg-primary ${
					isOpen
						? "shadow-[0_0px_30px_5px_rgba(80,200,120,1.0)] !important"
						: ""
				} transition-all duration-500`}
				onClick={toggleAccordion}
			>
				<div className="flex justify-between items-center">
					<span>{experience.position}&nbsp;</span>
					<span className="text-lightGreen">
						@ {experience.company}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<div className="mr-8">{experience.timeRange}</div>
					<div className="text-base h-auto w-4">
						{isOpen ? (
							<img src={minusIcon} alt="Minus Icon" />
						) : (
							<img src={plusIcon} alt="Plus Icon" />
						)}
					</div>
				</div>
			</div>
			<div
				ref={contentRef}
				className="overflow-hidden transition-height duration-500 ease-in-out"
			>
				{contentLoaded && (
					<div className={`px-4 py-4 bg-darkGrayBg rounded-lg mt-2`}>
						<div className="mb-2 flex flex-row text-lightGray font-mono text-sm items-center">
							<span>
								<img
									src={locationIcon}
									alt="Location Icon"
									className="w-auto h-4 mr-2"
								/>
							</span>
							<span>{experience.location}</span>
						</div>
						<div className="flex flex-row items-center">
							<div className="w-3/4">
								<ul className="list-disc pl-4 mb-4">
									{experience.responsibility.map(
										(resp, index) => (
											<li key={index} className="">
												{resp}
											</li>
										)
									)}
								</ul>
							</div>
							<div className="w-1/4 justify-center flex hover:scale-110 transition-transform duration-300">
								<a
									href={experience.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={experience.src}
										alt={experience.alt}
										className="h-auto w-44"
									/>
								</a>
							</div>
						</div>

						<div className="font-medium my-1 w-3/4">
							<ul className="flex flex-wrap flex-row">
								{experience.techStack.map((exp, index) => (
									<li
										key={index}
										className={`text-sm text-greenTurquoise bg-primary mr-2 my-1 px-4 py-1 rounded-2xl transition-all duration-300`}
									>
										{exp}
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ExperienceList;