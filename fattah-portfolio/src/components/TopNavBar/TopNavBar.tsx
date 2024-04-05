import fsIcon from '../../assets/images/fsicon/fs-icon.svg';

function TopNavBar() {
	return (
		<div
			className="max-h-24 w-full flex flex-row justify-between p-12"
			id="topNavBar"
		>
			<div className="">
				<img
					src={fsIcon}
					alt="FS Icon"
					width={32}
					height={32}
				/>
			</div>
			<div className="flex flex-row justify-between font-semibold items-center">
				<a href="#" className="mx-4">
					hello world!
				</a>
				<a href="#" className="mx-4">
					expertise
				</a>
				<a href="#" className="mx-4">
					project
				</a>
				<a href="#" className="mx-4">
					experience
				</a>
				<a href="#" className="mx-4">
					contact
				</a>
			</div>
			<div className=""></div>
		</div>
	);
}

export default TopNavBar;
