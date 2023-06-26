import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DeviceThermostatSharpIcon from '@mui/icons-material/DeviceThermostatSharp';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '1px solid #35967d',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function TempModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleOpen} sx={{color:props.color, padding:'0px'}}><DeviceThermostatSharpIcon/>{'Temperature'}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="parent-modal-title">INFO</h2>
            <p id="parent-modal-description" >
            <div style={{display:'block', marginTop:'10px' }}> 
            {props.data} Temperature 1: {props.voltage} V 
            </div>
            <div style={{display:'block', marginTop:'10px'}}> 
            {props.data} Temperature 2: {props.voltage} V 
            </div>
            <div style={{display:'block', marginTop:'10px'}}> 
            {props.data} Temperature 3: {props.voltage} V 
            </div>
            <div style={{display:'block', marginTop:'10px'}}> 
            {props.data} Temperature 4: {props.voltage} V 
            </div>
            <div style={{display:'block', marginTop:'10px'}}> 
            {props.data} Temperature 5: {props.voltage} V 
            </div>
            </p>
          </Box>
        </Modal>
      </div>
    );
  }

export default TempModal;