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
