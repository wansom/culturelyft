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

const USERS_PATH = 'CultureLyftClients'

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
export const createNewUser=(payload)=>{
return setDoc(userRef(payload.uid),payload.data)
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