import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMap from "./Map";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  // border: '1px solid #35967d',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function MapModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleOpen} sx={{color:'#0ff', padding:'0px', fontWeight:'bold', fontSize:'20px', marginTop:'-10px'}}> <LocationOnIcon/>{'Map'}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          style={{margin:'50px'}}

        > 
          <GoogleMap grayscale={1} height={600} /> 
        </Modal>
      </div>
    );
  }

export default MapModal;