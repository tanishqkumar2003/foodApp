import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("LogIn");
     
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src  = {LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                  <li>
                    Online Status: {onlineStatus  ?"✅":"🔴"} 
                  </li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/grocery">Grocery</Link></li>
                  <li>Cart</li>
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