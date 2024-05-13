// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAEOLvYKciUtUuWPZVxoVA--8CEmV0GwTM",
	authDomain: "fattahsalleh-bcfb3.firebaseapp.com",
	projectId: "fattahsalleh-bcfb3",
	storageBucket: "fattahsalleh-bcfb3.appspot.com",
	messagingSenderId: "216627980709",
	appId: "1:216627980709:web:8f10c9a02780207e83e04c",
	measurementId: "G-112QBFJJ0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
