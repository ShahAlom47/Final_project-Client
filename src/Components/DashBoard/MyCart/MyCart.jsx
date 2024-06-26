
import useGetCard from "../../../CustomHocks/useGetCard";
import SectionHeading from "../../SharedComponent/SectionHeading";
import useAxios from "../../../CustomHocks/useAxios";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";



const MyCart = () => {
    const [data,refetch,isPending]=useGetCard()
    const axiosSecure = useAxios()
    const [cartData,setCartData]=useState([])
    // console.log(data, isPending);

    useEffect(()=>{
     
        const getCartData=async()=>{

        

              try{
                const loadData=  data.map( (cart)=> axiosSecure.get(`/menu/${cart.cardId}`))
                const results= await Promise.all(loadData)
                const mainData= results.map(data=>data.data)
               setCartData(mainData)

              }
              catch(err){
                // console.log(err);
              }



            
        }
if(!isPending){
    getCartData()
}
    },[axiosSecure,data,isPending])
   

const total = cartData.reduce((sum,item)=>sum+item.price,0)


const handelDelete=(id)=>{
    axiosSecure.delete(`/deleteCart/${id}`)
    .then(res=>{
        if(res.data.deletedCount>0){
            alert('deleted success')
            refetch()
            
        }
    })

}
// console.log(cartData);



// 
return (
    <div>
        <SectionHeading h1={'MANAGE CART'} p={'---How many?---'}></SectionHeading>
        <div className="bg-white m-10 p-6 ">
            <div className="flex justify-between mb-4">
                <div className=" flex gap-3">
                <h1 className="text-xl font-bold">Total Cart={cartData?.length}</h1>
                <h1 className="text-xl font-bold">Total Price={total }</h1>
                </div>
               {
                cartData.length?<Link to={`/dashBoard/payment/${total}`}><button className=" btn btn-accent btn-md">PAY</button></Link>:
                <button disabled className=" btn btn-accent btn-md">PAY</button>
               } 
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054] rounded-xl " >
                            <tr className="">
                                <th  >No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            cartData?<>
                            {
                                cartData.map((cart,idx)=> <tr key={idx}>
                                <th>{idx+1}</th>
                                <td>{cart?.name}</td>
                                <td>{cart?.category}</td>
                                <td>{cart?.price}</td>
                                <td><button onClick={()=>handelDelete(cart?._id)} className="btn"><MdDeleteForever /></button></td>
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

export default MyCart;