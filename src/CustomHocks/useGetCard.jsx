import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useGetCard = () => {
    const axiosSecure=useAxios()
    const {user}=useContext(AuthContext)



    const {refetch,data} = useQuery({ queryKey: ['card'], queryFn:()=>{
  
    return  axiosSecure.get(`/foodCard?email=${user.email}`)
    } })

    return[data?.data,refetch]
};

export default useGetCard;