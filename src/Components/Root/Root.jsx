import { Outlet } from "react-router-dom";
import Footer from "../SharedComponent/Footer";
import Navbar from "../SharedComponent/Navbar";



const Root = () => {
    return (
        <div  className=" m-auto max-w-screen-xl">
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;