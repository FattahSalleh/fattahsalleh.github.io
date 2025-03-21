import { Expertise } from "../../types/types";
import "./Expertise.css";

function ExpertiseTable({ expertise }: { expertise: Expertise }) {
	return (
		<div
			className={`flex flex-col border-0 p-8 mx-4 rounded flex-wrap max-w-full lg:w-1/3 items-center my-2 lg:my-0 border-shadow-animation`}
			style={
				{
					"--expertise-color": expertise.titleColor,
				} as React.CSSProperties
			}
		>
			<div>
				<div className="flex flex-row items-center justify-center">
					<img
						src={expertise.src}
						alt={expertise.alt}
						className="w-6 h-6 lg:w-8 lg:h-8"
						loading="lazy"
					/>
					<p className="ml-4 font-bold text-2xl lg:text-3xl z-10">
						{expertise.title}
					</p>
				</div>
				<hr
					className="w-28 lg:w-36 h-1 mx-auto border-0 rounded dark:bg-gray-700 relative z-5 bottom-2.5 left-5 lg:left-6"
					style={{ backgroundColor: expertise.titleColor }}
				/>
				<p className="mt-8 text-center">{expertise.desc}</p>
			</div>
			{expertise.subItems.map((subItem, index) => (
				<div key={index} className="mt-8 text-center">
					<p className="font-bold">{subItem.title}:</p>
					<ul className="text-sm lg:text-base">
						{subItem.list.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default ExpertiseTable;
