import React, { useEffect, useState } from 'react';
import './BurgurBatan.css';
import { Link } from 'react-router-dom';


export  const  BurgurButton = ( props )=> {
  const [current, setCurrent] = useState(0);
  const [currentState, setCurrentState] = useState(false);
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Admission', href: 'Admission' },
    { name: 'About Us', href: 'AboutUs' },
    { name: 'Director Desk', href: 'DirectorDesk' },
    { name: 'Pravicy Policy', href: 'PravicyPolisy' },
     { name: 'ContactUs', href: 'ContactUs' },
    { name: 'Course ', href: 'Diploma' },
    { name: 'Student login', href: 'Studentlogin' },  
    { name: 'Press Realese', href: 'PressRelease' },  
  ];

  useEffect(()=>{
    if(currentState){
      document.getElementById("mySidenav").style.width = "38vh";
    }else{
      document.getElementById("mySidenav").style.width = "0";
    }
  },[currentState])
  function openNav(e) {
    setCurrentState(e.target.checked)


}

const handleHover = (index) => {
    setCurrent(index);
    setCurrentState(false);
    // closeNav()
  };
  return (
    <>
      {/* <Menu right  >
        <Link className="menu-item" to={'/'} >
          Home
        </Link>
        <Link className="menu-item" to={'/admission'}>
          StudentFrom
        </Link>
        <Link className="menu-item" to={'/AboutUs'}>
          AboutUs
        </Link>
        <Link className="menu-item" to={'/DirectorDesk'}>
          DirectorDesk
        </Link>
        <Link className="menu-item" to={'/PravicyPolisy'}>
          PravicyPolisy
        </Link>
        <Link className="menu-item" to={'/ContactUs'}>
          ContactUs
        </Link>
        <Link className="menu-item" to={'/diploma'}>
          DiplomaCourses
        </Link>
        <Link className="menu-item" to={'/Studentlogin'}>
          SingUpPage
        </Link>
        {/* <Link className="menu-item" to={'/Studentlogin'}>
          SingUpPage
        </Link> */}
      {/* </Menu> } */}
                <div className='burger-container' >

                <label className="burger left-4 "  for="burger"  >
                        <input type="checkbox" id="burger" checked={currentState} onChange={openNav}/>
                      <span style={{background:'#001f5f'}}></span>
                    <span style={{background:'red'}}></span>
                         <span style={{background:'#001f5f'}} ></span>
                   </label>
                </div>

                <div id="mySidenav" className="sidenav" >
  {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
  {navigation.map((item, index) => (
    <>
    {index === 6 ? (
        <div className="dropdown " >
          <a className="dropdown-toggle" href='*' style={{border:"none",fontSize:'25px' ,color:"#001f5f"}} >
            Diploma
          </a>
  
            <div className="dropdown-content">
            <Link
                  to={`/diploma`}
               
                  key={item.name}
                 onClick={()=> setCurrentState(false)}
                  aria-current={item.current ? 'page' : undefined}
                >
                 Diploma
                </Link>
                <Link
                  to={`/pgCourse`}
                  onClick={()=> setCurrentState(false)}
                  key={item.name}
                  aria-current={item.current ? 'page' : undefined}
                >
                PG Degree
                </Link>
                <Link
                  to={`/ugCourse`}
                  key={item.name}
                  onClick={()=> setCurrentState(false)}
                  aria-current={item.current ? 'page' : undefined}
                >
                  UG Degree
                </Link>
            </div>

        </div>
      ): (
        <Link
                  to={`/${item.href}`}
                  style={{
                   background: index === current && "grey",color:'#001f5f'
                  }}
                  key={item.name}
                 
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleHover(index)}
                >
                  {item.name}
                </Link>
      )}
                
                
                </>
              ))}






</div>

      
    </>
  );
};