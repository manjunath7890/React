import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from 'react';
import Battery0BarOutlinedIcon from '@mui/icons-material/Battery5Bar';
import DeviceThermostatSharpIcon from '@mui/icons-material/DeviceThermostatSharp'; 
import LineChart from "../../components/LineChart";
import Linear from "../../components/Linear";
import StatBox from "../../components/StatBox"; 
import StatBox2 from "../../components/StatBox2";
import GoogleMap from "../../components/Map";
import SwitchExample from "../../components/Switch";
import MapModal from "../../components/MapModal";
import {
  Grid,
  // Typography,
  Card,
  CardContent,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
// import Visual from "../../components/DataVisual";
import TemperatureGauge from "../../components/TempGauge";
import Lineargauge from "../../components/LinearGuage";

const useStyles = makeStyles(() => ({
  card: {
    height: '12rem',
  },
  card2: {
    height: '14rem',
  },
  card3: {
    marginBottom: '1rem'
  },

  mapContainer: {
    height: '27rem', 
  },
  content: {
    padding: 0, 
  },
}));

const Dashboard = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);
  const color = {
    blue: colors.greenAccent[500],
    grey: colors.grey[800],
    green: colors.grey[100],
  };
  const styles = {
    border: `1px solid ${colors.primary[700]}`,
    background: 'linear-gradient(150deg,rgb(0 30 30) 10%,rgb(0 255 255 / 20%) 50%,rgb(0 30 30) 92.98%)',
    boxShadow: "0 0px 7px 2px #066",
    backgroundColor: `${colors.primary[400]}`,
    // fontFamily: "Helvetica, Arial, sans-serif"
    
  };

  const isXiaomiPad = useMediaQuery('(max-width: 1400px)');
  return (
    <Grid container spacing={2} style={{maxWidth:'99%', marginLeft:'10px'}}>

      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.card} style={styles}>
          <CardContent >
          <StatBox d={ props.data} heading='Battery 1:' icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.card} style={styles}>
          <CardContent>
          <StatBox d={props.data} heading='Battery 2:' icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3} >
        <Card className={classes.card} style={styles}>
          <CardContent>
          <StatBox d={props.data} heading='Battery 3:' icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.card} style={styles}>
          <CardContent >
          <StatBox d={ props.data} heading='Battery 4:' icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} >
        <Grid>
          <Card className={classes.mapContainer} style={styles}>
            <CardContent className={classes.content}>
              <Box height={'20px'} marginBottom={'10px'}   marginTop={'10px'}>
                <MapModal/>
              </Box>
              <GoogleMap grayscale={colors.grey[900]} height={280}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} md={3} >
        <Grid  >
        <Card className={[classes.card2, classes.card3]} style={styles}>
          <CardContent>
            <StatBox2 val={props.data} heading='Temperature:' icon={<DeviceThermostatSharpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>  
          </CardContent>
        </Card>
      </Grid>
      <Grid >
        <Card className={classes.card} style={styles}>
          <CardContent>
          </CardContent>
        </Card>
      </Grid>
      </Grid>

      {isXiaomiPad ? (
        <Grid item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12} style={{display:'flex'}}>
            <Grid item xs={12} sm={6} md={6} style={{marginRight:'15px'}}>
            <Card className={[classes.card, classes.card3]} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={[classes.card, classes.card3]} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
                
              </CardContent>
            </Card>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Card className={classes.card2} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
                <LineChart data={props.data} color={color} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
          <Grid item xs={12} sm={6} md={5}>
            <Grid item xs={12} sm={6} md={12} style={{display:'flex'}}>
            <Grid item xs={12} sm={6} md={6} style={{marginRight:'15px'}}>
            <Card className={[classes.card, classes.card3]} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
                <SwitchExample />
                <Linear value={30}/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={[classes.card, classes.card3]} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
              <Box display="flex" m={'15px 5px 0px 5px'} color={colors.greenAccent[500]} justifyContent={'space-evenly'}>
                <Lineargauge data={props.data.var11} label={'C-temperature'} index={'x'} width={'82px'} height={'100%'}/>
                <Lineargauge data={props.data.var12} label={'M-temperature'} index={'x'} width={'85px'} height={'100%'}/>
              </Box>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Card className={classes.card2} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
                <LineChart data={props.data} color={color} />
              </CardContent>
            </Card>
          </Grid>
          </Grid>
       )} 
    </Grid>
  );
}; 

export default Dashboard;
