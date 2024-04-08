import { useState } from "react";
import { Projects } from "../../common/types";

function ProjectItem({ project }: { project: Projects }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="flex flex-col border-2 rounded-lg w-full bg-darkGrayBg text-start overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="min-w-full w-full h-3/4 bg-lightBg">
				<img
					src={project.src}
					alt={project.alt}
					className={`transform transition-transform duration-500 ${
						isHovered ? "scale-110" : "scale-100"
					}`}
				/>
			</div>
			<div className="h-full px-12 py-4 ">
				<p className="font-bold text-lg">{project.title}</p>
				{/* <small className="mt-4">{project.desc}</small> */}
				<div className="font-medium my-1">
					<ul className="flex flex-wrap flex-row">
						{project.techStack.map((tech, index) => (
							<li
								key={index}
								className="text-sm bg-secondary opacity-85 mr-2 my-1 px-4 py-0.5 border rounded-2xl"
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
