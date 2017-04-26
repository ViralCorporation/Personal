(function() {
    // Initialize Firebase
          var config = {
            apiKey: "AIzaSyDO8F97M_1QNlj_ImYxXO7XwGFnH7jDKWk",
            authDomain: "webapp-personal.firebaseapp.com",
            databaseURL: "https://webapp-personal.firebaseio.com",
            projectId: "webapp-personal",
            storageBucket: "webapp-personal.appspot.com",
            messagingSenderId: "238281186765"
          };
          firebase.initializeApp(config);

    //Get Elements
    const txtEmail = document.getElementById("email-signup");
    const txtName = document.getElementById("name-signup");
    const txtPassword = document.getElementById("password-signup");
    const txtConfimPassWord = document.getElementById("confirm-password-signup");
    const Email = document.getElementById("email-login");
    const PassWord = document.getElementById("password-login")
    const btnLogin = document.getElementById("Login-button")
    const btnSignUp = document.getElementById("SignUp-button")

    btnLogin.addEventListener('click', e => {
         //Adding login event/
        const email = Email.value;
        const password = PassWord.value;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.SignInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    })




})
