import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { connect } from "react-redux";
import { signup } from "utils/users";
import { toast } from "react-toastify";

const SignupComponent = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = React.useState(true);
  const [isLastNameValid, setIsLastNameValid] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [isConfirmPasswordValid, SetIsConfirmPasswordValid] =
    React.useState(true);
  const [isUsernameValid, SetIsUsernameValid] = React.useState(true);

  const handleSubmit = async (event) => {
    const { Signup } = props;
    event.preventDefault();

    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
    SetIsUsernameValid(true);

    const data = new FormData(event.currentTarget);
    const SubmitData = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: data.get("email"),
      username: data.get("username"),
      password: data.get("password"),
      password_confirm: data.get("confirmPassword"),
    };
    let message = "";

    if (SubmitData?.firstName?.length === 0) {
      setIsFirstNameValid(false);
      message = "لطفا نام خود را وارد نمایید";
      toast.error(message);
    } else if (SubmitData?.lastName?.length === 0) {
      setIsLastNameValid(false);
      message = "لطفا نام خانوادگی خود را وارد نمایید";
      toast.error(message);
    } else if (
      SubmitData?.email?.includes("@") === false ||
      SubmitData?.email?.length === 0
    ) {
      setIsEmailValid(false);
      message = "لطفا یک ایمیل معتبر وارد کنید";
      toast.error(message);
    } else if (SubmitData?.username.length === 0) {
      SetIsUsernameValid(false);
      message = "لطفا یک نام‌کاربری معتبر وارد کنید";
      toast.error(message);
    } else if (SubmitData?.password?.length < 8) {
      setIsPasswordValid(false);
      message = "رمز عبور باید بیشتر از 8 رقم باشد";
      toast.error(message);
    } else if (
      SubmitData?.password_confirm < 8 ||
      SubmitData?.password_confirm !== SubmitData?.password
    ) {
      SetIsConfirmPasswordValid(false);
      message = "تکرار رمز عبور باید همانند رمز عبور باشد";
      toast.error(message);
    }

    // everything is correct
    else {
      try {
        console.log("here");
        const { message } = await Signup(SubmitData);
        toast.success(message);
      } catch (err) {
        const message = err.response
          ? err.response.data?.message
          : "Something went wrong! Please try again later";
        toast.error(message);
      }
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        ثبت نام
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!isFirstNameValid}
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="نام"
              data-testid="firstName"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!isLastNameValid}
              required
              fullWidth
              id="lastName"
              label="نام خانوادگی"
              name="lastName"
              autoComplete="family-name"
              data-testid="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!isEmailValid}
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              data-testid="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!isUsernameValid}
              required
              fullWidth
              id="username"
              label="نام کاربری"
              name="username"
              autoComplete="username"
              data-testid="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!isPasswordValid}
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="new-password"
              data-testid="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!isConfirmPasswordValid}
              required
              fullWidth
              name="confirmPassword"
              label="تکرار رمز عبور"
              type="password"
              id="confirmPassword"
              data-testid="confirmPassword"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          data-testid="submit-button"
        >
          ثبت نام
        </Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Link to="/login" variant="body2">
              اکانت داری؟ خب وارد شو!
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    Signup: ({
      first_name,
      last_name,
      username,
      email,
      password,
      password_confirm,
    }) =>
      dispatch(
        signup({
          first_name,
          last_name,
          username,
          email,
          password,
          password_confirm,
        })
      ),
  };
};

export default connect(null, mapDispatchToProps)(SignupComponent);
