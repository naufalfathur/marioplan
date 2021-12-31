import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpKfCKoNJwUn5kO5whc-3NUK-ZIp8Y5Tw",
    authDomain: "marioplan-8b244.firebaseapp.com",
    projectId: "marioplan-8b244",
    storageBucket: "marioplan-8b244.appspot.com",
    messagingSenderId: "940131450427",
    appId: "1:940131450427:web:a22e12d1ff20acf59e261e"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;