import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiKfuVDuHGKz9giMqj0Gw4zArVTPFpAZs",
  authDomain: "polyplay-a8b4a.firebaseapp.com",
  projectId: "polyplay-a8b4a",
  storageBucket: "polyplay-a8b4a.appspot.com",
  messagingSenderId: "1005327954873",
  appId: "1:1005327954873:web:b8a84939624db512af7c68",
  measurementId: "G-S09DL5NDQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
