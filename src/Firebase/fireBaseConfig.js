import { initializeApp } from "firebase/app";
// to use firebase authentication.
import {getAuth} from 'firebase/auth';
// to get the collections
import { getFirestore } from 'firebase/firestore';

import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "fir-be0f6.firebaseapp.com",
  projectId: "project id",
  storageBucket: "fir-be0f6.appspot.com",
  messagingSenderId: "870830744100",
  appId: "your app id",
  measurementId: "G-4F1VF3VEHH"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const Firestore = getFirestore(Firebase);
export const storage = getStorage(Firebase)
