// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmdQsxiuRn5b7B0cVRLwxzzXbix45YJO0",
  authDomain: "auth-complete-159f6.firebaseapp.com",
  projectId: "auth-complete-159f6",
  storageBucket: "auth-complete-159f6.appspot.com",
  messagingSenderId: "1082751916027",
  appId: "1:1082751916027:web:a4fdde9f2b6360aaa79d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;