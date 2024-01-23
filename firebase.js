// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGicgFaWhAylZEfgDR1xQHyU_OpDHemy8",
  authDomain: "personal-portfolio-9a39f.firebaseapp.com",
  projectId: "personal-portfolio-9a39f",
  storageBucket: "personal-portfolio-9a39f.appspot.com",
  messagingSenderId: "469846610036",
  appId: "1:469846610036:web:edb72829d0bdd83be58121",
  measurementId: "G-4VY5VJLLK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);