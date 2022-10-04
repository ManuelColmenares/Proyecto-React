// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiVmAoP32FxJ7tOMpFoFSIAyDqZitHkWI",
  authDomain: "dulceycrujiente-99fd2.firebaseapp.com",
  projectId: "dulceycrujiente-99fd2",
  storageBucket: "dulceycrujiente-99fd2.appspot.com",
  messagingSenderId: "1048604129522",
  appId: "1:1048604129522:web:f41cd9277cd4ad0986386b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)