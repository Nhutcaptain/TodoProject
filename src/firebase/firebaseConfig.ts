// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ruKVis-IqcD0wCXGF7ZkHP-IomaBYG8",
  authDomain: "todoproject-81742.firebaseapp.com",
  projectId: "todoproject-81742",
  storageBucket: "todoproject-81742.appspot.com",
  messagingSenderId: "1029768502163",
  appId: "1:1029768502163:web:5bc2ebd63b654c1451e666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };