import React, { useState } from 'react'
import { useFormik } from 'formik';

import "./SingUpPage.css"
import * as Yup from "yup";
import StudentInfo from '../studentInfo/StudentInfo';
import { getUser } from '../services/student.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




function SingUpPage() {
  const [open, setOpen] = React.useState(false);
  const availableUser = (useDetail)=>{
   return new Promise((resolve, reject)=>{
    if(!useDetail){
      reject()
    }
      const data1 =  getUser(useDetail)
      resolve(data1)
  }).catch((err)=>{
    console.log(err);
  })
  }
 
const [data,setData]= useState(null)



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
          userName: '',
          email: '',
        },
        // validate:schema,
        onSubmit: values => {
         availableUser(values).then((res)=>{
          if(res.status === 200){
            setData(res.data);
            setOpen(true);
          }else{
            toast.error("User Not Found")
          }
        
         
      
        })
        },
      });
    return (
        <>
          <div className="login-page">
          <ToastContainer />

  <div className="form">
    <form className="login-form"  onSubmit={formik.handleSubmit}>
      
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
</div>
{open && <StudentInfo open={open} data={data}/ >}
        </>
    )
    }

export default SingUpPage
