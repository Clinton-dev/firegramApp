import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


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
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export {projectFirestore, projectStorage}


