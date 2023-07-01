import { Button, styled, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import { getEditableData, uploadResultId, uploadResultOnly } from "../services/student.service.js";
import { useAuthentication } from "../../store/store.js";
import { toast, ToastContainer } from "react-toastify";
const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const Form = (props :any) => {
  const previousData = props.previousData;
  const token = useAuthentication((state) => state.auth.token);
  const [firstName, setfirstName] = useState(previousData.firstName);
  const [identyCard, setIdentyCard] = useState(previousData.identyCard );
  const [userName, setUserName] = useState(previousData.userName);
  const [city, setCity] = useState(previousData.city);
  const [result, setResult] = useState("");
  // const [newResult, setNewResult] = useState(previousData.results);
  const [totalFees, setTotalFees] = useState(previousData.totalFees);
  const [totalPaid, setTotalPaid] = useState <any>(parseInt(previousData.totalPaid));
  const [addFessPaid, setAddFessPaid] = useState(0);
  const [rollNo, setRollNo] = useState(previousData.rollNo);
  const [enrollmentNo, setEnrollmentNo] = useState(previousData.enrollmentNo);
  const [resultName, SetResultName] = useState("");
  const [activeTab, setActiveTab] = useState(0);


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let EditabledData = {
      id:props.params.row._id,
      rollNo: rollNo,
      enrollmentNo: enrollmentNo,
      identyCard:identyCard,
    };
 const resultData = await uploadResultId(token,EditabledData)
 
 toast.success("Student Data Successfully Updated")
 props.refetch() 
  };
  const AddFessService = async()=>{
    const body ={
      fees:addFessPaid,
      id:props.params.row._id
    }

  const responseData :any= await  getEditableData(token, body);
  if(responseData.status  === 200) {
    toast.success("Student Fess Successfully Updated")
    // navigate("/payment")    
  props.refetch()
    setTotalPaid((prev:number)=> {
      const total  = Number(prev)
      const prevaddFessPaid = Number(addFessPaid)
      const result = total + prevaddFessPaid;
      
     return result
    
    })
  }else{
    toast.error("error")
  }
  }
  const handleClickResultAdd = async() => {
    const body ={
      id:props.params.row._id,
      name: resultName,
      link:result
    }
  await uploadResultOnly(token,body)   
  }

  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <ToastContainer />
          <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Fees" />
        <Tab label="Identity" />
        <Tab label="Result" />
      </Tabs>
      <div style={{ display: "flex" }} className="tabstrip row ">
        {activeTab === 0 && (
          <div>
                     <StyledTextField
            label="Total Fees"
            variant="filled"
            type="number"
            value={totalFees}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTotalFees(e.target.value)
            }
          />
          <StyledTextField
            label="Total Paid"
            type="number"
            variant="filled"
            value={totalPaid}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTotalPaid(e.target.value)
            }
          />
          <StyledTextField
            label="Add Fees Paid"
            type="number"
            variant="filled"
            value={addFessPaid}
            onChange={(e: any) =>
              setAddFessPaid(e.target.value)
            }
          />
          
        <Button
          variant="contained"
          color="primary"
          onClick={AddFessService}
          sx={{ margin: "2rem" }}
        >
          Update
        </Button>
          </div>
        ) 
          }
          { activeTab === 1 && 
        (  <>
        
        <div>
          <StyledTextField
            disabled={true}
            label="First Name"
            variant="filled"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setfirstName(e.target.value)
            }
          />
          
          {/* <StyledTextField
            disabled={true}
            label="Phone No"
            type="number"
            variant="filled"
            value={phoneNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setphoneNo(e.target.value)
            }
          /> */}

          <StyledTextField
            disabled={true}
            label="User Name"
            variant="filled"
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
          <StyledTextField
            disabled={true}
            label="City"
            variant="filled"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
        
        </div>
        <div>
          {/* <StyledTextField
            disabled={true}
            label="Nationality"
            variant="filled"
            value={nationality}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNationality(e.target.value)
            }
          /> */}
          <StyledTextField
            // disabled={previousData.identyCard ? true : false}
            label="Identy Card"
            type="identyCard"
            variant="filled"
            value={identyCard}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIdentyCard(e.target.value)
            }
          />  
   {/* <StyledTextField
            // disabled={previousData.result ?true :false}
            label="Result"
            variant="filled"
            value={result}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setResult(e.target.value)
            }
          /> */}
          <StyledTextField
            label="Roll No"
            variant="filled"
            type="number"
            value={rollNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRollNo(e.target.value)
            }
          />
          <StyledTextField
            label="Enrollment No"
            variant="filled"
            value={enrollmentNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEnrollmentNo(e.target.value)
            }
          />
           {/* <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Update
        </Button> */}
        </div>

 
    
        </>
        )

        }

           {activeTab === 2 && (
          <div>
           <h6 className="text-center">Added Result till now</h6>
            <ul className="list-group">
      {previousData?.results?.map((item, index) => (
        <li className="list-group-item" key={index}>
          <span className="text-primary font-weight-bold">{item.name}</span>
        </li>
      ))}
    </ul>
            {/* Add your content related to result here */}
            <div>
            <StyledTextField
            // disabled={previousData.identyCard ? true : false}
            label="Result Name"
            type="identyCard"
            variant="filled"
            value={resultName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              SetResultName(e.target.value)
            }
          />   <StyledTextField
          // disabled={previousData.identyCard ? true : false}
          label="Result Link"
          type="text"
          variant="filled"
          value={result}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setResult(e.target.value)
          }
          helperText="Add Drive link here"
        />  
            </div>
            <Button
          variant="contained"
          color="primary"
          sx={{ margin: "2rem" }}
          onClick={handleClickResultAdd}
        >
          Update
        </Button>
          </div>

        )}
       
      </div>
      {activeTab === 1 && (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Update
        </Button>)}
    
    </form>
  );
};

export default Form;
