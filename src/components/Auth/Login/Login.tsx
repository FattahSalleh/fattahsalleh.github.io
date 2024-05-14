import React, { useState } from "react";
import DOMPurify from "dompurify";
import { useAuth } from "../../../contexts/authContext";
import {
	doSignInWithEmailAndPassword,
	doSignInWithGoogle,
} from "../../../firebase/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
	const { userLoggedIn } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSigningIn, setIsSigningIn] = useState(false);
	const [error, setError] = useState("");

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Basic form validation
		if (!email || !password) {
			setError("Please enter both email and password.");
			return;
		}

		try {
			const sanitizedEmail = DOMPurify.sanitize(email); // Sanitize email input
			const sanitizedPassword = DOMPurify.sanitize(password); // Sanitize password input

			if (!isSigningIn) {
				setIsSigningIn(true);
				await doSignInWithEmailAndPassword(
					sanitizedEmail,
					sanitizedPassword
				);
			}

		} catch (error) {
			console.error("Error during login:", error);
			setIsSigningIn(false);
			setError(
				"Invalid email address or password. Please make sure you've entered the correct credentials."
			);
		}
	};

	const onGoogleSignIn = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!isSigningIn) {
			setIsSigningIn(true);
			doSignInWithGoogle().catch((err) => {
				setIsSigningIn(false);
			});
		}
	};

	return (
		<div className="flex justify-center items-center w-[80vh] h-[100vh]">
			{userLoggedIn && <Navigate to={"/home"} replace={true} />}
			<form
				onSubmit={handleLogin}
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
					disabled={isSigningIn}
					className="bg-secondary text-white px-4 py-2 rounded hover:bg-greenTurquoise mt-8"
				>
					{isSigningIn ? "Logging In...":"LOGIN"}
				</button>

				<hr />

				<button
					disabled={isSigningIn}
					onClick={(
						e: React.MouseEvent<HTMLButtonElement, MouseEvent>
					) => {
						onGoogleSignIn(e);
					}}
				>
					GOOGLE SIGN IN
				</button>
			</form>
		</div>
	);
}
