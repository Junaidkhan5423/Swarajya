import { Dialog, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { convertIntoBase64 } from '../profilePic/convert'


const AddAdmin = (props) => {
    const { open, handleClose } = props
    const [selectedStateCity, setSelectedStateCity] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    const [state, setState] = useState("")

    const MahashtraCity = ["Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bid (Beed)", "Buldana (Buldhana)", "Chandrapur", "Dhule", "Gadchiroli", "Gondiya (Gondia)", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
    const UpCity = ["Agra", "Aligarh", "Allahabad", "Ambedkar", "Nagar", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Bara Banki", "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam", "Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras (Mahamaya Nagar)", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kanpur Nagar", "Kasganj (Kanshiram Nagar)", "Kaushambi", "Kheri (Lakhimpur Kheri)", "Kushinagar", "Lalitpur", "Lucknow", "Mahoba", "Mahrajganj (Maharajganj)", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", "Sant Ravidas Nagar (Bhadohi)", "Shahjahanpur", "Shrawasti (Shravasti)", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
    const handleStateChange = (event) => {
      if (event.target.value === "Mahashtra") {
        setSelectedStateCity(MahashtraCity)
      } else {
        setSelectedStateCity(UpCity)
      }
      setState(event.target.value);
  };

console.log(selectedCity ,'selected');
    
     const navigate = useNavigate()
    const [inputData, setinputData] = useState({ email: '', password: 'news' ,name:""})
    function handleSubmit(e){
           e.preventDefault()

           axios.post('http://localhost:9002/adminsignup',{...inputData , cities:selectedCity  })
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
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setSelectedCity(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    // const onUpload = async (e) => {
    //     setSelectedCity()
    //     setFile(base64)
    // }
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
                    <div class="form-outline">
                        <label htmlFor='name' >Password</label>
                        <input type="text" name="specialition" class="form-control"  
                            onChange={e => setinputData({ ...inputData, password: e.target.value})} />
                    </div>
                    
                    <div class="form-outline">
                        <label htmlFor='name' >Email</label>
                        <input type="text" name="duration" class="form-control"  
                            onChange={e => setinputData({ ...inputData, email: e.target.value})} />
                    </div>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    
                                    <InputLabel>State</InputLabel>
                                    <Select
                                        // labelId="demo-simple-select-autowidth-label"
                                        // id="demo-simple-select-autowidth"
                                        autoWidth
                                        className='demo-simple-select'
                                        value={state}
                                        label="State"
                                        onChange={handleStateChange}
                                    // style={{display: "flex",flexDirection: "column"}}
                                    >
                                        <MenuItem value={"Mahashtra"}>Mahashtra</MenuItem>
                                        <MenuItem value={"Uttar pradesh"}>Uttar pradesh</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">City</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedCity}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {selectedStateCity.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

                                {/* { inputData.type === "news" || inputData.type === "jobs"  ? (
                                    <>


<div  class="form-outline">
  <label htmlFor='name' >Image</label>
 <input type="file" name="flie" class="form-control"  
     onChange={onUpload} />
</div>
</>
                               ) : '' } */}
  
             
                                <br/>
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>

        </div>
    </Dialog>

    )
}
export default AddAdmin;