import Intro from "../Intro/Intro";
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
					id="firstSection"
				>
					<TopNavBar />
					<Intro />
				</div>
				<div
					className="z-10 max-w-full w-full text-base bg-lime-300 p-12"
					id="secondSection"
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
