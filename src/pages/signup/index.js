import React from "react";

import SignupComponent from "../../components/Signup/Signup";
import Container from "@mui/material/Container";

class SignupPage extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignupComponent onLoginSubmit={this.onFormSubmitted}></SignupComponent>
      </Container>
    );
  }
}

export default SignupPage;
