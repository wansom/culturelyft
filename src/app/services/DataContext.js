'use client'
import { createContext, useState, useEffect } from 'react';
import { auth, firestoreDb } from './firebase';
import { collection, doc, getDoc,getDocs,query,where } from 'firebase/firestore';



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages,setMessages] =useState(null)

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async(userAuth) => {
    if (userAuth) {
      const docRef = doc(collection(firestoreDb, 'CultureLyftClients'), userAuth.uid)
      const messagesRef =collection(firestoreDb,'anonymousQuiz')
      
      getDoc(docRef)
        .then((doc) => {
          setUser(doc.data());
          const userData = doc.data()        
          const userId = doc.id; 
          // Add the ID to the userData object
          const userDataWithId = {
            ...userData,
            id: userId,
          };
          setUser(userDataWithId);
  
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
        const queryByEmail = query(messagesRef, where('email', '==', userAuth.email));
        try {
          const querySnapshot = await getDocs(queryByEmail);
        
          const questions = [];
        
          querySnapshot.forEach((doc) => {
          // For each document matching the query, add its data to the 'questions' array
          questions.push({ id: doc.id, ...doc.data() });
          });
        
          setMessages(questions)
          setLoading(false);
        } catch (error) {       
          setError(error)
          setLoading(false);
          throw error;
        }
    } else {
      setUser(null);
      setLoading(false);
      console.log('error fetching currentuser')
    }
  });

  return unsubscribe;
}, []);


  return (
    <UserContext.Provider value={{ user, loading, error,messages }}>
      {children}
    </UserContext.Provider>
  );
};
