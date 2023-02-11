import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import NavBar from './component/navbar/NavBar';
import firstimage from './files/1.jpeg'
import { useEffect } from 'react';
import MainContent from './component/maincontent/MainContent';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import SignUp from './component/admissionform/SignUp';
import StudentFrom from './component/admissionform/StudentFrom';

function App() {
     const router = createBrowserRouter([
      {
        path:"/",
        element:<MainContent/>
      },
      {
        path:"/admission",
        element:<StudentFrom/>
      }

     ])


  return (
    <div style={{height:"100%",width:''}}>
    <NavBar/>
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
