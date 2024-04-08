import allianceBizsmart from "../../assets/images/project/alliance_bizsmart.png";

function ProjectItem() {
	return (
		<div className="flex flex-col border-2 rounded-lg w-full items-center bg-primary">
			<div className="min-w-full w-full h-3/4 bg-lightBg">
				<img src={allianceBizsmart} alt="Alliance Bizsmart" />
			</div>
			<div className="h-full min-w-full px-12 py-4 ">
				<p className="font-bold text-2xl">title</p>
				<small className="mt-4">desc</small>
			</div>

			{/* {expertise.subItems.map((subItem, index) => (
				<div key={index} className="mt-8 text-center">
					<p className="font-bold">{subItem.title}:</p>
					<ul>
						{subItem.list.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</div>
			))} */}
		</div>
	);
}

export default ProjectItem;
