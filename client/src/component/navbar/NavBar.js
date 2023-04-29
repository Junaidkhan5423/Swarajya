import React from 'react'
import CourseDropDown from './dropDown/CourseDropDown';
import CounciL from './dropDown/CounciL';



const NavBar = () => {
  return (
    <div style={{width:'100%'}}>
     <header className="header_main">
        <div className='header-Img'>
            {/* <img src={require("../../images/LAIQUEMOBILEVIEW.png")}/> */}
        </div>
        {/* <div className="head1">
            <h3>Affiliation Code : AI-4794</h3>
            <p>मानव संसाधन आणि विकास मंत्रालय, उच्च शिक्षण विभाग व <br/> कौशल्य विकास आणि उद्योजकता मंत्रालय भारत सरकार-नवी दिल्ल्ली मान्यता प्राप्त <br/> ऑल इंडिया कौन्सिल फॉर व्होकेशनल अँड पॅरामेडिकल सायन्स नवी दिल्ली संलग्नित <br/> ओजस बहू उद्देशीय सेवा
                भावी संस्था संचालित </p>
  
        </div>
        <div className="head2">
            <img src={require("../../images/logohead.png")} className="logohead1" alt='!'/>
            <div className="head3">
                <h1>स्वराज्य पॅरामेडिकल इन्स्टिट्युट
                </h1>
                <h2>कॉरस्पॉन्डन्स (डिस्टन्स एज्युकेशन) स्टडी सेंटर, महाराष्ट्र 
                </h2>
            </div>
            <img  src={require("../../images/flogo.png")} className="logohead2"/>
        </div> */}

    </header>

    <nav id="navbar" style={{zIndex: "10", opacity:"1"}}>

        <ul className='nav-bar-list'>
            <li className="active"><a href="/"><i className="bi bi-house-door"></i>Home</a></li>

            <li><CourseDropDown /></li>
            
            <li ><CounciL /></li>
            <li className="dropdown">
                <a  className="dropbtn" href='/Studentlogin'>Students</a>
                {/* <div className="dropdown-content">

                    <a href="!">STUDENT LOGIN</a>
                    <a href="#">APPEAR FOR ONLINE EXAM</a>
                    <a href="#">ONLINE ENROLLMENT</a>
                    <a href="#">OFFLINE ENROLLMENT FORM</a>
                    <a href="#">OFFLINE SELF AFFIDAVIT FORM</a>
                    <a href="">INTERNSHIP REFERENCE LETTER</a>
                    <a href="#">SYLLABUS</a>
                    <a href="prospectus.html">PROSPECTUS</a>
                    <a href="#">OFFLINE ADMISSION FORM </a>
                    <a href="#">INTERNSHIP REFERENCE LETTER </a>
                </div> */}
            </li>
            <li className="dropdown">
                <a href="/AboutUs" className="dropbtn">About Us</a>
               

                {/* <div className="dropdown-content">

                    <a href="#">ABOUT DISTANCE EDUCATION </a>
                    <a href="#">BENEFITS OF CORRESPONDANCE EDUCATION </a>
                    <a href="#">OPPORTUNITIES IN NHM/NRHM</a>

                </div> */}
            </li>
            <li><a href="/DirectorDesk">Director Desk</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            {/* <li><a href="#home">Help</a></li> */}
       </ul>

    </nav>


    </div>
  )
}

export default NavBar;