import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';


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

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} sx={{color:props.props.color, border:`1px solid ${props.props.color}`}}>more info:</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 175 }}>
          <h2 id="child-modal-title">Info </h2>
          <p id="child-modal-description">
            <div style={{display:'block'}}>
            {props.props.data} cell 1: {props.props.voltage.var31} V 
            {props.props.data} cell 2: {props.props.voltage.var32} V 
            {props.props.data} cell 3: {props.props.voltage.var33} V 
            {props.props.data} cell 4: {props.props.voltage.var34} V 
            {props.props.data} cell 5: {props.props.voltage.var35} V 
            {props.props.data} cell 6: {props.props.voltage.var36} V 
            {props.props.data} cell 7: {props.props.voltage.var37} V 
            {props.props.data} cell 8: {props.props.voltage.var38} V 
            {props.props.data} cell 9: {props.props.voltage.var39} V 
            {props.props.data} cell 10: {props.props.voltage.var40} V 
            {props.props.data} cell 11: {props.props.voltage.var41} V 
            {props.props.data} cell 12: {props.props.voltage.var42} V 
            {props.props.data} cell 13: {props.props.voltage.var43} V 
            {props.props.data} cell 14: {props.props.voltage.var44} V
            {props.props.data} cell 15: {props.props.voltage.var45} V 
            {props.props.data} cell 16: {props.props.voltage.var46} V 
            {props.props.data} cell 17: {props.props.voltage.var47} V 
            {props.props.data} cell 18: {props.props.voltage.var48} V 
            {props.props.data} cell 19: {props.props.voltage.var49} V 
            {props.props.data} cell 20: {props.props.voltage.var50} V 
            {props.props.data} cell 21: {props.props.voltage.var51} V 
            {props.props.data} cell 22: {props.props.voltage.var52} V 
            {props.props.data} cell 23: {props.props.voltage.var53} V 
            </div>
          </p>
          <Button onClick={handleClose} sx={{color:props.props.color , border:`1px solid ${props.props.color}`}}>Close </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function NestedModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleOpen} sx={{color:props.color, marginBottom:'10px' , marginLeft:'5px'}}><InfoIcon/> more info:</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="parent-modal-title">INFO</h2>
            <p id="parent-modal-description" >
            <div style={{display:'block' }}> 
            {props.data} Power: {props.voltage.var18} V 
            </div>
            <div style={{display:'block'}}> 
            {props.data} Whr: {props.voltage.var19} V 
            </div>
            <div style={{display:'block'}}> 
            {props.data} Avg volt: {props.voltage.var22} V 
            </div>
            <div style={{display:'block'}}> 
            {props.data} high volt: {props.voltage.var20} V 
            </div>
            <div style={{display:'block'}}> 
            {props.data} low volt: {props.voltage.var21} V 
            </div>
            </p>
            <ChildModal  props={props} />
          </Box>
        </Modal>
      </div>
    );
  }

export default NestedModal;