import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] =useState({})

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                setUser(result.user)
            });
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {})
    }

    useEffect( ()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])

    return (
            user,
            signInUsingGoogle,
            logOut
    )
};

export default useFirebase;