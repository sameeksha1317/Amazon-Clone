// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-uZ4CWMevqFdLHBR4hV4dZ4u_SuQhH4g",
  authDomain: "clone-7daf6.firebaseapp.com",
  projectId: "clone-7daf6",
  storageBucket: "clone-7daf6.appspot.com",
  messagingSenderId: "778250163999",
  appId: "1:778250163999:web:41e04d16faecb96ca0022a",
  measurementId: "G-9GL2D7E24L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };
