import React, { useEffect } from "react";

import NewAdvertComponent from "../../components/Adverts/NewAdvert";
import AdvertContainer from "../../components/Adverts/AdvertContainer";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { get_adverts } from "utils/adverts";

const AdvertPage = () => {
  const [AdvertCardInfo, setAdverts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  // TODO get the adverts from back using the current page
  useEffect(() => {
    // declare the async data fetching function
    const fetchAdvertsData = async () => {
      //// get the data from the api
      const data = await dispatch(get_adverts({ page: page, limit: 12 }));
      // set state with the result
      setAdverts(data);
    };

    fetchAdvertsData().catch(console.error);
  }, [page, dispatch]);

  const HandleChangePage = (page) => {
    setPage(page);
  };

  return (
    <Container
      component="main"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <AdvertContainer
        HandleChangePage={HandleChangePage}
        CardInfo={AdvertCardInfo}
      ></AdvertContainer>
    </Container>
  );
};

class MyAdvertPage extends React.Component {
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
