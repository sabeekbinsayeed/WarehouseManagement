// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOEOiM9bJ7gH6KoDs9G5Ski_QWCv0aN1U",
    authDomain: "warehouse-68196.firebaseapp.com",
    projectId: "warehouse-68196",
    storageBucket: "warehouse-68196.appspot.com",
    messagingSenderId: "519054096006",
    appId: "1:519054096006:web:1380aeb36104f2188ec307"
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;