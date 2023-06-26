import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from 'react';
import Battery0BarOutlinedIcon from '@mui/icons-material/Battery5Bar';
import DeviceThermostatSharpIcon from '@mui/icons-material/DeviceThermostatSharp';
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox"; 
import StatBox2 from "../../components/StatBox2";
import GoogleMap from "../../components/Map";
import SwitchExample from "../../components/Switch";
import LinearGauge from "../../components/Linear";
import LinearProgress from '@mui/material/LinearProgress';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import Visual from "../../components/DataVisual";

const useStyles = makeStyles(() => ({
  card: {
    height: '12rem',
    // borderBottomRightRadius: '70px'
  },
  mapContainer: {
    height: '26.5rem', 
  },
  content: {
    padding: 0, // Remove the padding inside the CardContent
  },
}));

const Dashboard = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);
  const color = {
    blue: colors.blueAccent[500],
    grey: colors.grey[800],
    green: colors.greenAccent[500],
  };
  const styles = {
    border: `1px solid ${colors.primary[700]}`,
    boxShadow: "0 2px 3px rgba(110, 110, 110)",
    backgroundColor: `${colors.primary[400]}`,
  };

  const isXiaomiPad = useMediaQuery('(max-width: 1400px)');
  return (
    <Grid container spacing={2} style={{maxWidth:'99%', marginLeft:'10px'}}>
     <Grid item xs={12} sm={6} md={3}>
       <Card className={classes.card} style={styles}>
       <Box display="flex" justifyContent="center" alignItems="center">
         <Box>
           <SwitchExample />
         </Box>
         <Box sx={{ width: '100%', transform: 'rotate(-90deg)' }}>
           <Box sx={{ transformOrigin: 'center' }}>
             <LinearProgress
               variant="determinate"
               value={props.data.var3}
               sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'aqua' }, width: '100%', height: '20px' }}
             />
           </Box>
         </Box>
         <Box sx={{ width: '100%', transform: 'rotate(-90deg)' }}>
           <Box sx={{ transformOrigin: 'left bottom' }}>
             <LinearProgress
               variant="determinate"
               value={props.data.var3}
               sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'aqua' }, width: '100%', height: '20px',  border:'1px solid white'}}
             />
           </Box>
         </Box>
       </Box>
       </Card>
     </Grid>


      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.card} style={styles}>
          <CardContent >
          <StatBox  title={props.data.var2} subtitle={props.data.var1} progress={(props.data.var3) / 100} increase={props.data.var3} heading='battery-1:'
            icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.card} style={styles}>
          <CardContent>
          <StatBox  title={props.data.var2} subtitle={props.data.var1} progress={(props.data.var3) / 100} increase={props.data.var3} heading='battery-2:'
            icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3} >
        <Card className={classes.card} style={styles}>
          <CardContent>
          <StatBox  title={props.data.var2} subtitle={props.data.var1} progress={(props.data.var3) / 100} increase={props.data.var3} heading='battery-3:'
            icon={ <Battery0BarOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "20px" }}/>} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} >
        <Card className={classes.mapContainer} style={styles}>
          <CardContent className={classes.content}>
            <Box height={'30px'} marginBottom={'10px'} display={'flex'} justifyContent={'space-evenly'} marginTop={'10px'}>
              <Box border={'1ptx solid white'} width={'48%'} color={colors.greenAccent[500]} fontWeight={'boold'} fontSize={'15px'}>
                Latitude
              </Box>
              <Box border={'1ptx solid white'} width={'48%'} color={colors.greenAccent[500]} fontWeight={'boold'} fontSize={'15px'}>
                Longitude
              </Box>
            </Box>
            <GoogleMap grayscale={colors.grey[900]} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} >
        <Card className={classes.mapContainer} style={styles}>
          <CardContent>
            <StatBox2  val1={props.data.var4} val2={props.data.var5} val={props.data.var4} progressVal={props.data.var5} heading='Temperature:'
                 icon={<DeviceThermostatSharpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>     
            <Box sx={{display:'flex', width:'100%' }}>
              {/* <Visual data={props.data.var5} label={'RPM'}/> */}
              <Visual data={props.data.var5} label={'Distance'}/>
            </Box>     
            <Box sx={{display:'flex', width:'100%'}}>
              <Visual data={props.data.var5} label={'Controller temperature'}/>
              <Visual data={props.data.var5} label={'Motor temperature'}/>
            </Box>     
          </CardContent>
        </Card>
      </Grid>

      {isXiaomiPad ? (
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.mapContainer} style={styles}>           
            <CardContent style={{padding:'10px 0px'}}>
              <LineChart data={props.data} color={color} />
            </CardContent>
          </Card>
        </Grid>
      ) : (
          <Grid item xs={12} sm={6} md={5}>
            <Card className={classes.mapContainer} style={styles}>
              <CardContent style={{padding:'10px 0px'}}>
                <LineChart data={props.data} color={color} />
              </CardContent>
            </Card>
          </Grid>
       )} 
    </Grid>
  );
}; 

export default Dashboard;
