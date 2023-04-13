import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import pdf from '../../AllEnrolmainpdf/Offline AICVPS  23-24.pdf'
const MainContent = () => {
  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlidess");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  let slideIndex = 0;

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className += " active";
    setTimeout(showSlides, 1000);
  }
  useEffect(() => {
    showSlides();

    carousel();
  }, []);
  return (
    <div className='main_contentDiv'>
      <div className="content" style={{zIndex: "-1", position: "relative" }}>


        <div className="slideshow-container" style={{marginTop:"1rem"}}>

          <div className="mySlides fade">

            <img alt='!' src={require('../../files/1.jpeg')} style={{ width: "100%" }} />

          </div>

          <div className="mySlides fade">

            <img alt='!' src={require('../../files/2.jpeg')} style={{ width: "100%" }} />

          </div>

          <div className="mySlides //. fade">

            <img alt='!' src={require('../../files/3.jpeg')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides //. fade">

            <img alt='!' src={require('../../MainContainImages/19.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides //. fade">

            <img alt='!' src={require('../../MainContainImages/Slide9.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides //. fade">

            <img alt='!' src={require('../../MainContainImages/Slide12.PNG')} style={{ width: "100%" }} />

          </div>


        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>


        </div>

        <marquee className="marq" bgcolor="black" direction="left" loop="">

          <a href="!">ENROLL NOW FOR DMLT</a>
          <a href="!"> ENROLL NOW FOR CMS & ED</a>
          <a href="!">ENROLL NOW FOR SANITARY INSPECTOR</a>
          <a href="!">ENROLL NOW FOR X-RAY TECHNICIAN</a>
          <a href="!">ENROLL NOW FOR DIETICIAN</a>
          <a href="!">ENROLL NOW FOR DIPLOMA IN PHYSIOTHERAPY</a>
          <a href="!">ENROLL NOW FOR COMMUNITY HEALTH WORKER</a>

        </marquee>

        <div className="content_main">
          <div className="one">
            <div className="menu">
              <h2>Menu</h2>
              <a href="mission and vision.html"> Mission & Vision</a>
              <a href="aim & objective.html">Aim & Objective</a>
              <a href="aboutUs.html">Our Scope</a>
              <a href="courses.html">Course Details</a>
              <a href="!">E-Learning</a>
            </div>

            <div className="institution">
              <h2>Institution</h2>
              <a href="!">Apply Center</a>
              <a href="!">Payment Details</a>
              <a href="!">Center List</a>
              <a href="!">Advertisement</a>
              <a href="!">Press Release</a>
            </div>

          </div>
          <div className="swarajya">
            <div className='swarajya_info'>
              <h2>Swarajya Paramedical Institute</h2>
              <p><b>Welcome to Swarajya Paramedical Institute.</b></p>
              <p>Swarajya Institute of Distance Learning in India, We Provide a Platform for those Student who are on Job, and want to continue their education in various sectors like, Paramedical, Traditional, Computer Science, Business Administration, Home Science, Life Science etc.</p>
              <p>As Paramedical education has emerged as an essential component of the healthcare industry in India. With the increasing demand for healthcare services, the scope of paramedical education has also grown significantly in recent years. Today, paramedical education in India offers
                 a wide range of courses that prepare students to assist doctors and other healthcare professionals in various medical procedures.</p>
             
               <h5>Some of the popular courses in paramedical education in India include</h5>
              <h6>1.	Bachelor of Physiotherapy (BPT)</h6>
              <h6>2.	Bachelor of Occupational Therapy (BOT)</h6>
              <h6>3.	Bachelor of Science in Medical Laboratory Technology (BMLT)</h6>
              <h6>4. Post Graduate Diploma in Medical Laboratory Technology (PGDMLT)</h6>
              <h6>5.	Bachelor of Science in Radiology and Imaging Technology (BSc RIT)</h6>
              <h6>6.	Diploma in Nursing</h6>
              <h6>7.	Diploma in Medical Laboratory Technology (DMLT)</h6>
              <h6>8.	Diploma in Radiology and Imaging Technology (DRIT)</h6>
              <h6>9.	E.T.C</h6>
                 
             
              <p>These courses equip students with the necessary knowledge and skills to perform a range of diagnostic, therapeutic, and supportive roles in the healthcare industry. The demand for paramedical professionals in India is expected to grow at a rapid pace in the coming years, as the healthcare industry continues to expand.</p>
              <p>In conclusion, the scope of paramedical education in India is immense, with plenty of opportunities for students who wish to pursue a career in healthcare. With the increasing demand for healthcare services and the growing need for skilled healthcare professionals, paramedical education has become an attractive option for many students in India.</p>
            </div>
          </div>
          <div className="two">
            <div className="studentsec">
              <h2>Student</h2>
              <Link to={"/admission"}>Student Login</Link>
              {/* <a href='!'>Appear For Online Exam</a> */}
              <a href='!'>Online Enrollment</a>
              <a href={pdf}  target='blank'> Offline Enrollment Form</a>
              {/* <a href='!'> Offline Self Affidavit Form</a> */}
              <a href='!'>Internship Reference Letter</a>
              {/* <a href='!'>Syllabus</a> */}
              <a href='!'>Prospectus</a>
              <a href='!'>Offline Admission Form</a>
            </div>
          </div>
        </div>

        <div className="noticeboard">
          <div className="nb">
            <h2>Notice Board</h2>
            <marquee width="100%" direction="up" height="230px" className="mrq2">
              <a href='!'>Notice 1</a>
              <a href='!'>Notice 2</a>
              <a href='!'>Notice 3</a>
              <a href='!'>Notice 4</a>
              <a href='!'>Notice 5</a>
              <a href='!'>Notice 6</a>
              <a href='!'>Notice 7</a>
              <a href='!'>Notice 8</a>
              <a href='!'>Notice 9</a>
              <a href='!'>Notice 10</a>
              <a href='!'>Notice 11</a>
              <a href='!'>Notice 12</a>
            </marquee>
          </div>

          <div className="course_slider">
            <h2>Courses</h2>

            <div className="w3-content w3-display-container bottom-crowsel">
              <img alt='!' className="mySlidess" src={require("../../files/4.jpeg")} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/5.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/6.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/7.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/8.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/9.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/10.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/11.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/12.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/13.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/14.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/15.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/16.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/17.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/18.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/19.jpeg')} style={{ width: "100%" }} />
              <img alt='!' className="mySlidess" src={require('../../files/20.jpeg')} style={{ width: "100%" }} />


            </div>


          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default MainContent