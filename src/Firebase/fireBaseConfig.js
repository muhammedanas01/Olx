import { initializeApp } from "firebase/app";
// to use firebase authentication.
import {getAuth} from 'firebase/auth';
// to get the collections
import { getFirestore } from 'firebase/firestore';

import { getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCWII0dR5STktf7SFmFoZ-HYrsDxSd8ShA",
//   authDomain: "olxx-a6136.firebaseapp.com",
//   projectId: "olxx-a6136",
//   storageBucket: "olxx-a6136.firebasestorage.app",
//   messagingSenderId: "1048450346398",
//   appId: "1:1048450346398:web:3e040213e14f0937f5ba8f",
//   measurementId: "G-BJ6GEMLG3F"
// };


const firebaseConfig = {
  apiKey: "AIzaSyDv5yiHpcL4i9eq4_xdTo6PO5X_o1HO8kw",
  authDomain: "fir-be0f6.firebaseapp.com",
  projectId: "fir-be0f6",
  storageBucket: "fir-be0f6.appspot.com",
  messagingSenderId: "870830744100",
  appId: "1:870830744100:web:4d4ce11479af75dce3eeb1",
  measurementId: "G-4F1VF3VEHH"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const Firestore = getFirestore(Firebase);
export const storage = getStorage(Firebase)
