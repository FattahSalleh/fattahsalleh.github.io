import { useState } from "react";
import { Projects } from "../../common/types";

function ProjectItem({ project }: { project: Projects }) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<div
			className="flex flex-col border-2 rounded-lg w-full min-h-auto bg-darkGrayBg text-start overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="min-w-full w-full h-fit bg-lightBg flex justify-center overflow-hidden">
				<img
					src={project.src}
					alt={project.alt}
					className={`transform transition-transform duration-500 w-full h-full object-cover ${
						isHovered ? "scale-110" : "scale-100"
					}`}
				/>
			</div>
			<div className="h-auto flex-grow px-12 py-4 flex flex-col justify-between">
				<div
					className={`font-bold text-lg 
                    ${
						isHovered ? "text-wrap" : "truncate"
					} transition-all duration-1000 ease-in-out
                    `}
				>
					{project.title}
					{/* <p className="font-bold text-lg">{project.title}</p> */}
					{/* <small className="mt-4 pt-4 font-mono">
						{project.desc}
					</small> */}
				</div>
				<div className="font-medium mt-auto">
					<ul className="flex flex-wrap flex-row justify-start">
						{project.techStack.map((tech, index) => (
							<li
								key={index}
								className={`text-sm text-secondary bg-primary mr-2 my-1 px-4 py-1 rounded-2xl transition-all duration-300 ${
									isHovered ? "opacity-100" : "opacity-85 "
								}`}
							>
								{tech}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
