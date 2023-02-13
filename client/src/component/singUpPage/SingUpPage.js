import React, { useState } from 'react'
import { useFormik } from 'formik';

import "./SingUpPage.css"
import * as Yup from "yup";
import StudentInfo from '../studentInfo/StudentInfo';


function SingUpPage() {
    const  [userDetail,setUserDetail] = useState({})
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });
    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
        },
        onSubmit: values => {
setUserDetail(values)
handleClickOpen()
        },
      });
    return (
        <>
          <div className="login-page">
  <div className="form">
    <form className="login-form"  onSubmit={formik.handleSubmit}>
      <input
      id="useName"
      name="userName"
      type="userName" 
      placeholder='username'
         onChange={formik.handleChange}
         value={formik.values.userName}
      />
      <input
       id="email"
         name="email"
         type="email"
         placeholder='email'
         onChange={formik.handleChange}
         value={formik.values.email}
         />
       <button type="submit">Submit</button>
    </form>
  </div>
</div>
{open && <StudentInfo open={open} userDetail={userDetail}/ >}
        </>
    )
}

export default SingUpPage
