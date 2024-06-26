import { useState } from "react";
import { Projects } from "../../common/types";
import newtabLine from "../../assets/images/general/newtab-line.svg";
import newtabLineGreen from "../../assets/images/general/newtab-line_green.svg";

function ProjectItem({ project }: { project: Projects }) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<div className="w-full">
			<a href={project.url} target="_blank" rel="noreferrer">
				<div
					className={`flex flex-col border-0 rounded-lg w-full max-h-72 lg:max-h-max min-h-auto bg-darkGrayBg text-start overflow-hidden transition-all duration-500 ${
						isHovered
							? "shadow-[0_0px_30px_5px_rgba(80,200,120,1.0)]"
							: ""
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="min-w-full w-full h-auto md:h-56 lg:h-48 bg-lightBg flex justify-center overflow-hidden">
						<img
							src={project.src}
							alt={project.alt}
							className={`transform transition-transform duration-500 w-full h-full object-scale-down ${
								isHovered ? "scale-110" : "scale-100"
							}`}
							loading="lazy"
						/>
					</div>
					<div
						className={`h-auto auto flex-grow px-5 py-5 flex flex-col justify-between transition-all duration-300 ease-in-out ${
							isHovered
								? "text-lightGreen translate-x-2"
								: "text-lightGray"
						}`}
					>
						<div
							className={`font-semibold text-lg text-wrap md:max-lg:text-base md:max-lg:text-nowrap`}
						>
							{project.title}
						</div>
						<div className="text-sm">
							<span
								className={`flex flex-row flex-wrap items-center`}
							>
								Show project
								<img
									src={
										isHovered ? newtabLineGreen : newtabLine
									}
									alt="Popup Icon"
									className={`w-auto h-3 ml-2 transition-all duration-500 ease-in-out transform
									${isHovered ? "scale-125 translate-x-1" : "translate-x-0"}`}
									loading="lazy"
								/>
							</span>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ProjectItem;
