// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHljhT5LnBWYXFcf65SsWcn8CZgvXlzJM",
  authDomain: "devops-be802.firebaseapp.com",
  projectId: "devops-be802",
  storageBucket: "devops-be802.appspot.com",
  messagingSenderId: "560127890132",
  appId: "1:560127890132:web:06dc8aab0f409bd7e76141",
  measurementId: "G-MWNGZV9BH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);