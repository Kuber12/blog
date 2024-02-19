// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6H1dZmMI8V02nyhvmdh8lMbJa_87oOOs",
  authDomain: "uploadingfile-fdbcf.firebaseapp.com",
  projectId: "uploadingfile-fdbcf",
  storageBucket: "uploadingfile-fdbcf.appspot.com",
  messagingSenderId: "189935990055",
  appId: "1:189935990055:web:f1dc15daf911887f246502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
