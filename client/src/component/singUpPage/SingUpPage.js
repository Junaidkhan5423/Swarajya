import React, { useState } from "react";
import { useFormik } from "formik";
import "./SingUpPage.css";
import StudentInfo from "../studentInfo/StudentInfo";
import { getUser } from "../services/student.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";

function SingUpPage() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const availableUser = (useDetail) => {
    return new Promise((resolve, reject) => {
      if (!useDetail) {
        reject();
      }
      const data1 = getUser(useDetail);
      resolve(data1);
    }).catch((err) => {
      console.log(err);
    });
  };

  const [data, setData] = useState(null);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
    },
    // validate:schema,
    onSubmit: (values) => {
      setIsLoading(true)
      console.log("data is cooming", values);
      availableUser(values).then((res) => {
        if (res.status === 200) {
          setIsLoading(false)

          console.log(res.data,'data');
          setData(res.data);
          toast.success("You  Successfully Login")

          setOpen(true);
        } else {
          setIsLoading(false)
          toast.error("User Not Found");
        }
      });
    },
  });
  const Loader =()=>{
    return (
      <button class="btn  d-flex justify-content-center align-items-center position-absolute top-50 start-50">
      <span class="spinner-border spinner-border-sm me-2"></span>
  
    </button>
    
    )
  }
  // if(isLoading){
  //   return (
  //   <Loader/>
  //   )
  // }
  return (
    <>
     <div class="container">
     <ToastContainer />   
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Student Login</h2>
        <div class="text-center mb-5 text-dark">See Your Profile</div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" onSubmit={formik.handleSubmit}>

          

            <div class="mb-3">
              <input class="form-control" 
               id="useName"
               name="userName"
               type="userName" 
               required
               placeholder='username'
                  onChange={formik.handleChange}
                  value={formik.values.userName}/>
            </div>
            <div class="mb-3">
              <input  id="email"
               class="form-control" 
         name="email"
         type="email"
         required
         placeholder='email'
         onChange={formik.handleChange}
         value={formik.values.email}/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-primary px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <Link to='/admission' class="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>
{isLoading && <Loader/>}
      </div>
    </div>
  </div>
      {/* <div className="login-page">
          <ToastContainer />

  <div className="sing-up-form">
    <form  onSubmit={formik.handleSubmit}>
      
      <input
      id="useName"
      name="userName"
      type="userName" 
      required
      placeholder='username'
         onChange={formik.handleChange}
         value={formik.values.userName}
      />
      <input
       id="email"
         name="email"
         type="email"
         required
         placeholder='email'
         onChange={formik.handleChange}
         value={formik.values.email}
         />
       <button type="submit">Submit</button>
    </form>
  </div>
</div> */}

      {open && <StudentInfo open={open} data={data} />}
    </>
  );
}

export default SingUpPage;
