import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { 'Accept': '*/*' }
})
const getInformation = (responseToReturn) => {
    if (responseToReturn.status === undefined) {
        responseToReturn = responseToReturn.response.data
    } else {
        responseToReturn = responseToReturn.data
    }
    return responseToReturn
}


const GetMyStudents = async (idTeacher) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`api/v1/attendence/get-mystudents/${idTeacher}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

export { GetMyStudents }