import React from 'react';
import "./Services.css";
const Services = ()=>{
    return(
        <div className='services-container'>
            <div className='services-list-container'>
                <div className='services-discription'>
                    <h1> My Awesome <span>Services</span></h1>
                    <p>
                    Software engineering is the branch of computer science that deals with the design, 
                    development, testing, and maintenance of software applications. 
                    Software engineers apply engineering principles and knowledge of programming languages to 
                    build software solutions for end users.
                    </p>
                    <button>Hire Me</button>
                    
                </div>
                <div className='services-item-container'>
                    <div className='services-item'>
                        <h3> Web Development</h3>
                   
                        <p>
                        A Web Developer is a professional who is responsible for the design and construction of websites. 
                        They ensure that sites meet user expectations by ensuring they look good,
                         run smoothly and offer easy access points with no loading issues between pages or error messages. 
                        </p>
                    </div>
                    <div className='services-item'>
                        <h3> Desktop Development</h3>
                        
                        <p>
                        Desktop development implies the creation of software applications that perform on computers. Windows, Linux,
                         and macOS are the three most popular operating systems which desktop software is created for.
                            This type of development is native in most cases as apps function only on a particular type of operating system.
                        </p>
                    </div>
                    <div className='services-item'>
                        <h3> mobile Development</h3>
                       
                        <p>
                        Mobile developers are a type of software developer. 
                        They specialise in mobile technology such as building apps for Google's Android, Apple's iOS and Microsoft's Windows Phone platforms.
                         For this reason job titles for this type of role also include Android developer and iOS developer. 
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Services