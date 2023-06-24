import React from "react";
import "./App.css";
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
import PaymentPage from "./component/payment/PaymentPage";
import Root from "./component/Root/Root";
// import Admin from './component/Root/AdminProtected';
import AdminProtected from "./component/Root/AdminProtected";
import ELearnig from "./component/contactus/ELearnig";
import PgCourse from "./component/courses-table/PgCourse";
import DiplomaCourses from "./component/courses-table/DiplomaCourses";
import UgCourse from "./component/courses-table/UgCourses";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {  useMode } from "./theme";
import PressRelease from "./component/press-realease/PressRelease";
import MissionAndVision from "./component/contactus/MissionAndVision";
import AimsAndObjectives from "./component/contactus/AimsAndObjectives"
import OurScope from "./component/contactus/OurScope"
import Condition from "./component/contactus/Condition"
import JobAndInter from "./component/press-realease/JobAndInter";
// import StripePaymentCancel from './component/payment/StripePaymentCancel';
// import StripePaymentSuccess from './component/payment/StripePaymentSuccess';
// import Add from './component/table/Add';

function App() {
  const [theme] = useMode();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Payment" element={<PaymentPage />} />
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
          <Route path="/PressRelease" element={<PressRelease/>} />  
          <Route path="/JobAndInter" element={<JobAndInter/>} />  
          <Route path="/MissionAndVision" element={<MissionAndVision/>} />
          <Route path="/AimsAndObjectives" element={<AimsAndObjectives/>}/>  
          <Route path="/OurScope" element={<OurScope/>}/>  
          <Route path="/Condition" element={<Condition/>}/>

          OurScope
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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>

    </>
  );
}

export default App;
