import React from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const Label = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <div style={{border:`1px solid ${colors.greenAccent[100]}`, borderRadius:'15px', background:colors.greenAccent[400], margin:'5px 3px', justifyContent:'center', display:'grid'}}>
      <div style={{color :'#00c4c9', fontSize:'13px', fontWeight:'bold'}}>
        {props.label}
      </div>
      <div style={{color :colors.grey[100], fontSize:'20px', marginTop:'-5px'}}>
        {props.data}
      </div>
      
    </div>
  );
};

export default Label;