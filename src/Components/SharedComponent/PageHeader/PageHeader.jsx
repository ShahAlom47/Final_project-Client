
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';



const PageHeader = ({ h1, p, bg }) => {
    return (

        
     <div className=' pb-16 pt-32 overflow-hidden' style={{backgroundImage:`url(${bg})`}}  >
        <Parallax speed={-10}>
            <div className=" bg-[#00000083] w-6/12 mx-auto p-16  text-center">
                <h1 className=' text-7xl text-white'>{h1}</h1>
                <p className='text-xl text-white mt-4'>{p}</p>

            </div>
            </Parallax>

        </div>

        
    
       
    );
};

export default PageHeader;
PageHeader.propTypes = {
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
};