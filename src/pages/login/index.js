import React from "react";

import LoginComponent  from "../../components/Login/Login";
import Container from '@mui/material/Container';

class LoginPage extends React.Component {



  render() {
    const { isAuth } = this.props;

    return(

      <Container component="main" maxWidth="xs">
        
        <LoginComponent onLoginSubmit={this.onFormSubmitted}></LoginComponent>
      </Container>
      
    )
  }
}


export default LoginPage;