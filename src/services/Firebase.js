// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNJy9bqMkFFkVxfCSZ8_Z5B49SIzGRV8Q",
  authDomain: "nativecomshop.firebaseapp.com",
  projectId: "nativecomshop",
  storageBucket: "nativecomshop.appspot.com",
  messagingSenderId: "1057474474387",
  appId: "1:1057474474387:web:317104b22db753c898b866",
  measurementId: "G-M5PEWCD02E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);