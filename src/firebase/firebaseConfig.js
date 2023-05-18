// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // esto es para trabajar con firestore en nuestro caso tiene las img
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7EpV4WvkB-FV6MFnA6NYuvQnvscyBmds",
  authDomain: "estetica-adriana-aguilar.firebaseapp.com",
  projectId: "estetica-adriana-aguilar",
  storageBucket: "estetica-adriana-aguilar.appspot.com",
  messagingSenderId: "329826132776",
  appId: "1:329826132776:web:c8b86b3a9f348e3945e61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//crear const que por convencion de llama "db"
// db es el objeto que nosotros vamos a querer utilizar => exportar para utilizar dentro del project
export const db = getFirestore(app);