import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { connect } from "react-redux";
import { signup } from "utils/users";
import { toast } from "react-toastify";
import { margin } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import cities from "utils/cities.json";
import { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import Plate from "components/Plate";
import AdvertContainerComponent from "../Adverts/AdvertContainer";

import { create_advert } from "utils/adverts";
const steps = ["ماشین خود را انتخاب کنید", "اجاره "];

const NewAdvertComponent = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [Advert, setAdvert] = React.useState({
    type: "",
    creation_date: "",
    mileage_rate: "",
    value: "",
    plate_1: "",
    plate_2: "",
    plate_3: "",
    plate_4: "",
    color: "",
    rental_time: "",
    rental_daily_rate: "",
    deposit_amount: "",
    city: "",
    delivery_location: "",
    return_location: "",
  });

  const HandleOnChange = (action, event) => {
    setAdvert((state) => ({
      ...state, // <-- shallow copy previous state
      [action]: event.target.value, // <-- update property by dynamic key
    }));

    console.log(Advert);
  };

  const handleNext = async () => {
    let flag = true;
    if (activeStep === steps.length - 1) {
      flag = await SubmitNewAdvert();
    }

    if (flag) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    window.location.reload(false);
  };

  const HandleCitySelected = (event, value) => {
    HandleOnChange("city", { target: { value } });
  };

  const HandleVehicleManufactureDateBlur = (event, value) => {
    if (value < 1350 || value > 1402) {
      HandleOnChange("creation_date", { target: { value: 1350 } });
    } else {
      HandleOnChange("creation_date", event);
    }
  };

  const HandleVehicleManufactureDateChange = (event, value) => {
    HandleOnChange("creation_date", event);
  };

  const HandlePlate = (event) => {
    HandleOnChange("plate_1", { target: { value: event.plate_1 } });
    HandleOnChange("plate_2", { target: { value: event.plate_2 } });
    HandleOnChange("plate_3", { target: { value: event.plate_3 } });
    HandleOnChange("plate_4", { target: { value: event.plate_4 } });
  };

  const SubmitNewAdvert = async (event) => {
    const SubmitData = {
      car: {
        type: Advert.type,
        creation_date: Advert.creation_date,
        mileage_rate: Advert.mileage_rate,
        value: Advert.value,
        plate_1: Advert.plate_1,
        plate_2: Advert.plate_2,
        plate_3: Advert.plate_3,
        plate_4: Advert.plate_4,
        color: Advert.color,
      },
      rental_time: Advert.rental_time,
      rental_daily_rate: Advert.rental_daily_rate,
      deposit_amount: Advert.deposit_amount,
      city: Advert.city.name,
      delivery_location: Advert.delivery_location,
      return_location: Advert.return_location,
    };
    try {
      const { message } = await props.CreateAdvert(SubmitData);
      toast.success(message);
      return true;
    } catch (err) {
      const message = err.response
        ? err.response.data?.message
        : "Something went wrong! Please try again later";
      toast.error(message);
      return false;
    }
  };

  const RenderCurrentStep = () => {
    if (activeStep === 0) {
      return (
        <>
          <TextField
            key={1}
            sx={{ width: "100%", marginTop: "2rem" }}
            inputProps={{
              min: 0,
            }}
            onChange={HandleOnChange.bind(this, "type")}
            value={Advert.type}
            hintStyle={{ textAlign: "center" }}
            label="نوع ماشین"
          />
          <TextField
            key={2}
            type="number"
            sx={{ width: "100%", marginTop: "2rem" }}
            InputProps={{
              inputProps: {
                style: {
                  centerAdornment: {
                    marginLeft: "50%", // or your relevant measure
                  },
                },
                max: 1402,
                min: 1350,
                alignLabelWithHint: true,
              },
            }}
            value={Advert.creation_date}
            onBlur={HandleVehicleManufactureDateBlur}
            onChange={HandleVehicleManufactureDateChange}
            label="سال ساخت ماشین"
          />
          <TextField
            key={3}
            sx={{ width: "100%", marginTop: "2rem" }}
            onChange={HandleOnChange.bind(this, "mileage_rate")}
            value={Advert.mileage_rate}
            inputProps={{
              min: 0,

              centerAdornment: {
                marginLeft: "10 %", // or your relevant measure
              },
            }}
            label="میزان کارکرد خودرو"
          />
          <TextField
            key={14}
            sx={{ width: "100%", marginTop: "2rem" }}
            onChange={HandleOnChange.bind(this, "value")}
            value={Advert.value}
            inputProps={{
              min: 0,

              centerAdornment: {
                marginLeft: "10 %", // or your relevant measure
              },
            }}
            label="ارزش خودرو"
          />
          <Grid container justifyContent="center">
            <Typography
              justifyContent="center"
              sx={{
                color: "gray",
                width: "100%",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              پلاک خودرو
            </Typography>
            <Plate
              key={114}
              onFinish={HandlePlate}
              value_1={Advert.plate_1}
              value_2={Advert.plate_2}
              value_3={Advert.plate_3}
              value_4={Advert.plate_4}
            />
          </Grid>
          <Box></Box>

          <TextField
            key={15}
            sx={{ width: "100%", marginTop: "2rem" }}
            onChange={HandleOnChange.bind(this, "color")}
            value={Advert.color}
            inputProps={{
              min: 0,
            }}
            hintStyle={{ textAlign: "center" }}
            label="رنگ خودرو"
          />
          {/*
          
                    <TextField
            key={16}
            sx={{ width: "100%", marginTop: "2rem" }}
            onChange={HandleOnChange.bind(this, "owner")}
            value={Advert.owner}
            inputProps={{
              min: 0,
            }}
            hintStyle={{ textAlign: "center" }}
            label="نام و نام‌خانوادگی صاحب خودرو"
          />
          <TextField
            key={17}
            sx={{ width: "100%", marginTop: "2rem" }}
            onChange={HandleOnChange.bind(this, "birth_certificate")}
            value={Advert.birth_certificate}
            inputProps={{
              min: 0,
            }}
            hintStyle={{ textAlign: "center" }}
            label="شماره شناسنامه صاحب خودرو"
          />
          */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={Advert.city}
            options={cities}
            onChange={HandleCitySelected}
            sx={{ width: "100%", marginTop: "1rem" }}
            renderInput={(params) => (
              <TextField key={18} {...params} label="شهر" />
            )}
          />
        </>
      );
    } else {
      return (
        <>
          <TextField
            key={21}
            sx={{ width: "100%", marginTop: "2rem" }}
            InputProps={{
              min: 1,
            }}
            onChange={HandleOnChange.bind(this, "rental_time")}
            value={Advert.rental_time}
            hintStyle={{ textAlign: "center" }}
            label="مدت زمان اجاره (به روز)"
          />

          <TextField
            key={22}
            sx={{ width: "100%", marginTop: "2rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">ریال</InputAdornment>
              ),
              min: 1,
            }}
            onChange={HandleOnChange.bind(this, "rental_daily_rate")}
            value={Advert.rental_daily_rate}
            hintStyle={{ textAlign: "center" }}
            label="میزان اجاره به ازای هر روز"
          />

          <TextField
            key={23}
            sx={{ width: "100%", marginTop: "2rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">ریال</InputAdornment>
              ),
              min: 1,
            }}
            onChange={HandleOnChange.bind(this, "deposit_amount")}
            value={Advert.deposit_amount}
            hintStyle={{ textAlign: "center" }}
            label="میزان بیعانه"
          />
          <TextField
            key={24}
            sx={{ width: "100%", marginTop: "2rem" }}
            inputProps={{
              min: 0,
            }}
            hintStyle={{ textAlign: "center" }}
            onChange={HandleOnChange.bind(this, "delivery_location")}
            value={Advert.delivery_location}
            label="محل تحویل ماشین"
          />
          <TextField
            key={25}
            sx={{ width: "100%", marginTop: "2rem" }}
            inputProps={{
              min: 0,
            }}
            hintStyle={{ textAlign: "center" }}
            onChange={HandleOnChange.bind(this, "return_location")}
            value={Advert.return_location}
            label="محل بازگرداندن ماشین"
          />
        </>
      );
    }
  };

  return (
    <Paper
      sx={{ padding: "6rem", marginTop: "2rem", width: "100%" }}
      variant="outlined"
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            تمامی مرحله پایان یافت. آگهی را ثبت شد.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>شروع دوباره</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>مرحله {activeStep + 1}</Typography>

          {RenderCurrentStep()}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              بازگشت
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "ثبت آگهی" : "مرحله بعد"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    CreateAdvert: ({
      car,
      city,
      rental_time,
      rental_daily_rate,
      deposit_amount,
      delivery_location,
      return_location,
    }) =>
      dispatch(
        create_advert({
          car,
          city,
          rental_time,
          rental_daily_rate,
          deposit_amount,
          delivery_location,
          return_location,
        })
      ),
  };
};

export default connect(null, mapDispatchToProps)(NewAdvertComponent);
