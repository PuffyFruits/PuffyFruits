// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqoSOwaBkZ02h1vN43E40uiyYzjsSRJ6w",
  authDomain: "puffygram-f35b1.firebaseapp.com",
  projectId: "puffygram-f35b1",
  storageBucket: "puffygram-f35b1.appspot.com",
  messagingSenderId: "877956328881",
  appId: "1:877956328881:web:658b1a41af8f4ed43b6190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);