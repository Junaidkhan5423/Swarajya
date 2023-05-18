import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './BurgurBatan.css';
import { Link } from 'react-router-dom'


export default props => {
  return (
    <>
      <Menu right  >
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
        <Link className="menu-item" to={'/Studentlogin'}>
          SingUpPage
        </Link>
      </Menu>
    </>
  );
};