(function() {
    // Initialize Firebase
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
    const txtEmail = document.getElementById("email-signup");
    const txtName = document.getElementById("name-signup");
    const txtPassword = document.getElementById("password-signup");
    const txtConfimPassWord = document.getElementById("confirm-password-signup");
    const Email = document.getElementById("email-login");
    const PassWord = document.getElementById("password-login")
    const btnLogin = document.getElementById("login-button")
    const btnSignUp = document.getElementById("button-modal")

    btnLogin.addEventListener('click', e => {
         //Adding login event/
        const email = Email.value;
        const password = PassWord.value;

        //Sign In
        const promise = auth.SignInWithEmailAndPassword(email, password);

        promise.catch(e => console.log(e.message));
    })

    btnSignUp.addEventListener('click', e => {
         //Create login event/
        const email = txtEmailEmail.value;
        const password = PassWord.value;

        //Sign In
        if(txtPassword == txtConfimPassWord){
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.then(user => console.log(user))
                .catch(e => console.log(e.message));
        }

    })
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut().then(function(){
            //SignOut sucessefully
        }), function(error){
            //An error has ocurred
        }

    })

})
