import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DatePickerValue from "../../components/DataDownload";


const Topbar = (props) => { 
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  console.log(props.user);

  return (
    <Box display="flex" justifyContent="space-between" p={2} borderBottom={'0px solid grey'}>
      <DatePickerValue user={props.user}/>
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingBottom={'-10px'}>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <a href="./">
            <LogoutOutlinedIcon />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
