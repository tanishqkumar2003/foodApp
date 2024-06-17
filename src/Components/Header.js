import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("LogIn");
     
    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between  shadow-lg bg-red-500">
            <div className="logo-container">
                <img className="logo w-52"
                src  = {LOGO_URL}  />
            </div>
            <div className="flex items-center">
                <ul className=" flex p-5 m-5">
                  <li className="px-5">
                    Online Status: {onlineStatus  ?"✅":"🔴"} 
                  </li>
                  <li className="px-4"><Link to="/">Home</Link></li>
                  <li className="px-4"><Link to="/about">About Us</Link></li>
                  <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                  <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                  <li className="px-4">Cart</li>
                  <button className="login" 
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