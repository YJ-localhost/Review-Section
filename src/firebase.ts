import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb1akoalYS_3Beq9ZElNbMKAhDqc_ysXc",
  authDomain: "twitter-reloaded-5722e.firebaseapp.com",
  projectId: "twitter-reloaded-5722e",
  storageBucket: "twitter-reloaded-5722e.firebasestorage.app",
  messagingSenderId: "636330933123",
  appId: "1:636330933123:web:5f13ba40364aedaed3d4b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
