import React, { useState } from "react";
import DOMPurify from "dompurify"; 

export default function LoginAdmin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Basic form validation
		if (!email || !password) {
			setError("Please enter both email and password.");
			return;
		}

		// Dummy login logic (replace with actual login API call)
		try {
			const sanitizedEmail = DOMPurify.sanitize(email); // Sanitize email input
			const sanitizedPassword = DOMPurify.sanitize(password); // Sanitize password input

			const response = await fetch("your_login_api_endpoint", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: sanitizedEmail,
					password: sanitizedPassword,
				}), // Use sanitized input in the request
			});

			if (!response.ok) {
				setError("Invalid email or password. Please try again.");
				return;
			}

			// Successful login logic (redirect user or set authentication token)
			console.log("Login successful!");
		} catch (error) {
			console.error("Error during login:", error);
			setError("An unexpected error occurred. Please try again later.");
		}
	};

	return (
		<div className="flex justify-center items-center w-[80vh] h-[100vh]">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 border border-lightGray p-24 rounded w-full"
			>
				<label htmlFor="email" className="text-lg">
					Email Address:
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border rounded text-darkText"
					required
				/>
				<label htmlFor="password" className="text-lg">
					Password:
				</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 border rounded text-darkText"
					required
				/>
				{error && <p className="text-errorRed">{error}</p>}
				<button
					type="submit"
					className="bg-secondary text-white px-4 py-2 rounded hover:bg-greenTurquoise mt-8"
				>
					Login
				</button>
			</form>
		</div>
	);
}
