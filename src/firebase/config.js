// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/storage';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEO1TWyg1TBnMbFO0oDvubFBS-0I1zdE",
  authDomain: "fire-gram-7debe.firebaseapp.com",
  projectId: "fire-gram-7debe",
  storageBucket: "fire-gram-7debe.appspot.com",
  messagingSenderId: "32434702493",
  appId: "1:32434702493:web:b5f54b78800093696b6c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.store();


export {projectFirestore, projectStorage}