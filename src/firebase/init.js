// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWQHMYeupQDNpU3emYimstOnXy3FcEvU",
  authDomain: "fir-practice-3cea2.firebaseapp.com",
  projectId: "fir-practice-3cea2",
  storageBucket: "fir-practice-3cea2.firebasestorage.app",
  messagingSenderId: "2920978753",
  appId: "1:2920978753:web:0e527b8eb1641644c6e9c0"
};

// Initialize Firebase (no need to store `app` if not used)
initializeApp(firebaseConfig);

// Initialize and export auth
export const auth = getAuth();
