import firebase from "firebase/app";
import firebase from "firebase/messaging";
import firebase from "firebase/firebase-app";
import firebase from "firebase/firebase-messaging";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6gwKgxn_F7jMrafd_MuGOTmRhMxvIn2Q",
    authDomain: "feedback-d5711.firebaseapp.com",
    databaseURL: "https://feedback-d5711-default-rtdb.firebaseio.com",
    projectId: "feedback-d5711",
    storageBucket: "feedback-d5711.appspot.com",
    messagingSenderId: "322472703685",
    appId: "1:322472703685:web:053cc16eec5bc1d66de2ac",
    measurementId: "G-JF9PQNLH5M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.getToken({ vapidKey: 'BA6plneO_Acs9ip6bWt1s1SOO3LLgZFFRXRxKruZ0KJ-bMpuY7y8CUukx1UGBLQGWB8N5cXrwjV2Yz-v-ICJIVs' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });