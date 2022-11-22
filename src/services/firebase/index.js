import {firebase} from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdmOG6P8CkXhVZagjY2F28L2kKqTa16MQ",
    authDomain: "dmg-project-v1.firebaseapp.com",
    projectId: "dmg-project-v1",
    storageBucket: "dmg-project-v1.appspot.com",
    messagingSenderId: "967778641401",
    appId: "1:967778641401:web:7aee3b6da4137d66a6c928",
    measurementId: "G-P92B6JVZZ1"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();

export {firebase , auth}