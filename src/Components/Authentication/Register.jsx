
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import bg from '../../assets/others/authentication.png'
import img from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";


const Register = () => {
    const {registerUser}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
       
    } = useForm()

    const onSubmit = (data) =>{
        // console.log(data);
registerUser(data.email,data.password)
.then(res=>{
    updateProfile(auth.currentUser, {
        displayName: data.name
      }).then((res) => {
       console.log(res);
      })
})



    }


    return (
        <div className='bg-cover bg-center min-h-screen p-16' style={{ backgroundImage: `url(${bg})` }}>
            <div className='border-4 shadow-xl shadow-black flex'>
                <div className='w-6/12 flex items-center'>
                    <img className='w-8/1 m-auto' src={img} alt="" />
                </div>
                <div className=' flex-1'>
                    <div className='w-8/12 py-8'>
                        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Email</span>
                                </label>
                                <input type="email" placeholder="Email"  {...register("email", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Password</span>
                                </label>
                                <input type="text" placeholder="Password"  {...register("password", { required: true })} className="input input-bordered" required />
                            </div>

                  
                            <input className="input bg-[#ae903d] w-full mt-8 text-white font-bold " type="submit" value="SIGN UP" />
                        </form>

                        <div>
                            <p className='text-[#ae903d] text-center m-4'>already Have ? <Link to={'/signIn'}><button className='font-semibold'>Sign In</button></Link></p>
                        </div>
                        <div>
                            <h1 className='text-center font-semibold'>Or sign in with</h1>
                            <div className='flex gap-5 justify-center my-5 text-3xl'>
                                <button className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaFacebookF /></button>
                                <button className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaGoogle /></button>
                                <button className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaGithub /></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;