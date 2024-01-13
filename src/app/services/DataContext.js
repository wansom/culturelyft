'use client'
import { createContext, useState, useEffect } from 'react';
import { auth, firestoreDb } from './firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async(userAuth) => {
    if (userAuth) {
      console.log(userAuth.uid)
      const docRef = doc(collection(firestoreDb, 'CultureLyftClients'), userAuth.uid)
      
      getDoc(docRef)
        .then((doc) => {
          setUser(doc.data());
          const userData = doc.data()
          console.log(userData,'we fetched data');
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setUser(null);
      setLoading(false);
      console.log('error fetching currentuser')
    }
  });

  return unsubscribe;
}, []);


  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
