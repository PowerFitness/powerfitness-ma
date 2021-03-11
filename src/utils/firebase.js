import _firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const devFirebaseConfig = {
    apiKey: 'AIzaSyCokN-VH7W4MZngPrb1Faa8aDjeczNzepw',
    authDomain: 'powerfitness-app.firebaseapp.com',
    projectId: 'powerfitness-app',
    storageBucket: 'powerfitness-app.appspot.com',
    messagingSenderId: '277328562252',
    appId: '1:277328562252:web:a96acf6527dfbcc343cce9',
    measurementId: 'G-9M843L0D8R'
};

const prodFirebaseConfig = {
    // TODO
};

const config = process.env.NODE_APP_INSTANCE === 'production' ? prodFirebaseConfig : devFirebaseConfig;

// Initialize Firebase
_firebase.initializeApp(config);
_firebase.analytics();

export const firebase = _firebase;
