import React from 'react'
import pdf1 from '../../pdf/Afflation.pdf'
import pdf2 from '../../pdf/ODLEquivalenceDegrees.pdf'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
{/* 
            <footer>
                <div className="main">
                    <div className="logo_corner">
                        <div className="logo">
                        
                        </div>
                        <div className="paymodes">
                            <h2 className='footerH2'>Current Affairs</h2>
                            <a href={pdf2} target='blank'><h6 style={{ color: 'whitesmoke', border: 'none',fontSize: '1.6vh' }}>IMP Govt. Decision(UGC)</h6></a>
                            <h6 href="mission and vision.html" style={{ color: 'whitesmoke',fontSize: '1.6vh'  }}>Devloped BY</h6>

                            <h6 style={{ color: 'whitesmoke', marginTop: '0.6rem',fontSize: '1.6vh' }}>E-Mail : info@prabhavatids.com</h6>
                            <h6 style={{ color: 'whitesmoke',fontSize: '1.6vh' }}>Developers (LS,MK,jK)</h6>
                            <h6 style={{ color: 'whitesmoke',fontSize: '1.6vh' }}>Contact :9420114282</h6>


                        </div>
                    </div>
                    <div className='.info_main'>
                        <div className="quick">
                            <h2 className='footerH2'>Quick Links</h2>
                            <a href="courses.html">Courses</a>
                            <a href={pdf1} target='blank'>Institute Affiliation</a>
                            <a href="mission and vision.html">Exam Date</a>
                            <a href="mission and vision.html">Internship Vacancies</a>


                            <a href="1">Prospectus</a>
                        </div>
                    </div>

                    <div className="info_main">
                        <div className="policy">
                            <h2 className='footerH2'>Policy</h2>
                            <Link to="/PravicyPolisy">Privacy Policy</Link>
                            <Link to="/condition">Terms & Conditions</Link>
                            <Link to="/MissionAndVision">Our Mission</Link>
                            <Link to="/AboutUs">About Us</Link>
                        </div>
                  
                    </div>
                </div>

                <div className="social">
              
                    <div className="socio-links" >
                        <a href=": https://www.facebook.com/coordinatorsonu?mibextid=ZbWKwL"> <i className="bi bi-facebook fb"></i></a>
                        <a href=" https://www.instagram.com/swarajyainstituteodl" ><i className="bi bi-instagram ig"></i></a>
                        <a href=" https://www.youtube.com/@swarajyaparainstisute"> <i className="bi bi-youtube yt"></i></a>
                    </div>
                </div>

            </footer> */}
            <footer class="footer text-white" style={{background:'#163169'}}>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
      <div className="paymodes">
                            <h2 className='footerH2'>Current Affairs</h2>
                            <a href={pdf2} target='blank'><h6 style={{ color: 'whitesmoke', border: 'none' }}>IMP Govt. Decision(UGC)</h6></a>
                            <h6 href="mission and vision.html" style={{ color: 'whitesmoke' }}>Devloped BY</h6>
                            <a href='https://prabhavatids.com/'> <img src={require('../../images/Prabhavati Logo FINEL PNG ORANGE.png')} alt='!' style={{ height: '65px' }} /></a>

                            <h6 style={{ color: 'whitesmoke', marginTop: '0.6rem' }}>E-Mail : info@prabhavatids.com</h6>
                            <h6 style={{ color: 'whitesmoke' }}>Developers (LS,MK,jK)</h6>
                            <h6 style={{ color: 'whitesmoke' }}>Contact :9420114282</h6>


                        </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div className="quick">
                            <h2 className='footerH2'>Quick Links</h2>
                            <a href="courses.html">Courses</a>
                            <a href={pdf1} download='Affiliation.pdf' target='blank'>Institute Affiliation</a>
                            <a href="#">Exam Date</a>
                            <Link to='/JobAndInter'>Jobs & Advertisement </Link>
                            
                            <h6 style={{ color: 'whitesmoke', marginTop: '0.6rem' }}>E-Mail : info@swrajyaparamedix.in</h6>
                            <h6 style={{ color: 'whitesmoke' }}>Contact :8446664282</h6>
                        </div>
      </div>
    
      <div class="col-lg-4 col-md-12">
      <div className="policy">
                            <h2 className='footerH2'>Policy</h2>
                            <Link to="/PravicyPolisy">Privacy Policy</Link>
                            <Link to="/AboutUs">Terms & Conditions</Link>
                            <Link to="/DirectorDesk">Our Mission</Link>
                            <Link to="/AboutUs">About Us</Link>
                        </div>
                        <div class="col-lg-4 col-md-12">
        <div className="social">
        <div className="socio-links" >
                  <a href="https://www.facebook.com/coordinatorsonu?mibextid=ZbWKwL"> <i className="bi bi-facebook fb"></i></a>
                  <a href="https://www.instagram.com/swarajyainstituteodl"> <i className="bi bi-instagram ig"></i></a>
                  <a href="https://www.youtube.com/@swarajyaparainstisute"> <i className="bi bi-youtube yt"></i></a>
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer