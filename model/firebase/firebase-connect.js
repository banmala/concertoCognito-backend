var { initializeApp } = require("firebase/app");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWQT9HRVjL5v743bv7bjtHoxGzxfGbP24",
  authDomain: "fir-d6fcc.firebaseapp.com",
  projectId: "fir-d6fcc",
  storageBucket: "fir-d6fcc.appspot.com",
  messagingSenderId: "892346410467",
  appId: "1:892346410467:web:d4f85213d183752aaeecd6",
  measurementId: "G-V8K1C4GMS9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

module.exports = firebase;