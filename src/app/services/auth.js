import { auth } from "./firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut,sendPasswordResetEmail} from "firebase/auth";

export const createUser=(values)=>{
    return createUserWithEmailAndPassword(auth, values.email, values.password)   
}

export const signIn=(values)=>{
return signInWithEmailAndPassword(auth,values.email.trim(),values.password.trim())
}

export const logout=()=>{
    return signOut(auth)
}
export const passwordReset=async(email)=>{
    return await sendPasswordResetEmail(auth,email)
}
export const changePassword=()=>{
    
}

export const currentUser= ()=>{
    if(auth.currentUser){return true}else{
        return false
    }
}




