import { Dialog, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Add = (props) => {
    const { open, handleClose } = props
    const [CourseType, setCourseType] = useState("")

    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', fullName: '', specialition: '', duration: '', fees: '', type: '' ,syllabus:"'" })
    function handleSubmit(e){
           e.preventDefault()

           axios.post(`${process.env.REACT_APP_API_URL_DEV}/addCourse`,inputData)
                 .then(res=>{
                    props.refetch()
                    navigate('/table')
                    alert("Data add successfully");
                    handleClose()
                 } ).catch(err=>console.log(err))
    }
    const handleChangeCourse = (event) => {
        setCourseType(event.target.value);
        setinputData({...inputData, type: event.target.value })
       

    }
    return (

        <Dialog
        open={open}
        onClose={handleClose}
    >
        
         <div className='d-flex  justify-content-center align-items-center'>
            <div className='border bg-light p-5'>
                <form onSubmit={handleSubmit}>

                    <div  class="form-outline">
                         <label htmlFor='name' >Course Name in Short</label>
                        <input type="text" name="name" class="form-control"  
                            onChange={e => setinputData({ ...inputData, name: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >Full Name</label>
                        <input type="text" name="fullName" class="form-control"  
                            onChange={e => setinputData({ ...inputData, fullName: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >Specialization</label>
                        <input type="text" name="specialition" class="form-control"  
                            onChange={e => setinputData({ ...inputData, specialition: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >Duration</label>
                        <input type="text" name="duration" class="form-control"  
                            onChange={e => setinputData({ ...inputData, duration: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >Fees</label>
                        <input type="number" name="fees" class="form-control"  
                            onChange={e => setinputData({ ...inputData, fees: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >Syllabus</label>
                        <input type="text" name='syllabus' class="form-control"  
                            onChange={e => setinputData({ ...inputData, syllabus: e.target.value})} />
                    </div>
                    <div class="form-outline">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                                    <InputLabel id="demo-select-small">Select Course Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select"
                                        value={CourseType}
                                        label="Select Course Type"
                                        onChange={handleChangeCourse}
                                    >
                                    <MenuItem value={"Diploma"}>Diploma</MenuItem>
                                        <MenuItem value={"UG"}>UG Degree</MenuItem>
                                        <MenuItem value={"pGDegree"}>PG Degree</MenuItem>

                                    </Select>
                                </FormControl>
                                </div>
                                <br/>
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>

        </div>
    </Dialog>

    )
}
export default Add;