// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1P8O4i1x40XmwX-lJJXMhvd0SM_Nrd2I",
  authDomain: "product-langing-page.firebaseapp.com",
  projectId: "product-langing-page",
  storageBucket: "product-langing-page.appspot.com",
  messagingSenderId: "848095893870",
  appId: "1:848095893870:web:6744ca0fe5e2cbbbc7897f",
  measurementId: "G-F2VX193YET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuth =new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);