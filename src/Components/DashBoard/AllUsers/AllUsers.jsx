import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import SectionHeading from "../../SharedComponent/SectionHeading";
import { MdDeleteForever } from "react-icons/md";
import auth from "../../../../firebase.config";



const AllUsers = () => {
    const axiosSecure=useAxios()
  

    const {data,refetch}=useQuery({queryKey:['users'],queryFn: async ()=>{

      const loadedData= await axiosSecure.get('/allUsers')
        
        return loadedData.data
    }})


    const handelDelete=async(user)=>{
   
        console.log(auth);

        const id= user._id
        axiosSecure.delete(`/user/${id}`)
        .then(async(res)=>{
            if(res.data.deletedCount >0){

                alert('deleted success')
                    refetch()
               
            }
        })


    }


    const handelRole=(id)=>{
        console.log(id);
        axiosSecure.patch(`/user/admin/${id}`)
        .then(res=>{
           if(res.data.modifiedCount){
            alert('user update success')
           }
        }
        )

    }

    return (
        <div>
        <SectionHeading h1={'MANAGE USERS'} p={'---How many?---'}></SectionHeading>
        <div className="bg-white m-10 p-6 ">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">Total User={data?.length}</h1>
               
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl " >
                            <tr className="">
                                <th >No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                           {
                            data?<>
                            {
                                data.map((user,idx)=> <tr key={idx}>
                                <th>{idx+1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td><button onClick={()=>handelRole(user._id)} className="btn">{user?.role}</button></td>
                                <td><button onClick={()=>handelDelete(user)} className="btn"><MdDeleteForever /></button></td>
                            </tr>)
                            }
                            </>:<h1>Data Not Available</h1>
                           }

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    </div>

    );
};

export default AllUsers;