import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DatePickerValue from "../../components/DataDownload";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import FeedIcon from '@mui/icons-material/Feed';
import React from "react";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';


const Topbar = (props) => {
  const customFontFamily = "'Black Ops One', sans-serif";
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  const [clickedButton, setClickedButton] = useState('dashboard');

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
<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} justifyContent={'space-between'} pt={'1rem'} pl={2} borderBottom={'0px solid grey'} alignItems={'center'} ml={'0rem'}>
{/* <Tooltip title="MENU"> */}
  <IconButton
    onClick={handleClick}
    sx={{
      ml: 1,
      mt: '-0.5rem',
      fontSize: '1rem',     // Change the font size here
    }}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  >
    <Avatar sx={{background: colors.palette[400], width:'6rem'}}>
      {/* <img
              alt="profile-user"
              width="10px"
              height="10px"
              src={`../../assets/logo.png`}
              style={{ cursor: "pointer", borderRadius: "50%", width:'2.5rem', height:'2.5rem', marginBottom:'2rem', marginTop:'2rem', marginLeft:'0rem'}}
      /> */}
       <IconButton >
        <Typography fontSize={'0.7rem'} color={colors.palette[100]} display={'flex'} fontFamily={customFontFamily} >                 
          <Box fontSize={'2.5rem'} mr={"0.2rem"} ml={'0rem'}>A</Box>
          <Box marginTop={'1.2rem'} sx={{color:colors.palette[500]}} marginRight={'0.5rem'}>
            <Box>lterner</Box>
            <Box mt={'-0.3rem'}>Solution</Box>
          </Box>
        </Typography>
        </IconButton>
    </Avatar>
  </IconButton>
{/* </Tooltip>       */}
           <DatePickerValue user={props.user} />

</Box>
<Menu
  anchorEl={anchorEl}
  id="account-menu"
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <Tooltip title="Dashboard">
        <IconButton
          component={Link}
          to="/support/dashboard"
          onClick={() => handleButtonClick('dashboard')}
          sx={{
            ml: '2rem',
            mr: '2rem',
            color: clickedButton === 'dashboard' ? colors.palette[500] : colors.palette[100],
            // "&:hover": { color: colors.palette[800] },
          }}
        >
          <DashboardIcon />
        </IconButton>
        </Tooltip>   
        <Tooltip title="Report">  
        <IconButton
          component={Link}
          to="/support/user"
          onClick={() => handleButtonClick('user')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'user' ? colors.palette[500] : colors.palette[100],
            // "&:hover": { color: colors.palette[800] },
          }}
        >
          <FeedIcon />
        </IconButton>
        </Tooltip>  
        <Tooltip title=" Bar Graph">  
        <IconButton
          component={Link}
          to="/support/bar"
          onClick={() => handleButtonClick('bar')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'bar' ? colors.palette[500] : colors.palette[100],
            // "&:hover": { color: colors.palette[800] },
          }}
        >
          <AssessmentIcon />
        </IconButton>
        </Tooltip>  
        <Tooltip title="Line Graph">  
        <IconButton
          component={Link}
          to="/support/line"
          onClick={() => handleButtonClick('line')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'line' ? colors.palette[500] : colors.palette[100],
            // "&:hover": { color: colors.palette[800] },
          }}
        >
          <StackedLineChartIcon />
        </IconButton>
        </Tooltip>  
        <Tooltip title="Mode">  
        <IconButton onClick={colorMode.toggleColorMode} sx={{ mr: '2rem'}}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        </Tooltip> 
        <Tooltip title="Log out">  
        <IconButton sx={{ mr: '2rem', mt:'-0.5rem' }}>
          <a href="../">
            <LogoutOutlinedIcon />
          </a>
        </IconButton>
        </Tooltip>  
        {/* <Box marginLeft={'3.5rem'}>
           <DatePickerValue user={props.user} />
        </Box> */}

</Menu>
</React.Fragment>
</Box>
  );
};

export default Topbar;
