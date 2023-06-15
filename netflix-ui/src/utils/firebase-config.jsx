
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5-RWWMP04PJUTJ9Fl9tLZAMzjqhSZsb8",
  authDomain: "netflixx-c4b36.firebaseapp.com",
  projectId: "netflixx-c4b36",
  storageBucket: "netflixx-c4b36.appspot.com",
  messagingSenderId: "366142996272",
  appId: "1:366142996272:web:11bdc9cbc4cdea4c55d2f5",
  measurementId: "G-FT64Z7PE2X"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(app);
