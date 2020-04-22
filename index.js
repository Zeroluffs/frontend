var firebaseConfig = {
  apiKey: "AIzaSyBe1d7q_1pSzKphW6s35MpURU3RW6p6Tmk",
  authDomain: "parcial-2-2a03c.firebaseapp.com",
  databaseURL: "https://parcial-2-2a03c.firebaseio.com",
  projectId: "parcial-2-2a03c",
  storageBucket: "parcial-2-2a03c.appspot.com",
  messagingSenderId: "683984370588",
  appId: "1:683984370588:web:677165d873efef3d836659",
  measurementId: "G-J61GM9QNHN",
};
firebase.initializeApp(firebaseConfig);

function getID(id) {
  return document.getElementById(id).value;
}
function arrayJSON(
  nombreRepresentante,
  numeroID,
  registerEmail,
  registerPassword,
  nombreEmpresa,
  imagenEmpresa,
  telefonoEmpresa
) {
  var data = {
    nombreRepresentante: nombreRepresentante,
    numeroID: numeroID,
    registerEmail: registerEmail,
    registerPassword: registerPassword,
    nombreEmpresa: nombreEmpresa,
    imagenEmpresa: imagenEmpresa,
    telefonoEmpresa: telefonoEmpresa,
  };

  return data;
}
function registerEnterprise() {
  var nombreRepresentante = getID("nombreRepresentante");
  var numeroID = getID("numeroID");
  var registerEmail = getID("registerEmail");
  var registerPassword = getID("registerPassword");
  var nombreEmpresa = getID("nombreEmpresa");
  var imagenEmpresa = getID("imagenEmpresa");
  var telefonoEmpresa = getID("telefonoEmpresa");

  var arrayData = arrayJSON(
    nombreRepresentante,
    numeroID,
    registerEmail,
    registerPassword,
    nombreEmpresa,
    imagenEmpresa,
    telefonoEmpresa
  );

  var person = firebase.database().ref("empresas");
  console.log(arrayData);
  person.set(arrayData);
  alert("Saved");
  var auth = firebase.auth();

  auth
    .createUserWithEmailAndPassword(registerEmail, registerPassword)
    .then((cred) => {
      console.log(cred.user);
      document.getElementById("registerForm").reset();
    });
  /*
  const auth = firebase.auth();

  var loginEmail = getID("login-email");
  var loginPassword = getID("login-registerPassword");

  auth.createUserWithEmailAndPassword(email, registerPassword).then((cred) => {
    console.log(cred.user);
  });

  auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((cred) => {
    console.log(cred.user);
  });
*/
}

