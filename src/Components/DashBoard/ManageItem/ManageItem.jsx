import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import SectionHeading from "../../SharedComponent/SectionHeading";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../CustomHocks/useAxios";
import { useNavigate } from "react-router-dom";


const ManageItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const navigate = useNavigate()
    const { data, refetch } = useQuery({
        queryKey: ['manageItem'], queryFn: async () => {
            const loadedData = await axiosPublic.get('/menu')
            return loadedData.data

        }
    })



    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }



                    })


                // 
            }
        });


    }
    const handelEdit = (id) => {
        navigate(`/dashBoard/updateItem/${id}`)

    }


    return (
        <div>
            <SectionHeading h1={'MANAGE ALL ITEMS'} p={'---Hurry up---'}></SectionHeading>
            <div>
                <table className="table ">
                    {/* head */}
                    <thead className="bg-[#D1A054] rounded-xl " >
                        <tr className="">
                            <th >No</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data ? <>
                                {
                                    data.map((item, idx) => <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item?.name}</td>
                                        <td>{item?.price}</td>
                                        <td><button onClick={() => handelEdit(item._id)} className="btn text-yellow-700"><MdEdit /></button></td>
                                        <td><button onClick={() => handelDelete(item._id)} className="btn text-red-600"><MdDeleteForever /></button></td>
                                    </tr>)
                                }
                            </> : <tfoot>Data Not Available</tfoot>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;