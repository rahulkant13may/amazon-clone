import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBnDku5RQd1wPfdFeTqjDmIa8Kj45CgbFU",
        authDomain: "clone-32755.firebaseapp.com",
        databaseURL: "https://clone-32755.firebaseio.com",
        projectId: "clone-32755",
        storageBucket: "clone-32755.appspot.com",
        messagingSenderId: "511393444971",
        appId: "1:511393444971:web:17aea33f67a33818402d2e",
        measurementId: "G-J3QGK5GM9D"
})

const auth = firebase.auth();

export { auth };