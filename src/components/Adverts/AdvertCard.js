import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Collapse } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/Pending";
import CarRentalIcon from "@mui/icons-material/CarRental";
import numbro from "numbro";
import AddCommentIcon from "@mui/icons-material/AddComment";
const _ = (n) => {
  return numbro(Number(n) || 0).format({ thousandSeparated: true });
};

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

  const RenderIcon = (status) => {
    if (status === "Request") {
      return (
        <>
          <PendingIcon
            sx={{ marginBottom: "0rem", marginright: "1rem" }}
          ></PendingIcon>
          <Typography gutterBottom variant="h9" component="div">
            در انتظار
          </Typography>
        </>
      );
    } else if (status === "Denied") {
      return (
        <>
          <CancelIcon
            sx={{ marginBottom: "0rem", marginright: "1rem" }}
          ></CancelIcon>
          <Typography gutterBottom variant="h9" component="div">
            پذیرفته نشد
          </Typography>
        </>
      );
    } else if (status === "In Rent") {
      return (
        <>
          <CarRentalIcon
            sx={{ marginBottom: "0rem", marginright: "1rem" }}
          ></CarRentalIcon>
          <Typography gutterBottom variant="h9" component="div">
            درحال اجاره
          </Typography>
        </>
      );
    }

    return;
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
            <Grid container marginRight={3} spacing={2}>
              <Grid item xs={10}>
                <Typography gutterBottom variant="h6" component="div">
                  {props.value.vehicleType}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                {RenderIcon(props.value.status)}
              </Grid>
            </Grid>

            <Typography
              sx={{
                marginTop: props.value.status === undefined ? "2rem" : "1rem",
                marginBottom: "0rem",
              }}
              color="text.secondary"
            >
              {`${_(props.value.rental_daily_rate)} تومان در روز`}
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
