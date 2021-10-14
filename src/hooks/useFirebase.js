import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInWithGoogle =()=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                console.log(result.user);
                
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);

    return (
        {
            user,
            error,
            signInWithGoogle,
            logout,
            isLoading
        }
    );
};

export default useFirebase;