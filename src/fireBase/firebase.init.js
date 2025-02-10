//Do no store confing on client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJurrOLi7Y2KoJ2x3Kpur4CLn2bPUej-o",
  authDomain: "simple-firebase-ccc10.firebaseapp.com",
  projectId: "simple-firebase-ccc10",
  storageBucket: "simple-firebase-ccc10.firebasestorage.app",
  messagingSenderId: "594789381424",
  appId: "1:594789381424:web:0ba47fddf3948164bfc4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;