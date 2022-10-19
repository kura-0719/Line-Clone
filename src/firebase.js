import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1TADTmGIw1LUVb2zDgzHDGkVlKboSscA",
  authDomain: "line-clone-app-1e844.firebaseapp.com",
  projectId: "line-clone-app-1e844",
  storageBucket: "line-clone-app-1e844.appspot.com",
  messagingSenderId: "891740213175",
  appId: "1:891740213175:web:f614ec91d713e87c96a232"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };