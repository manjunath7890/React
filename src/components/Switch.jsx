import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { withStyles } from '@mui/styles';
// import { useTheme } from "@mui/material";
// import { tokens } from "../theme";
const CustomSwitch = withStyles({
  root: {
    width: 100,
    height: 80,
    paddingBottom: 25,
  },
  switchBase: {
   
    '&$checked': {
      transform: 'translateX(40px)',
      color: '#fff',
      '& + $track': {
        backgroundColor: '#00ffff',
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: 50,
    height: 50,
  },
  track: {
    borderRadius: 50 / 2,
    opacity: 1,
    backgroundColor: '#bdbdbd',
  },
  checked: {},

})(Switch);

function SwitchToggle() {
  const [switchValue, setSwitchValue] = useState(true);
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const color = colors.greenAccent[500];
  const handleSwitchChange = (event) => {
    const newValue = event.target.checked;
    setSwitchValue(newValue);
  };

  useEffect(() => {
    console.log(switchValue);

    const postData = async () => {
      try {

        const response = await fetch('https://telematicsserer.onrender.com/postinput', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
                                 var1 : switchValue,
                                 var2 : 'jjjj',
                               }),
        });
        if (response.ok) {
          console.log('Switch value posted successfully!');
        } else {
          console.log('Failed to post switch value.');
        }
      } catch (error) {
        console.error('Error posting switch value:', error);
      }
    };

    postData();
  }, [switchValue]);

  return (
    <div style={{width:'100px', marginTop:'5px', marginLeft:'10px'}}>
      <CustomSwitch
        checked={switchValue}
        onChange={handleSwitchChange}
        inputProps={{ 'aria-label': 'Switch demo' }} 
        // colors={color}
      />
    </div>
  );
}

export default SwitchToggle
