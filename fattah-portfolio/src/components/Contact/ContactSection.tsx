export default function contactSection() {
	return (
		<>
			<p className="w-4/6 text-center">
				I'm actively seeking new opportunities! Whether you have an
				exciting prospect or simply want to connect, feel free to reach
				out. My inbox is always open and I'm eager to explore potential
				collaborations.
			</p>
			<a
				href="#_"
				className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-darkText transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-lightGray group mt-16"
			>
				<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
				<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
					<svg
						className="w-5 h-5 text-secondary"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						></path>
					</svg>
				</span>
				<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
					<svg
						className="w-5 h-5 text-secondary"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						></path>
					</svg>
				</span>
				<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-lightText">
					Come Say Hello
				</span>
			</a>{" "}
		</>
	);
}
