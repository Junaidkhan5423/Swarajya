import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
// import moment from 'moment';
import { grey } from '@mui/material/colors';
import { useAuthentication } from '../../store/store';
import { getUserAll } from '../services/student.service';


const Users = () => {
 const token = useAuthentication(state => state.auth.token)

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  const [studentDAta,setStudentData]=useState([])

  const fetchData =async()=>{
 const data = await  getUserAll(token).then((res)=>{
      console.log("daa",res) 
        setStudentData(res.data);
        
    
    })
  }

  useEffect(() => {

    fetchData()
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'profile',
        headerName: 'Avatar',
        width: 60,
        renderCell: (params) =>{ 
          console.log(params)
           return(<Avatar src={params.formattedValue} />)
        },
        sortable: false,
        filterable: false,
      },
      { field: 'firstName', headerName: 'Name', width: 170 },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'phoneNo',
        headerName: 'phoneNo',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['basic', 'editor', 'admin'],
        editable: true,
      },
      {
        field: 'userName',
        headerName: 'userName',
        width: 100,
        editable: true,
      },
      {
        field: 'city',
        headerName: 'city',
        width: 200,

      },
      { field: 'state', headerName: 'state', width: 220 },
      {
        field: 'nationality',
        headerName: 'nationality',
        // type: 'actions',
      },
    ],
    [rowId]
  );

  return token ?(
    
    <Box
      sx={{
        height: "100vh",
        width: '97%',
        margin:"1%"
      }}
      
    >
   
      <DataGrid
        columns={columns}
        rows={studentDAta}
        getRowId={(row) => row._id}

        // rowsPerPageOptions={[5, 10, 20]}
        // pageSize={}
     
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      />
    </Box>
  ) : (
 <h1>you don't have Authorization</h1>
  )
};

export default Users;