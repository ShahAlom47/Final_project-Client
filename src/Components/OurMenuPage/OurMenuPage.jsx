import PageHeader from "../SharedComponent/PageHeader/PageHeader";
import bg from '../../assets/menu/banner3.jpg'
import { Helmet } from "react-helmet";
import TodayOffer from "./TodayOffer/TodayOffer";
import MenuCategory from "../SharedComponent/MenuCategory/MenuCategory";
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'



const OurMenuPage = () => {
    return (
        <div className="space-y-10">
            <Helmet><title>Bistro Boss || Our Menu </title></Helmet>

            <PageHeader h1={" OUR MENU"} p={'Would you like to try a dish?'} bg={bg} ></PageHeader>
            <TodayOffer></TodayOffer>

            <MenuCategory
                category={'dessert'}
                headerBG={dessertBg}
                headerP={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and'}
                headerH1={'DESSERT'}
            ></MenuCategory>

            <MenuCategory
                category={'pizza'}
                headerBG={pizzaBg}
                headerP={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and'}
                headerH1={'PIZZA'}
            ></MenuCategory>


            <MenuCategory
                category={'salad'}
                headerBG={saladBg}
                headerP={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and'}
                headerH1={'SALAD'}
            ></MenuCategory>


            <MenuCategory
                category={'soup'}
                headerBG={soupBg}
                headerP={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and'}
                headerH1={'SOUP'}
            ></MenuCategory>

        </div>
    );
};

export default OurMenuPage;