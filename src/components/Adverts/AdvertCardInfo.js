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
import PendingIcon from "@mui/icons-material/Pending";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import numbro from "numbro";
import { DataUsage } from "@mui/icons-material";

import { rent } from "utils/rents";

const _ = (n) => {
  return numbro(Number(n) || 0).format({ thousandSeparated: true });
};
const AdvertCardInfoComponent = (props) => {
  const dispatch = useDispatch();
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
    } catch (err) {
      const message = err.response
        ? err.response.data?.message
        : "Something went wrong! Please try again later";
      toast.error(message);
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
                    <Grid container marginRight={3} spacing={14}>
                      <Grid marginTop={2} item xs={6}>
                        <TextField
                          disabled={props.value.readOnly}
                          name="StartDate"
                          label="تاریخ شروع اجاره"
                          InputLabelProps={{ shrink: true, required: true }}
                          type="date"
                        />
                      </Grid>
                      <Grid marginRight={2} marginTop={2} item xs={5}>
                        <TextField
                          disabled={props.value.readOnly}
                          name="EndDate"
                          label="تاریخ پایان اجاره"
                          InputLabelProps={{ shrink: true, required: true }}
                          type="date"
                        />
                      </Grid>
                    </Grid>
                    <Grid container marginRight={3}>
                      <Grid
                        marginRight={2}
                        width="90%"
                        marginTop={2}
                        item
                        xs={12}
                      >
                        <TextField
                          disabled={props.value.readOnly}
                          fullWidth
                          multiline
                          name="Description"
                          label="توضیحات"
                          width="90%"
                          type="text"
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
                        {!props.value.readOnly && (
                          <Button
                            variant="contained"
                            fullWidth
                            name="Rent"
                            type="submit"
                          >
                            درخواست اجاره ماشین
                          </Button>
                        )}
                      </Grid>
                    </Grid>
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
