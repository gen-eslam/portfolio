import React from "react";
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer =() =>{

    return(
        <footer>
            <div className="footer-logo">
            <img src={logo} alt ="logo" />

            </div>
            <div className=" footer-copyright">
                <p>
                   don't worry i love you 
                </p>

            </div>

        </footer>
    )
}

export default Footer;