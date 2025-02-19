import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence, type User } from 'firebase/auth';
import { writable, type Writable } from 'svelte/store';


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

/*
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
      getAnalytics(app);
  });
}
  */

let firebaseApp;
if(!getApps().length){
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = getApp()
  deleteApp(firebaseApp)
  firebaseApp = initializeApp(firebaseConfig)
}

// Initialize Firebase
export const auth = getAuth(firebaseApp)