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
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }


  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;