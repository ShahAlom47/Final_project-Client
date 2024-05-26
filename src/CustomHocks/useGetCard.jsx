import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useGetCard = () => {
    const axiosSecure = useAxios()
    const { user } = useContext(AuthContext)



    const { refetch, data, isPending } = useQuery({
        queryKey: ['card'],
        queryFn: async() => {
            const res= await axiosSecure.get(`/foodCard?email=${user.email}`);
            return res.data;
        },
    })

    // console.log(data, isPending);

    return [data, refetch, isPending]


};

export default useGetCard;