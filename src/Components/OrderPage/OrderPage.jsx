import PageHeader from "../SharedComponent/PageHeader/PageHeader";

import bg from '../../assets/shop/banner2.jpg'
import { useEffect, useState } from "react";

import useAxios from "../../CustomHocks/useAxios";
import FoodCard from "../SharedComponent/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";



const OrderPage = () => {



const axiosSecure = useAxios()
const {catName}=useParams()
const [categoryData,setCategoryData]=useState([])
const [category,setCategory]=useState('pizza')




useEffect(()=>{
    setCategory(catName)

},[catName])

useEffect(()=>{
    
    axiosSecure.get(`/menu?category=${category}`)
    .then(data=>setCategoryData(data.data))

},[axiosSecure,category,catName])





const page = Math.ceil(categoryData.length/6)
const totalPage= Array.from({length:page},(value,index)=>index)
const [pageNo,setPageNo]=useState(1)
const itemsPerPage = 6;
const startIndex = (pageNo-1)*itemsPerPage
const endIndex = startIndex+itemsPerPage
const currentItems= categoryData.slice(startIndex,endIndex)


const categoryHandel=(category)=>{
    setCategory(category)
    setPageNo(1)
  
}



const handelPrev=()=>{
if(pageNo>1){
    setPageNo(pageNo-1)



}

}

const handelNext=()=>{
    if(pageNo<totalPage.length){
        setPageNo(pageNo+1)
    }


}
  
 
   


  
    return (
    
    // <></>
        <div>
            <PageHeader bg={bg} h1={'ORDER'} p={ 'WOULD YOU LIKE TO TRY  A DISH '}></PageHeader>
            <div className="w-10/12 mx-auto my-16">
                <div className="byn-container  flex justify-center gap-5 my-6 text-gray-700 font-bold ">
                    <button onClick={()=>categoryHandel('pizza')}  className={`btn btn-ghost font-bold  border-2 ${category==='pizza'?'text-yellow-500  border-b-yellow-500':''}`} > PIZZA  </button>
                    <button onClick={()=>categoryHandel('salad')} className={`btn btn-ghost font-bold border-2 ${category==='salad'?'text-yellow-500 border-b-yellow-500':''}`} > SALAD  </button>
                    <button onClick={()=>categoryHandel('soup')}  className={`btn btn-ghost font-bold border-2 ${category==='soup'?'text-yellow-500 border-b-yellow-500':''}`} > SOUP  </button>
                    <button onClick={()=>categoryHandel('dessert')}  className={`btn btn-ghost font-bold border-2 ${category==='dessert'?'text-yellow-500 border-b-yellow-500':''}`} > DESSERT  </button>
                    <button onClick={()=>categoryHandel('drinks')}  className={`btn btn-ghost font-bold border-2 ${category==='drinks'?'text-yellow-500 border-b-yellow-500':''}`} > DRINK  </button>
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                   {
                    currentItems.map((data)=><FoodCard datas={data} key={data._id}></FoodCard> )
                   }

                </div>
              
                {
                    categoryData.length>6&&<div className=" flex m-8 gap-5 items-center">
                    <button onClick={handelPrev} className="btn btn-circle"><FaArrowLeft /></button>
                    <h1 className="font-semibold text-lg">{pageNo}/{totalPage.length}</h1>
                    <button onClick={handelNext} className="btn btn-circle"><FaArrowRight /></button>

                    <div className=" flex gap-5">
                        {
                            totalPage.map((d,i)=><p className={`  rounded-full ${pageNo===i+1?'bg-yellow-500':' bg-green-600'} w-5 h-5 `} key={i}></p>)
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default OrderPage;