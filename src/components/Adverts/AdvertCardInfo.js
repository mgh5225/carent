import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import PendingIcon from "@mui/icons-material/Pending";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import numbro from "numbro";
import { DataUsage } from "@mui/icons-material";

import { rent } from "utils/rents";
import AdvertRentRequestComponent from "./AdvertRentRequest";

const _ = (n) => {
  return numbro(Number(n) || 0).format({ thousandSeparated: true });
};
const AdvertCardInfoComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open } = props;
  const HandleClose = () => {
    props.onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const { message } = await dispatch(
        rent({
          advert_id: props.value?.id,
          start_date: data.get("StartDate"),
          end_date: data.get("EndDate"),
          description: data.get("Description"),
        })
      );
      toast.success("شما با موفقیت درخواست خود را ثبت کردید");
      navigate("/myRentRequestPage");
    } catch (err) {
      const message = err.response
        ? err.response.data?.message
        : "Something went wrong! Please try again later";
      toast.error(message);
    }
  };

  const RenderDetails = () => {
    if (props.normal === false) {
      if (props.rentRequest.length > 0) {
        return props.rentRequest.map((rent, index) => (
          <AdvertRentRequestComponent
            readOnly={true}
            value={rent}
            key={index}
          />
        ));
      }
    } else {
      return (
        <Box>
          <Grid container marginRight={3} spacing={14}>
            <Grid marginTop={2} item xs={6}>
              <TextField
                disabled={props.readOnly}
                name="StartDate"
                label="تاریخ شروع اجاره"
                InputLabelProps={{ shrink: true, required: true }}
                defaultValue={
                  props.readOnly
                    ? props.value?.start_date?.substring(0, 10)
                    : ""
                }
                type="date"
              />
            </Grid>
            <Grid marginRight={2} marginTop={2} item xs={5}>
              <TextField
                disabled={props.readOnly}
                name="EndDate"
                label="تاریخ پایان اجاره"
                InputLabelProps={{ shrink: true, required: true }}
                defaultValue={
                  props.readOnly ? props.value?.end_date?.substring(0, 10) : ""
                }
                type="date"
              />
            </Grid>
          </Grid>
          <Grid container marginRight={3}>
            <Grid marginRight={2} width="90%" marginTop={2} item xs={12}>
              <TextField
                disabled={props.readOnly}
                fullWidth
                multiline
                name="Description"
                label="توضیحات"
                width="90%"
                type="text"
                defaultValue={props.readOnly ? props.value?.desc : ""}
              />
            </Grid>

            <Grid
              justifyContent="center"
              width="100%"
              alignItems="center"
              marginTop={2}
              item
              marginRight={2}
              marginBottom={2}
              xs={12}
            >
              {!props.readOnly && (
                <Button
                  variant="contained"
                  fullWidth
                  name="Rent"
                  type="submit"
                  key={99}
                >
                  درخواست اجاره ماشین
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      );
    }
  };

  return (
    <Dialog onClose={HandleClose} open={open}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              color: "text.secondary",
              transition: "0.3s",
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image={props.value.image}
              alt="green iguana"
            />
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Paper
                  sx={{
                    width: "98%",
                  }}
                  variant="outlined"
                >
                  <Box marginLeft={2}>
                    <Grid container marginRight={3} spacing={1}>
                      <Grid marginTop={2} item xs={5}>
                        <Typography gutterBottom variant="h5" component="div">
                          {props.value.vehicleType}
                        </Typography>
                      </Grid>
                      <Grid marginTop={2} marginRight="2rem" item xs={4}>
                        <Typography
                          sx={{ margiBottom: "2rem", marginTop: "0rem" }}
                          color="text.secondary"
                        >
                          {`${_(props.value.rental_daily_rate)} تومان روزانه`}
                        </Typography>
                      </Grid>
                      <Grid marginTop={2} item xs={2}>
                        <Typography
                          sx={{
                            mb: 1.5,
                            margiBottom: "0rem",
                            marginBottom: "0rem",
                          }}
                          color="text.secondary"
                        >
                          {props.value.city}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Stack>{RenderDetails()}</Stack>
                  </Box>
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </form>
      </Box>
    </Dialog>
  );
};

export default AdvertCardInfoComponent;
