import firebase from 'firebase/app';

//we need database and auth

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvNNIeTBQGY2AJUbp7npp2CgP1QNMMjcw",
    authDomain: "crwn-db-d05df.firebaseapp.com",
    databaseURL: "https://crwn-db-d05df.firebaseio.com",
    projectId: "crwn-db-d05df",
    storageBucket: "",
    messagingSenderId: "971001832804",
    appId: "1:971001832804:web:8811c178870d8428"
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;