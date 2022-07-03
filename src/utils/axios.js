import axios from "axios";
import Cookies from "js-cookie";

export const url = "http://localhost:8000";
const api_url = "/api/v1";
const withCredentials = true;

export const full_url = `${url}${api_url}`;

const create_child = (base_url) => {
  const obj = axios.create({
    baseURL: base_url,
    withCredentials,
  });

  obj.interceptors.request.use(
    function (config) {
      const csrf = Cookies.get("csrftoken");
      if (csrf) {
        config.headers.common["x-csrftoken"] = csrf;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return obj;
};

export const api = create_child(url);

export const users = create_child(`${url}${api_url}/users`);

export const adverts = create_child(`${url}${api_url}/rentalcars`);

export const rents = create_child(`${url}${api_url}/rents`);
