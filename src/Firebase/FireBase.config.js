// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh0Z1yMAoAFqNA9g60f7sQLy5bBAp23Fc",
    authDomain: "auth-connection-1a60e.firebaseapp.com",
    projectId: "auth-connection-1a60e",
    storageBucket: "auth-connection-1a60e.appspot.com",
    messagingSenderId: "591835185484",
    appId: "1:591835185484:web:98e963b547b13e2df2cfe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;