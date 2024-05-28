import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";



const GoogleLogIn = () => {
const {googleLogin}=useContext(AuthContext);
const navigate=useNavigate()
const axiosPublic=useAxiosPublic()


    const handelGoogle=()=>{
       googleLogin()
        .then((result) => {
          console.log(result)
          const userInfo={email:result.user?.email,name:result.user?.displayName}
          axiosPublic.post('/addUser',userInfo)
          .then(res=>{
            console.log(res);
              if(res.data.insertedId){
                  alert('user register success')
                  navigate('/')
              }
              else if(res.data.message==='user already exist'){
                  alert('user register success')
                  navigate('/')
              }
          })

       
          // ...
        }).catch((error) => {
       console.log(error);
          // ...
        });
    }


    return (
        <>
           <ToastContainer />
           <button onClick={handelGoogle} className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaGoogle /></button>
           </>
    );
};

export default GoogleLogIn;