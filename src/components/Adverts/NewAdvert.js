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
const steps = ["ماشین خود را انتخاب کنید", "اجاره "];

var result = [];

const NewAdvertComponent = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const HandleCitySelected = (event, value) => {
    console.log(value);
  };

  const RenderCurrentStep = () => {
    if (activeStep === 0) {
      return (
        <>
          <TextField
            sx={{ width: "100%", marginTop: "2rem" }}
            inputProps={{
              min: 0,
              style: { textAlign: "center" },
              centerAdornment: {
                marginLeft: "10 %", // or your relevant measure
              },
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            onChange={HandleCitySelected}
            sx={{ width: "100%", marginTop: "1rem" }}
            renderInput={(params) => <TextField {...params} label="شهر" />}
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
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

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

export default NewAdvertComponent;
