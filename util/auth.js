import axios from "axios";

const API_KEY = "AIzaSyCC4ZgAxbdG31_orsHc9p8kB88HnonkFSg";
// const createURL =
//   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

// const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  //   const response = await axios.post(`${createURL}`, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true,
  //   });
  return authenticate("signUp", email, password);
}

export function Login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
