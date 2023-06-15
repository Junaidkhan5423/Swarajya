import React from 'react'
import CourseDropDown from './dropDown/CourseDropDown';
import CounciL from './dropDown/CounciL';
import  { BurgurButton } from '../burgurbtn/BurgurBatan';
import { useMediaQuery } from '@mui/material';


const NavBar = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");


    return (
        <div style={{ width: '100%' }}>
            <header className="header_main">
       
                 <div > 
                    {isNonMobile ? (
                         <img src={require("../../images/LAIQEU.png")} style={{maxWidth:'100%' , height:"355px"}} alt='!' /> 
   
                    ) : (
                        <img src={require("../../images/LAIQUEMOBILEVIEW.png")} style={{maxWidth:'100%'}} alt='!'/> 
                    )

                    }
            
                 </div>
               
                  
                 { !isNonMobile && (
  <BurgurButton />
                 )

                 }

            </header>

            <nav id="navbar" style={{ zIndex: "10", opacity: "1" }}>

                <ul className='nav-bar-list'>
                    <li ><a href="/"><i className="bi bi-house-door"></i>Home</a></li>

                    <li><CourseDropDown /></li>

                    <li ><CounciL /></li>
                    <li className="dropdown">
                        <a className="dropbtn" href='/Studentlogin'>Students</a>
             
                    </li>
                    <li className="dropdown">
                        <a href="/AboutUs" className="dropbtn">About Us</a>

                    </li>
                    <li><a href="/DirectorDesk">Director Desk</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                </ul>

            </nav>


        </div>
    )
}

export default NavBar;