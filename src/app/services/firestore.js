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

 export const getCurrentUser=()=>{
    
    return getDocument(userRef('ftHc6vN7Q7JKBiCU9IiO'))
}

