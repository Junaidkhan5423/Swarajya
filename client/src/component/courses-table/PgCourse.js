import React, { useEffect, useState } from 'react'
import AppDataGrid from '../../utils/AppDataGrid'
import axios from 'axios';

function PgCourse() {
    const columns = [
        {
          field: "name",
          headerName: "Name",
          width: 260,
          sortable: false,
          filterable: false,
        },
        { field: "fullName", headerName: "Full Name", width: 150 },
        { field: "specialition", headerName: "Specialition", width: 200 },
        {
          field: "duration",
          headerName: "Duration",
          width: 260,
          type: "singleSelect",
          valueOptions: ["basic", "editor", "admin"],
          editable: true,
        },
        {
          field: "fees",
          headerName: "Fees",
          width: 200,
          editable: true,
        },
{
field:"type",
    headerName: "Type",
          width: 200,
          editable: true
}

      ];
    const [studentDAta, setStudentData] = useState([]);
    useEffect(()=>{
        fetchCoursedata()
    },[])

    const fetchCoursedata = async () => {
        // console.log(fetchCoursedata);
        axios
          .get(`${process.env.REACT_APP_API_URL_LOCAL}/getByCategoryCourse?type=pGDegree`)
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

export default PgCourse