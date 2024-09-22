import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("LogIn");
     
    const onlineStatus = useOnlineStatus();

    //Subscribing to store using hook useSelector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="flex justify-between  shadow-lg">
            <div className="logo-container">
               <Link to="/"> <img className="logo w-24 m-5"
                src  = {LOGO_URL}  /></Link>
            </div>
            <div className="flex items-center">
                <ul className=" flex p-5 m-5 text-xl font-medium ">
                  <li className="px-5">
                    Online Status: {onlineStatus  ?"✅":"🔴"} 
                  </li>
                  <li className=" hover:text-red-600 font-medium mx-5 "><Link to="/">Home</Link></li>
                  <li className=" hover:text-red-600 font-medium mx-5 "><Link to="/about">About Us</Link></li>
                  <li className=" hover:text-red-600 font-medium mx-5 "><Link to="/contact">Contact Us</Link></li>
                  <li className=" hover:text-red-600 font-medium mx-5 "><Link to="/grocery">Grocery</Link></li>
                  <li className=" hover:text-red-600 font-medium mx-5 "><Link to="/cart">Cart</Link>({cartItems.length})</li>
                  <button className="login px-5 rounded-md hover:bg-blue-600 hover:text-black h-8 font-medium" 
                    onClick={()=>{
                        btnNameReact === "LogIn" ? setBtnNameReact("LogOut"):setBtnNameReact("LogIn");
                        setBtnNameReact=("LogOut")
                    }}
                  >
                    {btnNameReact}
                  </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;