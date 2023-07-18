import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router.js'
import VueCarousel from '@chenfengyuan/vue-carousel';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component(VueCarousel.name, VueCarousel);



//firebase inicializing databas
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    doc,
    addDoc,
    deleteDoc,
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAqiL31eNCUqy_aUriF_897-KUTToC7gc8",
  authDomain: "shoqataweb.firebaseapp.com",
  projectId: "shoqataweb",
  storageBucket: "shoqataweb.appspot.com",
  messagingSenderId: "327192309223",
  appId: "1:327192309223:web:4b28c2d6349953713ea142"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth =  getAuth();

//const usersRef  = collection(db, 'users');
const aplicationsRef = collection(db, 'aplications');


let addAplicant = (aplicant = {})=>{
  addDoc(aplicationsRef, aplicant);
}

let deleteAplicant = (id)=>{
  const docRef = doc(db, 'aplications', id)
  deleteDoc(docRef);
}

export {
  signInWithEmailAndPassword,
  auth,
  addAplicant, 
  aplicationsRef,
  getDocs, 
  deleteAplicant
};

