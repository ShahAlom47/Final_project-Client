import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'; // ES6
import auth from "../../../firebase.config";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
   
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const logInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const registerUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{

       const unSubscribe= onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            
          });
          return ()=>unSubscribe
    },[loading])
   
   
const AuthInfo={user,logInUser,registerUser,logOutUser,loading}
return (
    <AuthContext.Provider value={AuthInfo}>
     {children}
    </AuthContext.Provider>
 );

};

export default AuthProvider;
AuthProvider.propTypes={

    children: PropTypes.node.isRequired
}