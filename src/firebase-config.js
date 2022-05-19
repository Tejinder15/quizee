// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4tXWSQDryz0lAGcHJOAg-aZpNkM_GSs",
  authDomain: "quizlee-650b4.firebaseapp.com",
  projectId: "quizlee-650b4",
  storageBucket: "quizlee-650b4.appspot.com",
  messagingSenderId: "386566669656",
  appId: "1:386566669656:web:0a99580845b00be610112d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);