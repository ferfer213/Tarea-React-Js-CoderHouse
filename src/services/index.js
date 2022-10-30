
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDDlxdo2pLEyxWdnMgkMcua64c9m1noF2c",
  authDomain: "kiosco-diegote.firebaseapp.com",
  projectId: "kiosco-diegote",
  storageBucket: "kiosco-diegote.appspot.com",
  messagingSenderId: "715167742001",
  appId: "1:715167742001:web:cc8829d63370413b05bd10",
  measurementId: "G-MZ29K4VQPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)