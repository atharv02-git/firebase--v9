import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCC3m7uD3J_23l2bI-eLluBERvItPe4l4I",
  authDomain: "readinglist-2ddd2.firebaseapp.com",
  projectId: "readinglist-2ddd2",
  storageBucket: "readinglist-2ddd2.appspot.com",
  messagingSenderId: "191875986866",
  appId: "1:191875986866:web:7fb45e6566062eeb0920ab",
};

// init firebase
initializeApp(firebaseConfig);
// init firestore
const db = getFirestore();

export { db }