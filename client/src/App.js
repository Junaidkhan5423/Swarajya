import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import MainContent from "./component/maincontent/MainContent";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StudentFrom from "./component/admissionform/StudentFrom";
import StudentInfo from "./component/studentInfo/StudentInfo";
import Login from "./component/AdminLogin/Login";
import SingUpPage from "./component/singUpPage/SingUpPage";
import Users from "./component/table/table";
import AboutUs from "./component/contactus/AboutUs";
import ContactUs from "./component/contactus/ContactUs";
import DirectorDesk from "./component/contactus/DirectorDesk";
import PravicyPolisy from "./component/contactus/PravicyPolisy";
import Payment from "./component/payment/payment";
import Root from "./component/Root/Root";
// import Admin from './component/Root/AdminProtected';
import AdminProtected from "./component/Root/AdminProtected";
import axios from "axios";
import ELearnig from "./component/contactus/ELearnig";
import PgCourse from "./component/courses-table/PgCourse";
import DiplomaCourses from "./component/courses-table/DiplomaCourses";
import UgCourse from "./component/courses-table/UgCourses";
// import StripePaymentCancel from './component/payment/StripePaymentCancel';
// import StripePaymentSuccess from './component/payment/StripePaymentSuccess';
// import Add from './component/table/Add';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Studentlogin" element={<SingUpPage />} />

        <Route element={<Root />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/admission" element={<StudentFrom />} />
          <Route path="/studentInfo" element={<StudentInfo />} />
          <Route path="/festivals" element={<Users />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/DirectorDesk" element={<DirectorDesk />} />
          <Route path="/PravicyPolisy" element={<PravicyPolisy />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path='/ELearning' element={<ELearnig/>} />
          <Route path='/diploma' element={<DiplomaCourses/>} />
          <Route path='/ugCourse' element={<UgCourse/>} />
          <Route path='/pgCourse' element={<PgCourse/>} />
        </Route>
        <Route element={<AdminProtected />}>
          <Route path="/table" element={<Users />} />
        </Route>
      </Route>
    )
  );

  //  const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<MainContent/>
  //   },
  //   {
  //     path:"/admission",
  //     element:<StudentFrom/>
  //   }
  //    ,
  //    {
  //      path: "/studentInfo",
  //      element: <StudentInfo />
  //    }
  //    ,
  //    {
  //     path: "/login",
  //     element: <Login />
  //   } ,
  //   {
  //     path: "/Studentlogin",
  //     element: <SingUpPage />
  //   },
  //   {
  //     path:"/table",
  //     element:<Users/>
  //   },
  //   {
  //     path:"/AboutUs",
  //     element:<AboutUs/>
  //   },
  //   {
  //     path:"/ContactUs",
  //     element:<ContactUs/>
  //   },
  //   {
  //     path:"/DirectorDesk",
  //     element:<DirectorDesk/>
  //   },
  //   {
  //     path:"/PravicyPolisy",
  //     element:<PravicyPolisy/>
  //   },
  //   {
  //     path:"/Payment",
  //     element:<Payment/>
  //   },

  //  ])

  return (
    <div style={{ height: "100%", width: "" }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
