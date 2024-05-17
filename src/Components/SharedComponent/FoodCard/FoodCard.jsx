
import PropTypes from 'prop-types';
const FoodCard = ({data}) => {
    return (
        <div className="card  bg-base-100 shadow-l rounded-sm">
        <figure>
            <img src={data.image} alt="Shoes" />
            <p className='bg-slate-800 text-white absolute top-3 right-3 px-4 py-2 font-semibold'>$ {data.price}</p>
        </figure>
        <div className="card-body text-center bg-[#F3F3F3]">
          <h2 className="text-xl text-center font-bold">{data.name}</h2>
          <p className=" text-gray-500 font-semibold">{data.recipe}</p>
          <div className="card-actions justify-center my-3">
            <button className="btn border-b-4 border-b-yellow-600 hover:bg-black hover:text-white hover:border-b-yellow-500 text-yellow-600 font-semibold">ADD TO CARD</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    data: PropTypes.object.isRequired,
};