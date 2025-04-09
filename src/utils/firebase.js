// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1tvOOILavYiTp5-HKvPctM4gQj4v4JOc",
  authDomain: "chillstream-gpt.firebaseapp.com",
  projectId: "chillstream-gpt",
  storageBucket: "chillstream-gpt.firebasestorage.app",
  messagingSenderId: "1040359188186",
  appId: "1:1040359188186:web:c85edc7b6ba4e9668d67e3",
  measurementId: "G-P0XD93MRFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
