import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL_DEV 
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
    );
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
export const deletenewsByID = async (values) => {
  try {
    return await (
      await axios.get(
        `${baseUrl}/deleteNews?id=${values}`
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const deleteAdminByID = async (values) => {
  try {
    return await (
      await axios.get(
        `${baseUrl}/deleteAdmin?id=${values}`
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const deleteStudentById = async (values) => {
  try {
    return await (
      await axios.get(
        `${baseUrl}/deleteStudent?id=${values}`
      )
    ).data;
  } catch (error) {
    return { error };
  }
};

export const getUser = async (values) => {
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
  try {
    const { data } = await axios.get(
      `${baseUrl}/admissionlist`,
      {
        headers: { Authorization: token },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};

export const getEditableData = async (token, editedParams) => {
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

  export const uploadResultOnly = async (token ,EditabledData) => {
    //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
      try {
       return await axios
          .post(
            `${baseUrl}/addResultsArray`,
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
