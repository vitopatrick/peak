// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfbYXHScZ8lmCqdJClFMXEKN5gbfX0PXo",
  authDomain: "peakserve-383cf.firebaseapp.com",
  projectId: "peakserve-383cf",
  storageBucket: "peakserve-383cf.appspot.com",
  messagingSenderId: "491652352542",
  appId: "1:491652352542:web:21e8d0ce6b7a7878a47c0f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const store = getStorage(app);
