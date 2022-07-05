import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { change_status } from "utils/rents";
import numbro from "numbro";
import { DataUsage } from "@mui/icons-material";

import { rent } from "utils/rents";

const AdvertRentRequestComponent = (props) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("R");
  useEffect(() => {
    setStatus(props.value.status);
  }, [props.value.status]);
  console.log(props.value);

  const HandleApprove = async () => {
    try {
      console.log("AdvertCardInfo[index]");
      const data = await dispatch(
        change_status({ rent_id: props.value.id, status: "I" })
      );
      setStatus("I");
    } catch (e) {}
  };

  const HandleDenied = async () => {
    try {
      console.log("AdvertCardInfo[index]");
      const data = await dispatch(
        change_status({ rent_id: props.value.id, status: "D" })
      );
      setStatus("D");
    } catch (e) {}
  };

  return (
    <Paper
      sx={{
        marginTop: "2rem",
        marginLeft: "1rem",
        width: "90%",
      }}
      variant="outlined"
    >
      <Box marginLeft={2}>
        <Grid container marginRight={7} spacing={8}>
          <Grid marginTop={2} item xs={6}>
            <TextField
              disabled={true}
              name="StartDate"
              label="تاریخ شروع اجاره"
              defaultValue={
                props.readOnly ? props.value?.start_date?.substring(0, 10) : ""
              }
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
            />
          </Grid>
          <Grid marginRight={2} marginTop={2} item xs={5}>
            <TextField
              disabled={true}
              name="EndDate"
              label="تاریخ پایان اجاره"
              defaultValue={
                props.readOnly ? props.value?.end_date?.substring(0, 10) : ""
              }
              InputLabelProps={{ shrink: true, required: true }}
              type="date"
            />
          </Grid>
        </Grid>
        <Grid container marginRight={3}>
          <Grid width="90%" marginTop={2} marginRight={2} item xs={12}>
            <TextField
              defaultValue={props.readOnly ? props.value?.desc : ""}
              disabled={true}
              fullWidth
              multiline
              name="Description"
              label="توضیحات"
              width="90%"
              type="text"
            />
          </Grid>
          {status == "R" ? (
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
                <Button
                  onClick={HandleApprove}
                  variant="contained"
                  fullWidth
                  name="Rent"
                  type="submit"
                >
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
                <Button
                  onClick={HandleDenied}
                  variant="contained"
                  fullWidth
                  name="Rent"
                  type="submit"
                >
                  رد
                </Button>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </Paper>
  );
};
export default AdvertRentRequestComponent;
