import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_server,
  headers: { authorization: localStorage.getItem("token") },
});
