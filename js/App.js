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
        btnSignUp = document.getElementById("btnCadastro");
    btnLogin.addEventListener('click', e=> {
        //Get email and Pass
        const email = emailLogin.value,
            pass = passLogin.value,
            auth = firebase.auth(),
            promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (pass.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
    });

    btnSignUp.addEventListener('click', e =>{
       //Get Email and confirm password
        const email = emailSignUp.value,
              pass = passSignUp.value,
              confirmPass = confirmPassSignUp.value,
              auth = firebase.auth();

        if(pass == confirmPass){
            const promise = auth.createUserWithEmailAndPassword(email, pass).catch(function(error) {
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              if (errorCode == 'auth/invalid-email') {
                                alert('The email is invalid.');
                                  }
                              if (errorCode == 'auth/weak-password') {
                                alert('The password is too weak.');
                              } else {
                                alert(errorMessage);
                              }
                              console.log(error)});

            // [START sendemailverification]
              firebase.auth().currentUser.sendEmailVerification().then(function() {
                // Email Verification sent!
                // [START_EXCLUDE]
                alert('Email Verification Sent!');
                // [END_EXCLUDE]
              });
              // [END sendemailverification]
        } else {
            alert("Senhas não conferem");
        }
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("not logged");
        }
    });

}());

