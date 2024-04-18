import { useState } from "react";
import { Projects } from "../../common/types";
import popupIcon from "../../assets/images/general/popup.svg";

function ProjectItem({ project }: { project: Projects }) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<div
			className="flex flex-col border-2 rounded-lg w-full min-h-auto bg-darkGrayBg text-start overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="min-w-full w-full h-64 bg-lightBg flex justify-center overflow-hidden">
				<img
					src={project.src}
					alt={project.alt}
					className={`transform transition-transform duration-500 w-full h-full object-scale-down ${
						isHovered ? "scale-110" : "scale-100"
					}`}
				/>
			</div>
			<div
				className={`h-auto auto flex-grow px-5 py-5 flex flex-col justify-between ${
					isHovered ? "text-blueLine" : "text-lightGray"
				}`}
			>
				<div
					className={
						"font-semibold text-lg text-wrap transition-all duration-1000 ease-in-out"
					}
				>
					{project.title}
				</div>
				<div className="text-sm">
					<span
						className={`flex flex-row flex-wrap items-center transition-all duration-500 ease-in-out ${
							isHovered ? "translate-x-1 text-blueLine" : ""
						}`}
					>
						Show project
						{/* <img
							src={popupIcon}
							alt="Popup Icon"
							className={`w-auto h-3 ml-2 transition-all duration-500
							${isHovered ? "scale-150" : ""}`}
						/> */}
					</span>
				</div>
				{/* <div className="font-medium mt-4">
					<ul className="flex flex-row justify-start overflow-x-auto whitespace-nowrap scroll-auto">
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
				</div> */}
			</div>
		</div>
	);
}

export default ProjectItem;
