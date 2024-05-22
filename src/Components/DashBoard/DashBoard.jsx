import { FaBook, FaCalendarAlt, FaCalendarCheck, FaHome, FaShoppingCart, FaSitemap } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import './DashBoard.css'
import { TbToolsKitchen3 } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdOutlinePayment, MdRateReview } from "react-icons/md";


const DashBoard = () => {
    const isAdmin = true;




    return (
        <div className="flex">

            <div className="p-10 w-3/12 min-h-screen bg-[#D1A054]">
                <div className="mb-5  border-b-2 border-gray-700  ">
                    <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                    <p className="font-semibold ">RESTAURANT</p>
                </div>
                <div className="space-y-2 ">
                    {
                        isAdmin ? <>
                            <NavLink to={'/dashBoard'}><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaHome></FaHome> ADMIN HOME </button></NavLink>
                            <NavLink><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><TbToolsKitchen3 /> ADD ITEMS</button></NavLink>
                            <NavLink><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><TfiMenuAlt /> MANAGE ITEMS</button></NavLink>
                            <NavLink><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaBook /> MANAGE BOOKING</button></NavLink>
                            <NavLink to={'/dashBoard/allUsers'}><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold  mb-5"><PiUsersThreeFill /> ALL USERS</button></NavLink>
                        </> :
                            <>
                                <NavLink ><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaHome></FaHome> USER HOME </button></NavLink>
                                <NavLink to={'/dashBoard/myCart'}><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaShoppingCart /> MY CART</button></NavLink>
                                <NavLink ><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaCalendarAlt /> RESERVATION</button></NavLink>
                                <NavLink ><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><MdOutlinePayment /> PAYMENT HISTORY</button></NavLink>
                                <NavLink><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><MdRateReview /> ADD REVIEW</button></NavLink>
                                <NavLink><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold "><FaCalendarCheck /> MY BOOKING</button></NavLink>
                            </>
                    }
                    <hr />
                    <NavLink to={'/'}><button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold  mt-5"><FaHome /> Home</button></NavLink>
                </div>


            </div>
            <div className="flex-1 p-8 bg-gray-100">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;