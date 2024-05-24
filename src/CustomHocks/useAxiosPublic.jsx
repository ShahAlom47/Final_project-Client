import axios from "axios";

const axiosPublic=axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL:'https://final-project-server-mu.vercel.app',

  // withCredentials: true,
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;