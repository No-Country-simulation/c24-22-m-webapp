// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Importar autenticación
import { getFirestore } from "firebase/firestore"; // Importar Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTh_z0-ndTZAQJNZOrDkud3v4CHL-2pk8",
  authDomain: "petshelterapp-f3b8e.firebaseapp.com",
  projectId: "petshelterapp-f3b8e",
  storageBucket: "petshelterapp-f3b8e.firebasestorage.app",
  messagingSenderId: "638549761559",
  appId: "1:638549761559:web:4116c5619924e20e638652",
  measurementId: "G-68R08RRR6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Inicializar autenticación
const db = getFirestore(app); // Inicializar Firestore

// Exportar las instancias para usarlas en otros archivos
export { auth, db };