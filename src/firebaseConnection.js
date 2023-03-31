import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDpINq-ULKFRAVsRxDAD2MgCU6e4m0ZFg0",
  authDomain: "estudoreact-5b314.firebaseapp.com",
  projectId: "estudoreact-5b314",
  storageBucket: "estudoreact-5b314.appspot.com",
  messagingSenderId: "289440318426",
  appId: "1:289440318426:web:6df6312b8b7c4799e736e3",
  measurementId: "G-ST076J1PS0"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };