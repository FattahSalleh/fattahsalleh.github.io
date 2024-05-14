import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		// Extract user information
		const user = userCredential.user;

		// Store user data in Firestore
		await setDoc(doc(db, "users", user.uid), {
			email: user.email,
			password: user.email,
			role: 2,
			createdAt: new Date(),
		});

		return userCredential;
	} catch (error) {
		throw error;
	}
};

export const doSignInWithEmailAndPassword = async (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider);
		// Extract user information
		const user = result.user;

		// Store user data in Firestore
		await setDoc(doc(db, "users", user.uid), {
			email: user.email,
			displayName: user.displayName,
			role: 2,
			createdAt: new Date(),
		});

		console.log(user);

		return result;
	} catch (error) {
		throw error;
	}
};

export const doSignout = () => {
	return auth.signOut();
};

export const doPasswordReset = (email) => {
	return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
	return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
	return sendEmailVerification(auth.currentUser, {
		url: `${window.location.origin}/home`,
	});
};
