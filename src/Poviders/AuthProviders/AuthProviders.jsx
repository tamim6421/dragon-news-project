import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])
    
    const authInfo = {user, createUser, logOut, loginUser, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;