import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: "asss-chat-test.firebaseapp.com",

  projectId: "asss-chat-test",

  storageBucket: "asss-chat-test.appspot.com",

  messagingSenderId: import.meta.env.REACT_APP_MASSAGING_SENDER_ID,

  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
