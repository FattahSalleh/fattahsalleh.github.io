import { Expertise } from "../../common/types";

function ExpertiseTable({ expertise }: { expertise: Expertise }) {
	return (
		<div className="flex flex-col border-2 p-8 mx-4 rounded w-1/3 items-center ">
			<div>
				<div className="flex flex-row items-center justify-center">
					<img
						src={expertise.src}
						alt={expertise.alt}
						width={32}
						height={32}
					/>
					<p className="ml-4 font-bold text-3xl">{expertise.title}</p>
				</div>
				<hr className="w-36 h-1 mx-auto border-0 rounded dark:bg-gray-700 relative -z-10 bottom-2.5 left-6" style={{ backgroundColor: expertise.titleColor }} />
				<p className="mt-8">{expertise.desc}</p>
			</div>
			{expertise.subItems.map((subItem, index) => (
				<div key={index} className="mt-8 text-center">
					<p className="font-bold">{subItem.title}:</p>
					<ul>
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
