import axios from "axios";

const API_KEY = "AIzaSyCC4ZgAxbdG31_orsHc9p8kB88HnonkFSg";
const baseURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;

export async function createUser(email, password) {
  const response = await axios.post(`${baseURL}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
