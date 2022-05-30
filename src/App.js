import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MainRouter } from "./routes";
import { mainTheme } from "components/themes";

import Header from "components/header";

import "react-toastify/dist/ReactToastify.css";

import { get_me } from "utils/users";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    (async () => {
      try {
        await dispatch(get_me());
      } catch (e) {
        console.log("App:useEffect");
      }
    })();
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <Header />
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default mainTheme(App);
