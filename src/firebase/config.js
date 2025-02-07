import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdXeIfHPgppgU6Glcn9REk1vbd6OWaiKk",
  authDomain: "vue-blog-system-f71cb.firebaseapp.com",
  projectId: "vue-blog-system-f71cb",
  storageBucket: "vue-blog-system-f71cb.firebasestorage.app",
  messagingSenderId: "561998832633",
  appId: "1:561998832633:web:8391de29ab828f93971328",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
