import './App.css';
import NavBar from './component/navbar/NavBar';
import MainContent from './component/maincontent/MainContent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentFrom from './component/admissionform/StudentFrom';
import StudentInfo from './component/studentInfo/StudentInfo';
import Login  from './component/AdminLogin/Login';
import SingUpPage from './component/singUpPage/SingUpPage';
import Users from './component/table/table';
import StripePaymentCancel from './component/payment/StripePaymentCancel';
import StripePaymentSuccess from './component/payment/StripePaymentSuccess';
import Payment from './component/payment/Payment';
import Add from './component/table/Add';

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
       ,
       {
         path: "/studentInfo",
         element: <StudentInfo />
       }
       ,
       {
        path: "/login",
        element: <Login />
      } ,
      {
        path: "/Studentlogin",
        element: <SingUpPage />
      },
      {
        path:"/table",
        element:<Users/>
      },
      // {
      //   path:"/Add",
      //   element:<Add/>
      // },
      {
        path:"/StripePaymentCancel",
        element:<StripePaymentCancel/>
      },
         {
        path:"/StripePaymentSuccess",
        element:<StripePaymentSuccess/>
      },
      {
        path:"/payment",
        element:<Payment/>
      }, 
     ])


  return (
    <div style={{ height: "100%", width: '' }}>
      <NavBar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
