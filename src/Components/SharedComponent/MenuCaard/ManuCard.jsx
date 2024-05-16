import PropTypes from 'prop-types';

const ManuCard = ({data}) => {
  
    return (
        <div className=' flex gap-4 text-gray-500'>
            <div className='w-28 h-20 rounded-tr-full'>
                <img className='w-full h-full rounded-r-[40px] rounded-bl-[40px] '
                 src={data?.image} alt="" />
            </div>
            <div>
                <h1 className=' text-xl font-semibold mb-3'>{data?.name} ---------</h1>
                <p >{data?.recipe}</p>
            </div>
            <p className='text-yellow-700 text-lg font-semibold'>${data?.price}</p>
            
        </div>
    );
};

export default ManuCard;
ManuCard.propTypes = {
    data: PropTypes.object.isRequired
  };


