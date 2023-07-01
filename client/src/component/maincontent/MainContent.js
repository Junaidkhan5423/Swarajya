import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import img1 from '../../AllEnrolmainpdf/C.M.S.-ED-GR-1.jpg'
import img2 from '../../AllEnrolmainpdf/C.M.S.-ED-GR-2.jpg'
import img3 from '../../AllEnrolmainpdf/C.M.S.-ED-GR-3.jpg'
import img4 from '../../AllEnrolmainpdf/C.M.S.-ED-GR-4.jpg'
import img5 from '../../AllEnrolmainpdf/C.M.S.-ED-GR-5.jpg'
import img6 from '../../AllEnrolmainpdf/gr2-1.jpg'
import img7 from '../../AllEnrolmainpdf/gr2-2.jpg'
import img8 from '../../AllEnrolmainpdf/gr2-3.jpg'
import img9 from '../../AllEnrolmainpdf/gr2-4.jpg'
import img10 from '../../AllEnrolmainpdf/gr2-5.jpg'
import img11 from '../../AllEnrolmainpdf/gr3-1.jpg'
import img12 from '../../AllEnrolmainpdf/gr3-2.jpg'
import img13 from '../../AllEnrolmainpdf/gr3-3.jpg'
import img14 from '../../AllEnrolmainpdf/gr4-1.jpg'
import img15 from '../../AllEnrolmainpdf/gr4-2.jpg'
import img16 from '../../AllEnrolmainpdf/gr4-3.jpg'
import img17 from '../../AllEnrolmainpdf/gr4-4.jpg'
import img18 from '../../AllEnrolmainpdf/gr4-5.jpg'
import English from '../../Allpdf/Internship Letter Swarajya English (3).pdf'
import Marathi from '../../Allpdf/INTERNSHIP REF LETTER MARATHI (1).pdf'
import Hindi from '../../Allpdf/Internship Letter Swarajya Hindi (2).pdf'
import Asian from '../../Allpdf/Offline AICVPS Admission Form 23-24 (1).pdf'
import AICVPS from '../../Allpdf/AIU Admisison Form.pdf'
import Brocher from '../../Allpdf/SWARAJYA PARAMEDICAL BROCHURE 23-24.pdf'
import sikkim from '../../Allpdf/skmsuniv.pdf'
import offlinesikkim from '../../Allpdf/APPLICATION FOR ADMISSION - SSU.pdf'
import axios from 'axios';

const MainContent = () => {
  const [visible, setVisibile] = useState(false)

  const [Prospectus, setProspectus] = useState(false)
  const [international, setinternational] = useState(false)
  const [course, setCourse] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newsData,setNewsData]=useState([])

 
  const fetchCoursedata = async () => {
    
    axios
      .get(`${process.env.REACT_APP_API_URL_DEV}/getNewBytype?type=exam`)
      .then((res) => {
        setNewsData(res.data.data);
      });
  };
  useEffect(()=>{
    fetchCoursedata()
  },[])
  var myIndex = 0;


 

  const images = [
    
  
    { src: require('../../files/01.PNG'), description: 'What is history in one worl Explanation: History is the study of the past – specifically the people, societies, events and problems of the pas' },
    { src: require('../../files/1.PNG') },
    { src: require('../../files/2.PNG') },
    { src: require('../../files/3.PNG') },
    { src: require('../../files/4.PNG') },
    { src: require('../../files/5.PNG') },
    { src: require('../../files/6.PNG') },
    { src: require('../../files/7.PNG') },
    { src: require('../../files/8.PNG') },
    { src: require('../../files/9.PNG') },
    { src: require('../../files/10.PNG') },
    { src: require('../../files/11.PNG') },
    { src: require('../../files/12.PNG') },
    { src: require('../../files/13.PNG') },
    { src: require('../../files/14.PNG') },
    { src: require('../../files/15.PNG') },
    { src: require('../../files/16.PNG') },
    { src: require('../../files/17.PNG') },
    { src: require('../../files/18.PNG') },
    // { src: require('../../files/19.PNG') },
    { src: require('../../files/20.PNG') },
    { src: require('../../files/21.PNG') },
    { src: require('../../files/22.PNG') },
    { src: require('../../files/23.PNG') },
    { src: require('../../files/24.PNG') },
    { src: require('../../files/25.PNG') },
    { src: require('../../files/26.PNG') },
    { src: require('../../files/27.PNG') },
    { src: require('../../files/28.PNG') },
    { src: require('../../files/29.PNG') },
    { src: require('../../files/30.PNG') },
    { src: require('../../files/31.PNG') },
    { src: require('../../files/32.PNG') },
    { src: require('../../files/33.PNG') },
    { src: require('../../files/34.PNG') },
    { src: require('../../files/35.PNG') },
    { src: require('../../files/36.PNG') },
    { src: require('../../files/37.PNG') },
    { src: require('../../files/38.PNG') },
    { src: require('../../files/39.PNG') },
    { src: require('../../files/40.PNG') },

  ];



  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
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
    let slides = document.getElementsByClassName("mySlidess");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i]?.className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    setTimeout(showSlides, 1000);
  }

  useEffect(() => {
    showSlides();
    carousel();
     // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };

  }, );
  

  const currentImage = images[currentImageIndex];






 
  return (
    <div className='main_contentDiv'>
      <div className="content" style={{ zIndex: "-1", position: "relative" }}>


        <div className="slideshow-container" style={{ marginTop: "1rem" }}>


          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/3.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/25.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/27.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/30.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/31.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/32.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/33.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/34.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/35.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/36.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/37.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/38.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/39.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/40.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/41.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/42.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/43.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/44.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/45.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/46.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/47.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/48.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/49.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/50.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/51.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/52.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/53.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/54.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/55.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/56.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/57.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/58.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/59.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/60.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/61.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/62.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide7.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide8.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide9.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide10.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide11.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide12.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide13.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide14.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide15.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide16.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide17.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide18.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/27.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide19.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide20.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide21.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide22.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide23.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide24.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide25.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide26.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide27.PNG')} style={{ width: "100%" }} />

          </div>
          <div className="mySlides fade">

            <img alt='#' src={require('../../MainContainImages/Slide28.PNG')} style={{ width: "100%" }} />

          </div>


        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>


        </div>

        <div class="list-container">
        <ul class="list">
          {newsData.map((item)=>{
            return (
<li >{item.descripstion}</li>
            )
          })

          }
          </ul>

        </div>

        <div className="content_main">
          <div className="one">
            <div className="menu">
              <h2>Menu</h2>
              <Link className='visible-class' to={'/MissionAndVision'}> Mission & Vision</Link>
              <Link className='visible-class' to={'/AimsAndObjectives'}>Aim & Objective</Link>
              <Link  className='visible-class' to={'/OurScope'}>Our Scope</Link>
            
              {!course && <a target='blank'  onClick={() => setCourse(true)}>Course Details</a>}
              {course &&
                <>
                  <a target='blank'   onClick={() => setCourse(false)}>Course Details</a>
                  <ul style={{ height: "16vh", listStyle: 'none', paddingLeft: '0' }}>

                    <li style={{ width: '9rem' }}><Link to='/diploma' style={{ fontSize: '1.8vh' }}> Diploma</Link></li>
                    <li style={{ width: '9rem' }}><Link to='/ugCourse' style={{ fontSize: '1.8vh' }}> UG-graduation </Link></li>
                    <li style={{ width: '9rem' }}><Link to="/pgCourse" style={{ fontSize: '1.8vh' }}> PG-Post-graduation  </Link></li>
                  </ul>

                </>
              }

              <Link to="/ELearning">E-Learning & Self Study Mode</Link>
            </div>
            <div className="institution">
              <h2>Institution</h2>
              <a href="https://forms.gle/xJiHqhQhLcKwjxxp9" target='_blank' rel="noreferrer">Apply For From Collection Center(ACC) </a>
              <a href=" https://forms.gle/scE8iviYy8quuVdR8" target='_blank' rel="noreferrer">Apply For Online Faculty</a>
              <Link to='/JobAndInter'>Jobs & Advertisement </Link>
              <Link to="/PressRelease">Press Release</Link>
            </div>

          </div>
          <div className="swarajya">
            <div className='swarajya_info'>
              <h2>Swarajya Institute Of Distance Learning </h2>
              <p><b>Welcome to Swarajya Paramedical Institute.</b></p>
                <>
                  <p>Swarajya Institute of Distance Learning in India, We Provide a Platform for those Student who are on Job, and want to continue their education in various sectors like, Paramedical, Traditional, Computer Science, Business Administration, Home Science, Life Science etc.</p>
                  <p>As Paramedical education has emerged as an essential component of the healthcare industry in India. With the increasing demand for healthcare services, the scope of paramedical education has also grown significantly in recent years. Today, paramedical education in India offers
                    a wide range of courses that prepare students to assist doctors and other healthcare professionals in various medical procedures.</p>

                  <h5>Some of the popular courses in paramedical education in India include</h5>
                  <h6>1.	Bachelor of Physiotherapy (BPT)</h6>
                  <h6>2.	Bachelor of Occupational Therapy (BOT)</h6>
                  <h6>3.	Bachelor of Science in Medical Laboratory Technology (BMLT)</h6>
                  <h6>4.  Post Graduate Diploma in Medical Laboratory Technology (PGDMLT)</h6>
                  <h6>5.	Bachelor of Science in Radiology and Imaging Technology (BSc RIT)</h6>
                  <h6>6.	Diploma in Nursing</h6>
                  <h6>7.	Diploma in Medical Laboratory Technology (DMLT)</h6>
                  <h6>8.	Diploma in Radiology and Imaging Technology (DRIT)</h6>
                  <h6>9.	E.T.C</h6>


                  <p>These courses equip students with the necessary knowledge and skills to perform a range of diagnostic, therapeutic, and supportive roles in the healthcare industry. The demand for paramedical professionals in India is expected to grow at a rapid pace in the coming years, as the healthcare industry continues to expand.</p>
                  <p>In conclusion, the scope of paramedical education in India is immense, with plenty of opportunities for students who wish to pursue a career in healthcare. With the increasing demand for healthcare services and the growing need for skilled healthcare professionals, paramedical education has become an attractive option for many students in India.</p>
                </>
         

            </div>
          </div>
          <div className="two">
            <div className="studentsec">
              <h2>Student</h2>
              <Link to={"/Studentlogin"}>Student Login</Link>

              <Link to={"/admission"}>Online Enrollment</Link>

              {!visible && <a target='blank' href='*' onClick={() => setVisibile(true)} className='visible-class' >Internship Reference</a>}
              {visible &&
                <>
                  <a target='blank' href='*' onClick={() => setVisibile(false)} className='visible-class'>Internship Reference</a>
                  <ul style={{ height: "16vh", listStyle: 'none', paddingLeft: '0' }}>

                    <li style={{ width: '9rem' }}><a href={English} style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer"> 1 .English </a></li>
                    <li style={{ width: '9rem' }}><a href={Hindi} style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer"> 2 .Hindi </a></li>
                    <li style={{ width: '9rem' }}><a href={Marathi} style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer"> 3 .Marathi </a></li>
                  </ul>
                </>
              }

              {/* {!Prospectus && <a target='blank'  onClick={() => setProspectus(true)} className='visible-class'>Prospectus</a>}

              {Prospectus &&
                <>
                  <a target='blank'  onClick={() => setProspectus(false)} className='prospects-class'>Prospectus</a>
                  <ul style={{ height: "17vh", listStyle: 'none', paddingLeft: '0' }}>

                    <li style={{ width: '9rem' }}><a href={Brocher} download='AICVPS.pdf' style={{ fontSize: '2vh' }} target="_blank" rel="noreferrer"> AICVPS </a></li>
                    <li style={{ width: '9rem' }}><a href={Asian} download='Asian.pdf' style={{ fontSize: '2vh' }} target='_blank' rel="noreferrer"> Asian International University </a></li>
                    <li style={{ width: '9rem' }}><a href={sikkim} download='Sikkim.pdf' style={{ fontSize: '2vh' }} target='_blank' rel="noreferrer">Sikkim Skill University </a></li>
                  </ul>
                </>
                
              } */}
              <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle propectus-link"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Prospectus
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item"href={Brocher} download='AICVPS.pdf'>AICVPS</a>
    <a class="dropdown-item" href={Asian} download='Asian.pdf'>Asian International University </a>
    <a class="dropdown-item" href={sikkim} download='Sikkim.pdf'>Sikkim Skill University</a>
  </div>
</div>
              {!international && <a target='blank' href='*' onClick={() => setinternational(true)} className='visible-class'>Offline Admission Form</a>}

              {international &&
                <>
                  <a target='blank' href='*' onClick={() => setinternational(false)} className='offline-class'>Offline Admission Form</a>
                  <ul style={{ height: "17vh", listStyle: 'none', paddingLeft: '0' }}>

                    <li style={{ width: '9rem' }}><a href={AICVPS} download='AICVPS.pdf' style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer"> AICVPS </a></li>
                    <li style={{ width: '9rem' }}><a href={Asian} download='Asian.pdf' style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer"> Asian International University </a></li>
                    <li style={{ width: '9rem' }}><a href={offlinesikkim} download='Sikkim.pdf' style={{ fontSize: '1.8vh' }} target='_blank' rel="noreferrer">Sikkim Skill University </a></li>
                  </ul>
                </>
              }
              {/* <a href='*'>Offline Admission Form</a> */}
            </div>
          </div>
        </div>

        <div className="noticeboard">
          <div className="nb">
            <h2>Notice Board</h2>
            <div direction="up" className="marquee" >
              <div className="marquee-content">
                <a   download="RES1-file.png" href={img1}>CMS & ED GOVT. RES 1</a>
                <a download="GOVT-RES-file1.png" href={img2}>CMS & ED GOVT. RES 2</a>
                <a download="GOVT-RES-file2.png" href={img3}>CMS & ED GOVT. RES 3</a>
                <a download="GOVT-RES-file3.png" href={img4}>CMS & ED GOVT. RES 4</a>
                <a download="GOVT-RES-file4.png" href={img5}>CMS & ED GOVT. RES 5</a>
                <a download="GOVT-RES-file5.png" href={img6}>CMS & ED GOVT. RES 6</a>
                <a download="GOVT-RES-file6.png" href={img7}>CMS & ED GOVT. RES 7</a>
                <a download="GOVT-RES-file7.png" href={img8}>CMS & ED GOVT. RES 8</a>
                <a download="GOVT-RES-file8.png" href={img9}>CMS & ED GOVT. RES 9</a>
                <a download="GOVT-RES-file9.png" href={img10}>CMS & ED GOVT. RES 10</a>
                <a download="GOVT-RES-file10.png" href={img11}>CMS & ED GOVT. RES 11</a>
                <a download="GOVT-RES-file11.png" href={img12}>CMS & ED GOVT. RES 12</a>
                <a download="GOVT-RES-file12.png" href={img13}>CMS & ED GOVT. RES 13</a>
                <a download="GOVT-RES-file13.png" href={img14}>CMS & ED GOVT. RES 14</a>
                <a download="GOVT-RES-file14.png" href={img15}>CMS & ED GOVT. RES 15</a>
                <a download="GOVT-RES-file15.png" href={img16}>CMS & ED GOVT. RES 16</a>
                <a download="GOVT-RES-file16.png" href={img17}>CMS & ED GOVT. RES 17</a>
                <a download="GOVT-RES-file17.png" href={img18}>CMS & ED GOVT. RES 18</a>
              </div>
              <div></div>

            </div>



          </div>

          <div className="course_slider">
            <h2>Courses</h2>

            <div className="w3-content w3-display-container bottom-crowsel"> 

                   <div style={{ fontSize: '20px', display: 'flex' }}>
                  <img alt='#' className="mySlidess" src={currentImage.src} style={{ width: '80%' }} />
                       <p style={{ fontSize: '2vh' ,fontFamily:'sans-serif'}}>Eligibility : 12th (HSC) & Above <br></br>
                       <br></br>
                        Duration : Min 1 Year Max 4 Year</p>
      </div>
              


            </div>


          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default MainContent