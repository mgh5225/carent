import axios from "axios";
export const url = "http://api.carent.com:9000";
const api_url = "/api/v1";
const withCredentials = true;

export const full_url = `${url}${api_url}`;

export const api = axios.create({
  baseURL: url,
  withCredentials,
});

export const users = axios.create({
  baseURL: `${url}${api_url}/users`,
  withCredentials,
});
