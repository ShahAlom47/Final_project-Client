
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../CustomHocks/useAxios';
import { MdDataSaverOn } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGetCard from '../../../CustomHocks/useGetCard';


const FoodCard = ({ datas }) => {
  const { user } = useContext(AuthContext)
  const axiosSecure = useAxios()
  const navigate =useNavigate()
  const [data,refetch]=useGetCard()
  console.log(refetch);

  const handelCard = (cardDatas) => {

    const cardInfo ={
      userEmail: user?.email,
      cardId:datas._id, 
     } 

    if(user){

      axiosSecure.post('/foodCard',{cardInfo})
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your meal card has been successfully added",
            showConfirmButton: false,
            timer: 1500,
            customClass:{
              title:'text-lg'
            }
            
          });
          refetch()

        }
      })
     
     
      

    }
    else{
      Swal.fire({
        title: "You are not login?",
        text: "please login first !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: location.pathname });
        }
      });
    }
    
 
    
  }

  




  return (
    <div className="card  bg-base-100 shadow-l rounded-sm">
    
      <figure>
        <img src={datas.image} alt="Shoes" />
        <p className='bg-slate-800 text-white absolute top-3 right-3 px-4 py-2 font-semibold'>$ {datas.price}</p>
      </figure>
      <div className="card-body text-center bg-[#F3F3F3]">
        <h2 className="text-xl text-center font-bold">{datas.name}</h2>
        <p className=" text-gray-500 font-semibold">{datas.recipe}</p>
        <div className="card-actions justify-center my-3">
          <button onClick={() => handelCard(MdDataSaverOn)} className="btn border-b-4 border-b-yellow-600 hover:bg-black hover:text-white hover:border-b-yellow-500 text-yellow-600 font-semibold">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  datas: PropTypes.object.isRequired,
};