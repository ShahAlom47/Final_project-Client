

import { useContext, useState } from 'react';
import bg from '../../assets/others/authentication.png'
import img from '../../assets/others/authentication2.png'
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../SharedComponent/GoogleLogIn/GoogleLogIn';



const Login = () => {
    const [capError, setCapError] = useState('')
    const { logInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [viewPass, setPassView] = useState(false)

    const genaretCaptcha = () => {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        for (let index = 0; index < 6; index++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))

        }
        return result
    }
    const [capText, setCapText] = useState(genaretCaptcha())


    const formHandel = (e) => {
        setCapError('')
        e.preventDefault()
        const form = e.target
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // const captcha = form.cap.value

        // if (capText !== captcha) {
        //     setCapError('Captcha not matched')
        //     // return
        // }
        logInUser(email, password)
            .then(() => {
                alert('log In success')
                form.reset()
                if (location.state) {
                    navigate(location?.state)
                }
                navigate('/')
            }).catch(() => {
                // console.log(error);
            });




    }


    return (
        <div className='bg-cover bg-center min-h-screen p-16' style={{ backgroundImage: `url(${bg})` }}>
            <div className='border-4 shadow-xl shadow-black flex'>
                <div className='w-6/12 flex items-center'>
                    <img className='w-8/1 m-auto' src={img} alt="" />
                </div>
                <div className=' flex-1'>
                    <div className='w-8/12 py-8'>
                        <h1 className='text-3xl font-bold text-center'>LogIn</h1>
                        <form onSubmit={formHandel} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-500">Password</span>
                                </label>
                                <div className='input input-bordered flex items-center justify-between'>
                                    <input type={viewPass ? 'text' : 'password'} name='password' placeholder="password" className=" " required />
                                    <p onClick={() => setPassView(!viewPass)} className="">{viewPass ? <FaEyeSlash /> : <FaEye />}</p>
                                </div>
                            </div>

                            <div className="form-control">
                                <p className="input input-bordered mt-7">{capText}</p>
                            </div>
                            <button onClick={(e) => { e.preventDefault(); setCapText(genaretCaptcha()) }} className='btn btn-link flex items-center'>Reload Captcha</button>

                            <div className="form-control">

                                <input type="text" name='cap' placeholder="Type here" className="input input-bordered" required />
                                <p className='text-red-600'>{capError}</p>
                            </div>
                            <input className="input bg-[#ae903d] w-full mt-8 text-white font-bold " type="submit" value="SIGN IN" />
                        </form>

                        <div>
                            <p className='text-[#ae903d] text-center m-4'>New here ? <Link to={'/signUp'}><button className='font-semibold'>Create a New Account</button></Link></p>
                        </div>
                        <div>
                            <h1 className='text-center font-semibold'>Or sign in with</h1>
                            <div className='flex gap-5 justify-center my-5 text-3xl'>
                                <button className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaFacebookF /></button>
                                <GoogleLogIn></GoogleLogIn>
                                <button className=' btn btn-circle rounded-full border-2 p-2 border-black'><FaGithub /></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;