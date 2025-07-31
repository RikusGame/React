// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getAnalytics } from "firebase/analytics"; // Para Google Analytics
import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database"; // Para Realtime DB

const firebaseConfig = {
   apiKey: "AIzaSyCEMJR6erOjUeX8JNGN7DqsGFnr9zh-w8Y",
  authDomain: "prueba-c21c0.firebaseapp.com",
  projectId: "prueba-c21c0",
  storageBucket: "prueba-c21c0.firebasestorage.app",
  messagingSenderId: "10580240286",
  appId: "1:10580240286:web:1740e58e3702ce0850188f",
  measurementId: "G-Y3MGQBD7HW"
};

const app = initializeApp(firebaseConfig);

// Para Firestore:
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
// Si usas Realtime Database:
// const db = getDatabase(app);

export { db,storage };
