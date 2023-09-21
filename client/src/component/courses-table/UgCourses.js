import React, { useEffect, useState } from 'react'
import AppDataGrid from '../../utils/AppDataGrid'
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';

function UgCourse() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 120,
    },
    { field: "fullName", headerName: "Full Name", width: 120 },
    { field: "specialition", headerName: "Specialition", width: 120 },
    {
      field: "duration",
      headerName: "Duration",
      width: 120,
    },
    {
      field: "fees",
      headerName: "Fees",
      width: 120,

    },
    {
      field: "type",
      headerName: "Types",
      renderCell: (params) => {
        console.log();
        return (
          <Button color="primary">
            UG Degree
          </Button>
        );
      },
    },

  ];
  const [studentDAta, setStudentData] = useState([]);
  useEffect(() => {
    fetchCoursedata()
  }, [])

  const fetchCoursedata = async () => {
    axios
      .get(`${process.env.REACT_APP_API_URL_DEV}/getByCategoryCourse?type=UG`)
      .then((res) => {
        setStudentData(res.data.data);
      });
  };
  return (
    <div>
    <Box>
      <Typography
        variant="h2"
        color={"#141414"}
        fontWeight="bold"
        textAlign={'center'} 
        sx={{ m: "0 0 5px 0" }}
      >
       UG
      </Typography>
      <Typography variant="h5" textAlign={'center'} color={"blue"}>
       Course
      </Typography>
    </Box>
    {studentDAta && studentDAta.length > 1 ? (
        <AppDataGrid studentDAta={studentDAta} columns={columns} />
      ) : null}    </div>
  )
}

export default UgCourse