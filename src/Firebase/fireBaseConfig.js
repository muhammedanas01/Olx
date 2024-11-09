import { initializeApp } from "firebase/app";
// to use firebase authentication.
import {getAuth} from 'firebase/auth';
// to get the collections
import { getFirestore } from 'firebase/firestore';

import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "firebaseapp.com",
  projectId: "project id",
  storageBucket: "storagebucket",
  messagingSenderId: "87083",
  appId: "your app id",
  measurementId: "G-4F"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const Firestore = getFirestore(Firebase);
export const storage = getStorage(Firebase)
