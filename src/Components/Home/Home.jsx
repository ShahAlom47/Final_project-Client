import OnlineOrder from "../../OnlineOrder";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="space-y-16  ">
         <Banner></Banner>
         <OnlineOrder></OnlineOrder>
         <OurMenu></OurMenu>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;