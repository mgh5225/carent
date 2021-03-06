import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { logout } from "utils/users";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandler = async () => {
    try {
      const { message } = await dispatch(logout());
      toast.success(message);
    } catch (err) {
      const message = err.response
        ? err.response.data?.message
        : "Something went wrong! Please try again later";
      toast.error(message);
    }
  };

  const settings = [
    { label: "ایجاد آگهی", callback: () => navigate("/newadvert") },
    { label: "آگهی‌های من", callback: () => navigate("/myAdvertPage") },
    { label: "درخواست‌های من", callback: () => navigate("/myRentRequestPage") },
    { label: "خروج", callback: LogoutHandler },
  ];

  const settings_2 = [
    { label: "ورود", callback: () => navigate("/login") },
    { label: "ثبتنام", callback: () => navigate("/signup") },
  ];

  const pages = [{ label: "آگهی ها", callback: () => navigate("/advertPage") }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderAvatar = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {(isAuthenticated ? settings : settings_2).map((setting) => (
            <MenuItem
              key={setting.label}
              onClick={() => {
                handleCloseUserMenu();
                setting.callback?.();
              }}
            >
              <Typography textAlign="center">{setting.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DirectionsCarIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            caRent
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, callback }) => (
                <MenuItem key={label} onClick={callback}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DirectionsCarIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ label, callback }) => (
              <Button
                key={label}
                onClick={callback}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {renderAvatar()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
