import { useEffect, useState } from "react"
import useAxios from "./useAxios"


const useMenu=()=>{

    const [menu, setMenu] = useState([])
    const [loading,setLoading]=useState(true)
  
    const axiosSecure=useAxios()

    useEffect(()=>{
        axiosSecure.get('/menu')
        .then(data=>{
            setMenu(data.data)
            setLoading(false)
        })
    },[axiosSecure])
    

    return [menu,loading]
}

export default useMenu