

import axios from "axios";

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
//   const { userLogOut } = useContext(AuthContext)
//   const navigate = useNavigate()


//   useEffect(() => {
// 
//     axiosSecure.interceptors.response.use((config) => {

//       return config;
//     },
    
//     (error) => {
//       // console.log(error.response.status);
//       if (error.response?.status === 401 || error.response.status === 403) {

//         userLogOut()
//           .then(() => {
//             navigate('/login')
//             //    alert(error.response?.data?.message,)


//           })
//           .catch(() => {
//             // console.log(error);
//           });
//       }


//       return Promise.reject(error);
//     }
//     );
//   }, [navigate,userLogOut])
  return axiosSecure
};

export default useAxios;