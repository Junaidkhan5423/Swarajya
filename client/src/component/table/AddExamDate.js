import { Dialog, FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { convertIntoBase64 } from '../profilePic/convert'


const AddExamDate = (props) => {
    const { open, handleClose } = props
    const [file, setFile] = useState(null)


    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ name: '', type: 'news' ,descripstion:""})
    function handleSubmit(e){
           e.preventDefault()

           axios.post(`${process.env.REACT_APP_API_URL_DEV}/addnews`,{...inputData , img:file  })
                 .then(res=>{
                    props.refetch()
                    navigate('/table')
                    alert("Data add successfully");
                    handleClose()
                 } ).catch(err=>console.log(err))
    }
    const handleChangeCourse = (event) => {
        setinputData({...inputData, type: event.target.value })
       

    }
    const onUpload = async (e) => {
        const base64 = await convertIntoBase64(e.target.files[0])
        setFile(base64)
    }
    return (
        <Dialog
        open={open}
        onClose={handleClose}
    >
        
         <div className='d-flex  vh-70 justify-content-center align-items-center'>
            <div className='border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
                                    <InputLabel id="demo-select-small">Select Course Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select"
                                        value={inputData.type}
                                        label="Select News Type"
                                        onChange={handleChangeCourse}
                                    >
                                    <MenuItem value={"exam"}>Exams</MenuItem>
                                        <MenuItem value={"news"}>News</MenuItem>
                                        <MenuItem value={"jobs"}>jobs</MenuItem>

                                    </Select>
                                </FormControl>
                                <div  class="form-outline">
  <label htmlFor='name' >Name</label>
 <input type="text" name="name" class="form-control"  
     onChange={e => setinputData({ ...inputData, name: e.target.value})} />
</div>
                                { inputData.type === "news" || inputData.type === "jobs"  ? (
                                    <>


<div  class="form-outline">
  <label htmlFor='name' >Image</label>
 <input type="file" name="flie" class="form-control"  
     onChange={onUpload} />
</div>
</>
                               ) : '' }
                  
                    <div  class="form-outline">
                         <label htmlFor='name' >Descripstion</label>
                        <textarea type="descripstion" name="descripstion" class="form-control"  
                           onChange={e => setinputData({ ...inputData, descripstion: e.target.value})}
                            
                            />
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