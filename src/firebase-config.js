// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNuRGLmP-iwfbD3SEAtOO2pYDMbtMtX8",
  authDomain: "realtime-chat-app-e169f.firebaseapp.com",
  projectId: "realtime-chat-app-e169f",
  storageBucket: "realtime-chat-app-e169f.appspot.com",
  messagingSenderId: "942728375021",
  appId: "1:942728375021:web:efee5bda37e721feca3ae4",
  measurementId: "G-V28LRRH9TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=new getFirestore(app)