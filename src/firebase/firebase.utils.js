import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDs3hLiyMRBMrAaq87pcd2jux4tGJLizQI",
    authDomain: "ecommerce-db-2e25e.firebaseapp.com",
    databaseURL: "https://ecommerce-db-2e25e.firebaseio.com",
    projectId: "ecommerce-db-2e25e",
    storageBucket: "ecommerce-db-2e25e.appspot.com",
    messagingSenderId: "140245671765",
    appId: "1:140245671765:web:89246b70b7c542138c19dc",
    measurementId: "G-8PSXY8SM0Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;