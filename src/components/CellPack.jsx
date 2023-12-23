import Mod from "./Cells";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

const CellPack = (props) => {
  const customFontFamily = "'Black Ops One', sans-serif";
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  // const [clickedButton, setClickedButton] = useState("dashboard");

  // const handleButtonClick = (button) => {
  //   setClickedButton(button);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={"0px 0px"}
      width={"100%"}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={props.height}
    >
      <React.Fragment>
        <IconButton
          onClick={handleClick}
          sx={{
            mt: "-0.5rem",
            fontSize: "1rem", // Change the font size here
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              background: colors.palette[500],
              width: "4rem",
              height: '2rem',
              border: `1px solid ${colors.palette[800]}`,
              borderRadius: '0.5rem',

            }}
          >
            <Typography
              fontSize={"1rem"}
              color={colors.palette[400]}
              display={"flex"}
              fontFamily={customFontFamily}
            >
              More
            </Typography>
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v51} cell={"1"} />
            <Mod value={props.cell.v52} cell={"2"} />
            <Mod value={props.cell.v53} cell={"3"} />
            <Mod value={props.cell.v54} cell={"4"} />
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v55} cell={"5"} />
            <Mod value={props.cell.v56} cell={"6"} />
            <Mod value={props.cell.v57} cell={"7"} />
            <Mod value={props.cell.v58} cell={"8"} />
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v59} cell={"9"} />
            <Mod value={props.cell.v60} cell={"10"} />
            <Mod value={props.cell.v61} cell={"11"} />
            <Mod value={props.cell.v62} cell={"12"} />
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v63} cell={"13"} />
            <Mod value={props.cell.v64} cell={"14"} />
            <Mod value={props.cell.v65} cell={"15"} />
            <Mod value={props.cell.v66} cell={"16"} />
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v67} cell={"17"} />
            <Mod value={props.cell.v68} cell={"18"} />
            <Mod value={props.cell.v69} cell={"19"} />
            <Mod value={props.cell.v70} cell={"20"} />
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" m={"0.5rem"}>
            <Mod value={props.cell.v71} cell={"21"} />
            <Mod value={props.cell.v72} cell={"22"} />
            <Mod value={props.cell.v73} cell={"23"} />
            <Mod value={"--"} cell={"24"} />
          </Box>
        </Menu>
      </React.Fragment>
    </Box>
  );
};

export default CellPack;
