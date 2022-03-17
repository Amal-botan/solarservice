// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8amtDtrTHrFv64dflVdsl4x4C9JQ23V4",
  authDomain: "solarservice-a6b72.firebaseapp.com",
  projectId: "solarservice-a6b72",
  storageBucket: "solarservice-a6b72.appspot.com",
  messagingSenderId: "385242240992",
  appId: "1:385242240992:web:8e12c99fe37d5671d6fd85",
  measurementId: "G-1LKX4MQ0WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;