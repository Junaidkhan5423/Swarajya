import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import Textfield from './Textfield'
import * as Yup from 'yup';
import { useRef } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

//  const disabledTextbox = Yup.string().test("disabled", "This field is disabled", () => false);
function SignUp() {

    // useEffect(() => {
    //    const data = localStorage.getItem("studentForm")
    //     console.log(JSON.parse(data));
    // }, [])

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://andruxnet-world-cities-v1.p.rapidapi.com/',
    //         params: { query: 'paris', searchby: 'city' },
    //         headers: {
    //             'X-RapidAPI-Key': '403470d12cmsh3231784fa24b81ap17abb0jsnf1a553867449',
    //             'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    //         }
    //     };


    //     axios.request(options).then(function (response) {

    //     }).catch(function (error) {
    //         console.error(error);

    //     });
    // }, [])
    const validate = Yup.object({
        firstName: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        fatherName: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        motherName: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        dob: Yup.string()
            .required('Required'),
        nationality: Yup.string()
            .required('Required'),
        fatherOccupation: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        address: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        state: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        city: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        phoneNo: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        centerName: Yup.string()
            .required('Please enter the center name'),
        courseName: Yup.string()
            .required('Please enter the course name'),
        courseCode: Yup.string()
            .required('Please enter the course code'),
        userName: Yup.string()
            .required('Please enter username'),
        // password: Yup.string()
        //     .min(6, 'Password must be at least 6 characters')
        //     .required('PassWord is required'),
        // consfirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Password must match')
        //     .required('Confirm password is required'),
    })






    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                userName: '',
                fatherName: '',
                motherName: '',
                dob: '',
                nationality: 'Indian',
                fatherOccupation: '',
                address: '',
                state: '',
                city: '',
                email: '',
                phoneNo: '',
                centerName: 'Swarajya Paramedical Institute',
                courseName: '',
                courseCode: 'AI-4794',
            }}
            validationSchema={validate}
            onSubmit={values => {
                axios.post("http://localhost:9002/admission", values).then((res)=>{
                    console.log("response is comming ",res);
                })
            }}
        >

            {formik => {

                return (
                    <div >
                        <ToastContainer />
                        <h3 className='mu-4 font-weight-bold .display-4' style={{ textAlign: 'center', marginBottom: '2rem' }}>Addmission Form</h3>
                        <Form >
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridColumnGap: '2rem' }}>
                                <Textfield label='First Name' name='firstName' type='text' />
                                <Textfield label='Last Name' name='lastName' type='text' />
                                <Textfield label='User Name' name='userName' type='text' />
                                <Textfield label='Father Name' name='fatherName' type='text' />
                                <Textfield label='mother Name' name='motherName' type='text' />
                                <Textfield label='Date Of Birth' name='dob' type='date' />
                                <Textfield label='Nationality' name='nationality' type='text' disabled />
                                <Textfield label='Father Occupation' name='fatherOccupation' type='text' />
                                <Textfield label='Address' name='address' type='text' />
                                <Textfield label='State' name='state' type='text' />
                                <Textfield label='City' name='city' type='text' />
                                <Textfield label='Email' name='email' type='email' />
                                <Textfield label='Phone No.' name='phoneNo' type='number' />
                                <Textfield label='Center Name' name='centerName' type='text' disabled />
                                <Textfield label='Course Name' name='courseName' type='text' />
                                <Textfield label='Course Code' name='courseCode' type='number' />
                            </div>
                            <button className='btn btn-dark mt-3' type='submit'>Register</button>
                            <button className='btn btn-danger mt-3 ml-3' type='submit'>Reset</button>
                        </Form>
                    </div>)
            }}
        </Formik>
    )
}

export default SignUp