import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlSUDtbqt65KyT55bgQIH_yi6hDvgUbts",
  authDomain: "facebook-soykot.firebaseapp.com",
  projectId: "facebook-soykot",
  storageBucket: "facebook-soykot.appspot.com",
  messagingSenderId: "280471571884",
  appId: "1:280471571884:web:1581333950d01b3fe57e09",
  measurementId: "G-JP4PZ2HPN5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
