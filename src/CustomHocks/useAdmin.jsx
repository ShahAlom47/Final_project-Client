import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {

    const axiosSecure=useAxios()
    const {user}=useContext(AuthContext)

    const {data,isPending}=useQuery({queryKey:['admin'],queryFn: async()=>{

        const loadedData = await axiosSecure.get(`/user/admin/${user.email}`) 
        return loadedData.data
     }})

     return [data,isPending]
};

export default useAdmin;