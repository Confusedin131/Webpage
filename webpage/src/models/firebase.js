// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmOFxvko-mOY6fOCY6Y6SUKrGksf1N3vg",
  authDomain: "newsapp-auth-d4805.firebaseapp.com",
  projectId: "newsapp-auth-d4805",
  storageBucket: "newsapp-auth-d4805.appspot.com",
  messagingSenderId: "418641991205",
  appId: "1:418641991205:web:c981c1df2e160ac2d311cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initalize auth
const db = getDatabase(app);
const auth = getAuth(app);
export {db, auth}
