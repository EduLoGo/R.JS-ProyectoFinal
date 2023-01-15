import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxoNnF-m78I6BPCL1eOVgazDupQVQ2czQ",
  authDomain: "rjs-almagourmet.firebaseapp.com",
  projectId: "rjs-almagourmet",
  storageBucket: "rjs-almagourmet.appspot.com",
  messagingSenderId: "449404382827",
  appId: "1:449404382827:web:0e044ac16ed49e11438b2e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);