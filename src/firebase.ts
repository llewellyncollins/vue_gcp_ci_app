import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "ci-app-c24b6.firebaseapp.com",
    databaseURL: "https://ci-app-c24b6.firebaseio.com",
    projectId: "ci-app-c24b6",
    storageBucket: "ci-app-c24b6.appspot.com",
    messagingSenderId: "448072138648",
    appId: "1:448072138648:web:2002d9afe8baef06"
};

firebase.initializeApp( firebaseConfig );

export default firebase;
