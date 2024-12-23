// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvSTfltDaZupEyd9JF2HJQzynK3Jlti6g",
  authDomain: "e-commerce-f3b52.firebaseapp.com",
  projectId: "e-commerce-f3b52",
  storageBucket: "e-commerce-f3b52.firebasestorage.app",
  messagingSenderId: "310416627305",
  appId: "1:310416627305:web:729a9e4bd6fe57d39b74f8",
  measurementId: "G-Z3GNTKHWDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// with this we can intialise our firebase app

export const db=getFirestore(app)