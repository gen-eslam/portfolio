import React from "react";
import Typical from 'react-typical';
import "./Header.css";

const Header =() =>{
    return (
      <div className="header-container">
        {/* header content*/}
        <div className="header-content">
            <h1>Hy! Am</h1>
            <h2 className="fullname"> Eslam Abd El-azize Mohamed </h2>
            <h2>
                I'm a{" "}
                <Typical 
                steps={[
                    'Full Stack Developer ☕️👨‍💻',1000,
                    'Front-end Developer ✅',1000,
                    'Back-end Developer ✅',1000,
                    'Flutter Developer ✅',1000
                ]} loop={Infinity} wrapper='b'/>            
            </h2>
            <p>Successful engineers know how to use the right programming languages, 
                platforms, and architectures to develop everything from computer games to network control systems. 
                In addition to building their own systems, software engineers also test, improve, 
                and maintain software built by other engineers. </p>
                {/*payment links*/}
            
                <div className="header-payment-container">
                    <button>Hire Me</button>
                    <i className="fa-brands fa-paypal"></i>
                </div>
        </div>

      </div>
    )
}
export default Header;

