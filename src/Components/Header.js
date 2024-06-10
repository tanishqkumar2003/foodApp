import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("LogIn");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src  = {LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
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