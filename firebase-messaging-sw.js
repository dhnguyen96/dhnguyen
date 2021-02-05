importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/8.2.6/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "322472703685",
    apiKey: "AIzaSyC6gwKgxn_F7jMrafd_MuGOTmRhMxvIn2Q",
    projectId: "feedback-d5711",
    appId: "1:322472703685:web:053cc16eec5bc1d66de2ac",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log(messaging);

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});