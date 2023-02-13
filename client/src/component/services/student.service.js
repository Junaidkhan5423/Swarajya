import axios from 'axios';


export const postStudentData = async(values)=>{
    try {
        return await axios.post("http://localhost:9002/admission",values)
    } catch (error) {
        return {error}
    }
}

export const getUser = async(values)=>{
    console.log(values);
    try {
        return await axios.post("http://localhost:9002/student",values)
    } catch (error) {
        return {error}
    }
}