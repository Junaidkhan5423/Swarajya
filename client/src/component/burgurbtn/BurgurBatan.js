import React, { useEffect, useState } from 'react';
import './BurgurBatan.css';
import { Link } from 'react-router-dom';


export  const  BurgurButton = ( props )=> {
  const [current, setCurrent] = useState(0);
  const [currentState, setCurrentState] = useState(false);
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Admission', href: 'Admission' },
    { name: 'AboutUs', href: 'AboutUs' },
    { name: 'DirectorDesk', href: 'DirectorDesk' },
    { name: 'PravicyPolicy', href: 'PravicyPolisy' },
     { name: 'ContactUs', href: 'ContactUs' },
    { name: 'Diploma ', href: 'Diploma' },
    { name: 'Studentlogin', href: 'Studentlogin' },  
  ];
  // const navigation = [
  //   { name: 'Home', href: '/' },
  //   { name: 'Admission', href: 'Admission' },
  //   { name: 'AboutUs', href: 'AboutUs' },
  //   { name: 'DirectorDesk', href: 'DirectorDesk' },
  //   { name: 'PravicyPolicy', href: 'PravicyPolicy' },
  //    { name: 'ContactUs', href: 'ContactUs' },
  //   { name: 'Diploma ', href: 'Diploma' },
  //   { name: 'Studentlogin', href: 'Studentlogin' },   
       

  // ];

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
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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

                <div id="mySidenav" className="sidenav" style={{ top: "27vh"}}>
  {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
  {navigation.map((item, index) => (
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
              ))}




</div>

      
    </>
  );
};