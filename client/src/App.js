import './App.css';
import NavBar from './component/navbar/NavBar';
import MainContent from './component/maincontent/MainContent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentFrom from './component/admissionform/StudentFrom';
import StudentInfo from './component/studentInfo/StudentInfo';
import Login  from './component/AdminLogin/Login';
import SingUpPage from './component/singUpPage/SingUpPage';

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
      }
     ])


  return (
    <div style={{ height: "100%", width: '' }}>
      <NavBar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
