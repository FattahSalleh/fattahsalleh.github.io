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
			<div className="min-w-full w-full h-4/6 bg-lightBg flex justify-center overflow-hidden">
				<img
					src={project.src}
					alt={project.alt}
					className={`transform transition-transform duration-500 object-center h-96 object-scale-down ${
						isHovered ? "scale-110" : "scale-100"
					}`}
				/>
			</div>
			<div className="h-1/6 px-12 py-4">
				<p className="font-bold text-lg text-wrap">
					{/* className={`font-bold text-lg 
                    ${
						isHovered ? "text-wrap" : "truncate"
                        } transition-all duration-1000 ease-in-out
                    `} */}
					{project.title}
				</p>
				{/* <small className="mt-4">{project.desc}</small> */}
				<div className="font-medium my-1">
					<ul className="flex flex-wrap flex-row">
						{project.techStack.map((tech, index) => (
							<li
								key={index}
								className={`text-sm bg-secondary mr-2 my-1 px-4 py-0.5 border rounded-2xl transition-all duration-300 ${
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
