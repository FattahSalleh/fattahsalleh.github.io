import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignout } from "../../firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

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

	const handleReadFromDB = async () => {
		try {
			const usersCollection = collection(db, "users");
			const usersSnapshot = await getDocs(usersCollection);
			usersSnapshot.forEach((doc) => {
				console.log(doc.id, " => ", doc.data());
			});
		} catch (error) {
			console.error("Error reading from database: ", error);
		}
	};

	const handleWriteToDB = async () => {
		try {
			const dummyUserData = {
				displayName: "Dummy User",
				email: "dummy@example.com",
				role: 1,
				createdAt: new Date(),
			};
			await addDoc(collection(db, "users"), dummyUserData);
			console.log("Dummy user data added to the database.");
		} catch (error) {
			console.error("Error writing to database: ", error);
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
				<div>
					<button
						onClick={handleReadFromDB}
						className="bg-secondary text-white px-4 py-2 rounded hover:bg-greenTurquoise mt-8"
					>
						READ FROM DB
					</button>
				</div>
				<div>
					<button
						onClick={handleWriteToDB}
						className="bg-secondary text-white px-4 py-2 rounded hover:bg-greenTurquoise mt-8"
					>
						WRITE TO DB
					</button>
				</div>
			</div>
		</>
	);
}
