import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCpZqjZa1v9_mm0jZN1MrF-IJ3HWOn4BUI",
  authDomain: "twitter-clone-23ad8.firebaseapp.com",
  projectId: "twitter-clone-23ad8",
  storageBucket: "twitter-clone-23ad8.appspot.com",
  messagingSenderId: "1086477258910",
  appId: "1:1086477258910:web:8e27e5fa7855ae5277eb8f",
  measurementId: "G-TSY16PJRLK",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
