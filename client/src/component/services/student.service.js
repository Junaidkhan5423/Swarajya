import axios from "axios";
import { parse, stringify } from "flatted";
const baseUrl = process.env.REACT_APP_API_URL_LOCAL
console.log(`${baseUrl}`,'baseUrl');
export const postStudentData = async (values) => {
  try {
    return await axios.post(
      `${baseUrl}/admission`,
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
        `${baseUrl}/adminlogin`,
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
        `${baseUrl}/adminsignup`,
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
        `${baseUrl}/deleteCourse?id=${values}`
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
      `${baseUrl}/student`,
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
      `${baseUrl}/admissionlist`,
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
        `${baseUrl}/updateFeesStatus`,
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
export const uploadResultId = async (token ,EditabledData) => {
  console.log(EditabledData ,'EditabledData');
  //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
    try {
     return await axios
        .post(
          `${baseUrl}/addResult`,
          EditabledData,
  
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

// axios.post(`${process.env.REACT_APP_API_URL_LOCAL}/addResult`, EditabledData, {
//   headers: { Authorization: token },
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
