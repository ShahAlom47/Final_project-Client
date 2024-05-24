

import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// // import useAuth from "./useAuth";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";



const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
//   baseURL: 'https://assignment-11-jwt-server-flax.vercel.app',
  withCredentials: true,
});

const useAxios = () => {
  const { logOutUser } = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {

    axiosSecure.interceptors.request.use(function (config) {
      const token= localStorage.getItem('token')
      config.headers.authorization=`bearer ${token}`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      const status= error.response?.status
      console.log(status);
      if(status===401|| status===403){
        logOutUser()
        .then(()=>{
          navigate('/signIn')
        })
        
      }
      return Promise.reject(error);
    });
  
  }, [navigate,logOutUser])
  return axiosSecure
};

export default useAxios;