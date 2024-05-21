import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsobQm4tmK0VkOHUrpgI1e-4a4Ca1El0s",
  authDomain: "vuefire-test-84828.firebaseapp.com",
  projectId: "vuefire-test-84828",
  storageBucket: "vuefire-test-84828.appspot.com",
  messagingSenderId: "599997662674",
  appId: "1:599997662674:web:abf2fe22aede5e2e23340b",
  measurementId: "G-8PCCFF476B"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore()
const projectAuthentication = firebase.auth();

export { projectFirestore, projectAuthentication };