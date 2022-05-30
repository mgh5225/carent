import { users } from "./axios";
import { auth } from "../store";

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const { data } = await users.post("/login", {
      username,
      password,
    });

    dispatch(auth.setAuthenticated(true));

    return data;
  };
};

export const logout = () => {
  return async (dispatch) => {
    const { data } = await users.get("/logout");

    dispatch(auth.setMe(null));
    dispatch(auth.setAuthenticated(false));

    return data;
  };
};

export const get_me = () => {
  return async (dispatch) => {
    const { data } = await users.get("me");

    dispatch(auth.setMe(data.me));
  };
};
