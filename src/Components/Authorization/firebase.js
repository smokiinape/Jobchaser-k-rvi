import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your web app's Firebase configuration...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
