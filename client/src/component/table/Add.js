import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

    const [inputData, setinputData] = useState({ name: '', fullName: '', specialition: '', duration: '', fees: '', type: '' })
    function handleSubmit(e){
           e.preventDefault()

           axios.post('http://localhost:9002/addCourse')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' >Name</label>
                        <input type="text" name="name" className='from-control'
                            onChange={e => setinputData({ ...inputData, name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor='name' >fullName</label>
                        <input type="text" name="fullName" className='from-control'
                            onChange={e => setinputData({ ...inputData, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor='name' >specialition</label>
                        <input type="text" name="specialition" className='from-control'
                            onChange={e => setinputData({ ...inputData, specialition: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor='name' >duration</label>
                        <input type="text" name="duration" className='from-control'
                            onChange={e => setinputData({ ...inputData, duration: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor='name' >fees</label>
                        <input type="text" name="fees" className='from-control'
                            onChange={e => setinputData({ ...inputData, fees: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor='name' >type</label>
                        <input type="text" name="type" className='from-control'
                            onChange={e => setinputData({ ...inputData, type: e.target.value })} />
                    </div>
                </form>
            </div>

        </div>

    )
}
export default Add;