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

const AdvertRentRequestComponent = (props) => {
  return (
    <Paper
      sx={{
        marginTop: "2rem",
        width: "90%",
      }}
      variant="outlined"
    >
      <Box marginLeft={2}>
        <Grid container marginRight={3} spacing={30}>
          <Grid marginTop={2} item xs={6}>
            <TextField
              disabled={true}
              name="StartDate"
              label="تاریخ شروع اجاره"
              value={props.value.start_date}
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
            />
          </Grid>
          <Grid marginRight={2} marginTop={2} item xs={5}>
            <TextField
              disabled={true}
              name="EndDate"
              label="تاریخ پایان اجاره"
              value={props.value.end_date}
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
            />
          </Grid>
        </Grid>
        <Grid container marginRight={3}>
          <Grid width="90%" marginTop={2} marginRight={2} item xs={12}>
            <TextField
              value={props.value.desc}
              disabled={true}
              fullWidth
              multiline
              name="Description"
              label="توضیحات"
              width="90%"
              type="text"
            />
          </Grid>
          <Grid container spacing={2} marginRight={2}>
            <Grid
              justifyContent="center"
              width="100%"
              alignItems="center"
              marginTop={2}
              item
              marginBottom={2}
              xs={6}
            >
              <Button variant="contained" fullWidth name="Rent" type="submit">
                تایید
              </Button>
            </Grid>
            <Grid
              justifyContent="center"
              width="100%"
              alignItems="center"
              marginTop={2}
              item
              marginBottom={2}
              xs={6}
            >
              <Button variant="contained" fullWidth name="Rent" type="submit">
                رد
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default AdvertRentRequestComponent;
