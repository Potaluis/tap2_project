import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP9z1A9J747KcLxy1rH5b6jAs7ryL8fvc",
  authDomain: "tap2project.firebaseapp.com",
  projectId: "tap2project",
  storageBucket: "tap2project.firebasestorage.app",
  messagingSenderId: "1016344462649",
  appId: "1:1016344462649:web:b831b76f0842b06b3f54e8",
  measurementId: "G-CBMQC26XW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);