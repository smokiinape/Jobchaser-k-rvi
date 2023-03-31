import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc1fF9oWMDWiyoAJQZGVJBuywI8zMJfQY",
  authDomain: "jobchaser-final.firebaseapp.com",
  projectId: "jobchaser-final",
  storageBucket: "jobchaser-final.appspot.com",
  messagingSenderId: "617046787310",
  appId: "1:617046787310:web:238aae2bac0eb703355fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the auth service
const auth = getAuth(app);
export { app, auth };
