import React from "react";

import NewAdvertComponent from "../../components/Adverts/NewAdvert";
import Container from "@mui/material/Container";

class NewAdvertPage extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="md">
        <NewAdvertComponent></NewAdvertComponent>
      </Container>
    );
  }
}

export default NewAdvertPage;
