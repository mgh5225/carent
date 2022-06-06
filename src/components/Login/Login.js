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

import { login } from "utils/users";
import { toast } from "react-toastify";

const LoginComponent = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const { Login } = props;
    const { user, pass } = {
      user: data.get("username"),
      pass: data.get("password"),
    };

    try {
      const { message } = await Login(user, pass);
      toast.success(message);
    } catch (err) {
      const message = err.response
        ? err.response.data?.message
        : "Something went wrong! Please try again later";
      toast.error(message);
    }
  };

  //
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
        ورود
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="نام کاربری"
          name="username"
          autoComplete="username"
          data-testid="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="رمز عبور"
          type="password"
          id="password"
          data-testid="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          data-testid="submit-button"
        >
          ورود
        </Button>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Link to="/signup" variant="body2">
              {"اکانت نداری؟ خو ثبتنام کن:)"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state?.auth?.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (username, password) => dispatch(login({ username, password })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
