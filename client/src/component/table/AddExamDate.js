import { AppBar, Dialog, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from './arrow.png'


const AddExamDate = (props) => {
    const { open, handleClose } = props
    const [CourseType, setCourseType] = useState("")

    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', Date: '', Course: ''})
    function handleSubmit(e){
           e.preventDefault()

           axios.post('http://localhost:9002/addExamDate',inputData)
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
        
         <div className='d-flex  vh-70 justify-content-center align-items-center'>
            <div className='border bg-light p-5'>
                <form onSubmit={handleSubmit}>

                    <div  class="form-outline">
                         <label htmlFor='name' >Name</label>
                        <input type="text" name="name" class="form-control"  
                            onChange={e => setinputData({ ...inputData, name: e.target.value})} />
                    </div>
                    
                    <div  class="form-outline">
                         <label htmlFor='name' >Date</label>
                        <input type="date" name="Date" class="form-control"  
                            onChange={e => setinputData({ ...inputData, Date: e.target.value})} />
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
export default AddExamDate;