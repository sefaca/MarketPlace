// lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAB_4TS1fKaLDgUgRxUrsVgFABs3Do_i0",
    authDomain: "marketplace-7cdb6.firebaseapp.com",
    projectId: "marketplace-7cdb6",
    storageBucket: "marketplace-7cdb6.appspot.com",
    messagingSenderId: "1083181681525",
    appId: "1:1083181681525:web:f7886280781fb016b6213c",
    measurementId: "G-NXL68L6WRY"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Authentication
export const auth = getAuth(app);

// Inicializar Firestore
export const db = getFirestore(app);
