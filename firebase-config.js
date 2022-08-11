import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {
    getFirestore, collection
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD9D_gAk2EmZPxQZSWR6VxNI3omn-uyYz0",
    authDomain: "libraryreservations.firebaseapp.com",
    projectId: "libraryreservations",
    storageBucket: "libraryreservations.appspot.com",
    messagingSenderId: "129537529898",
    appId: "1:129537529898:web:7719375b1aaa39dcc88b53",
    measurementId: "G-YBC1PF765Y"
  };  

  //initialize firebase app
  const app = initializeApp(firebaseConfig);

  //get Authentication 
  export const auth = getAuth(app);

  //storage for image 
  export const storage = getStorage(app);

  //to Store data in db
  export const firestore = getFirestore(app);

  //collection ref
  export const colRef = collection(firestore, `Student/`);

  export const colRefHall = collection(firestore, `Hall/`);

  export const colRefLib = collection(firestore, `Library/`); 

  export const colRefReserve = collection(firestore, `Reservation/`);