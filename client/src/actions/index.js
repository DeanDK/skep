import axios from "axios";

export function userLogin(email = "", password = "") {
  console.log(email);
  // const request = axios
  //   .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
  //   .then(response => {
  //     if (list) {
  //       return [...list, ...response.data];
  //     } else {
  //       return response.data;
  //     }
  //   });

  return { type: "USER_LOGIN", payload: null };
}
