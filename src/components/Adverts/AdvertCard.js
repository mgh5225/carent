import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";
import Grow from "@mui/material/Grow";
import { Collapse } from "@mui/material";

const AdvertCardComponent = (props) => {
  //
  const [CardShadow, setCardShadow] = React.useState(1);
  const [Transform, setTransform] = React.useState("scale(1,1)");

  const onMouseOver = () => {
    setCardShadow(25);
    setTransform("scale(1.1,1.1)");
  };

  const onMouseOut = () => {
    setCardShadow(1);
    setTransform("scale(1,1)");
  };

  const onClickCard = () => {
    props.onClick();
  };

  return (
    <>
      <Card
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        sx={{
          width: 220,
          height: 300,
          color: "text.secondary",
          boxShadow: CardShadow,
          transition: "0.3s",
          transform: Transform,
        }}
      >
        <CardActionArea
          onClick={onClickCard}
          sx={{
            width: 220,
            height: 300,
            transition: "0.3s",
            transform: Transform,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={props.value.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.value.vehicleType}
            </Typography>
            <Typography
              sx={{ marginTop: "2rem", marginBottom: "0rem" }}
              color="text.secondary"
            >
              {props.value.rental_daily_rate}
            </Typography>
            <Typography
              sx={{ mb: 1.5, marginTop: "0rem", marginBottom: "0rem" }}
              color="text.secondary"
            >
              {props.value.city}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AdvertCardComponent;
