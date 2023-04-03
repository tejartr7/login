import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = ({
    apiKey: "AIzaSyACoi5xlhWoRtSwoiUid48pF4C0yg25JA4",
    authDomain: "react-pro-12bfb.firebaseapp.com",
    projectId: "react-pro-12bfb",
    storageBucket: "react-pro-12bfb.appspot.com",
    messagingSenderId: "879151109113",
    appId: "1:879151109113:web:43599f3216e1cdc01ea328",
    measurementId: "G-3PK1Q1RNYF"
});

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);