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

  console.log(response.data);
}

export async function createUser(email, password) {
  //   const response = await axios.post(`${createURL}`, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true,
  //   });
  await authenticate("signUp", email, password);
}

export async function Login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
