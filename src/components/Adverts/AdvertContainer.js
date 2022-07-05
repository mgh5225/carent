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
import { useDispatch } from "react-redux";
import { get_my_rents_in, get_my_rents_out } from "utils/rents";

const AdvertContainerComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const [AdvertCardInfo, setAdverts] = React.useState([]);
  const [selectedAdvert, setSelectedAdvert] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [rentRequest, setRentRequest] = React.useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setAdverts(props.CardInfo);
  }, [props.CardInfo]);

  const HandlePageChange = (event, value) => {
    console.log(value);
    setPage(value);
    props.HandleChangePage(value);
  };

  const handleClickOpen = async (event, index) => {
    setSelectedAdvert(index);

    const advertID = AdvertCardInfo[index].id;

    try {
      if (props.normal === false) {
        console.log("AdvertCardInfo[index]");
        const data = await dispatch(
          get_my_rents_in({ page: page, limit: 12, advert_id: advertID })
        );
        setRentRequest(data);
      }

      // set state with the result
    } catch (e) {}

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
              normal={props.normal}
              readOnly={props.readOnly}
              open={open}
              onClose={handleClose}
              value={AdvertCardInfo[selectedAdvert]}
              rentRequest={rentRequest}
            ></AdvertCardInfoComponent>
          ) : null}
          <Grid container marginRight={3} spacing={2}>
            {AdvertCardInfo.map((info, index) => (
              <Grid marginTop={2} item xs={3} key={info.id}>
                <AdvertCardComponent
                  onClick={(event) => handleClickOpen(event, index)}
                  value={info}
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
