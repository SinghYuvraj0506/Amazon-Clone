import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB5nTefN5VKh4cmHGc4DZXUPwwDw5NyQ2g",
    authDomain: "clone-5c2cc.firebaseapp.com",
    projectId: "clone-5c2cc",
    storageBucket: "clone-5c2cc.appspot.com",
    messagingSenderId: "189462205087",
    appId: "1:189462205087:web:31346de511a007bb0448aa",
    measurementId: "G-Y01PEKD0C4"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  export const db = getFirestore(firebaseApp)
  export const auth = getAuth()

  