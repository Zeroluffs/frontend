function Onlogin() {
    var email = getID("loginEmail");
    var password = getID("loginPassword");
    console.log("henlo");
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        window.location = "hello.html";
        console.log("henlo");
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        getError(errorCode);
      });
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        window.location = "hello.html"; //After successful login, user will be redirected to home.html
      }
    });
  }