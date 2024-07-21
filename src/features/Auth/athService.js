import axios from "axios";

const API_URL = '/api/user/'

const  register = async (formData) => {
    const response =  await axios.post(API_URL + 'register', formData)
    localStorage.setItem('user', JSON.stringify(response.data))
   return response.data;
}

const login = async(formDatalogin) => {
    const response = await axios.post(API_URL + 'login', formDatalogin)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data;

}
const authService = {
    register,
    login,

}

export default authService