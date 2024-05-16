
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';



const PageHeader = ({ h1, p, bg }) => {
    return (

        
     <div className=' pb-16 pt-32' style={{backgroundImage:`url(${bg})`}}  >
        <Parallax speed={-10}>
            <div className=" bg-[#00000083] w-6/12 mx-auto p-16 text-center">
                <h1 className=' text-7xl text-white'>{h1}</h1>
                <p className='text-xl text-white mt-4'>{p}</p>

            </div>
            </Parallax>

        </div>

        
    
       
        // <div style={{ position: 'relative' }} className="">
        //     <div style={{ backgroundImage: `url(${bg})`, position: 'relative', zIndex: 0 }} className="w-full pt-5 bg-fixed h-full">
        //         <div className="text-white bg-fixed"
        //             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }}></div>
        //         <div className="lg:grid gap-20 p-28 pt-8 md:grid grid-cols-2" style={{ position: 'relative', zIndex: 2 }}>

        //             <div className="space-y-2 text-white">

        //                 <h1 className="text-lg font-semibold">{h1}</h1>
        //                 <p>{p}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PageHeader;
PageHeader.propTypes = {
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
};