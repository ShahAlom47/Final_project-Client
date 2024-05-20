import { useQuery } from "@tanstack/react-query";
import useGetCard from "../../../CustomHocks/useGetCard";
import SectionHeading from "../../SharedComponent/SectionHeading";
import useAxios from "../../../CustomHocks/useAxios";
import { useEffect, useState } from "react";


const MyCart = () => {
    const [data] = useGetCard()
    const axiosSecure = useAxios()
    const [cartData,setCartData]=useState([])
   
    
    useEffect(() => {
        const getCartData = async () => {
            if (data) {
                try {
                    const cartPromises = data.map(cart => axiosSecure.get(`/menu/${cart.cardId}`));
                    const results = await Promise.all(cartPromises);
                    const cartItems = results.map(res => res.data);
                //   console.log(cartItems);
                  setCartData(cartItems)
                } catch (error) {
                    console.error("Error fetching cart data", error);
                }
            }
        };

        getCartData();
    }, [data,axiosSecure]);
   

console.log(cartData);
return (
    <div>
        <SectionHeading h1={'MANAGE CART'} p={'---How many?---'}></SectionHeading>
        <div className="bg-white m-10 p-6 ">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">Total Cart={data?.length}</h1>
                <h1 className="text-xl font-bold">Total Price={ }</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl " >
                            <tr className="">
                                <th  ></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    </div>

);
};

export default MyCart;