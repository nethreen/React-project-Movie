import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwi9XmPwKem7_0YlbmeY7_JAL7X-deC3E",
    authDomain: "bojackmovie.firebaseapp.com",
    projectId: "bojackmovie",
    storageBucket: "bojackmovie.appspot.com",
    messagingSenderId: "821804332784",
    appId: "1:821804332784:web:e72b37ee79f70e8b91f435",
    measurementId: "G-4KZ6YC5LMD"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;
