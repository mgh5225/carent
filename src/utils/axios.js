import axios from "axios";
export const url = "http://localhost:9000";
const api_url = "/api/v1";
const withCredentials = true;

export const full_url = `${url}${api_url}`;

export const api = axios.create({
  baseURL: url,
  withCredentials,
});
