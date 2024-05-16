
import useMenu from "../../../CustomHocks/useMenu";
import ManuCard from "../../SharedComponent/MenuCaard/ManuCard";
import SectionHeading from "../../SharedComponent/SectionHeading";


const TodayOffer = () => {
const [menu]=useMenu();
   const offeredData= menu.filter(data=>data.category==='offered')
  
    return (
        <div>
            <SectionHeading p={'---Don`t Miss---'} h1={'TODAY`S OFFER'}></SectionHeading>
            
          <div className="lg:grid md:grid grid-cols-2  gap-8 my-10">
          {
                offeredData.map((data=><ManuCard key={data._id} data={data} ></ManuCard>))
            }
          </div>
         
            
        </div>
    );
};

export default TodayOffer;