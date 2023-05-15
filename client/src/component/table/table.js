import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
// import moment from 'moment';
import { grey } from "@mui/material/colors";
import { useAuthentication } from "../../store/store";
import { deleteCourseByID, getUserAll } from "../services/student.service";
import axios from "axios";
import { object } from "yup";
import { Link } from "react-router-dom";
import Add from "../table/Add";
import AppDataGrid from "../../utils/AppDataGrid";
import PopUp from "../modal/PopUp";
import { useQuery } from 'react-query';
import { ToastContainer, toast } from "react-toastify";

const Users = () => {
  const [open, setOpen] = useState(false);

  const token = useAuthentication((state) => state.auth.token);
  // const { data, isLoading, isError, refetch } = useQuery('my-data', async()=>{
  // const response = await  getUserAll(token).then((res) => {
  //     return res.data
  //     // setStudentData(res.data);
  //   })
  //   // console.log(response,'response')
  //   return response
  // })
  // console.log(data);

  const [studentDAta, setStudentData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true)

    const data = await getUserAll(token).then((res) => {
      setIsLoading(false)
      // console.log("daa", res);
      setStudentData(res.data);
    });
  };

  const [newData, setNewData] = useState([]);
  const [selected, setSelected] = useState(true);
  const [isLoading, setIsLoading] =useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const fetchCoursedata = async () => {
    // console.log(fetchCoursedata);
    // setIsLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL_DEV}/getAllCourse`)
      .then((res) => {
        // setIsLoading(false)

        setNewData(res.data.data);
        // console.log(res.data);
      });
  };

  const refreshData = () => {
    fetchCoursedata();
    fetchData();
  }

  useEffect(() => {
    fetchCoursedata();
    fetchData();
    // refetch()
  }, [open]);
  const handleEdit = (e) => {
    console.log(e);
  };

  const deleteCourse = async (id) => {
    const data = await deleteCourseByID(id);
    toast.success("Successfully Delete Course")
    fetchCoursedata();
    // console.log(data);
  };

  const [rowId, setRowId] = useState(null);

  const columns = [
    {
      field: "profile",
      headerName: "Avatar",
      width: 60,
      renderCell: (params) => {
        return <Avatar src={params.formattedValue} />;
      },
      sortable: false,
      filterable: false,
    },
    { field: "firstName", headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 100 },
    {
      field: "phoneNo",
      headerName: "Phone No",
      width: 100
    },
    {
      field: "userName",
      headerName: "User Name",
      width: 100,
     
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    { field: "state", headerName: "State", width: 100 },
    {
      field: "nationality",
      headerName: "Nationality",
      // type: 'actions',
    },
    {
      field: "totalFees",
      headerName: "Total Fees",
    },
    ,
    {
      field: "totalPaid",
      headerName: "Paid Fees",
    },
    {
      field: "rollNo",
      headerName: "Roll no",
    },

    {
      field: "identyCard",
      headerName: " Identity card",
      renderCell: (params) => {
       
        return  params.row.identyCard ? <strong>Uploaded</strong> : <strong>Not Uploaded</strong>
      },
    }, 
    {
      field: "result",
      headerName: "Result ",
      renderCell: (params) => {
        return    params.row.result ? <strong>Uploaded</strong> : <strong>Not Uploaded</strong>
      },
    },
    
    {
      field: "enrollmentNo",
      headerName: "Enrollment No",
      
    },
    {
      field: "Action",
      headerName: "Edit",
      renderCell: (params) => {
        return (
          <PopUp refetch={fetchData} params={params} handleEdit={handleEdit} />
          // <button
          //   onClick={() => {
          //     handleEdit(params.row._id);

          //   }}
          // >
          //   Edit
          // </button>
        );
      },
    },
  ];
  // return isLoading && <h1>...loading</h1>
  if(isLoading){
    return (
      <div class="spinner-border  position-absolute top-50 start-50" style={{width: "48px", height: "48px", borderWidth: "5px"}}>
  <span class="visually-hidden">Loading...</span>
</div>
    )
  }

  return token ? (
    <>
      {selected ? (
        <>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: "3px" }}
            onClick={() => setSelected(false)}
          >
            Courses
          </button>
          <button onClick={refreshData} className="btn btn-primary">
              <i class="bi bi-arrow-clockwise"></i>
              </button>
          {/* <Box
      sx={{
        height: "100vh",
        width: '97%',
        margin: "1%"
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
    </Box> */}
          <AppDataGrid studentDAta={studentDAta} columns={columns} />
        </>
      ) : (
        <>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: "3px" }}
            onClick={() => setSelected(true)}
          >
            STudent List
          </button>
          <div className="container mt-5">
          <ToastContainer />
            <div className="text-end">
              <button onClick={() => setOpen(true)} className="btn btn-primary">
                Add +
              </button>
             
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Full Name</th>
                  <th>specialization </th>
                  <th>duration</th>
                  <th>fees</th>
                  <th>Type</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {newData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.fullName}</td>
                    <td>{item.specialition}</td>
                    <td>{item.duration}</td>
                    <td>{item.fees}</td>
                    <td>{item.type}</td>
                    <td>
                      <Button
                        onClick={() => deleteCourse(item._id)}
                        color="error"
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {open && <Add refetch={fetchCoursedata} handleClose={handleClose} open={open} />}
        </>
      )}
    </>
  ) : (
    <h1>you don't have Authorization</h1>
  );
};

export default Users;
