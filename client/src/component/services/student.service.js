import axios from 'axios';


export const postStudentData = async (values) => {
    try {
        return await axios.post("https://swarajyabackend.onrender.com/admission", values)
    } catch (error) {
        return { error }
    }
}
export const AdminLoginService = async (values) => {
    try {
        return await (await axios.post("https://swarajyabackend.onrender.com/adminlogin", values)).data
    } catch (error) {
        return { error }
    }
}
export const AdminSingService = async (values) => {
    try {
        return await (await axios.post("https://swarajyabackend.onrender.com/adminsignup", values)).data
    } catch (error) {
        return { error }
    }
}

export const getUser = async (values) => {
    console.log(values);
    try {
        return await axios.post("https://swarajyabackend.onrender.com/student", values)
    } catch (error) {
        return { error }
    }
}
export const getUserAll = async (token) => {
    // console.log(values);
    try {
        const {data} = await axios.get("https://swarajyabackend.onrender.com/admissionlist", { headers: { Authorization: token } })
        console.log(data);
        return data
    } catch (error) {
        return { error }
    }
}