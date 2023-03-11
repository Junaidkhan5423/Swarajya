import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Textfield from './Textfield'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import * as Yup from 'yup';
import { useRef } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import ProfilePic from '../profilePic/ProfilePic';
import { convertIntoBase64 } from '../profilePic/convert';
import { postStudentData } from '../services/student.service';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import "./form.scss"



import Select, { SelectChangeEvent } from '@mui/material/Select';



const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
//  const disabledTextbox = Yup.string().test("disabled", "This field is disabled", () => false);

function SignUp() {

    const [file, setFile] = useState(null)
    const [state, setState] = useState("")
    const [City, setCity] = useState("")
    const [selectedCity, setSelectedCity] = useState([])

    const MahashtraCity = ["Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bid (Beed)", "Buldana (Buldhana)", "Chandrapur", "Dhule", "Gadchiroli", "Gondiya (Gondia)", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
    const UpCity = ["Agra", "Aligarh", "Allahabad", "Ambedkar", "Nagar", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Bara Banki", "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam", "Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras (Mahamaya Nagar)", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kanpur Nagar", "Kasganj (Kanshiram Nagar)", "Kaushambi", "Kheri (Lakhimpur Kheri)", "Kushinagar", "Lalitpur", "Lucknow", "Mahoba", "Mahrajganj (Maharajganj)", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", "Sant Ravidas Nagar (Bhadohi)", "Shahjahanpur", "Shrawasti (Shravasti)", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
    const onUpload = async (e) => {
        const base64 = await convertIntoBase64(e.target.files[0])
        setFile(base64)
        console.log(base64);
    }
    const handleChange = (event) => {
        if (event.target.value === "Mahashtra") {
            setSelectedCity(MahashtraCity)
        } else {
            setSelectedCity(UpCity)
        }
        setState(event.target.value);
    };
    const handleChangeCity = (event) => {
        setCity(event.target.value);

    }

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

        //................... image validation................
        // studentPhoto: Yup
        //     .mixed()
        //     .nullable()
        //     .required()
        //     .test(
        //         "FILE_SIZE",
        //         "Uploaded file is too big",
        //         (value) => !value || (value && value.size <= 1024 * 1024)
        //     )
        //     .test(
        //         "FILE_FORMAT",
        //         "Uploaded file has unsupported format",
        //         (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        //     )
        //     .required("Please Upload Photo"),

        // password: Yup.string()
        //     .min(6, 'Password must be at least 6 characters')
        //     .required('PassWord is required'),
        // consfirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Password must match')
        //     .required('Confirm password is required'),
    })

    // const validationSchema = Yup.shape({
    //     file: Yup.mixed().required(),
    //     image: Yup.mixed().required(),
    // });

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
                courseCode: 4794,
                profile: '',

            }}
            // validationSchema={validate}
            onSubmit={async values => {
                console.log(values)
                values = await Object.assign(values, { profile: file || "", state: state || "", city: City || '' })
                const data = await postStudentData(values)
                console.log(data);
                if (data.status === 200) {
                    toast.success("Student Registered Successfully")
                } else {
                    toast.error(data.error.response.data.message.error)

                }

            }}
        >

            {formik => {

                {/* {({ values }) => { */ }
                return (
                    <div  >
                        <ToastContainer />
                        <h3 className='mu-4 font-weight-bold .display-4' style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem' }}>Addmission Form</h3>
                        <Form >
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridColumnGap: '2rem', fontSize: '20rem' }}>
                                {/* {values.studentPhoto && <ProfilePic file={values.studentPhoto} />} */}
                                {/* <button type='button' onClick={() => { fileRef.current.click() }}>Upload</button> */}
                                <Textfield label='First Name' name='firstName' type='text' />
                                <Textfield label='Last Name' name='lastName' type='text' />
                                <Textfield label='User Name' name='userName' type='text' />
                                <Textfield label='Father Name' name='fatherName' type='text' />
                                <Textfield label='mother Name' name='motherName' type='text' />
                                <Textfield label='Date Of Birth' name='dob' type='date' />
                                <Textfield label='Nationality' name='nationality' type='text' disabled />
                                <Textfield label='Father Occupation' name='fatherOccupation' type='text' />
                                <Textfield label='Address' name='address' type='text' />
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel>State</InputLabel>
                                    <Select
                                        // labelId="demo-simple-select-autowidth-label"
                                        // id="demo-simple-select-autowidth"
                                        autoWidth
                                        className='demo-simple-select'
                                        value={state}
                                        label="State"
                                        onChange={handleChange}
                                    // style={{display: "flex",flexDirection: "column"}}
                                    >
                                        <MenuItem value={"Mahashtra"}>Mahashtra</MenuItem>
                                        <MenuItem value={"Uttar pradesh"}>Uttar pradesh</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">City</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select"
                                        value={City}
                                        label="City"
                                        onChange={handleChangeCity}
                                    >
                                        {selectedCity.map((item) => {
                                            return (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            )
                                        })
                                        }

                                    </Select>
                                </FormControl>
                                <Textfield label='Email' name='email' type='email' />
                                <Textfield label='Phone No.' name='phoneNo' type='number' />
                                <Textfield label='Center Name' name='centerName' type='text' disabled />
                                <Textfield label='Course Name' name='courseName' type='text' />
                                <Textfield label='Course Code' name='courseCode' type='number' />
                                <input label='Photo' style={{ display: "flex", flexDirection: "column", alignItems: "baseline", border: "2 px", fontSize: "1pc" }} name='profile' type='file' onChange={onUpload} />

                            </div>
                            {/* <button className='btn btn-dark mt-3' type='submit' style={{backgroundColor:'darkgray'}}>Submit</button> */}
                            <button className='btn btn-danger mt-3 ' type='submit' style={{ backgroundColor: 'darkgray' }}>Submit</button>
                        </Form>
                    </div>)
            }}
        </Formik>
    )
}

export default SignUp