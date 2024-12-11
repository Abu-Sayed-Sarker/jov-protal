// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcdy2K1-riKeREF03sTgS_y6nELYmVLEY",
    authDomain: "job-portel-2ca7a.firebaseapp.com",
    projectId: "job-portel-2ca7a",
    storageBucket: "job-portel-2ca7a.firebasestorage.app",
    messagingSenderId: "1028640961742",
    appId: "1:1028640961742:web:377af49cbd075568670c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;