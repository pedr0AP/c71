import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  
    apiKey: "AIzaSyARJp7T1_TJWWP1Xc5CKCR7uFPZeUHCtbU",
    authDomain: "c71-824f8.firebaseapp.com",
    projectId: "c71-824f8",
    storageBucket: "c71-824f8.appspot.com",
    messagingSenderId: "919193601126",
    appId: "1:919193601126:web:6fdeb5089d0a9db08819a7"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
