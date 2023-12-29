import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DatePickerValue from "../../components/DataDownload";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import FeedIcon from "@mui/icons-material/Feed";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

const Topbar = (props) => {
  const customFontFamily = "'Black Ops One', sans-serif";
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  const [clickedButton, setClickedButton] = useState("dashboard");

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          justifyContent={"space-between"}
          pt={"1rem"}
          pl={2}
          borderBottom={"0px solid grey"}
          alignItems={"center"}
          ml={"0rem"}
        >
          <IconButton
            onClick={handleClick}
            sx={{
              ml: 1,
              mt: "-0.5rem",
              fontSize: "1rem", // Change the font size here
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ background: colors.palette[400], width: "6rem",  }}>
              <IconButton>
                <Typography
                  fontSize={"0.7rem"}
                  color={colors.palette[100]}
                  display={"flex"}
                  fontFamily={customFontFamily}
                >
                  <Box fontSize={"2.5rem"} mr={"0.2rem"} ml={"0rem"}>
                    A
                  </Box>
                  <Box
                    marginTop={"1.2rem"}
                    sx={{ color: colors.palette[500] }}
                    marginRight={"0.5rem"}
                  >
                    <Box>lterner</Box>
                    <Box mt={"-0.3rem"}>Solution</Box>
                  </Box>
                </Typography>
              </IconButton>
            </Avatar>
          </IconButton>
          <Box alignItems={"center"}>
            <Tooltip title="Mode">
              <IconButton
                onClick={colorMode.toggleColorMode}
                sx={{ mr: "1rem" }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Log out">
              <IconButton sx={{ mr: "1rem", mt: "0rem" }}>
                <a href="/">
                  <LogoutOutlinedIcon />
                </a>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          // style={{width: '100%', justifyContent:'center', display:'flex'}}
        >
          <Tooltip title="Dashboard">
            <IconButton
              component={Link}
              to="/admin/dashboard"
              onClick={() => handleButtonClick("dashboard")}
              sx={{
                ml: "1rem",
                mr: "1rem",
                color: clickedButton === "dashboard" ? colors.palette[500] : "",
              }}
            >
              <DashboardIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="User Form">
            <IconButton
              component={Link}
              to="/admin/form"
              onClick={() => handleButtonClick("form")}
              sx={{
                mr: "1rem",
                color: clickedButton === "form" ? colors.palette[500] : "",
              }}
            >
              <AccountBoxIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Register">
            <IconButton
              component={Link}
              to="/admin/register"
              onClick={() => handleButtonClick("register")}
              sx={{
                mr: "1rem",
                color: clickedButton === "register" ? colors.palette[500] : "",
              }}
            >
              <DirectionsBusIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Analytics form">
            <IconButton
              component={Link}
              to="/admin/analytics/form"
              onClick={() => handleButtonClick("analytics")}
              sx={{
                mr: "1rem",
                color: clickedButton === "analytics" ? colors.palette[500] : "",
              }}
            >
              <StackedBarChartIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Data Analytics">
            <IconButton
              component={Link}
              to="/admin/analytics/template"
              onClick={() => handleButtonClick("user")}
              sx={{
                mr: "1rem",
                color: clickedButton === "user" ? colors.palette[500] : "",
              }}
            >
              <FeedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Graph Analytics">
            <IconButton
              component={Link}
              to="/admin/bar"
              onClick={() => handleButtonClick("bar")}
              sx={{
                mr: "1rem",
                color: clickedButton === "bar" ? colors.palette[500] : "",
              }}
            >
              <AssessmentIcon />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Line Graph">
            <IconButton
              component={Link}
              to="/admin/line"
              onClick={() => handleButtonClick("line")}
              sx={{
                mr: "1rem",
                color: clickedButton === "line" ? colors.palette[500] : "",
              }}
            >
              <StackedLineChartIcon />
            </IconButton>
          </Tooltip> */}
        </Menu>
      </React.Fragment>
    </Box>
  );
};

export default Topbar;
