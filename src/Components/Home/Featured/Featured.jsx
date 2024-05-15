import SectionHeading from "../../SharedComponent/SectionHeading";
import featured from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div style={{position: 'relative'}} className="">
        <div  style={{backgroundImage:`url(${featured})`, position: 'relative', zIndex: 0}} className="w-full pt-5 bg-fixed h-full">
            <div  className="text-white bg-fixed"
             style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1}}></div>
            <SectionHeading className='mt-10 text-white ' h1={'FROM OUR MENU'} p={'---Check it out---'} ></SectionHeading>
            <div className="lg:grid gap-20 p-28 pt-8 md:grid grid-cols-2" style={{position: 'relative', zIndex: 2}}>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="space-y-2 text-white">
                    <h1 className="text-lg font-semibold">March 20, 2023 </h1>
                    <h1 className="text-lg font-semibold">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-b-4 p-3  rounded-lg border-black hover:bg-slate-400">Read More</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Featured;