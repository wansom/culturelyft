'use client'
import { createContext, useState, useEffect } from 'react';
import { auth, firestoreDb } from './firebase';
import { collection, doc, getDoc,getDocs,query,where,onSnapshot } from 'firebase/firestore';



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages,setMessages] =useState(null)
  const [employees, setEmployees]=useState([])

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const documentRef = doc(firestoreDb, 'users', userAuth.uid);
        const messagesRef = collection(firestoreDb, 'anonymousQuiz');
        const employeesRef = collection(documentRef, 'employees');
  
        // Listen for real-time updates on the user document
        const unsubscribeUser = onSnapshot(documentRef, (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            const userId = doc.id;
  
            // Add the ID to the userData object
            const userDataWithId = {
              ...userData,
              id: userId,
            };
  
            setUser(userDataWithId);
            setLoading(false);
          } else {
            // Handle the case where the document doesn't exist
            setError("User document not found");
            setLoading(false);
          }
        }, (error) => {
          setError(error);
          setLoading(false);
        });
  
        // Listen for real-time updates on messages
        const queryByEmail = query(messagesRef, where('email', '==', userAuth.email));
        const unsubscribeMessages = onSnapshot(queryByEmail, (querySnapshot) => {
          const questions = [];
  
          querySnapshot.forEach((doc) => {
            // For each document matching the query, add its data to the 'questions' array
            questions.push({ id: doc.id, ...doc.data() });
          });
  
          setMessages(questions);
          setLoading(false);
        }, (error) => {
          setError(error);
          setLoading(false);
        });
  
        // Listen for real-time updates on employees in the subcollection
        const unsubscribeEmployees = onSnapshot(employeesRef, (querySnapshot) => {
          const employees = [];
  
          querySnapshot.forEach((doc) => {
            // For each document in the subcollection, add its data to the 'employees' array
            employees.push({ id: doc.id, ...doc.data() });
          });
  
          setEmployees(employees);
          setLoading(false);
        }, (error) => {
          setError(error);
          setLoading(false);
        });
  
        return () => {
          // Unsubscribe from all listeners when the component is unmounted or no longer needs updates
          unsubscribeUser();
          unsubscribeMessages();
          unsubscribeEmployees();
        };
      } else {
        setUser(null);
        setLoading(false);
        console.log('error fetching current user');
      }
    }, []);
  
    return unsubscribeAuth;
  }, []);
  
  


  return (
    <UserContext.Provider value={{ user, loading, error,messages,employees }}>
      {children}
    </UserContext.Provider>
  );
};
