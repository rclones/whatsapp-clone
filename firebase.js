import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0G4MxwwYdIpzUdtmJOAZ9xp1gi0m7lf8",
  authDomain: "whatsapp-clone-31486.firebaseapp.com",
  projectId: "whatsapp-clone-31486",
  storageBucket: "whatsapp-clone-31486.appspot.com",
  messagingSenderId: "146628161078",
  appId: "1:146628161078:web:12d01e5d3802d9de1d7297",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
