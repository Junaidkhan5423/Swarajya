import axios from "axios";
import { parse, stringify } from "flatted";
export const postStudentData = async (values) => {
  try {
    return await axios.post(
      "https://swarajyabackend.onrender.com/admission",
      values
    );
  } catch (error) {
    return { error };
  }
};
export const AdminLoginService = async (values) => {
  try {
    return await (
      await axios.post(
        "https://swarajyabackend.onrender.com/adminlogin",
        values
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const AdminSingService = async (values) => {
  try {
    return await (
      await axios.post(
        "https://swarajyabackend.onrender.com/adminsignup",
        values
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const deleteCourseByID = async (values) => {
  try {
    return await (
      await axios.get(
        `https://swarajyabackend.onrender.com/deleteCourse?id=${values}`
      )
    ).data;
  } catch (error) {
    return { error };
  }
};

export const getUser = async (values) => {
  console.log(values);
  try {
    return await axios.post(
      "https://swarajyabackend.onrender.com/student",
      values
    );
  } catch (error) {
    return { error };
  }
};

export const getUserAll = async (token) => {
  // console.log(values);
  try {
    const { data } = await axios.get(
      "https://swarajyabackend.onrender.com/admissionlist",
      {
        headers: { Authorization: token },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return { error };
  }
};

export const getEditableData = async (token, editedParams) => {
// console.log(editedParams);
//  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
  try {
   return await axios
      .put(
        `https://swarajyabackend.onrender.com/updateFeesStatus`,
        editedParams,

        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
       return response
      });
  } catch (error) {
    return error;
  }
};
