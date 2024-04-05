import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p className="text-3xl font-bold underline text-red-600">
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<h1 className="text-3xl font-bold underline text-red-600">
					Simple React Typescript Tailwind Sample
				</h1>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
		</div>
  );
}

export default App;
