import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { tokens } from "../../theme";
import React from "react";
import {
  Grid,
  CardContent,
  makeStyles,
  Box,
} from "@material-ui/core";
import BatteryMain from "../../components/BatteryMain";
import SpeedTemp from "../../components/SpeedTemp";
import SwitchTemp from "../../components/SwitchTemp";
import RealTimeGraph from "../../components/RealTimeGraph";
import Map from "../../components/Map";
import CellPack from "../../components/CellPack";

const useStyles = makeStyles(() => ({
  topBlock: {
    height: "10rem",
    marginBottom: "0.5rem",
  },
  bottomBlock: {
    height: "14.5rem",
  },
  sideBlock: {
    height: "25rem",
  },
  secondLeftBlock: {
    height: "14rem",
  },
  secondRightBlock: {
    height: "14rem",
  },
  GraphBlock: {
    height: "16.5rem",
  },
}));

const Dashboard = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);
  const color = {
    blue: colors.palette[500],
    grey: colors.palette[100],
    green: colors.palette[100],
  };
  const [data, setData] = useState([]);
  const [switchValue, setSwitchValue] = useState(null);
  const customFontFamily = "'Kanit', sans-serif"; // Define the custom font family

  const styles = {
    border: `1px solid ${colors.palette[900]}`,
    background: colors.palette[300],
    boxShadow: colors.palette[200],
    borderRadius: "0.6rem",
    fontFamily: customFontFamily,
  };

  // console.log(props.vehicleData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${colors.palette[50]}/getdata?user=${props.vehicleData}`);
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
  
    const fetchSwitchValue = async () => {
      try {
        const response = await fetch(`${colors.palette[50]}/getinput?user=${props.vehicleData}`);
        if (response.ok) {
          const data = await response.json();
          // Assuming the server response has a property like "initialSwitchValue"
          setSwitchValue(data);
          // console.log(data);
        } else {
          console.log('Failed to fetch initial switch value.');
        }
      } catch (error) {
        console.error('Error fetching initial switch value:', error);
      }
    };

    // const fetchMapAPI = async () => {
    //   try {
    //     const response = await fetch(`${colors.palette[50]}/map-api/token`);
    //     if (response.ok) {
    //       const mapAPI = await response.json();
    //       // Assuming the server response has a property like "initialSwitchValue"
    //       setMapAPI(mapAPI.access_token);
    //       // console.log(mapAPI.access_token);
    //     } else {
    //       console.log('Failed to fetch initial switch value.');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching initial switch value:', error);
    //   }
    // };
  
    // fetchMapAPI();
    // fetchData(); // Fetch data for interval
    fetchSwitchValue(); // Fetch switch value
  
    const intervalId = setInterval(fetchData, 1000); // Interval for data fetch
  
    return () => {
      clearInterval(intervalId);
    };
  }, [props.vehicleData]);
  
  return (
    <Grid container spacing={1} style={{ maxWidth: "100%", marginLeft: "0px" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.topBlock} style={styles}>
          <CardContent>
            <SwitchTemp
              switchValue={switchValue}
              user={data.user}
              gradient={data.v47}
              ambient={data.v4}
              range={data.v5}
              deviceStatus={data.v6}
              cerror={data.v7}
              merror={data.v8}
              whpkm={data.v38}
              signal={data.v6}
            />
          </CardContent>
        </Box>
        <Box className={classes.bottomBlock} style={styles}>
          <CardContent>
            <SpeedTemp
              speed={data.v39}
              rpm={data.v40}
              range={parseInt(data.v5)}
              odo={data.v41}
              cfan={data.v42}
              mfan={data.v43}
              fner={data.v44}
              mtemp={data.v46}
              ctemp={data.v45}
              trip={data.v19}
            />
          </CardContent>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.sideBlock} style={styles}>
          <CardContent>
            <BatteryMain
              heading={data.v31}
              current={data.v33}
              soc={data.v32}
              voltage={data.v34}
              capacity={data.v35}
              totalCapacity={data.v9}
              high={data.v18}
              low={data.v17}
              mt={data.v11}
              bt={data.v12}
              t1={data.v13}
              t2={data.v14}
              t3={data.v15}
              t4={data.v16}
              power={data.v36}
              berror={data.v8}
              whr={data.v37}
              data={data}
              color={colors.palette[500]}
            />
            {/* <CellPack cell={props.data} /> */}
          </CardContent>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <Box className={classes.sideBlock} style={styles}>
          <Map token={props.mapKey} user={props.vehicleData} />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Box className={classes.GraphBlock} style={styles}>
          <CardContent>
            <RealTimeGraph d={data.v33} color={color} id={"Current"} />
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
