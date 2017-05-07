(function () {

  // Initialize Firebase

    'use strict';
    var config = {
        apiKey: "AIzaSyBD4QarCQukFWylMnlrSAeeGavBAYRAnrU",
        authDomain: "personal-9b554.firebaseapp.com",
        databaseURL: "https://personal-9b554.firebaseio.com",
        projectId: "personal-9b554",
        storageBucket: "personal-9b554.appspot.com",
        messagingSenderId: "234589868101"
    };
    firebase.initializeApp(config);

    //Get Elements
    var emailLogin = document.getElementById("login-txt"),
        passLogin = document.getElementById("password-text"),
        btnLogin = document.getElementById("btnLogin"),
        emailSignUp = document.getElementById("email-signup"),
        passSignUp = document.getElementById("password-signup"),
        confirmPassSignUp = document.getElementById("confirm-password"),
        btnSignUp = document.getElementById("btnCadastro");

    btnLogin.addEventListener('click', e=> {
        //Get email and Pass
        var email = emailLogin.value,
            pass = passLogin.value,
            auth = firebase.auth(),
            promise = auth.SignInWithEmailAndPassword(email, pass);
        promise.catch(login => console.log(login.message));
    })

}())

