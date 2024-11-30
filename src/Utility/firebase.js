// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgsLEPQW1RMdsbhiyQUYRHEWRq2-8unHg",
  authDomain: "clone-tek.firebaseapp.com",
  projectId: "clone-tek",
  storageBucket: "clone-tek.firebasestorage.app",
  messagingSenderId: "594571845",
  appId: "1:594571845:web:0697c05cae236b02d6692c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
