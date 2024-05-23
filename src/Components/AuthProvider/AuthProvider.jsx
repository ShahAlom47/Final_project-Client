import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'; // ES6
import auth from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google login 

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
               const userInfo=user.email
               console.log(userInfo);
                axiosPublic.post('/jwt',{userInfo})
                .then(res=>{
                  if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                    }
                    })
            }

            else{
                localStorage.removeItem('token')
                console.log(user,'remove');
            }
            setUser(user)
            setLoading(false)

        });
        return () => unSubscribe
    }, [loading,axiosPublic])


    const AuthInfo = { user, logInUser, registerUser, logOutUser, loading , googleLogin}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;
AuthProvider.propTypes = {

    children: PropTypes.node.isRequired
}