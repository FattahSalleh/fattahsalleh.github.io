import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<div className="z-10 max-w-7xl w-full font-mono text-sm">
				<div
					className="max-h-24 w-full flex flex-row justify-between"
					id="topNavBar"
				>
					<div className="">
						<Image
							src="images/fs-icon.svg"
							alt="FS"
							width={32}
							height={32}
						/>
					</div>
					<div className="flex flex-row justify-between font-bold items-center">
						<a href="#">hello world! |</a>
						<a href="#">&nbsp;expertise |</a>
						<a href="#">&nbsp;project |</a>
						<a href="#">&nbsp;experience |</a>
						<a href="#">&nbsp;contact</a>
					</div>
					<div className=""></div>
				</div>

				<div
					className="w-full min-h-screen flex items-center justify-center bg-amber-500"
					id="firstPageContent"
				>
					Test
				</div>
			</div>
		</main>
	);
}
