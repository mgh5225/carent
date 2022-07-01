import { users } from "./axios";
import { auth } from "../store";

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const { data } = await users.post("/login/", {
      username,
      password,
    });

    dispatch(auth.setAuthenticated(true));

    return data;
  };
};

export const logout = () => {
  return async (dispatch) => {
    const { data } = await users.get("/logout/");

    dispatch(auth.setMe(null));
    dispatch(auth.setAuthenticated(false));

    return data;
  };
};

export const get_me = () => {
  return async (dispatch) => {
    try {
      const { data } = await users.get("/me/");

      dispatch(auth.setMe(data.me));
      dispatch(auth.setAuthenticated(true));
    } catch (err) {
      dispatch(auth.setMe(null));
      dispatch(auth.setAuthenticated(false));

      throw err;
    }
  };
};

export const signup = ({
  first_name,
  last_name,
  username,
  email,
  password,
  password_confirm,
}) => {
  return async (dispatch) => {
    const { data } = await users.post("/signup/", {
      first_name,
      last_name,
      username,
      email,
      password1: password,
      password2: password_confirm,
    });

    dispatch(auth.setAuthenticated(true));

    return data;
  };
};
