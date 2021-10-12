import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0G4MxwwYdIpzUdtmJOAZ9xp1gi0m7lf8",
  authDomain: "whatsapp-clone-31486.firebaseapp.com",
  projectId: "whatsapp-clone-31486",
  storageBucket: "whatsapp-clone-31486.appspot.com",
  messagingSenderId: "146628161078",
  appId: "1:146628161078:web:12d01e5d3802d9de1d7297",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
