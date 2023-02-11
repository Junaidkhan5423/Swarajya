import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {
        id: 'userName',
        label: 'User Name',
        minWidth: 170,
    },
    { id: 'fullName', label: 'FullName', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 100 },
    {
        id: 'city',
        label: 'City',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'phoneNo',
        label: 'Phone No',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
   
];

function createData(userName, fullName, address, city, email, phoneNo) {
    //   const phoneNo = city / email;
    return { userName, fullName, address, city, email, phoneNo };
}

const rows = [
    createData('khan22', 'Mubashir Khan', 'Gulzar colony', 'parbhani', 'mubashirkhan57510@gmail.com', '7028976022'),
    // createData('China', 'CN', 1403500365, 9596961),
    // createData('Italy', 'IT', 60483973, 301340),
    // createData('United States', 'US', 327167434, 9833520),
    // createData('Canada', 'CA', 37602103, 9984670),
    // createData('Australia', 'AU', 25475400, 7692024),
    // createData('Germany', 'DE', 83019200, 357578),
    // createData('Ireland', 'IE', 4857000, 70273),
    // createData('Mexico', 'MX', 126577691, 1972550),
    // createData('Japan', 'JP', 126317000, 377973),
    // createData('France', 'FR', 67022000, 640679),
    // createData('United Kingdom', 'GB', 67545757, 242495),
    // createData('Russia', 'RU', 146793744, 17098246),
    // createData('Nigeria', 'NG', 200962417, 923768),
    // createData('Brazil', 'BR', 210147125, 8515767),
];

function SutdentDetails() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default SutdentDetails
