var firebaseConfig = {
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

/******** Feedback messaging *********/
MsgElem = document.getElementById("msg");
TokenElem = document.getElementById("token");
NotisElem = document.getElementById("notis");
ErrElem = document.getElementById("err")

const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function () {
        MsgElem.innerHTML = "Notification permission granted."
        console.log("Notification permission granted.");

        // get the token in the form of promise
        return messaging.getToken()
    })
    .then(function (token) {
        // print the token on the HTML page
        TokenElem.innerHTML = "token is : " + token
    })
    .catch(function (err) {
        ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission to notify.", err);
    })
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/dhnguyen/firebase-messaging-sw.js', {scope: '/dhnguyen/'})
        .then(function(reg) {
          // registration worked
          console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch(function(error) {
          // registration failed
          console.log('Registration failed with ' + error);
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