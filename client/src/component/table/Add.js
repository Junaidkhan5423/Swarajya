import { AppBar, Dialog, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from './arrow.png'


const Add = (props) => {
    const { open, handleClose } = props
    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', fullName: '', specialition: '', duration: '', fees: '', type: '' })
    function handleSubmit(e){
           e.preventDefault()

           axios.post('https://swarajyabackend.onrender.com/addCourse',inputData)
                 .then(res=>{
                    navigate('/table')
                    alert("Data add successfully");
                    handleClose()
                 } ).catch(err=>console.log(err))
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
        fullScreen
        open={open}
        onClose={handleClose}
    >
        <AppBar sx={{ position: 'relative' }}>
            <Toolbar>

                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <button
                        style={{ border: "none" }}
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <img src={img1} alt='!' style={{ marginRight: ' 0.5rem' }} />
                    </button>
                   Add Course
                </Typography>

            </Toolbar>
        </AppBar>
        
         <div className='d-flex  vh-70 justify-content-center align-items-center'>
            <div className='border bg-light p-5' style={{marginTop:"1rem",width: "25%",marginBottom:'1rem'}}>
                <form onSubmit={handleSubmit}>

                    <div  class="form-outline">
                         <label htmlFor='name' >Name</label>
                        <input type="text" name="name" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, name: e.target.value })} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >fullName</label>
                        <input type="text" name="fullName" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, fullName: e.target.value })} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >specialition</label>
                        <input type="text" name="specialition" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, specialition: e.target.value })} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >duration</label>
                        <input type="text" name="duration" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, duration: e.target.value })} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >fees</label>
                        <input type="text" name="fees" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, fees: e.target.value })} />
                    </div>
                    <div class="form-outline">
                        <label htmlFor='name' >type</label>
                        <input type="text" name="type" class="form-control"  style={{width:"110%"}}
                            onChange={e => setinputData({ ...inputData, type: e.target.value })} />
                    </div><br/>
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>

        </div>
    </Dialog>

    )
}
export default Add;