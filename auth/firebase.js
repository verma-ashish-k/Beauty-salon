// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var firebaseui = require('firebaseui');
var firebase = require('firebase');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6tySqyAS-MTQ1Sz6G7iMjY38cUUZEu6A',
  authDomain: 'linas-beauty-salon.firebaseapp.com',
  projectId: 'linas-beauty-salon',
  storageBucket: 'linas-beauty-salon.appspot.com',
  messagingSenderId: '1052795985858',
  appId: '1:1052795985858:web:432a9b672f7aa46927805b',
  measurementId: 'G-9PD6C3Z9H0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
