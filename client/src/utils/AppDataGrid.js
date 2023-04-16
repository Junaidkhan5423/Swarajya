
import { Avatar, Box } from '@mui/material'
import { grey } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid'
import {  gridClasses } from '@mui/x-data-grid';

import React, { useMemo, useState } from 'react'

function AppDataGrid( props) {
  const [rowId, setRowId] = useState(null);

    const columns = useMemo(
        () => [
          {
            field: 'profile',
            headerName: 'Avatar',
            width: 60,
            renderCell: (params) => {
              console.log(params)
              return (<Avatar src={params.formattedValue} />)
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
  return (
    <>
    <Box
      sx={{
        height: "80vh",
        width: '97%',
        margin: "1%"
      }}

    >

      <DataGrid
        columns={columns}
        rows={props?.studentDAta}
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
    </>
  )
}

export default AppDataGrid