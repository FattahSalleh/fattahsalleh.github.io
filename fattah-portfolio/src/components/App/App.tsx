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
				<section
					className="w-full min-h-screen flex flex-col items-center justify-center pb-24"
					id="firstSection"
				>
					<Intro />
				</section>

				<section
					className="z-10 max-w-full w-full p-12"
					id="secondSection"
				>
					
				</section>
			</main>
		</div>
	);
}

export default App;
