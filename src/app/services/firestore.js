import { auth, firestoreDb } from './firebase'

import {
	addDoc,
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	deleteField,
	doc,
	endAt,
	getDoc,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	startAfter,
	startAt,
	updateDoc,
	where
} from 'firebase/firestore'

const USERS_PATH = 'users'
const QUESTIONS_PATH='anonymousQuiz'

export const firestoreListener = onSnapshot
export const deleteDbField = deleteField()


const getDocuments = query => {
	return getDocs(query).then(docs => {
		return { data: formatQueryDataArray(docs), docs: docs.docs }
	})
}

const getDocument = ref => {
	return getDoc(ref).then(doc => formatQueryDataObject(doc))
}
const addDocument = (ref, data) => {
	return addDoc(ref, data)
}

const setDocument = (path, docId, data) => {
	return setDoc(doc(firestoreDb, path, docId), data)
}

const updateDocument = (ref, data) => {
	return updateDoc(ref, data)
}

const deleteDocument = (ref, docId) => {
	return deleteDoc(doc(firestoreDb, ref, docId))
}


//database functions
const usersRef = collection(firestoreDb, USERS_PATH)
const userRef = userId => {
	return doc(firestoreDb, USERS_PATH, userId)
}
export const getAllUsers = () => {
	return getDocuments(query(usersRef))
}
export const createNewUser=(payload,navigateCallback)=>{
return setDoc(userRef(payload.uid),payload.data) .then(() => {
	// Document set successfully
	console.log('Document set successfully');
	navigateCallback();
  })
  .catch((error) => {
	// Handle errors if the document set fails
	console.error('Error setting document:', error);
  });
}
// Update user details function
export const updateUserDetails = async (payload) => {
  try {
    await updateDoc(userRef(payload.uid), payload.data);
  } catch (error) {
    console.error('Error updating user details:', error.message);
  }
};

export const createEmployeeProfile=async(payload)=> {
	try {
		const mainCollectionRef = collection(firestoreDb, USERS_PATH);
		const mainDocRef = doc(mainCollectionRef, payload.employer);
		const subCollectionRef = collection(mainDocRef, 'employees');
		const addedDocRef = await addDoc(subCollectionRef, payload);
		return addedDocRef.id;
	} catch (error) {
	  console.error('Error adding document:', error.message);
	  throw error;
	}
  }

 export const fetchEmployeesData  = async (documentId) => {
	try {
	  const documentRef = doc(firestoreDb, 'users', documentId);

	  // Get a reference to the subcollection
	  const subcollectionRef = collection(documentRef, 'employees');

	  // Fetch the data from the subcollection
	  const snapshot = await getDocs(subcollectionRef);

	  // Extract the data from the snapshot
	  const data = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	  }));

	  return data
	} catch (error) {
	return
	}
  };

  export const sendAnonEmail=( data)=> {
	// Define the request options
	const requestOptions = {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json', // Set the content type to JSON
	  },
	  body: JSON.stringify(data), // Convert the data to JSON format
	};
  
	// Use fetch to send the POST request
	return fetch('https://us-central1-culturelyft-81292.cloudfunctions.net/culturelyft/mail', requestOptions)
	  .then(response => {
		// Check if the request was successful (status code 2xx)
		if (!response.ok) {
		  throw new Error(`HTTP error! Status: ${response.status}`);
		}
		
		// Parse and return the response JSON
		return response.json();
	  })
	  .catch(error => {
		console.error('Error:', error);
	  });
  }
  export const sendMailToFirestore=async(payload)=>{
		try {
		const mainCollectionRef = collection(firestoreDb, QUESTIONS_PATH);
		const addedDocRef = await addDoc(mainCollectionRef, payload);
		return addedDocRef.id;
	} catch (error) {
	  console.error('Error adding document:', error.message);
	  throw error;
	}
	
   }

   export const fetchMessageResponse  = async (documentId) => {
	try {
	  const documentRef = doc(firestoreDb, QUESTIONS_PATH, documentId);
	  const documentSnapshot = await getDoc(documentRef);
	  
	  if (documentSnapshot.exists()) {
		// Document found, you can access its data using documentSnapshot.data()
		const documentData = documentSnapshot.data();
		console.log('Document data:', documentData);
		return documentData;
	  } else {
		console.log('Document does not exist');
		return null;
	  }
	} catch (error) {
	  console.error('Error fetching document:', error.message);
	  throw error;
	}
  };

 export const fetchQuestionsByUser = async (userEmail) => {
	const questionsCollection = collection(firestoreDb, QUESTIONS_PATH);
  
	// Create a query to get documents where the 'email' field is equal to the provided userEmail
	const queryByEmail = query(questionsCollection, where('email', '==', userEmail));
  
	try {
	  const querySnapshot = await getDocs(queryByEmail);
  
	  const questions = [];
  
	  querySnapshot.forEach((doc) => {
		// For each document matching the query, add its data to the 'questions' array
		questions.push({ id: doc.id, ...doc.data() });
	  });
  
	  return questions;
	} catch (error) {
	  console.error('Error fetching questions:', error.message);
	  throw error;
	}
  };

  export const updateMessageStatus=async(data)=>{
	const questionRef = doc(firestoreDb, QUESTIONS_PATH, data.id);

	try {
	  await updateDoc(questionRef, data.data);
	  console.log('Question updated successfully!');
	} catch (error) {
	  console.error('Error updating question:', error.message);
	  throw error;
	}
  }


