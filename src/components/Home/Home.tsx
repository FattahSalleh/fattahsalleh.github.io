import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignout } from "../../firebase/auth";

export function Home() {
	const { currentUser } = useAuth();

	const [isSigningOut, setIsSigningOut] = useState(false);

	const handleLogout = async () => {
		if (isSigningOut) return;

		try {
			setIsSigningOut(true);
			await doSignout();
		} catch (error) {
			console.error("Error during logout: ", error);
		} finally {
			setIsSigningOut(false);
		}
	};

	return (
		<>
			<div className="text-2xl font-bold pt-14">
				{currentUser && (
					<>
						<div className="text-2xl font-bold pt-14">
							Hello{" "}
							{/* {currentUser!.displayName
					? currentUser!.displayName
					: currentUser!.email} */}
							{currentUser?.email}, you are now logged in.
						</div>
						<div>
							<button
								onClick={handleLogout}
								disabled={isSigningOut}
								className="bg-errorRed text-white px-4 py-2 rounded hover:bg-errorRed opacity-90 mt-8"
							>
								{isSigningOut ? "Logging Out..." : "LOGOUT"}
							</button>{" "}
						</div>
					</>
				)}
				<div>
					Please login here:
					<a
						href="/login"
						className="bg-secondary text-white px-4 py-2 rounded hover:bg-greenTurquoise mt-8"
					>
						Login
					</a>
				</div>
			</div>
		</>
	);
}
