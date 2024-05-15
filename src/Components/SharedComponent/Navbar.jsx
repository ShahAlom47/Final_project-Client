import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {



    const [visible,setVisible]=useState(true)

    useEffect(() => {
        let prevSPos = window.pageYOffset;

        const handleScroll = () => {
            const currentSPos = window.pageYOffset;
            const isVisible = prevSPos > currentSPos;

            setVisible(isVisible);
            prevSPos = currentSPos;

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visible]);


    const nav=<>
     <Link><li><a>Home</a></li></Link>
     <Link><li><a>DashBoard</a></li></Link>
     <Link><li><a>Our Menu</a></li></Link>
     <Link><li><a>Our Shop</a></li></Link>
     <Link><li><a>Contact Us</a></li></Link>
     
    </>
    return (
        <div className={`className=" max-w-7xl w-full m-auto" p-0  z-50 fixed  ${visible ? 'top-0 transition-all' : '-top-20 transition-all'} duration-1000`} >
        <div className="navbar text-white bg-black bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {nav}
          </ul>
          <a className="btn">Button</a>
        </div>
        
      </div>
      </div>
    );
};

export default Navbar;