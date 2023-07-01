
import './ContactUs.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, email, city, number) {
    return { name, email, city, number };
}




function ContactUs() {
    const [newAdminData, setNewAdminData] = React.useState([]);

    const fetchAdminListdata =  () => {

        axios
          .get(`https://swarajyabackend.onrender.com/getAdminList`)
          .then((res) => {
    console.log(res.data.data);
            setNewAdminData(res.data.data);
          });
      };
      React.useEffect(()=>{
        fetchAdminListdata()
      },[])
    return (
        <>
           
            <Typography
        variant="h2"
        color={"whitesmoke"}
        fontWeight="700"
        bgcolor="#001f5f"
        fontFamily="system-ui"
        textAlign={"center"}
        sx={{ m: "0 0 5px 0" }}
      >
        Welcome to Swarajya Institute of Distance Learning
      </Typography>
      <h6 className='mainhading'>We Welcome Your Questions, Comments, And Feedback! Here Are The Ways You Can Get In Touch With Us:</h6>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Co-ordinator Name</StyledTableCell>
                            <StyledTableCell align="left">Email Addres</StyledTableCell>
                            <StyledTableCell align="left">Work Area (Region)</StyledTableCell>
                            <StyledTableCell align="left">Mobile Number</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{fontSize:'25px'}}>
                        {newAdminData.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.cities.map((item)=> <span>{item}</span>)}</StyledTableCell>
                                <StyledTableCell align="left">{row.phoneNo}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>    
            </TableContainer>
            <div className='condition-text'>
                <p style={{fontSize:'25px'}}>
                    WHATSAPP CHAT SUPPORT  AVAILABLE ON : 8 WORKING HRS DAILY. From Monday-Friday.
                    CALL SUPPORT ON SAME MOBILE NUMBER WILL BE AVAILABLE ON SATURDAY EVENING 4:00 PM TO 5:45 PM ONLY.
                    ALL RED HOLIDAYS IN ACADEMIC CALANDER INCLUDING SUNDAYS WILL BE NOT AVAILABLE FOR INQUIREY.
                </p>
                        </div>
            {/* <div className='text-area'>
                <p>1. Phone: If You Prefer To Speak With Us Over The Phone, Please Call Us At Given Contacts of Respective Region's Coordinators in Office Hours.</p>
                <p>2. Contact Form: You Can Also Fill Out Our Contact Form Given on Website With Your Name, Email Address, And Message. We Will Respond To Your Message Via Email.</p>
                <p>3. Social Media: Follow Us On Social Media For The Latest News And Updates About Our Institute. You Can Also Send Us A Message On Social Media.</p>
            </div> */}
            <Box
          marginTop={"1rem"}
          sx={{
            "& .css-134c1l3-MuiTypography-root": {
              border: "none",
              margin: "0",
              fontFamily: "Source Sans Pro,sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.334,
              color: "ffff",
              marginLeft: "2%",
              color: " #484848",
              fontSize: "15px",
              fontWeight: 600,
              marginTop: "2%",
            },
          }}
        >
          {/* <Typography
            variant="h3"
            color={"#001f5f"}
            fontWeight="700"
            sx={{ m: "0 0 5px 0" }}
          >
            Retention of Personal Data
          </Typography> */}
          <Typography variant="h5" color={"ffff"}>
            <span style={{ fontSize: "large", fontWeight: "bold" }}>
            1. Phone:  
            </span>
            If You Prefer To Speak With Us Over The Phone, Please Call Us At Given Contacts of Respective Region's Coordinators in Office Hours.
          </Typography>
          <Typography variant="h5" color={"ffff"}>
            <span style={{ fontSize: "large", fontWeight: "bold" }}>
            2. Contact Form: 
            </span>
            You Can Also Fill Out Our Contact Form Given on Website With Your Name, Email Address, And Message. We Will Respond To Your Message Via Email.
          </Typography>
          <Typography variant="h5" color={"ffff"}>
            <span style={{ fontSize: "large", fontWeight: "bold" }}>
            Social Media:
            </span>
            Follow Us On Social Media For The Latest News And Updates About Our Institute. You Can Also Send Us A Message On Social Media.
          </Typography>
        </Box>
        </>
    )
}

export default ContactUs
