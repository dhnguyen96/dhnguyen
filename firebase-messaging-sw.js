importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js');
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
messaging.setBackgroundMessageHandler(function(payload){
    const title = "Hello World";
    const options =  {
        body: payload.data.status
    };
    return self.ServiceWorkerRegistration.showNotification(title, options);
});