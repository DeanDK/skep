import axios from "axios";

export function userLogin({ email, password }) {
  console.log(email);
  const request = axios
    .post("/api/login", { email, password })
    .then(response => response.data);
  return { type: "USER_LOGIN", payload: request };
}
