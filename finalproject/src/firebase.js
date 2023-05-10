// import firebase from "firebase/app"; errors out?

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBt88W5keOfq3RdeTdwpsHro8JXLhWWw",
  authDomain: "portfoliowebsite-7b8f4.firebaseapp.com",
  projectId: "portfoliowebsite-7b8f4",
  storageBucket: "portfoliowebsite-7b8f4.appspot.com",
  messagingSenderId: "599576672153",
  appId: "1:599576672153:web:06315c3c35132a5c9d4508",
  measurementId: "G-TGTQR6CZH3" // don't need?
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

// user stuff
const signInWithEmail = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

const signUpWithEmail = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// const signInWithGoogle = () => 
//     auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

const signOut = () => auth.signOut();

export {
    auth,
    firestore,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut,
};