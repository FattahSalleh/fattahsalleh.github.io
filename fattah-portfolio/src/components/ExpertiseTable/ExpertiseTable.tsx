import { Expertise } from "../../common/types";

function ExpertiseTableContent({ expertise }: { expertise: Expertise }) {
	return (
		<div className="flex flex-col border-2 p-8 rounded w-1/3 items-center justify-center">
			<div>
				<div className="flex flex-row items-center justify-center">
					<img
						src={expertise.src}
						alt={expertise.alt}
						width={32}
						height={32}
					/>
					<p className="ml-8 font-bold text-3xl">{expertise.title}</p>
				</div>
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

export default ExpertiseTableContent;
