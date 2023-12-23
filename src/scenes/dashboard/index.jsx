import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useState, useEffect } from "react";
import {
  Grid,
  CardContent,
  makeStyles,
  Box,
  IconButton,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Dashboard as DashboardIcon } from "@material-ui/icons";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const useStyles = makeStyles(() => ({
  topBlock: {
    height: "12rem",
  },
}));

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const customFontFamily = "'Kanit', sans-serif";

  const styles = {
    border: `1px solid ${colors.palette[800]}`,
    background: colors.palette[300],
    boxShadow: colors.palette[200],
    borderRadius: "0.6rem",
    fontFamily: customFontFamily,
    padding: "1rem",
    fontSize: '0.7rem'
  };

  const [vehiclesData, setVehiclesData] = useState([]);

  const handleNavigate = (vehicleId) => {
    navigate("/admin/template", { state: { vehicleId } });
    props.onVehicleIdClick(vehicleId); // Pass vehicleId to the parent
  };

  useEffect(() => {
    fetch(`${colors.palette[50]}/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        setVehiclesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Grid container spacing={5} style={{ maxWidth: "100%", marginLeft: "0px" }}>
      {vehiclesData.map((vehicle) => (
        <Grid key={vehicle.vehicleId} item xs={12} sm={6} md={3}>
          <Box className={classes.topBlock} style={styles}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems:'center', fontWeight:'bold' }}>
            <h3>{vehicle.name}</h3>
            <IconButton
              component={Link}
              to="/admin/template"
              onClick={() => handleNavigate(vehicle.vehicleId)}
              aria-label="go to admin dashboard"
              style={{ marginTop: "0px", fontSize:'3.5rem' }}
            >
              <DoubleArrowIcon style={{ marginTop: "0px", fontSize:'2rem', marginBottom:'0.5rem', color:colors.palette[500] }}/>
            </IconButton>
            </Box>
            {/* <h6>Vehicle no.: {vehicle.vehicleNo}</h6> */}
            {/* <h6>Vehicle ID: {vehicle.vehicleId}</h6> */}
            <Box style={{ display: "flex", justifyContent: "space-between", marginTop:'0.5rem' }}>
              <Box style={{ width:'100%'}}>
                Vehicle number
                <h6 style={{color:colors.palette[1400]}}>{vehicle.vehicleNo}</h6>
              </Box>
              <Box style={{ width:'100%'}}>
                Chassi number
                <h6 style={{color:colors.palette[100]}}>{vehicle.chassiNo}</h6>
              </Box>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box style={{ width:'100%'}}>
                Motor number
                <h6 style={{color:colors.palette[100]}}>{vehicle.motorNo}</h6>
              </Box>
              <Box style={{ width:'100%'}}>
                Battery ID
                <h6 style={{color:colors.palette[100]}}>{vehicle.batteryId}</h6>
              </Box>
            </Box>
            {/* <h6>Battery ID: {vehicle.batteryId}</h6> */}
            {/* <IconButton
              component={Link}
              to="/admin/template"
              onClick={() => handleNavigate(vehicle.vehicleId)}
              aria-label="go to admin dashboard"
              style={{ marginTop: "20px" }}
            >
              <DoubleArrowIcon />
            </IconButton> */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
