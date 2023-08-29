// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAreqfU1mbK6L9M8GVKAQIaaMPjZ5aE2hg",
  authDomain: "dhifarindo-365009.firebaseapp.com",
  projectId: "dhifarindo-365009",
  storageBucket: "dhifarindo-365009.appspot.com",
  messagingSenderId: "427683574665",
  appId: "1:427683574665:web:dd91c02ec796ec06c8e758",
  measurementId: "G-LM4E51JR4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = app;