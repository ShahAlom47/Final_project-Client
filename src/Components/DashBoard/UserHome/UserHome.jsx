import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEdit, FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdOutlineReviews, MdPayment } from "react-icons/md";
import { updateProfile } from "firebase/auth";
import auth from "../../../../firebase.config";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";


const UserHome = () => {
    const imgKey='21e6e833a49a3b32cb420be0bfe60558'
    const api=`https://api.imgbb.com/1/upload?expiration=600&key=${imgKey} `
    const AxiosSecure = useAxios();
    const axiosPublic=useAxiosPublic()
    const { user, } = useContext(AuthContext);
    const [successMsg,setSuccessMsg]=useState('')
    const [errorMsg,setErrorMsg]=useState('')

    const { data } = useQuery({
        queryKey: [`userHomeData`],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/userHomeData/${user.email}`);
            return res.data;
        }
    })


    const handelModal = () => {
        document.getElementById('my_modal_3').showModal()
    }

    const handelPhoto= async(event)=>{
        setSuccessMsg('')
        event.preventDefault();
        const fileInput = event.target.elements.photo;
        const file = fileInput.files[0];
        const image ={image:file}
        if(file){
            const res= await  axiosPublic.post(api,image,{
                headers: { 'Content-Type': 'multipart/form-data'},
                    withCredentials: false 
            })
            
            if(res.data.success){
                const profilePhoto=res?.data?.data?.display_url;
                 updateProfile(auth.currentUser, {
            photoURL: profilePhoto
        }).then(() => {
            alert('profile Updated successfully ')
            setSuccessMsg('successfully changed')
            setErrorMsg('')
            event.target.reset()
        }).catch((error) => {
            setErrorMsg(error)
        });

                
            }

        }
        else{
       
            setErrorMsg('please select file')
        }
    }
    return (
        <div>
            <h1 className="text-3xl font-bold ml-8">Hi, Welcome Back!</h1>
            <div className=" flex m-8">

                <div className="w-4/12  flex flex-col justify-center items-center p-5 bg-pink-200 m"  >
                    <div className="relative w-40 h-40 rounded-full border-4 flex items-center justify-center">
                        <div onClick={handelModal} title="Change Photo" className="absolute bottom-5 -right-2 text-xl bg-white hover:bg-slate-500 rounded-full p-3">
                            <FaEdit />
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg mb-5">Change Photo</h3>
                                    <form onSubmit={handelPhoto}>
                                    <input name="photo" type="file" />
                                    <p className="text-red-500 block">{errorMsg}</p>
                                        <input type="submit" value="Upload" className=" btn btn-success btn-sm my-6 block" />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                        {
                            user?.photoURL ? <img className="w-full h-full rounded-full" src={user?.photoURL} alt="profile" /> :
                                <FaRegUser className=" text-7xl " />
                        }
                    </div>

                    <h1 className="text-xl font-semibold my-5 ">{user?.displayName}</h1>

                </div>
                <div className=" flex-1 bg-[#FEF9C3]">
                    <h1 className="text-3xl font-bold m-4">YOUR ACTIVITIES</h1>
                    <div className="m-4">
                        <h1 className="text-xl font-bold flex items-center"> <IoMdCart />  Review: {data?.review}</h1>
                        <h1 className="text-xl font-bold flex items-center" ><MdOutlineReviews />   Cart: {data?.order}</h1>
                        <h1 className="text-xl font-bold flex items-center"> <MdPayment />  Payment: {data?.payment}</h1>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default UserHome;