import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionHeading from "../../SharedComponent/SectionHeading";


const PaymentHistory = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxios();
    const {data}=useQuery({queryKey:['/paymentHistory'], queryFn: async()=>{
       const response= await axiosSecure.get(`/paymentHistory/${user.email}`)
        return response.data;
    }})

console.log(data)

const formattedDate = (dateStr ) => {
    console.log(dateStr);
    const date = new Date(dateStr);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', options);

    return (formattedDate ,formattedTime);
};


return (
    <div>
        <SectionHeading h1={'PAYMENT HISTORY'} p={'---At a Glance---'}></SectionHeading>
        <div>
            <table className="table ">
                {/* head */}
                <thead className="bg-[#D1A054] rounded-xl " >
                    <tr className="">
                        <th >No</th>
                        <th>Email</th>
                        <th>Ordered Items</th>
                        <th>Total Price </th>
                        <th>Pay Date</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        data ? <>
                            {
                                data.map((item, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    
                                    <td>{item?.email}</td>
                                    <td>{item?.itemId?.length}</td>
                                    <td>{item?.price}</td>
                                    <td>{formattedDate(item?.date)}</td>
                               
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

export default PaymentHistory;