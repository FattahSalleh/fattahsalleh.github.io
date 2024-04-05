import Intro from "../Intro/Intro";
import TopNavBar from "../TopNavBar/TopNavBar";

function App() {
	return (
		<div className="App">
			<main
				className="flex min-h-screen flex-col items-center justify-between bg-darkBg text-lightText"
				id="main"
			>
					<TopNavBar />
					<Intro />
				<section
					className="z-10 max-w-full w-full text-base bg-lime-300 p-12"
					id="secondSection"
				>
					Velit culpa aliqua minim velit adipisicing ullamco commodo
					aliquip esse elit laborum non qui ullamco. Quis pariatur qui
					tempor duis ipsum ad fugiat officia eu dolore ipsum. Magna
					dolor magna enim et occaecat nostrud enim nostrud. Pariatur
					eiusmod velit culpa elit labore ullamco.
				</section>
			</main>
		</div>
	);
}

export default App;
