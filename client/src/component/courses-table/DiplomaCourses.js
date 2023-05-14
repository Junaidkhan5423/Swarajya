import React, { useEffect, useState } from 'react'
import AppDataGrid from '../../utils/AppDataGrid'
import axios from 'axios';

function DiplomaCourses() {
    const columns = [
        {
          field: "name",
          headerName: "Name",
          width: 260,
        },
        { field: "fullName", headerName: "Full Name", width: 150 },
        { field: "specialition", headerName: "Specialition", width: 200 },
        {
          field: "duration",
          headerName: "Duration",
          width: 260,

        },
        {
          field: "fees",
          headerName: "Fees",
          width: 200,

        },
{
field:"type",
    headerName: "Type",
          width: 200,

}

      ];
    const [studentDAta, setStudentData] = useState([]);
    useEffect(()=>{
        fetchCoursedata()
    },[])

    const fetchCoursedata = async () => {
        // console.log(fetchCoursedata);
        axios
          .get(`${process.env.REACT_APP_API_URL_DEV}/getByCategoryCourse?type=Diploma`)
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

export default DiplomaCourses