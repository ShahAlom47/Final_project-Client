import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import PropTypes from 'prop-types'; // ES6

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

    useEffect(()=>{

       const unSubscribe= onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            
          });
          return ()=>unSubscribe
    },[loading])
   
   
const AuthInfo={user,logInUser,registerUser}
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