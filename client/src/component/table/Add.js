import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', fullName: '', specialition: '', duration: '', fees: '', type: '' })
    function handleSubmit(e){
           e.preventDefault()

           axios.post('http://localhost:9002/addCourse',inputData)
                 .then(res=>{
                    navigate('/table')
                    alert("Data add successfully");
                 } ).catch(err=>console.log(err))
    }
    return (
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

    )
}
export default Add;