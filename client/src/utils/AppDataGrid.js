
import { Avatar, Box } from '@mui/material'
import { grey } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid'
import {  gridClasses } from '@mui/x-data-grid';

import React, { useMemo, useState } from 'react'

function AppDataGrid( props) {
  
  return (
    // <>
    //  <Box
    //    m="40px 0 0 0"
    //    height="75vh"
    //    paddingLeft="5rem"
    //    paddingRight="5rem"
    //    sx={{
    //      "& .MuiDataGrid-root": {
    //        border: "none",
    //      },
    //      "& .MuiDataGrid-cell": {
    //        borderBottom: "none",
    //      },
    //      "& .name-column--cell": {
    //        color: '#94e2cd',
    //      },
    //      "& .MuiDataGrid-columnHeaders": {
    //        backgroundColor: '#3e4396',
    //        borderBottom: "none",
    //      },
    //      "& .MuiDataGrid-virtualScroller": {
    //        backgroundColor: '#1F2A40',
    //      },
    //      "& .MuiDataGrid-footerContainer": {
    //        borderTop: "none",
    //        backgroundColor: '#3e4396',
    //      },
    //      "& .MuiCheckbox-root": {
    //        color: `#b7ebde !important`,
    //      },
    //      "& .MuiDataGrid-row":{
    //       background:'#6c757d'
    //      },
    //      "& .MuiDataGrid-row:hover":{
    //       background:'#c3b382'
    //      }
    //    }}
    //       >

    //   <DataGrid
    //     columns={props?.columns}
    //     rows={props?.studentDAta}
    //     getRowId={(row) => row._id}

    //     // rowsPerPageOptions={[5, 10, 20]}
    //     // pageSize={}

    //     sx={{
    //       [`& .${gridClasses.row}`]: {
    //         bgcolor: (theme) =>
    //           theme.palette.mode === 'light' ? grey[200] : grey[900],
    //       },
    //     }}
    //   />
    // </Box>
    // </>
    <>
  <Box
    m="40px 0 0 0"
    height="75vh"
    paddingLeft="5rem"
    paddingRight="5rem"
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
      "& .MuiDataGrid-row": {
        background: '#6c757d'
      },
      "& .MuiDataGrid-row:hover": {
        background: '#c3b382'
      }
    }}
    sx={{
      // styles for screens smaller than 600px
      '@media (max-width: 600px)': {
        paddingLeft: '1rem',
        paddingRight: '1rem'
      },
      // styles for screens between 600px and 960px
      '@media (min-width: 600px) and (max-width: 960px)': {
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }
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
      sx={{
        // styles for screens smaller than 600px
        '@media (max-width: 600px)': {
          fontSize: '12px'
        }
      }}
    />
  </Box>
</>

  )
}

export default AppDataGrid