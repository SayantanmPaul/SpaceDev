// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfsnrE1etTCoj52b-DTJ5zyYPcgrOhkvw",
  authDomain: "spacedev-9eb09.firebaseapp.com",
  projectId: "spacedev-9eb09",
  storageBucket: "spacedev-9eb09.appspot.com",
  messagingSenderId: "53995391061",
  appId: "1:53995391061:web:b617aebebd80bb79866cdc",
  measurementId: "G-PRKMKERESX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const provider=new GoogleAuthProvider()

const db=getFirestore(app)

export {auth,analytics, provider, db}