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
// import TemperatureGauge from "../../components/TempGauge";
import Lineargauge from "../../components/LinearGuage";

const useStyles = makeStyles(() => ({
  card: {
    height: '12rem',
    // background: 'linear-gradient(150deg,rgb(0 30 30) 10%,rgb(0 255 255 / 20%) 50%,rgb(0 30 30) 92.98%)'
    // borderBottomRightRadius: '70px'
  },
  card2: {
    height: '14rem',
    // marginBottom: '1rem'
  },
  card3: {
    marginBottom: '1rem'
  },

  mapContainer: {
    height: '27rem', 
    // background: 'linear-gradient(116.05deg,rgba(22,141,150,.008) 21.5%,rgba(84,140,157,.0912) 73.99%,rgba(5,4,17,.112) 92.98%);'
    // background: 'linear-gradient(150deg,rgb(0 30 30) 10%,rgb(0 255 255 / 20%) 50%,rgb(0 30 30) 92.98%)'
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
    blue: colors.greenAccent[500],
    grey: colors.grey[800],
    green: colors.grey[100],
  };
  const styles = {
    border: `1px solid ${colors.primary[700]}`,
    // borderWidth: '4px',
    // borderStyle: 'solid',
    background: 'linear-gradient(150deg,rgb(0 30 30) 10%,rgb(0 255 255 / 20%) 50%,rgb(0 30 30) 92.98%)',
    boxShadow: "0 0px 7px 2px #066",
    backgroundColor: `${colors.primary[400]}`,
    // fontFamily: "Helvetica, Arial, sans-serif"
    
  };
  // console.log(props.data);

  const isXiaomiPad = useMediaQuery('(max-width: 1400px)');
  return (
    <Grid container spacing={2} style={{maxWidth:'99%', marginLeft:'10px'}}>
     {/* <Grid item xs={12} sm={6} md={4}>
       <Card className={classes.card} style={styles}>
       <Box display="flex" m={'15px 5px 0px 5px'} color={colors.greenAccent[500]}>
          
          <SwitchExample />
          <TemperatureGauge />    
          <TemperatureGauge value={80} max={100} name={'Motor Temperature'}/>      
          <Lineargauge data={props.data.var17} label={'trottle'} index={'x'} width={'45px'} height={'100%'}/>
          <Lineargauge data={props.data.var7} label={'slope'}/>
        </Box>
       </Card>
     </Grid> */}

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
        {/* <Card className={classes.card2} style={styles}>
          <CardContent className={classes.content}>
            <Box height={'20px'} marginBottom={'10px'}   marginTop={'10px'}>

              <MapModal/> */}
              {/* <Box height={'40px'} marginBottom={'10px'} display={'flex'} justifyContent={'center'} >
              <Box border={'1ptx solid white'} width={'48%'} color={colors.greenAccent[500]} fontWeight={'boold'} fontSize={'15px'}>
                Latitude <Box color={colors.grey[100]} >{'13.756856'}</Box>
              </Box>
              <Box border={'1ptx solid white'} width={'48%'} color={colors.greenAccent[500]} fontWeight={'boold'} fontSize={'15px'}>
                Longitude <Box color={colors.grey[100]} >{'77.756856'}</Box>
              </Box>
              </Box> */}
            {/* </Box>
            <GoogleMap grayscale={colors.grey[900]} height={180}/>
          </CardContent>
        </Card> */}
        {/* <Grid> */}
          {/* <Card className={[classes.card, classes.card3]}  style={styles}>
            <CardContent className={classes.content}> */}
              {/* <Box height={'20px'} marginBottom={'10px'}   marginTop={'10px'}>
                <MapModal/>
              </Box>
              <GoogleMap grayscale={colors.grey[900]} height={180}/> */}
            {/* </CardContent>
          </Card>
        </Grid> */}
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
        {/* <Card className={classes.mapContainer} style={styles}>
          <CardContent>
            <StatBox2 val={props.data} heading='Temperature:' icon={<DeviceThermostatSharpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>  
          </CardContent>
        </Card> */}
        <Grid  >
        <Card className={[classes.card2, classes.card3]} style={styles}>
          <CardContent>
            <StatBox2 val={props.data} heading='Temperature:' icon={<DeviceThermostatSharpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>  
             {/* {'uigsfsdgfsdifgdsi'} */}
          </CardContent>
        </Card>
      </Grid>
      <Grid >
        <Card className={classes.card} style={styles}>
          <CardContent>
            {/* <StatBox2 val={props.data} heading='Temperature:' icon={<DeviceThermostatSharpIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}/>   */}
          </CardContent>
        </Card>
      </Grid>
      </Grid>

      {isXiaomiPad ? (
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.card2} style={styles}>           
            <CardContent style={{padding:'10px 0px'}}>
              <LineChart data={props.data} color={color} />
            </CardContent>
          </Card>
        </Grid>
      ) : (
          <Grid item xs={12} sm={6} md={5}>
            <Card className={classes.card2} style={styles}>
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

      {/* <Box sx={{ width:'100%'}}  alignItems={'center'} justifyContent={'center'}>
      <Box
         border={'1px solid #014d50'}
         m={'2px 2px'}
         p={'10px 10px'}
         bgcolor={colors.primary[500]}
         width={'99%'}
         borderRadius={'5px'}
         alignItems="center"
         justifyContent="center"
      >
        <Lineargauge data={props.val.var11} label={'Controller '} index={'y'} width={'100%'} height={'45px'}/>
        <Lineargauge data={props.val.var12} label={'Motor '} index={'y'} width={'100%'} height={'45px'}/>

      </Box>
      </Box>
      <Box sx={{ width:'100%'}} display={'flex'}>
        <Visual data={props.val.var7} label={'Slope'}/>
        <Visual data={props.val.var6} label={'Trip'}/>
        <Visual data={props.val.var5} label={'Distance'}/>
      </Box> */}
