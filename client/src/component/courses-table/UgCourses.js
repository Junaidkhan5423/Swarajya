import React, { useEffect, useState } from 'react'
import AppDataGrid from '../../utils/AppDataGrid'
import axios from 'axios';

function UgCourse() {
    const columns = [
        {
          field: "name",
          headerName: "Name",
          width: 200,
        },
        { field: "fullName", headerName: "Full Name", width: 200 },
        { field: "specialition", headerName: "Specialition", width: 200 },
        {
          field: "duration",
          headerName: "Duration",
          width: 200,
        },
        {
          field: "fees",
          headerName: "Fees",
          width: 180,
          
        },
{
field:"type",
    headerName: "Type",
          width: 150,
        
}

      ];
    const [studentDAta, setStudentData] = useState([]);
    useEffect(()=>{
        fetchCoursedata()
    },[])

    const fetchCoursedata = async () => {
        // console.log(fetchCoursedata);
        axios
          .get(`${process.env.REACT_APP_API_URL_DEV}/getByCategoryCourse?type=UG`)
          .then((res) => {
            setStudentData(res.data.data);
            // console.log(res.data);
          });
      };
  return (
    <div>

<AppDataGrid studentDAta={studentDAta} columns={columns}/>
    </div>
  )
}

export default UgCourse