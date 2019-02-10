import { CONFIG } from './config'
import * as firebase from 'firebase'

firebase.initializeApp(CONFIG);

// create user test
export var createUser = (email, pass) => firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => console.log("created new user", email))
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("create user error:", errorCode, errorMessage)
})

// login user test

export var logIn = (email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => console.log("logged into", email))
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("login error:", errorCode, errorMessage)
})

// log off

export var logOff = () => firebase.auth().signOut().then(function() {
    console.log("gone done and signed out")
}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("sign out error:", errorCode, errorMessage)
});

export var getProfile = () => {
    let user = firebase.auth().currentUser
    if (user) {
        console.log(user)
    } else {
        console.log("not logged in")
    }
}

