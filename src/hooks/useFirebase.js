import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                console.log(result.user);
                
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return (
        {
            user,
            error,
            signInWithGoogle,
            logout
        }
    );
};

export default useFirebase;