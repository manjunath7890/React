import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { tokens } from "../../theme";
import React from "react";
import dayjs from 'dayjs';
import ReactApexChart from 'react-apexcharts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

import { Grid, CardContent, makeStyles, Box } from "@material-ui/core";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import RepoData from "../../components/ReportData";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpeedIcon from "@mui/icons-material/Speed";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import MemoryIcon from "@mui/icons-material/Memory";
import RepoVehicleDetails from "../../components/ReportVehicleDetails";
import ReportTable from "../../components/ReportTable";
import BarChart from "../../components/ReportBarChart";
import PolarChart from "../../components/PolarChart";

const useStyles = makeStyles(() => ({
  topBlock: {
    height: "6rem",
    marginBottom: "0.5rem",
  },
  bottomBlock: {
    height: "6rem",
  },
  sideBlock: {
    height: "22.6rem",
  },
  TopBlock: {
    height: "5rem",
  },
  secondRightBlock: {
    height: "12.5rem",
  },
  GraphBlock: {
    height: "16.5rem",
  },
}));

const AnalyticsTemplate = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);

  const customFontFamily = "'Kanit', sans-serif"; // Define the custom font family

  const styles = {
    border: `1px solid ${colors.palette[400]}`,
    background: colors.palette[300],
    boxShadow: colors.palette[200],
    borderRadius: "0.6rem",
    fontFamily: customFontFamily,
  };

  const [userId, setUserId] = useState();
  const currentDate = new Date();
  const [value, setValue] = useState(dayjs(currentDate));
  const downloaddate = dayjs(value).format('YYYY-MM-DD');
  const [data, setData] = useState([]);

  const [selectedVariables, setSelectedVariables] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value); // Set the userId state with the entered value
  };

  // console.log(downloaddate);
  // console.log(userId);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${colors.palette[50]}/analytics/data?vehicleId=${userId}&date=${downloaddate}`);
          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            console.log('Failed to fetch data.');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData(); 
    }, [userId, downloaddate]);

    // console.log(data);
  const style = {
    color: colors.palette[800],
    m: "0.2rem",
    fontSize: "2.5rem",
    p: "0.15rem",
  };

  return (
    <Grid container spacing={1} style={{ maxWidth: "100%", marginLeft: "0px" }}>
      <Grid item xs={6} sm={6} md={10}>
        <Box className={classes.TopBlock} style={{display: 'flex', alignItems:'center' , justifyContent:'flex-start', paddingTop:'1.4rem', marginLeft:'0.3rem'}}>
      <Box
          component="form"
          onSubmit={handleFormSubmit} // Prevent form submission
          // sx={{
          //   '& > :not(style)': { m: 1, width: '25ch' },
          // }}
          noValidate
          autoComplete="off"
          marginLeft='0rem'
        >
          <TextField id="outlined-basic" label="Vehicle Id" variant="outlined" onChange={handleUserIdChange} />
        </Box>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={2}>
        <Box className={classes.TopBlock} style={{display: 'flex', alignItems:'center' , justifyContent:'flex-end', paddingTop:'1rem', paddingRight:'0.3rem'}}>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <Box className={classes.secondRightBlock} style={styles}>
          <RepoVehicleDetails
            vehicleName={" ASPL-CARGO-2"}
            vehicleNo={`KA-01-TC-0294`}
            driver={`Driver`}
            outtime={`4:10 pm`}
            intime={`10:35 am`}
            date={"19/12/2023"}
            testNo={"10"}
            mode={"Drive"}
            health={"good"}
            iconColor={colors.palette[1400]}
            icon={<ThermostatIcon sx={style} />}
          />
        </Box>
      </Grid>

      <Grid item xs={6} sm={6} md={2}>
        <Box className={classes.topBlock} style={styles}>
        <RepoData
            title={"Watt-Hour/km"}
            secondary={` ${153} Wh/km`}
            primary={`${120}`}
            // init ={`${80}`}
            // final ={`${163}`}
            // label1={'minimum'}
            // label2={'maximum'}
            background={'#fbc968'}
            iconColor={colors.palette[1700]}
            icon={<ElectricRickshawIcon sx={style} />}
          />       
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
           <RepoData
            title={"Trip Efficiency"}
            secondary={`${1100} kg`}
            primary={`${76} %`}
            //   init ={`${25}°C`}
            //   final ={`${128}°C`}
            //   label1={'init'}
            //   label2={'final'}
            iconColor={colors.palette[1000]}
            icon={<EnergySavingsLeafIcon sx={style} />}
          />
        </Box>
      </Grid>

      <Grid item xs={6} sm={6} md={2}>
        <Box className={classes.topBlock} style={styles}>
          <RepoData
            title={" Speedometer"}
            secondary={`${3683} RPM`}
            primary={`${35} km/h`}
            // init ={`${4178}`}
            //   final ={`${128}km/h`}
            // label1={'RPM'}
            //   label2={'final'}
            iconColor={colors.palette[1300]}
            icon={<SpeedIcon sx={style} />}
          />
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
          <RepoData
            title={" Distance Travelled"}
            secondary={`${962} km`}
            primary={`${81} km`}
            // init ={`${729}km`}
            // final ={`${810}km`}
            // label1={'initial km'}
            // label2={'final km'}
            iconColor={colors.palette[1500]}
            icon={<LocalShippingIcon sx={style} />}
          />
        </Box>
      </Grid>

      <Grid item xs={6} sm={6} md={2}>
        <Box className={classes.topBlock} style={styles}>
          <RepoData
            title={"Battery SOC"}
            secondary={`${100} %`}
            primary={`${85} %`}
            // init ={`${100}%`}
            // final ={`${15}%`}
            // label1={'initial'}
            // label2={'final'}
            iconColor={colors.palette[1600]}
            icon={<DataUsageIcon sx={style} />}
          />
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
          <RepoData
            title={"Current"}
            secondary={`${129.5} A`}
            primary={`${64.8} A`}
            //   init ={`${0}A`}
            //   final ={`${15}A`}
            //   label1={'initial'}
            //   label2={'final'}
            iconColor={colors.palette[1000]}
            icon={<BrightnessAutoIcon sx={style} />}
          />
        </Box>
      </Grid>

      <Grid item xs={6} sm={6} md={2}>
        <Box className={classes.topBlock} style={styles}>
          <RepoData
            title={" controller temperature"}
            secondary={`${65} °C`}
            primary={`${53} °C`}
            // init ={`${25}°C`}
            // final ={`${68}°C`}
            // label1={'initial'}
            // label2={'final'}
            iconColor={colors.palette[1400]}
            icon={<MemoryIcon sx={style} />}
          />
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
          <RepoData
            title={" motor temperature"}
            secondary={`${165} °C`}
            primary={`${120}  °C`}
            // init ={`${25}°C`}
            // final ={`${128}°C`}
            // label1={'initial'}
            // label2={'final'}
            iconColor={colors.palette[1100]}
            icon={<ThermostatIcon sx={style} />}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box className={classes.sideBlock} style={styles}>
            <ReportTable />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={5}>
        <Box className={classes.sideBlock} style={styles}>
          <BarChart />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <Box className={classes.sideBlock} style={styles}>
            <PolarChart />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AnalyticsTemplate;
