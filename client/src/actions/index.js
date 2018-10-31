import axios from "axios";

export function userLogin({ email, password }) {
  const request = axios
    .post("/api/login", { email, password })
    .then(response => response.data);
  return { type: "USER_LOGIN", payload: request };
}

export function auth() {
  const request = axios.get("/api/auth").then(response => response.data);
  return { type: "USER_AUTH", payload: request };
}

export function getAllFiles(start = 0, limit = 3, order = "asc", list = "") {
  const request = axios
    .get(`/api/allFiles?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return { type: "GET_FILES", payload: request };
}

export function addAdmin(email = "") {
  const request = axios
    .patch(`/api/addAdmin`, { email })
    .then(response => response.data);

  return { type: "ADD_ADMIN", payload: request };
}

export function getUserFiles(id = "") {
  const request = axios
    .get(`/api/getUserFiles?id=${id}`)
    .then(response => response.data);

  return { type: "GET_USER_FILES", payload: request };
}

export function approved(id = "", fileId = "", shouldApprove = "") {
  axios
    .patch(`/api/approved`, { id, fileId, shouldApprove })
    .then(response => response.data);
}

export function addFile(name, subject, grade, study, auth) {
  const headers = {
    "Content-Type": "application/json",
    auth: auth
  };
  const files = [{ name, subject, grade, study }];
  const request = axios
    .post(`/api/addFile`, { files }, { headers })
    .then(response => response.data);

  return { type: "ADD_FILES", payload: request };
}
