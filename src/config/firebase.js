// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7LiGj6CIayI8kEnS7GRxrv8FTdjn4o0Q",
  authDomain: "movieapp-5522f.firebaseapp.com",
  projectId: "movieapp-5522f",
  storageBucket: "movieapp-5522f.appspot.com",
  messagingSenderId: "710221316283",
  appId: "1:710221316283:web:8b1c2223a06d0f3147299e",
  measurementId: "G-7MC0T1LK77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app);