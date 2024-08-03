// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3NyAQqsX0pjTeF8h_PnHw7XoVIUjRT5E",
  authDomain: "viso-test-auth.firebaseapp.com",
  projectId: "viso-test-auth",
  storageBucket: "viso-test-auth.appspot.com",
  messagingSenderId: "143158910752",
  appId: "1:143158910752:web:e3c97c87b12fe957b70145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);