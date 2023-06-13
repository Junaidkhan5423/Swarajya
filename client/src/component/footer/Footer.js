import React from 'react'
import pdf1 from '../../pdf/Afflation.pdf'
import pdf2 from '../../pdf/ODLEquivalenceDegrees.pdf'


const Footer = () => {
    return (
        <>

            <footer>
                <div className="main">
                    <div className="logo_corner">
                        <div className="logo">
                            {/* <img src={require('../../images/flogo.png')}/> */}
                            {/* <p className='welcomeTo'>Welcome to,</p>
                    <p>Swarajya Paramedical Institute</p> */}
                        </div>
                        <div className="paymodes">
                            <h2 className='footerH2'>Current Affairs</h2>
                            <a href={pdf2} target='blank'><h6 style={{ color: 'whitesmoke', border: 'none' }}>IMP Govt. Decision(UGC)</h6></a>
                            <h6 href="mission and vision.html" style={{ color: 'whitesmoke' }}>Devloped BY</h6>
                            <a href='https://prabhavatids.com/'> <img src={require('../../images/Prabhavati Logo FINEL PNG ORANGE.png')} style={{ height: '65px' }} /></a>

                            <h6 style={{ color: 'whitesmoke', marginTop: '0.6rem' }}>E-Mail : info@prabhavatids.com</h6>
                            <h6 style={{ color: 'whitesmoke' }}>Developers (LS,MK,jK)</h6>
                            <h6 style={{ color: 'whitesmoke' }}>Contact : +91-9420114282</h6>


                        </div>
                    </div>
                    <div className='.info_main'>
                        <div className="quick">
                            <h2 className='footerH2'>Quick Links</h2>
                            <a href="courses.html">Courses</a>
                            <a href={pdf1} target='blank'>Institute Affiliation</a>
                            <a href="mission and vision.html">Exam Date</a>
                            <a href="mission and vision.html">Internship Vacancies</a>


                            <a href="#">Our Prospectus</a>
                        </div>
                    </div>

                    <div className="info_main">
                        <div className="policy">
                            <h2 className='footerH2'>Policy</h2>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="mission and vision.html">Our Mission</a>
                            <a href="aboutUs.html">About Us</a>
                        </div>
                        {/* <div className="info">
                    <h2>Info</h2>
                    <a href="#">Swarajya Paramedical Institute</a>
                    <a href="#">Address</a>
                    <a href="#">Email</a>
                    <a href="#">Contact No.</a>
                         </div> */}
                    </div>
                </div>

                <div className="social">
                    {/* <div className="cr">
                <p>Copyright © 2022 Swarajya Paramedical Institute. All India Council For Vocational & Paramedical Science. </p><br/>
                <p>All Rights Reserved</p>
            </div> */}
                    <div className="socio-links" >
                        <a href="#"> <i className="bi bi-facebook fb"></i></a>
                        <a href="#"> <i className="bi bi-twitter tr"></i></a>
                        <a href="#" ><i className="bi bi-instagram ig"></i></a>
                        <a href="#"> <i className="bi bi-youtube yt"></i></a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer