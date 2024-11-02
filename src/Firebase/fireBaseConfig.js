import { initializeApp } from "firebase/app";
// to use firebase authentication.
import {getAuth} from 'firebase/auth';
// to get the collections
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWII0dR5STktf7SFmFoZ-HYrsDxSd8ShA",
  authDomain: "olxx-a6136.firebaseapp.com",
  projectId: "olxx-a6136",
  storageBucket: "olxx-a6136.firebasestorage.app",
  messagingSenderId: "1048450346398",
  appId: "1:1048450346398:web:3e040213e14f0937f5ba8f",
  measurementId: "G-BJ6GEMLG3F"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const Firestore = getFirestore(Firebase);
