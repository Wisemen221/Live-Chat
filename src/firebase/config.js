import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB37Sf6rhU7OcCYw4IkHBEsPi3ZE59Neko",
  authDomain: "live-chat-c46ce.firebaseapp.com",
  projectId: "live-chat-c46ce",
  storageBucket: "live-chat-c46ce.appspot.com",
  messagingSenderId: "470282465712",
  appId: "1:470282465712:web:86a239b1c7a3d6a012a675"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
