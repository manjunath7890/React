import Mod from "./Cells";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Info = (props) => {

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
    <Box
    p={'0px 0px'}
    // width={'100%'}
    flexDirection="column" 
    alignItems="center"
    justifyContent="center"

  > 
  <React.Fragment>

  <IconButton
    onClick={handleClick}
    sx={{
      mt: '-0.5rem',
      fontSize: '1rem',     // Change the font size here
    }}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  >
    <Avatar sx={{background: colors.palette[400], width:'2rem', height:'2rem', border:`1px solid ${colors.palette[800]}`}}>
        <Typography fontSize={'1rem'} color={colors.palette[500]} display={'flex'} fontFamily={customFontFamily} >                 
          <FormatListBulletedIcon />
        </Typography>
    </Avatar>
  </IconButton>

<Menu
  anchorEl={anchorEl}
  id="account-menu"
  open={open} 
  onClose={handleClose}
  onClick={handleClose}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
    <Box display={'flex'} m={'0.5rem'}> 
      Vehicle type: lm5
    </Box>

    <Box display={'flex'} m={'0.5rem'}> 
      Vehicle : Grey (cargo 2)
    </Box>

    <Box display={'flex'} justifyContent="space-evenly"  m={'0.5rem'}> 
      liscence no.: 78239432ndvnd9v84t4
    </Box>

    <Box display={'flex'} justifyContent="space-evenly"  m={'0.5rem'}> 
      Vehicle no.: 78239432ndvnd9v84t4
    </Box>

    <Box display={'flex'} justifyContent="space-evenly"  m={'0.5rem'}> 
      Chassi no.: 78239432ndvnd9v84t4
    </Box>

    <Box display={'flex'} justifyContent="space-evenly"  m={'0.5rem'}> 
      Motor no.: 78239432ndvnd9v84t4
    </Box>

</Menu>
</React.Fragment>
  </Box> 
  );
};

export default Info;
