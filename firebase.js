import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAf5DV4Jzsv_-QvE4szGfU34B8IzKI3aBc",
    authDomain: "instagram-clone-41042.firebaseapp.com",
    projectId: "instagram-clone-41042",
    storageBucket: "instagram-clone-41042.appspot.com",
    messagingSenderId: "790755573010",
    appId: "1:790755573010:web:f85f844d366ee5cc3b47cb",
    measurementId: "G-2M4F2N9PQS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};
export default db;
