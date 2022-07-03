import React from "react";

import { withoutAuth } from "components/Auth";

import LoginComponent from "../../components/Login/Login";
import Container from "@mui/material/Container";

class LoginPage extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <LoginComponent onLoginSubmit={this.onFormSubmitted}></LoginComponent>
      </Container>
    );
  }
}

export default withoutAuth(LoginPage, "/dashboard");
