import { AppBar, Dialog, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from './arrow.png'


const Add = (props) => {
    const { open, handleClose } = props
    const [CourseType, setCourseType] = useState("")

    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', fullName: '', specialition: '', duration: '', fees: '', type: '' ,syllabus:"'" })
    function handleSubmit(e){
           e.preventDefault()

           axios.post('https://swarajyabackend.onrender.com/addCourse',inputData)
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
        // <div className='d-flex  vh-70 justify-content-center align-items-center'>
        //     <div className='border bg-light p-5' style={{marginTop:"1rem",width: "25%",marginBottom:'1rem'}}>
        //         <form onSubmit={handleSubmit}>

        //             <div  class="form-outline">
        //                 <label htmlFor='name' >Name</label>
        //                 <input type="text" name="name" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, name: e.target.value })} />
        //             </div>
        //             <div class="form-outline">
        //                 <label htmlFor='name' >fullName</label>
        //                 <input type="text" name="fullName" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, fullName: e.target.value })} />
        //             </div>
        //             <div class="form-outline">
        //                 <label htmlFor='name' >specialition</label>
        //                 <input type="text" name="specialition" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, specialition: e.target.value })} />
        //             </div>
        //             <div class="form-outline">
        //                 <label htmlFor='name' >duration</label>
        //                 <input type="text" name="duration" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, duration: e.target.value })} />
        //             </div>
        //             <div class="form-outline">
        //                 <label htmlFor='name' >fees</label>
        //                 <input type="text" name="fees" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, fees: e.target.value })} />
        //             </div>
        //             <div class="form-outline">
        //                 <label htmlFor='name' >type</label>
        //                 <input type="text" name="type" class="form-control"  style={{width:"110%"}}
        //                     onChange={e => setinputData({ ...inputData, type: e.target.value })} />
        //             </div><br/>
        //             <button className='btn btn-info'>Submit</button>
        //         </form>
        //     </div>

        // </div>
        <Dialog
        open={open}
        onClose={handleClose}
    >
        
         <div className='d-flex  justify-content-center align-items-center'>
            <div className='border bg-light p-5'>
                <form onSubmit={handleSubmit}>

                    <div  class="form-outline">
                         <label htmlFor='name' >Name</label>
                        <input type="text" name="name" class="form-control"  
                            onChange={e => setinputData({ ...inputData, name: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >fullName</label>
                        <input type="text" name="fullName" class="form-control"  
                            onChange={e => setinputData({ ...inputData, fullName: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >specialization</label>
                        <input type="text" name="specialition" class="form-control"  
                            onChange={e => setinputData({ ...inputData, specialition: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >duration</label>
                        <input type="text" name="duration" class="form-control"  
                            onChange={e => setinputData({ ...inputData, duration: e.target.value})} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >fees</label>
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