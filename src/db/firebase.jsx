// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuZhGTSFXLDwFukJ-lSIEhNf8eqZNrBiw",
  authDomain: "aaaaa-60204.firebaseapp.com",
  projectId: "aaaaa-60204",
  storageBucket: "aaaaa-60204.firebasestorage.app",
  messagingSenderId: "388655184462",
  appId: "1:388655184462:web:914132e435186cb99e211f",
  measurementId: "G-7VXLNVD6FS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
