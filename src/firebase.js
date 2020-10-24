// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDkbyAybI7t68cRKDfY3EGYrj6_yGj_Kls",
    authDomain: "fir-f0bb6.firebaseapp.com",
    databaseURL: "https://fir-f0bb6.firebaseio.com",
    projectId: "fir-f0bb6",
    storageBucket: "fir-f0bb6.appspot.com",
    messagingSenderId: "797901668385",
    appId: "1:797901668385:web:00a86b8bbb7e0c6f42a360",
    measurementId: "G-6RE5NGQNB4"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}