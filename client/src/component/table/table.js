import { useEffect,  useState } from "react";
import { Avatar,  Button, Tab, Tabs } from "@mui/material";
// import moment from 'moment';
import { useAuthentication } from "../../store/store";
import { deleteCourseByID, deletenewsByID, getUserAll } from "../services/student.service";
import axios from "axios";
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

// eslint-disable-next-line
  const fetchData = async () => {
    setIsLoading(true)
 await getUserAll(token).then((res) => {
      setIsLoading(false)
      setStudentData(res.data);
    });
  };

  const [newData, setNewData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] =useState(false);

  const handleClose = () => {
    setOpen(false);
  };
const fetchNewData = async () => {
  axios
  .get(`${process.env.REACT_APP_API_URL_DEV}/getAllNews`)
  .then((res) => {
    // setIsLoading(false)

    setNewsData(res.data.data);
    console.log(res.data ,'news data');
  });
}
  const fetchCoursedata = async () => {
    // console.log(fetchCoursedata);
    // setIsLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL_DEV}/getAllCourse`)
      .then((res) => {
        // setIsLoading(false)

        setNewData(res.data.data);
        console.log(res.data);
      });
  };

  // const refreshData = () => {
  //   fetchCoursedata();
  //   fetchData();
  // }


 // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCoursedata();
    fetchNewData()
  },[]);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    fetchData();
  },[])
  const handleEdit = (e) => {
    console.log(e);
  };

  const deleteCourse = async (id) => {
 await deleteCourseByID(id);
    toast.success("Successfully Delete Course")
    fetchCoursedata();
    // console.log(data);
  };
  const deleteNews = async (id) => {
    await deletenewsByID(id);
       toast.success("Successfully Delete News")
       fetchNewData();
       // console.log(data);
     };

  // const [rowId, setRowId] = useState(null);

  const columns = [
    {
      field: "profile",
      headerName: "Avatar",
      width: 60,
      renderCell: (params) => {
        return <Avatar src={params.formattedValue} />;
      },
      sortable: false,
      filterable: false
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
    },
    {
      field: "totalFees",
      headerName: "Total Fees",
    },
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
      }
    }, 
    {
      field: "result",
      headerName: "Result ",
      renderCell: (params) => {
        return    params.row.result ? <strong>Uploaded</strong> : <strong>Not Uploaded</strong>
      }
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
        
        );
      }
    }
  ];
  const columnsOfCourse= [
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "fullName",
      headerName: "Full Name",
    },
    {
      field: "specialition",
      headerName: "Specialition",
    },
    {
      field: "duration",
      headerName: "Duration",
    },
     {
      field: "fees",
      headerName: "Fees",
    },
    {
      field: "type",
      headerName: "Types",
    },

    {
      field: "Action",
      headerName: " Action",
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
  const columnsOfNews= [
    {
    field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <Avatar src={params.formattedValue} />;
      },
      sortable: false,
      filterable: false
    },
    { field: "name", headerName: "Name", width: 100 },
    { field: "type", headerName: "Tpe", width: 100 },
    { field: "descripstion", headerName: "Descripstion", width: 150 },
    {
      field: "Action",
      headerName: " Action",
      renderCell: (params) => {
       
        return   <Button
        onClick={() => deleteNews(params.row._id)}
        color="error"
      >
        delete
      </Button>
      },
    }, 
  ]
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

            <AppDataGrid maxWidth={"100%"} maxHight='70%' studentDAta={newsData} columns={columnsOfNews} />

        
          </div>
          {open && <AddExamDate refetch={fetchNewData} handleClose={handleClose} open={open} />}
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
