import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCLWNqF2X1QHnS3tcPi4Fxrz2tnQmA8jtw',
    authDomain: 'packerino-14c67.firebaseapp.com',
    projectId: 'packerino-14c67',
    storageBucket: 'packerino-14c67.appspot.com',
    messagingSenderId: '401980472326',
    appId: '1:401980472326:web:60b89522473d90ccd69787',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
