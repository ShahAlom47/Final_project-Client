import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import cardImg from '../../assets/icon/soppingCard.png'


const Navbar = () => {

  const { user, logOutUser } = useContext(AuthContext);
  const [visible, setVisible] = useState(true)



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


  const logOutHandel = () => {
    logOutUser()
      .then(() => {
        alert('logout success')
      }).catch((error) => {
        console.log(error);
      });


  }


  const nav = <>
    <Link><li><a>Home</a></li></Link>
    <Link to={'/our-menu'}><li><a>Our Menu</a></li></Link>
    <Link to={'/order/pizza'}><li><a>Order</a></li></Link>
    <Link to={'/dashBoard'}><li><a>DashBoard</a></li></Link>
    <Link to={'contact'}><li><a>Contact Us</a></li></Link>

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
          <button className="w-20 h-16 relative">
          
          <img className="w-full h-full rounded-full" src={cardImg} alt="" />
            <div className="bg-red-500 rounded-full p-1  absolute bottom-1 text-sm right-0">+99</div>
          </button>
          {
            user ? <>

              <p className="text-red-500">{user.email}</p>
              <Link><button onClick={logOutHandel} className="btn btn-ghost hover:underline">SIGN OUT</button></Link></>
              : <> <Link to={'/signIn'}><button className="btn btn-ghost hover:underline">SIGN IN</button></Link>
                <Link to={'/signUp'}><button className="btn btn-ghost hover:underline">SIGN UP</button></Link>
              </>
          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;