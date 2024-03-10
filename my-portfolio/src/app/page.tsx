import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between" id="main">
			<div className="z-10 max-w-full w-full text-base bg-green-950" id="firstPage">
				<div
					className="max-h-24 w-full flex flex-row justify-between p-12"
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
					<div className="flex flex-row justify-between font-semibold items-center">
						<a href="#" className="mx-4">hello world!</a>
						<a href="#" className="mx-4">expertise</a>
						<a href="#" className="mx-4">project</a>
						<a href="#" className="mx-4">experience</a>
						<a href="#" className="mx-4">contact</a>
					</div>
					<div className=""></div>
				</div>

				<div
					className="w-full min-h-screen flex flex-col items-center justify-center pb-24"
					id="firstPageContent"
				>
					<div className="font-bold h-full text-9xl" id="firstPageContent-title">FATTAH SALLEH</div> 
					<div className="font-bold">FULL STACK DEVELOPER</div> 
				</div>
      </div>
      <div className="z-10 max-w-full w-full text-base bg-lime-300 p-12" id="secondPage">
        Velit culpa aliqua minim velit adipisicing ullamco commodo aliquip esse elit laborum non qui ullamco. Quis pariatur qui tempor duis ipsum ad fugiat officia eu dolore ipsum. Magna dolor magna enim et occaecat nostrud enim nostrud. Pariatur eiusmod velit culpa elit labore ullamco.
      </div>
		</main>
	);
}
