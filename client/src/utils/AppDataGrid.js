
import { useTheme } from '@emotion/react';
import { Avatar, Box } from '@mui/material'
import { grey } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid'
import {  gridClasses } from '@mui/x-data-grid';

import React, { useMemo, useState } from 'react'
import { tokens } from '../theme';

function AppDataGrid( props) {
  const theme = useTheme();
  const colors = tokens(theme.mode);
  
  return (
    <>
  <Box
    m="40px 0 0 0"
    height="75vh"
    paddingLeft="5rem"
    paddingRight="5rem"
    maxWidth={props.maxWidth ||'100%'}
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
      "& .name-column--cell": {
        color: colors.blueAccent[200],
      },
      "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
        background: `${colors.blueAccent[300]} !important`,
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[900],
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.primary[100],
      },
      "& .MuiCheckbox-root": {
        color: `#b7ebde !important`,
      },
      "& .MuiDataGrid-row": {
        background: colors.greenAccent[100]
      },
      "& .MuiDataGrid-row:hover": {
        background: colors.grey[200]
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
            theme.palette.mode === 'light' ? grey[100] : grey[900],
        },
        "& .css-yrdy0g-MuiDataGrid-columnHeaderRow ": {
          background: `${colors.blueAccent[700]} !important`,
          borderBottom: "none",
          fontWeight:600,
          fontSize:'16px',
          color:"#222222",
          fontFamily:"sans-serif"
        },
        "& .MuiDataGrid-row ":{
          color:"#222222",
          background: colors.secondary[200],
          fontSize:"15px",
          fontFamily:"sans-serif"
        },
        "& .MuiDataGrid-row:hover":{
          color:"#222222",
          background: colors.primary[900]
        },
        "& .MuiDataGrid-columnHeaders":{
          background: `${colors.blueAccent[700]} !important`,

        }
      }}
      // sx={{
      //   // styles for screens smaller than 600px
      //   '@media (max-width: 600px)': {
      //     fontSize: '12px'
      //   }
      // }}
    />
  </Box>
</>

  )
}

export default AppDataGrid