
import { Avatar, Box } from '@mui/material'
import { grey } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid'
import {  gridClasses } from '@mui/x-data-grid';

import React, { useMemo, useState } from 'react'

function AppDataGrid( props) {
  
  return (
    <>
     <Box
       m="40px 0 0 0"
       height="75vh"
       sx={{
         "& .MuiDataGrid-root": {
           border: "none",
         },
         "& .MuiDataGrid-cell": {
           borderBottom: "none",
         },
         "& .name-column--cell": {
           color: '#94e2cd',
         },
         "& .MuiDataGrid-columnHeaders": {
           backgroundColor: '#3e4396',
           borderBottom: "none",
         },
         "& .MuiDataGrid-virtualScroller": {
           backgroundColor: '#1F2A40',
         },
         "& .MuiDataGrid-footerContainer": {
           borderTop: "none",
           backgroundColor: '#3e4396',
         },
         "& .MuiCheckbox-root": {
           color: `#b7ebde !important`,
         },
       }}
          >

      <DataGrid
        columns={props?.columns}
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