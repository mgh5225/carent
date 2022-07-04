import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AdvertCardComponent from "../Adverts/AdvertCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AdvertCardInfoComponent from "../Adverts/AdvertCardInfo";
import Pagination from "@mui/material/Pagination";

const AdvertContainerComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const [AdvertCardInfo, setAdverts] = React.useState([]);
  const [selectedAdvert, setSelectedAdvert] = React.useState(0);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    setAdverts(props.CardInfo);
  }, [props.CardInfo]);

  const HandlePageChange = (event, value) => {
    console.log(value);
    setPage(value);
    props.HandleChangePage(value);
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
          {AdvertCardInfo.length > 0 ? (
            <AdvertCardInfoComponent
              open={open}
              onClose={handleClose}
              value={AdvertCardInfo[selectedAdvert]}
            ></AdvertCardInfoComponent>
          ) : null}
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
