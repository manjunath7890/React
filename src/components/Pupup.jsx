import * as React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Popper from '@mui/material/Popper';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

function Popup(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
        <Typography
           borderRadius={'0.5rem'}
           boxShadow={colors.greenAccent[900]}
           m={'0rem 1.7rem'}           
           sx={{ color: '#fff', marginBottom:'1.3rem', cursor:'pointer'}}
        >
          <button aria-describedby={id} type="button" onClick={handleClick} style={{backgroundColor:colors.greenAccent[500], border:'0px', padding:'0 0.5rem', borderRadius:'0.5rem'}}>
           <Typography
            fontSize={'1rem'}
            sx={{ color: '#fff', cursor:'pointer'}}
           >
             {'\u00A0'}{'\u00A0'}
             More
           </Typography>
          </button>
        </Typography>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-1: {props.voltage.v51} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-2: {props.voltage.v52} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-3: {props.voltage.v53} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-4: {props.voltage.v54} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-5: {props.voltage.v55} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-6: {props.voltage.v56} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-7: {props.voltage.v57} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-8: {props.voltage.v58} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-9: {props.voltage.v59} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-10: {props.voltage.v60} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-11: {props.voltage.v61} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-12: {props.voltage.v62} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-13: {props.voltage.v63} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-14: {props.voltage.v64} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-15: {props.voltage.v65} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-16: {props.voltage.v66} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-17: {props.voltage.v67} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-18: {props.voltage.v68} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-19: {props.voltage.v69} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-20: {props.voltage.v70} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-21: {props.voltage.v71} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-22: {props.voltage.v72} v</div>
          <div><Battery0BarIcon sx={{color:'#0cc'}}/>Cell-23: {props.voltage.v73} v</div>
        </Box>
      </Popper>
    </div>
  );
}
export default  Popup;