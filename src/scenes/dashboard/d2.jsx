import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  makeStyles,
  useMediaQuery,
  Box
} from '@material-ui/core';
import BatteryMain from "../../components/BatteryMain";
import SpeedTemp from "../../components/SpeedTemp";
import SwitchTemp from "../../components/SwitchTemp";
import RealTimeGraph from "../../components/RealTimeGraph";
import Map from "../../components/Map";
import CellPack from "../../components/CellPack";


const useStyles = makeStyles(() => ({
  topBlock: {
    height: '10rem',
    marginBottom: '0.5rem'
  },
  bottomBlock: {
    height: '14.5rem',
  },
  sideBlock: {
    height: '25rem',
  },
  secondLeftBlock: {
    height: '14rem',
  },
  secondRightBlock: {
    height: '14rem',
  },
  GraphBlock: {
    height: '16.5rem',
  },
}));

const Dashboard2 = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);
  const color = {
    blue: colors.palette[500],
    grey: colors.palette[100],
    green: colors.palette[100],
  };
  const customFontFamily = "'Kanit', sans-serif"; // Define the custom font family

  const styles = {
    border: `1px solid ${colors.palette[800]}`,
    background: colors.palette[300],
    boxShadow: colors.palette[200],
    borderRadius: '0.6rem',
    fontFamily:customFontFamily
  };

  return (
    <Grid container spacing={1} style={{maxWidth:'100%', marginLeft:'0px'}}>
      
      <Grid item xs={12} sm={6} md={4} >
        <Box className={classes.topBlock} style={styles}>
          <CardContent>
          <SwitchTemp switchValue={props.switchValue} user={props.data.user} gradient={props.data.v47} ambient={props.data.v4} range={props.data.v5} deviceStatus={props.data.v6} cerror={props.data.v7} merror={props.data.v8} whpkm={props.data.v38}/>
          </CardContent>
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
          <CardContent>
            <SpeedTemp speed={props.data.v39} rpm={props.data.v40} odo={props.data.v41} cfan={props.data.v42} mfan={props.data.v43} fner={props.data.v44} mtemp={props.data.v46} ctemp={props.data.v45}/> 
          </CardContent>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.sideBlock} style={styles}>
          <CardContent >
            <BatteryMain heading={props.data.v31} current={props.data.v33} soc={ props.data.v32} voltage={ props.data.v34} capacity={ props.data.v35} totalCapacity={props.data.v9} high={ props.data.v14} low={ props.data.v15} power={props.data.v36} berror={props.data.v8} whr={ props.data.v37} data={ props.data} color ={colors.palette[500]}/>
            <CellPack cell={props.data}/>
          </CardContent>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.sideBlock} style={styles}>
            <Map token={props.mapKey} user={props.user}/>
        </Box>
      </Grid>
      
      {/* <Grid item xs={12} sm={6} md={12}>
        <Box className={classes.GraphBlock} style={styles}>
          <CardContent>
            <RealTimeGraph d={props.data.v33} color={color} id={'Current'} />
          </CardContent>
        </Box>
      </Grid> */}
    </Grid>
  );
}; 

export default Dashboard2;
