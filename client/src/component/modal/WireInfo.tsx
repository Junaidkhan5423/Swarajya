import { Button, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getEditableData } from "../services/student.service.js";
import { useAuthentication } from "../../store/store.js";
const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const Form = (props) => {
  const previousData = props.previousData;
  const token = useAuthentication((state) => state.auth.token);
  const [firstName, setfirstName] = useState(previousData.firstName);
  const [email, setEmail] = useState(previousData.email);
  const [phoneNo, setphoneNo] = useState(previousData.phoneNo);
  const [userName, setUserName] = useState(previousData.userName);
  const [city, setCity] = useState(previousData.city);
  const [state, setState] = useState(previousData.state);
  const [nationality, setNationality] = useState(previousData.nationality);
  const [totalFees, setTotalFees] = useState(previousData.totalFees);
  const [totalPaid, setTotalPaid] = useState(previousData.totalPaid);
  const [rollNo, setRollNo] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(
      firstName,
      phoneNo,
      email,
      userName,
      city,
      state,
      nationality,
      totalFees,
      totalPaid,
      rollNo,
      enrollmentNo
    );
    let EditabledData = {
      totalFees: totalFees,
      totalPaid: totalPaid,
      rollNo: rollNo,
      enrollmentNo: enrollmentNo,
    };
    let updatedData = {};
    await Object.entries(EditabledData).forEach(([key, value]) => {
      console.log("key", key);
      console.log("value", value);
      if (value !== previousData.key || value !== "") {
        updatedData[key] = value;
      }
    });

    console.log("This is updated data", updatedData);

    getEditableData(token, props.params.row._id, updatedData);
  };

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
      <div style={{ display: "flex" }}>
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
          <StyledTextField
            disabled={true}
            label="Email"
            type="email"
            variant="filled"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <StyledTextField
            disabled={true}
            label="Phone No"
            type="number"
            variant="filled"
            value={phoneNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setphoneNo(e.target.value)
            }
          />

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
          <StyledTextField
            disabled={true}
            label="State"
            variant="filled"
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState(e.target.value)
            }
          />
        </div>
        <div>
          <StyledTextField
            disabled={true}
            label="Nationality"
            variant="filled"
            value={nationality}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNationality(e.target.value)
            }
          />
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
            label="Roll No"
            variant="filled"
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
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default Form;
