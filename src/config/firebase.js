import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDaeSvTm3fNzWW_AmCEdUp8c8H3YoHvydQ",
        authDomain: "jdt-fb.firebaseapp.com",
        projectId: "jdt-fb",
        storageBucket: "jdt-fb.appspot.com",
        messagingSenderId: "692471862887",
        appId: "1:692471862887:web:2d3232352d3f1aad54e6c2"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.auth =firebase.auth()
    firebase.db =firebase.firestore()
export default firebase