import { Button, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getEditableData, uploadResultId } from "../services/student.service.js";
import { useAuthentication } from "../../store/store.js";
import axios from "axios";
const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const Form = (props :any) => {
  const previousData = props.previousData;
  const token = useAuthentication((state) => state.auth.token);
  const [firstName, setfirstName] = useState(previousData.firstName);
  const [identyCard, setIdentyCard] = useState(previousData.identyCard &&'IdentyCard Available');
  const [phoneNo, setphoneNo] = useState(previousData.phoneNo);
  const [userName, setUserName] = useState(previousData.userName);
  const [city, setCity] = useState(previousData.city);
  const [result, setResult] = useState(previousData.result && "Result Available");
  const [nationality, setNationality] = useState(previousData.nationality);
  const [totalFees, setTotalFees] = useState(previousData.totalFees);
  const [totalPaid, setTotalPaid] = useState(parseInt(previousData.totalPaid));
  const [addFessPaid, setAddFessPaid] = useState(0);
  const [rollNo, setRollNo] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [isFeesAdd, setIsFeesAdd] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(
      firstName,
      phoneNo,
      identyCard,
      userName,
      city,
      result,
      nationality,
      totalFees,
      totalPaid,
      rollNo,
      enrollmentNo
    );
    let EditabledData = {
      id:props.params.row._id,
      rollNo: rollNo,
      enrollmentNo: enrollmentNo,
      identyCard:identyCard,
      result:result
    };
 
 const resultData = await uploadResultId(token,EditabledData)

 props.refetch() 
 
  
  };
  const AddFessService = async()=>{
    const body ={
      fees:addFessPaid,
      id:props.params.row._id
    }

  const responseData :any= await  getEditableData(token, body);
  console.log(responseData.status);
  if(responseData.status  === 200) {
    console.log(responseData,'responseData');
    
  props.refetch()
    setTotalPaid((prev:number)=> {
      const total  = Number(prev)
      const prevaddFessPaid = Number(addFessPaid)
      const result = total + prevaddFessPaid;
      
     return result
    
    })
  }
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
      <Button onClick={()=> setIsFeesAdd(!isFeesAdd)}>Add {!isFeesAdd ? "Fees" : 'Result'}</Button>
      <div style={{ display: "flex" }}>
        {isFeesAdd ?(
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
        ) :(  <>
        
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
            disabled={previousData.identyCard ? true : false}
            label="Identy Card"
            type="identyCard"
            variant="filled"
            value={identyCard}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIdentyCard(e.target.value)
            }
          />  
   <StyledTextField
            disabled={previousData.result ?true :false}
            label="Result"
            variant="filled"
            value={result}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setResult(e.target.value)
            }
          />
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
       
      </div>
      {!isFeesAdd ?  (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Update
        </Button>): 'Fess'}
    
    </form>
  );
};

export default Form;
