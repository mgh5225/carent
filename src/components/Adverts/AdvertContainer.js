import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AdvertCardComponent from "../Adverts/AdvertCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AdvertCardInfoComponent from "../Adverts/AdvertCardInfo";
import Pagination from "@mui/material/Pagination";
const AdvertCardInfo = [
  {
    vehicleType: "بایک سابرینا هاچ بک",
    rental_daily_rate: "10000",
    image: "https://source.unsplash.com/400x300/?car",
    city: "تهران",
  },
  {
    vehicleType: "بایک X25",
    rental_daily_rate: "400000",
    image: "https://source.unsplash.com/400x301/?car",
    city: "اصفهان",
  },
  {
    vehicleType: " ب ام و 120i کروک",
    rental_daily_rate: "200000",
    image: "https://source.unsplash.com/400x302/?car",
    city: "گرگان",
  },
  {
    vehicleType: "ب ام و 530i",
    rental_daily_rate: "1000000",
    image: "https://source.unsplash.com/400x303/?car",
    city: "مشهد",
  },
  {
    vehicleType: "فولکس واگن پاسات",
    rental_daily_rate: "5000000",
    image: "https://source.unsplash.com/400x304/?car",
    city: "تبریز",
  },
];

const AdvertContainerComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const [Adverts, setAdverts] = React.useState({
    id: 0,
    vehicleType: "",
    rental_daily_rate: "",
    image: "https://source.unsplash.com/400x304/?car",
    city: "",
  });
  const [selectedAdvert, setSelectedAdvert] = React.useState(0);

  const [page, setPage] = React.useState(1);

  // TODO get the adverts from back using the current page
  useEffect(() => {
    // declare the async data fetching function
    const fetchAdvertsData = async () => {
      //// get the data from the api
      //const data = await fetch('https://yourapi.com');
      //// convert the data to json
      //const json = await response.json();
      // set state with the result
      ////setAdverts(json);
    };

    fetchAdvertsData().catch(console.error);
  }, [page]);

  const HandlePageChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  const handleClickOpen = (event, index) => {
    console.log(index);
    setSelectedAdvert(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        sx={{
          marginTop: "2rem",
          width: "90%",
        }}
        variant="outlined"
      >
        <Box marginLeft={2}>
          <AdvertCardInfoComponent
            open={open}
            onClose={handleClose}
            value={AdvertCardInfo[selectedAdvert]}
          ></AdvertCardInfoComponent>
          <Grid container marginRight={3} spacing={2}>
            {AdvertCardInfo.map((info, index) => (
              <Grid marginTop={2} item xs={3} key={index}>
                <AdvertCardComponent
                  onClick={(event) => handleClickOpen(event, index)}
                  value={info}
                  key={index}
                />
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Pagination
              sx={{ marginTop: 4, marginBottom: 4, justifyContent: "center" }}
              count={10}
              page={page}
              onChange={HandlePageChange}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdvertContainerComponent;
