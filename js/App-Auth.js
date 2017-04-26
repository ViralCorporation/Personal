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

    //Config Firebase
    var uiConfig = {
        signInSuccessUrl: 'home.hmtl',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

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

    btnSignUp.addEventListener('click', e => {
         //Create login event/
        const email = txtEmailEmail.value;
        const password = PassWord.value;
        const auth = firebase.auth();
        //Sign In
        if(txtPassword == txtConfimPassWord){
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.then(user => console.log(user))
                .catch(e => console.log(e.message));
        }

    })
    btLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        signOutSuccessUrl: 'index.hmtl',
    })

    //Add a realtime listener
    firebase.auth().OnAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log('nao logado')
        }
    })



})
