import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMsPInM58uPksNu3E9iQ5EhnWBz67CPeQ",
    authDomain: "scanpal-f74da.firebaseapp.com",
    databaseURL: "https://scanpal-f74da.firebaseio.com",
    projectId: "scanpal-f74da",
    storageBucket: "scanpal-f74da.appspot.com",
    messagingSenderId: "702443834173",
    appId: "1:702443834173:web:eea09b202c6abcb5da1354",
    measurementId: "G-9MVD7S5CEC"
  };

const app=initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(app)
export const realtimeDb = getDatabase(app)
export const storage = getStorage(app)
export const auth =getAuth(app)
