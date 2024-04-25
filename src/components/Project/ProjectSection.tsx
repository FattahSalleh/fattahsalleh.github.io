import ProjectItem from "../Project/ProjectItem";
import { projects } from "../../data/projectData";

export default function ProjectSection() {
	return (
		<section
			className="max-w-full w-full px-4 md:px-32 py-12 md:py-16"
			id="projectSection"
		>
			<div className="flex flex-col items-center">
				<p className="font-bold h-full text-4xl md:text-6xl drop-shadow-md mb-12">
					Projects Done
				</p>
				<article className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-3">
					{projects.map((project, index) => (
						<ProjectItem key={index} project={project} />
					))}
				</article>
			</div>
		</section>
	);
}
