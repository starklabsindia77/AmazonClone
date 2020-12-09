import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-P1yr12hhSHXhUy_PkZkmY6j2iO3C_UU",
  authDomain: "clone-ed0ad.firebaseapp.com",
  databaseURL: "https://clone-ed0ad-default-rtdb.firebaseio.com",
  projectId: "clone-ed0ad",
  storageBucket: "clone-ed0ad.appspot.com",
  messagingSenderId: "711309874798",
  appId: "1:711309874798:web:66312e123bf29a949b387f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
