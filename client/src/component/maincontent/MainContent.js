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

const MainContent = () => {
  const [visible , setVisibile]=useState(false)
  const [mission , setMission]=useState(false)
  const [objective , setObjective]=useState(false)
  const [Prospectus,setProspectus]=useState(false)
  const [international,setinternational]=useState(false)
  const [course,setCourse]=useState(false)
  var myIndex = 0;
  
const handeContentChange =(param)=>{
  if(param === 'mission' ){
    setObjective(false)
    setMission(true)
  }else if(param === 'objective'){
    setMission(false)
    setObjective(true)
  }else if (param === "Elearnig"){
    setMission(false)
    setObjective(false)
  }

}
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
    dots[slideIndex -1].className += "active";
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

           {/* <div className="mySlides fade">

              <img alt='!' src={require('../../files/1.jpeg')} style={{ width: "100%" }} />

           </div>

           <div className="mySlides fade">

             <img alt='!' src={require('../../files/2.jpeg')} style={{ width: "100%" }} />

           </div>

           <div className="mySlides  fade">

             <img alt='!' src={require('../../files/3.jpeg')} style={{ width: "100%" }} />

           </div> */}
           <div className="mySlides fade">

             <img alt='!' src={require('../../MainContainImages/3.PNG')} style={{ width: "100%" }} />

           </div>
           <div className="mySlides fade">

             <img alt='!' src={require('../../MainContainImages/25.PNG')} style={{ width: "100%" }} />

           </div>
           <div className="mySlides fade">

             <img alt='!' src={require('../../MainContainImages/27.PNG')} style={{ width: "100%" }} />

          </div>  
          <div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/30.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/31.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/32.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/33.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/34.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/35.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/36.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/37.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/38.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/39.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/40.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/41.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/42.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/43.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/44.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/45.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/46.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/47.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/48.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/49.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/50.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/51.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/52.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/53.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/54.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/55.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/56.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/57.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/58.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/59.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/60.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/61.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/62.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide7.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide8.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide9.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide10.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide11.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide12.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide13.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide14.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide15.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide16.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide17.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide18.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/27.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide19.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide20.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide21.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide22.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide23.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide24.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide25.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide26.PNG')} style={{ width: "100%" }} />

</div> 
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide27.PNG')} style={{ width: "100%" }} />

</div>
<div className="mySlides fade">

<img alt='!' src={require('../../MainContainImages/Slide28.PNG')} style={{ width: "100%" }} />

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
              <a className='visible-class' onClick={()=> handeContentChange("mission")}> Mission & Vision</a>
              <a className='visible-class' onClick={()=> handeContentChange("objective")}>Aim & Objective</a>
              <a href="aboutUs.html">Our Scope</a>
              {!course && <a target='blank' onClick={()=>setCourse(true)}>Course Details</a>}
              { course && 
              <>
                <a target='blank' onClick={()=>setCourse(false)}>Course Details</a>
                <ul style={{height: "16vh" , listStyle:'none' ,paddingLeft:'0' }}>
             
             <li style={{width: '9rem'}}><a href="" style={{fontSize: '1.8vh'}}> Diploma</a></li>
             <li style={{width: '9rem'}}><a href=""  style={{fontSize: '1.8vh'}}> UG-graduation </a></li>
             <li style={{width: '9rem'}}><a href="/paytm"  style={{fontSize: '1.8vh'}}> PG-Post-graduation  </a></li>
           </ul>

              </>
              }
            
              <Link to="/ELearning">E-Learning & Self Study Mode</Link>
            </div>

            <div className="institution">
              <h2>Institution</h2>
              <a href="https://forms.gle/xJiHqhQhLcKwjxxp9" target='_blank'>Apply For From Collection Center(ACC) </a>
              <a href=" https://forms.gle/scE8iviYy8quuVdR8" target='_blank'>Apply For Online Faculty</a>
              
              <a href="!">Jobs & Advertisement </a>
              <a href="!">Press Release</a>
            </div>

          </div>
          <div className="swarajya">
            <div className='swarajya_info'>
              <h2>Swarajya Institute Of Distance Learning </h2>
              <p><b>Welcome to Swarajya Paramedical Institute.</b></p>
              {mission ? (
                <>   <main class="container mt-5">
                <h3>Mission</h3>
                <p>Our mission at the Swarajya Institute of Distance Learning is to provide accessible and high-quality education to students from all over the world. We aim to provide a flexible learning environment that caters to the diverse needs and interests of our students, and to equip them with the skills and knowledge necessary for personal and professional growth.</p>
                
                <h3>Vision</h3>
                <p>Our vision is to become a global leader in distance education, recognized for our commitment to excellence in teaching, research, and innovation. We strive to create a community of lifelong learners who are empowered to reach their full potential, and who contribute to the betterment of society. We believe that education is a fundamental human right, and that everyone should have access to quality education, regardless of their background or circumstances.</p>
            </main></>
              ) : objective ? (
<><main class="container mt-5">
		<h3>Aims and Objectives</h3>
		<ol>
			<li>
				<p>To provide accessible and affordable education to students from all over the world, regardless of their location, background or circumstances.</p>
			</li>
			<li>
				<p>To offer a wide range of courses and programs that are designed to meet the diverse needs and interests of our students, and to ensure that they have the knowledge and skills necessary for personal and professional growth.</p>
			</li>
			<li>
				<p>To use the latest technologies and teaching methods to provide a flexible and engaging learning experience that is tailored to the needs of each individual student.</p>
			</li>
			<li>
				<p>To provide students with access to experienced and qualified educators who are passionate about their subjects and who are dedicated to helping them achieve their academic and career goals.</p>
			</li>
			<li>
				<p>To create a supportive and inclusive learning community where students can connect with one another, share ideas and experiences, and collaborate on projects.</p>
			</li>
			<li>
				<p>To promote lifelong learning and to provide students with the tools and resources necessary to continue learning and growing throughout their lives.</p>
			</li>
			<li>
				<p>To foster a culture of innovation and research, and to contribute to the advancement of knowledge in our respective fields.</p>
			</li>
		</ol>
		<p>Overall, our aims and objectives are centered around providing an exceptional learning experience to our students, empowering them with the knowledge and skills necessary to succeed in their chosen fields, and fostering a culture of excellence and innovation.</p>
	</main>
	
 </>
              ) : (
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
              )
                
              }
              
            </div>
          </div>
          <div className="two">
            <div className="studentsec">
              <h2>Student</h2>
              <Link to={"/admission"}>Student Login</Link>
              
              <Link to={"/admission"}>Online Enrollment</Link>
            
              {!visible && <a   target='blank' onClick={()=>setVisibile(true)} className='visible-class' >Internship Reference</a>}
             {visible && 
             <>
             <a   target='blank' onClick={()=>setVisibile(false)} className='visible-class'>Internship Reference</a>
             <ul style={{height: "16vh" , listStyle:'none' ,paddingLeft:'0' }}>
             
      <li style={{width: '9rem'}}><a href={English} style={{fontSize: '1.8vh'}} target='_blank'> 1 .English </a></li>
      <li style={{width: '9rem'}}><a href={Hindi} style={{fontSize: '1.8vh'}} target='_blank'> 2 .Hindi </a></li>
      <li style={{width: '9rem'}}><a href={Marathi} style={{fontSize: '1.8vh'}} target='_blank'> 3 .Marathi </a></li>
    </ul>
    </>
    }
         
      {!Prospectus && <a   target='blank' onClick={()=>setProspectus(true)} className='visible-class'>Prospectus</a>}
              
           {Prospectus && 
             <>
             <a   target='blank' onClick={()=>setProspectus(false)} className='prospects-class'>Prospectus</a>
             <ul style={{height: "17vh" , listStyle:'none' ,paddingLeft:'0' }}>
             
      <li style={{width: '9rem'}}><a href={Brocher} style={{fontSize: '1vh'}} target="_blank"> AICVPS </a></li>
      <li style={{width: '9rem'}}><a href="" style={{fontSize: '1vh'}} target='_blank'> Asian International University </a></li>
      <li style={{width: '9rem'}}><a href={sikkim} style={{fontSize: '1vh'}} target='_blank'>Sikkim Skill University </a></li>
    </ul>
    </>
    }
         {!international && <a   target='blank' onClick={()=>setinternational(true)} className='visible-class'>Offline Admission Form</a>}
              
              {international && 
                <>
                <a   target='blank' onClick={()=>setinternational(false)} className='offline-class'>Offline Admission Form</a>
                <ul style={{height: "17vh" , listStyle:'none' ,paddingLeft:'0' }}>
                
         <li style={{width: '9rem'}}><a href={AICVPS} style={{fontSize: '1.8vh'}} target='_blank'> AICVPS </a></li>
         <li style={{width: '9rem'}}><a href={Asian} style={{fontSize: '1.8vh'}} target='_blank'> Asian International University </a></li>
         <li style={{width: '9rem'}}><a href={offlinesikkim} style={{fontSize: '1.8vh'}} target='_blank'>Sikkim Skill University </a></li>
       </ul>
       </>
}   
               {/* <a href='!'>Offline Admission Form</a> */}
            </div>
          </div>
        </div>

        <div className="noticeboard">
          <div className="nb">
            <h2>Notice Board</h2>
            <div  direction="up"   className="marquee" >
            <div className="marquee-content">
                <a href={img1}>CMS & ED GOVT. RES 1</a>
              <a href={img2}>CMS & ED GOVT. RES 2</a>
              <a href={img3}>CMS & ED GOVT. RES 3</a>
              <a href={img4}>CMS & ED GOVT. RES 4</a>
              <a href={img5}>CMS & ED GOVT. RES 5</a>
              <a href={img6}>CMS & ED GOVT. RES 6</a>
              <a href={img7}>CMS & ED GOVT. RES 7</a>
              <a href={img8}>CMS & ED GOVT. RES 8</a>
              <a href={img9}>CMS & ED GOVT. RES 9</a>
              <a href={img10}>CMS & ED GOVT. RES 10</a>
              <a href={img11}>CMS & ED GOVT. RES 11</a>
              <a href={img12}>CMS & ED GOVT. RES 12</a>
              <a href={img13}>CMS & ED GOVT. RES 13</a>
              <a href={img14}>CMS & ED GOVT. RES 14</a>
              <a href={img15}>CMS & ED GOVT. RES 15</a>
              <a href={img16}>CMS & ED GOVT. RES 16</a>
              <a href={img17}>CMS & ED GOVT. RES 17</a>
              <a href={img18}>CMS & ED GOVT. RES 18</a>
              </div>
              <div></div>
              
            </div>
              

              
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