
import './ContactUs.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

const rows = [
    createData('Sejal', 'Sejal@SWrajyapramedix.in', 'Pune,Nashik,Nanded,Nagpur Region'),
    createData('Miss Diwyangi', 'diwya@SWrajyapramedix.in', 'Ahmednager,Bhandra,Chandrapur,Dhule,Gadchiroli,Gondia,Jalgao,Kolhapur,Latur,Nandurbar.'),
    createData('Miss Shatakshi K.Dadke', 'shatakshi@SWrajyapramedix.in', 'Parbhani,Raigad,Ratnagiri,Sangli,Satra,Sidhudurg,Solapur,Palghar,Wardha,Washim,Yavatmal.'),
    createData('Miss Samreen A.Shaikh', 'sam@SWrajyapramedix.in', 'Aurangabad,Osmanabad,Beed,Hingoli,Mumbhai City,Mumbai Suburban,Akola,Thane,Jalna,Amravati.'),
    createData('Miss Neha Girish Matra', 'neha@SWrajyapramedix.in', `All City's Of Utter Pradesh`),
];


function ContactUs() {
    return (
        <>
            <h4 className='mainhading'>We Welcome Your Questions, Comments, And Feedback! Here Are The Ways You Can Get In Touch With Us:</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Director Name</StyledTableCell>
                            <StyledTableCell align="left">Email Addres</StyledTableCell>
                            <StyledTableCell align="left">Slected City(g)</StyledTableCell>
                            <StyledTableCell align="left">Number</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.city}</StyledTableCell>
                                <StyledTableCell align="left">{row.number}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>    
            </TableContainer>
            <div className='condition-text'>
                <p>
                    WHATSAPP CHAT SUPPORT  AVAILABLE ON : 8 WORKING HRS DAILY.
                    CALL SUPPORT ON SAME NUMBER WILL BE AVAILABLE ON SATURDAY EVENING 4:30 PM TO 5:30 PM ONLY
                    ALL RED HOLIDAYS IN CALANDER INCLUDING SUNDAYS WILL BE NOT AVAILABLE FOR INQUIREY
                </p>
                <h6>And We Will Get Back To You As Soon As Possible.</h6>
            </div>
            <div className='text-area'>
                <p>1. Phone: If You Prefer To Speak With Us Over The Phone, Please Call Us At Given Contacts of Our Coordinators in Office Hours</p>
                <p>2. Contact Form: You Can Also Fill Out Our Contact Form Our Website With Your Name, Email Address, And Message. We Will Respond To Your Message Via Email.</p>
                <p>3. Social Media: Follow Us On Social Media For The Latest News And Updates About Our Institute. You Can Also Send Us A Message On Social Media.</p>
            </div>
        </>
    )
}

export default ContactUs
