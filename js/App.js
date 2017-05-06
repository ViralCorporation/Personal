(function () {
    //Get Elements

    "use strict";
    var txtEmail = document.getElementById("email-signup"),
        txtName = document.getElementById("name-signup"),
        txtPassword = document.getElementById("password-signup"),
        txtConfimPassWord = document.getElementById("confirm-password-signup"),
        Email = document.getElementById("email-login"),
        PassWord = document.getElementById("password-login"),
        btnLogin = document.getElementById("btnLogin"),
        btnSignUp = document.getElementById("button-modal");

    btnLogin.addEventListener('click', e => {
         //Adding login event/
        var email = Email.value,
            password = PassWord.value;

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
