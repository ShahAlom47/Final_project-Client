
import ManuCard from '../MenuCaard/ManuCard';
import PageHeader from '../PageHeader/PageHeader';
import useMenu from '../../../CustomHocks/useMenu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuCategory = ({category,headerBG,headerH1,headerP,}) => {
    const [menu]=useMenu();
    const Datas= menu.filter(data=>data.category===category)
    console.log(menu);
   
     return (
         <div className=''>
           <PageHeader bg={headerBG} h1={headerH1} p={headerP}></PageHeader>
             
           <div className="lg:grid md:grid grid-cols-2  gap-8 my-16">
           {
                 Datas.map((data=><ManuCard key={data._id} data={data} ></ManuCard>))
             }
           </div>
           <div className="flex justify-center mb-10">
                <Link to={`/order/${category}`}><button className=" mb-16 mx-auto  bg-transparent rounded-xl p-3 text-xl hover:bg-slate-300 border-b-4 border-black font-semibold">Order Your Favourite Food</button></Link>
            </div>
             
         </div>
    );
};

export default MenuCategory;
MenuCategory.propTypes = {
    category: PropTypes.string.isRequired,
    headerH1: PropTypes.string.isRequired,
    headerP: PropTypes.string.isRequired,
    headerBG: PropTypes.string.isRequired,
};