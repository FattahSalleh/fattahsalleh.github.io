import TopNavBar from "../TopNavBar/TopNavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<main
				className="flex min-h-screen flex-col items-center justify-between bg-gray-300"
				id="main"
			>
				<div
					className="z-10 max-w-full w-full text-base bg-green-950"
					id="firstPage"
				>
					<TopNavBar />
					<div
						className="w-full min-h-screen flex flex-col items-center justify-center pb-24"
						id="firstPageContent"
					>
						<div
							className="font-bold h-full text-9xl tracking-wider leading-none drop-shadow-md"
							id="firstPageContent-title"
						>
							FATTAH SALLEH
						</div>
						<div className="font-bold pt-16">
							FULL STACK DEVELOPER
						</div>
					</div>
				</div>
				<div
					className="z-10 max-w-full w-full text-base bg-lime-300 p-12"
					id="secondPage"
				>
					Velit culpa aliqua minim velit adipisicing ullamco commodo
					aliquip esse elit laborum non qui ullamco. Quis pariatur qui
					tempor duis ipsum ad fugiat officia eu dolore ipsum. Magna
					dolor magna enim et occaecat nostrud enim nostrud. Pariatur
					eiusmod velit culpa elit labore ullamco.
				</div>
			</main>
		</div>
	);
}

export default App;
