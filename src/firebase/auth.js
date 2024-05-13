import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);
	// TODO: store the user info inside Firestore
	// return.user
	return result;
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
        url: `${window.location.origin}/`
    })
};
