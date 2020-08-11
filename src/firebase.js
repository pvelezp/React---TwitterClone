import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFWMOPpRGoxMlUb1hkqwpw9BjeQMd-AbA",
  authDomain: "pablovelez-twitterclone.firebaseapp.com",
  databaseURL: "https://pablovelez-twitterclone.firebaseio.com",
  projectId: "pablovelez-twitterclone",
  storageBucket: "pablovelez-twitterclone.appspot.com",
  messagingSenderId: "532534015026",
  appId: "1:532534015026:web:a9ad9c48b5a1312cad782b",
  measurementId: "G-ZCLR833NY0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
