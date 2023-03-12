import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0-Njr4QE6Jcby4sKt-EEWXsVaOb8Z9bk",
  authDomain: "demoreact-abde2.firebaseapp.com",
  databaseURL:
    "https://demoreact-abde2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoreact-abde2",
  storageBucket: "demoreact-abde2.appspot.com",
  messagingSenderId: "384355914282",
  appId: "1:384355914282:web:0c8ac7de439ab71d91e953"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
