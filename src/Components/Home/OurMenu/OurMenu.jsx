import { useEffect, useState } from "react";
import SectionHeading from "../../SharedComponent/SectionHeading";
import ManuCard from "../../SharedComponent/MenuCaard/ManuCard";
import { Link } from "react-router-dom";


const OurMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(data => data.category === 'popular')
                setMenu(popular)
            })
    }, [])

    return (
        <div>
            <SectionHeading h1={'FROM OUR MENU'} p={'---Check it out---'} ></SectionHeading>
            <div className=" grid gap-5 mb-8 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                {
                    menu.map((data)=><ManuCard key={data._id} data={data}></ManuCard>)
                }
            </div>
            <div className="flex justify-center mb-10">
               <Link to={'/our-menu'}> <button className=" mx-auto  bg-transparent rounded-xl p-3 text-xl hover:bg-slate-300 border-b-4 border-black">View Full Menu</button></Link>
            </div>

        </div>
    );
};

export default OurMenu;