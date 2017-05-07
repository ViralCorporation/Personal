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
    const emailLogin = document.getElementById("login-txt"),
        passLogin = document.getElementById("password-txt"),
        btnLogin = document.getElementById("btnLogin"),
        emailSignUp = document.getElementById("email-signup"),
        passSignUp = document.getElementById("password-signup"),
        confirmPassSignUp = document.getElementById("confirm-password"),
        btnSignUp = document.getElementById("btnCadastro"),
        btnLogout = document.getElementById("btnLogout");

    btnLogin.addEventListener('click', e=> {
        //Get email and Pass
        const email = emailLogin.value,
            pass = passLogin.value,
            auth = firebase.auth(),
            promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    btnSignUp.addEventListener('click', e =>{
       //Get Email and confirm password
        const email = emailSignUp.value,
              pass = passSignUp.value,
              confirmPass = confirmPassSignUp.value,
              auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));


    });
    btnLogout.addEventListener('click', e =>{
       firebase.auth().SignOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("not logged")
        }
    });

}());

