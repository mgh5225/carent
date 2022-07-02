import React from "react";

import NewAdvertComponent from "../../components/Adverts/NewAdvert";
import AdvertContainer from "../../components/Adverts/AdvertContainer";
import Container from "@mui/material/Container";

class AdvertPage extends React.Component {
  render() {
    return (
      <Container
        component="main"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <AdvertContainer></AdvertContainer>
      </Container>
    );
  }
}

class NewAdvertPage extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="md">
        <NewAdvertComponent></NewAdvertComponent>
      </Container>
    );
  }
}

export { AdvertPage, NewAdvertPage };
