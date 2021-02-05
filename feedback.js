const firebaseConfig = {
    apiKey: "AIzaSyC6gwKgxn_F7jMrafd_MuGOTmRhMxvIn2Q",
    authDomain: "feedback-d5711.firebaseapp.com",
    projectId: "feedback-d5711",
    storageBucket: "feedback-d5711.appspot.com",
    messagingSenderId: "322472703685",
    appId: "1:322472703685:web:053cc16eec5bc1d66de2ac",
    measurementId: "G-JF9PQNLH5M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Cloud messaging
const messaging = firebase.messaging();

  function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  notifyMe();

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
  // Add the public key generated from the console here.
messaging.getToken({vapidKey: "BA6plneO_Acs9ip6bWt1s1SOO3LLgZFFRXRxKruZ0KJ-bMpuY7y8CUukx1UGBLQGWB8N5cXrwjV2Yz-v-ICJIVs"});

  // Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
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

messaging.onMessage(function(payload){
    console.log('Message received ', payload);
})


// Reference feedback in storage
var feedbackRefs = firebase.database().ref('feedback');

/******** Feedback submission *********/

// Listen form submit
document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);

// Submission functions
function submitFeedback(e) {

    e.preventDefault();

    //Get input values
    var name = getInputValue('name');
    var company = getInputValue('company');
    var email = getInputValue('email');
    var phone = getInputValue('phone');
    var message = getInputValue('message');

    saveFeedback(name, company, email, phone, message);

    //Alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 5 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //Clear the form
    document.getElementById('feedbackForm').reset();
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

// Save feedback to firebase
function saveFeedback(name, company, email, phone, message) {
    var newFeedbackRefs = feedbackRefs.push();
    newFeedbackRefs.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}



/******** Feedback navbar *********/

// Sticky Nav
let nav_offset_top = $(".header").height() + 50;

function navbarFixed() {
    if ($(".header").length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".header .main-menu").addClass("navbar_fixed");
            } else {
                $(".header .main-menu").removeClass("navbar_fixed");
            }
        });
    }
}

// Close Nav
$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse("hide");
    });
});

navbarFixed();