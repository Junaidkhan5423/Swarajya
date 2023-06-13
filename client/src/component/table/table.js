import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
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
import { ToastContainer, toast } from "react-toastify";
import AddExamDate from "./AddExamDate";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue ,'tab');
    console.log(activeTab,'tab');
    setActiveTab(newValue);
  };

  const token = useAuthentication((state) => state.auth.token);
;

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
      .get(`${process.env.REACT_APP_API_URL_DEV}/getExamDate`)
      .then((res) => {
        // setIsLoading(false)

        setNewData(res.data.data);
        console.log(res.data);
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
  }, []);
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
  const columnsOfCourse= [
    {
      field: "name",
      headerName: "Total Fees",
    },
    ,
    {
      field: "fullName",
      headerName: "Paid Fees",
    },
    {
      field: "specialition",
      headerName: "Roll no",
    },
    {
      field: "duration",
      headerName: "Roll no",
    },
     {
      field: "fees",
      headerName: "Roll no",
    },
    {
      field: "type",
      headerName: "Roll no",
    },

    {
      field: "identyCard",
      headerName: " Identity card",
      renderCell: (params) => {
       
        return   <Button
        onClick={() => deleteCourse(params.row._id)}
        color="error"
      >
        delete
      </Button>
      },
    }, 
  ]
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
   
          <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Students" />
        <Tab label="Courses" />
        <Tab label="Other" />
      </Tabs>
       <div className="tabstrip row ">
       {activeTab === 0 && (
          <>
{/* <button onClick={refreshData} className="btn btn-primary">
              <i class="bi bi-arrow-clockwise"></i>
              </button> */}
 
          <AppDataGrid studentDAta={studentDAta} columns={columns} />
          </>
        ) 
          }
               {activeTab === 1 && (
          <>
 <div className="row position-absolute  mr">
          <ToastContainer />
             <div className="text-end">
              <button onClick={() => setOpen(true)} className="btn btn-primary">
                Add +
              </button>
             
            </div>

            <AppDataGrid maxWidth={"100%"} maxHight='70%' studentDAta={newData} columns={columnsOfCourse} />

            {/* <table className="table">
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
            </table>  */}
          </div>
          {open && <Add refetch={fetchCoursedata} handleClose={handleClose} open={open} />}
          </>
        ) 
          }
          {activeTab === 2 && (
          <>
 <div className="row position-absolute  mr">
          <ToastContainer />
             <div className="text-end">
              <button onClick={() => setOpen(true)} className="btn btn-primary">
                Add +
              </button>
             
            </div>

            <AppDataGrid maxWidth={"100%"} maxHight='70%' studentDAta={newData} columns={columnsOfCourse} />

            {/* <table className="table">
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
            </table>  */}
          </div>
          {open && <AddExamDate refetch={fetchCoursedata} handleClose={handleClose} open={open} />}
          </>
        ) 
          }

       </div>
       
         
          
  
    </>
  ) : (
    <h1>you don't have Authorization</h1>
  );
};

export default Users;
