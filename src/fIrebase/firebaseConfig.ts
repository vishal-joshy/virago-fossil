import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBsMQob1HPgBqiBfjgCNRdQdTXA41f7omc",
  authDomain: "virago-4938d.firebaseapp.com",
  projectId: "virago-4938d",
  storageBucket: "virago-4938d.appspot.com",
  messagingSenderId: "385652788383",
  appId: "1:385652788383:web:044eb84b510ee06bd7e6aa",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, db };
