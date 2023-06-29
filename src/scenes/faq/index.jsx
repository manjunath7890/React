
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TemperatureGauge from "../../components/TempGauge";


const Faq = () => {

  return (
    <Grid container spacing={2} style={{maxWidth:'99%', marginLeft:'10px'}}>


      <TemperatureGauge value={100} max={180} />
      
    </Grid>
  );
}; 

export default Faq;