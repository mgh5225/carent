import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AdvertCardComponent from "../Adverts/AdvertCard";
import Grid from "@mui/material/Grid";

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
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {AdvertCardInfo.map((info, index) => (
          <Grid item xs={5} sm={4} md={4} key={index}>
            <AdvertCardComponent value={info} key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AdvertContainerComponent;
