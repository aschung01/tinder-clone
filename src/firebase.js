import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJHQB5mF992shX9Qpv2Os2-baF3ac7dv4",
    authDomain: "tinder-clone-86b5c.firebaseapp.com",
    databaseURL: "https://tinder-clone-86b5c.firebaseio.com",
    projectId: "tinder-clone-86b5c",
    storageBucket: "tinder-clone-86b5c.appspot.com",
    messagingSenderId: "369376393227",
    appId: "1:369376393227:web:5cae842842684cc7372f0e",
    measurementId: "G-9EVJCHJTLS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;