import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSsEpju55dk6-Zhw6YVKrV0tG_rwROHl0",
  authDomain: "servicelearning-5ccb9.firebaseapp.com",
  projectId: "servicelearning-5ccb9",
  storageBucket: "servicelearning-5ccb9.appspot.com",
  messagingSenderId: "528227967983",
  appId: "1:528227967983:web:a0dc3e02b19f5663290c1a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
