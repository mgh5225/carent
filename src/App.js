import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";

import { MainRouter } from "./routes";
import { mainTheme } from "components/themes";

import Header from "components/header";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default mainTheme(App);
