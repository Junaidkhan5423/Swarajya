import React, { useState } from "react";
import { useFormik } from "formik";
import "./SingUpPage.css";
import * as Yup from "yup";
import StudentInfo from "../studentInfo/StudentInfo";
import { getUser } from "../services/student.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function SingUpPage() {
  const [open, setOpen] = React.useState(false);
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

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    userName: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
    },
    // validate:schema,
    onSubmit: (values) => {
      console.log("data is cooming", values);
      availableUser(values).then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setOpen(true);
        } else {
          toast.error("User Not Found");
        }
      });
    },
  });
  return (
    <>
     <div class="container">
     <ToastContainer />   
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Student Login Form</h2>
        <div class="text-center mb-5 text-dark">See Your Profile</div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" onSubmit={formik.handleSubmit}>

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

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
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

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
