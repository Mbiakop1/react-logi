import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAX-WKfAk6855PofkgrnfcQafiYueXTen8",
    authDomain: "react-login-381aa.firebaseapp.com",
    projectId: "react-login-381aa",
    storageBucket: "react-login-381aa.appspot.com",
    messagingSenderId: "100002271643",
    appId: "1:100002271643:web:404946898312ad2405d13e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };








// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAX-WKfAk6855PofkgrnfcQafiYueXTen8",
//     authDomain: "react-login-381aa.firebaseapp.com",
//     projectId: "react-login-381aa",
//     storageBucket: "react-login-381aa.appspot.com",
//     messagingSenderId: "100002271643",
//     appId: "1:100002271643:web:404946898312ad2405d13e"
// };
// const firebaseApp = firebase.initializeApp({ firebaseConfig });



// const auth = firebase.auth();
// export const db = firebase.firestore();
// export default auth;