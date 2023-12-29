import React from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnalyticsForm = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate  =  useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {

    try {
      const response = await fetch(`${colors.palette[50]}/analytics/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        
      });
      console.log(values);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      window.alert(responseData.message);
      // navigate("../admin/dashboard", { replace: true });
      console.log('Data sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending data:', error);
      window.alert('data already exist');
    }
  };

  return (
    <Box borderRadius={'1rem'} sx={{background:colors.palette[300], boxShadow:colors.palette[200]}} p={'1rem'} ml="2rem" mr='2rem' mt="0rem" mb="20rem" display={'flex'} flexDirection={'column'} justifyContent="center" alignItems="center">
        <h3 style={{fontWeight:'bold'}}>REPORT FORM</h3>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="0.8rem"
              mt={'1rem'}
              gridTemplateColumns="repeat(10, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                // variant="filled"
                type="date"
                // label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Out"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.outTime}
                name="outTime"
                error={!!touched.outTime && !!errors.outTime}
                helperText={touched.outTime && errors.outTime}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="In"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.inTime}
                name="inTime"
                error={!!touched.inTime && !!errors.inTime}
                helperText={touched.inTime && errors.inTime}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Vehicle ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleId}
                name="vehicleId"
                error={!!touched.vehicleId && !!errors.vehicleId}
                helperText={touched.vehicleId && errors.vehicleId}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Vehicle name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicle}
                name="vehicle"
                error={!!touched.vehicle && !!errors.vehicle}
                helperText={touched.vehicle && errors.vehicle}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Vehicle number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleNo}
                name="vehicleNo"
                error={!!touched.vehicleNo && !!errors.vehicleNo}
                helperText={touched.vehicleNo && errors.vehicleNo}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Test number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.testNo}
                name="testNo"
                error={!!touched.testNo && !!errors.testNo}
                helperText={touched.testNo && errors.testNo}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Driver"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.driver}
                name="driver"
                error={!!touched.driver && !!errors.driver}
                helperText={touched.driver && errors.driver}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="Weight"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.weight}
                name="weight"
                error={!!touched.weight && !!errors.weight}
                helperText={touched.weight && errors.weight}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="Average Speed"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeed}
                name="avgSpeed"
                error={!!touched.avgSpeed && !!errors.avgSpeed}
                helperText={touched.avgSpeed && errors.avgSpeed}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip distance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initDistance}
                name="initDistance"
                error={!!touched.initDistance && !!errors.initDistance}
                helperText={touched.initDistance && errors.initDistance}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="final Distance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalDistance}
                name="finalDistance"
                error={!!touched.finalDistance && !!errors.finalDistance}
                helperText={touched.finalDistance && errors.finalDistance}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="Average RPM"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgRpm}
                name="avgRpm"
                error={!!touched.avgRpm && !!errors.avgRpm}
                helperText={touched.avgRpm && errors.avgRpm}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="ambient temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ambTemperature}
                name="ambTemperature"
                error={!!touched.ambTemperature && !!errors.ambTemperature}
                helperText={touched.ambTemperature && errors.ambTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="ECO Mode"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ecoMode}
                name="ecoMode"
                error={!!touched.ecoMode && !!errors.ecoMode}
                helperText={touched.ecoMode && errors.ecoMode}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Drive Mode"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.driveMode}
                name="driveMode"
                error={!!touched.driveMode && !!errors.driveMode}
                helperText={touched.driveMode && errors.driveMode}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg motor temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperature}
                name="avgMotorTemperature"
                error={!!touched.avgMotorTemperature && !!errors.avgMotorTemperature}
                helperText={touched.avgMotorTemperature && errors.avgMotorTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="max motor Temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxMotorTemperature}
                name="maxMotorTemperature"
                error={!!touched.maxMotorTemperature && !!errors.maxMotorTemperature}
                helperText={touched.maxMotorTemperature && errors.maxMotorTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg controller temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperature}
                name="avgControllerTemperature"
                error={!!touched.avgControllerTemperature && !!errors.avgControllerTemperature}
                helperText={touched.avgControllerTemperature && errors.avgControllerTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="Max controller temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxControllerTemperature}
                name="maxControllerTemperature"
                error={!!touched.maxControllerTemperature && !!errors.maxControllerTemperature}
                helperText={touched.maxControllerTemperature && errors.maxControllerTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="init voltage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initVoltage}
                name="initVoltage"
                error={!!touched.initVoltage && !!errors.name}
                helperText={touched.initVoltage && errors.initVoltage}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="final voltage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalVoltage}
                name="finalVoltage"
                error={!!touched.finalVoltage && !!errors.finalVoltage}
                helperText={touched.finalVoltage && errors.finalVoltage}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="Max current"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxCurrent}
                name="maxCurrent"
                error={!!touched.maxCurrent && !!errors.maxCurrent}
                helperText={touched.maxCurrent && errors.maxCurrent}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg current"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrent}
                name="avgCurrent"
                error={!!touched.avgCurrent && !!errors.avgCurrent}
                helperText={touched.avgCurrent && errors.avgCurrent}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="init SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initSOC}
                name="initSOC"
                error={!!touched.initSOC && !!errors.initSOC}
                helperText={touched.initSOC && errors.initSOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="SOC consumed"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalSOC}
                name="finalSOC"
                error={!!touched.finalSOC && !!errors.finalSOC}
                helperText={touched.finalSOC && errors.finalSOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="AH consumed"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initAh}
                name="initAh"
                error={!!touched.initAh && !!errors.initAh}
                helperText={touched.initAh && errors.initAh}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="max MOS temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxMosTemperature}
                name="maxMosTemperature"
                error={!!touched.maxMosTemperature && !!errors.maxMosTemperature}
                helperText={touched.maxMosTemperature && errors.maxMosTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="max balance temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxBalanceTemperature}
                name="maxBalanceTemperature"
                error={!!touched.maxBalanceTemperature && !!errors.maxBalanceTemperature}
                helperText={touched.maxBalanceTemperature && errors.maxBalanceTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Battery fault"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryFault}
                name="batteryFault"
                error={!!touched.batteryFault && !!errors.batteryFault}
                helperText={touched.batteryFault && errors.batteryFault}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="high cell voltage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.highCellVoltage}
                name="highCellVoltage"
                error={!!touched.highCellVoltage && !!errors.highCellVoltage}
                helperText={touched.highCellVoltage && errors.highCellVoltage}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="low cell voltage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lowCellVoltage}
                name="lowCellVoltage"
                error={!!touched.lowCellVoltage && !!errors.lowCellVoltage}
                helperText={touched.lowCellVoltage && errors.lowCellVoltage}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="max cell difference"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxCellDifference}
                name="maxCellDifference"
                error={!!touched.maxCellDifference && !!errors.maxCellDifference}
                helperText={touched.maxCellDifference && errors.maxCellDifference}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label=" Trip Efficiency"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.efficiency}
                name="efficiency"
                error={!!touched.efficiency && !!errors.efficiency}
                helperText={touched.efficiency && errors.efficiency}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg gradient"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgGradient}
                name="avgGradient"
                error={!!touched.avgGradient && !!errors.avgGradient}
                helperText={touched.avgGradient && errors.avgGradient}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Wh/km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhkm}
                name="avgWhkm"
                error={!!touched.avgWhkm && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="max Wh/km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxWhkm}
                name="maxWhkm"
                error={!!touched.maxWhkm && !!errors.maxWhkm}
                helperText={touched.maxWhkm && errors.maxWhkm}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="charging start time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingStartTime}
                name="chargingStartTime"
                error={!!touched.chargingStartTime && !!errors.chargingStartTime}
                helperText={touched.chargingStartTime && errors.chargingStartTime}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="charging end time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingEndTime}
                name="chargingEndTime"
                error={!!touched.chargingEndTime && !!errors.chargingEndTime}
                helperText={touched.chargingEndTime && errors.chargingEndTime}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="charging start SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingStartSoc}
                name="chargingStartSoc"
                error={!!touched.chargingStartSoc && !!errors.chargingStartSoc}
                helperText={touched.chargingStartSoc && errors.chargingStartSoc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="charging end SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingEndSoc}
                name="chargingEndSoc"
                error={!!touched.chargingEndSoc && !!errors.chargingEndSoc}
                helperText={touched.chargingEndSoc && errors.chargingEndSoc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="battery fault during charging"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryHealthCharging}
                name="batteryHealthCharging"
                error={!!touched.batteryHealthCharging && !!errors.batteryHealthCharging}
                helperText={touched.batteryHealthCharging && errors.batteryHealthCharging}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="battery efficiency"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryEfficiency}
                name="batteryEfficiency"
                error={!!touched.batteryEfficiency && !!errors.batteryEfficiency}
                helperText={touched.batteryEfficiency && errors.batteryEfficiency}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="charging current"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingCurrent}
                name="chargingCurrent"
                error={!!touched.chargingCurrent && !!errors.chargingCurrent}
                helperText={touched.chargingCurrent && errors.chargingCurrent}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="charging remark"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingRemark}
                name="chargingRemark"
                error={!!touched.chargingRemark && !!errors.chargingRemark}
                helperText={touched.chargingRemark && errors.chargingRemark}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 10% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt10Soc}
                name="tripAt10Soc"
                error={!!touched.tripAt10Soc && !!errors.tripAt10Soc}
                helperText={touched.tripAt10Soc && errors.tripAt10Soc}
                sx={{ gridColumn: "span 1" }}
              />


<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 20% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt20Soc}
                name="tripAt20Soc"
                error={!!touched.tripAt20Soc && !!errors.tripAt20Soc}
                helperText={touched.tripAt20Soc && errors.tripAt20Soc}
                sx={{ gridColumn: "span 1" }}
              />


<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 30% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt30Soc}
                name="tripAt30Soc"
                error={!!touched.tripAt30Soc && !!errors.tripAt30Soc}
                helperText={touched.tripAt30Soc && errors.tripAt30Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 40% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt40Soc}
                name="tripAt40Soc"
                error={!!touched.tripAt40Soc && !!errors.tripAt40Soc}
                helperText={touched.tripAt40Soc && errors.tripAt40Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 50% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt50Soc}
                name="tripAt50Soc"
                error={!!touched.tripAt50Soc && !!errors.tripAt50Soc}
                helperText={touched.tripAt50Soc && errors.tripAt50Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled
                type="number"
                label="trip at 60% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt60Soc}
                name="tripAt60Soc"
                error={!!touched.tripAt60Soc && !!errors.tripAt60Soc}
                helperText={touched.tripAt60Soc && errors.tripAt60Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 70% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt70Soc}
                name="tripAt70Soc"
                error={!!touched.tripAt70Soc && !!errors.tripAt70Soc}
                helperText={touched.tripAt70Soc && errors.tripAt70Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 80% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt80Soc}
                name="tripAt80Soc"
                error={!!touched.tripAt80Soc && !!errors.tripAt80Soc}
                helperText={touched.tripAt80Soc && errors.tripAt80Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 90% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt90Soc}
                name="tripAt90Soc"
                error={!!touched.tripAt90Soc && !!errors.tripAt90Soc}
                helperText={touched.tripAt90Soc && errors.tripAt90Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="trip at 100% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tripAt100Soc}
                name="tripAt100Soc"
                error={!!touched.tripAt100Soc && !!errors.tripAt100Soc}
                helperText={touched.tripAt100Soc && errors.tripAt100Soc}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 10% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedAt10SOC}
                name="avgSpeedAt10SOC"
                error={!!touched.avgSpeedAt10SOC && !!errors.avgSpeedAt10SOC}
                helperText={touched.avgSpeedAt10SOC && errors.avgSpeedAt10SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 20% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat20SOC}
                name="avgSpeedat20SOC"
                error={!!touched.avgSpeedat20SOC && !!errors.avgSpeedat20SOC}
                helperText={touched.avgSpeedat20SOC && errors.avgSpeedat20SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 30% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat30SOC}
                name="avgSpeedat30SOC"
                error={!!touched.avgSpeedat30SOC && !!errors.avgSpeedat30SOC}
                helperText={touched.avgSpeedat30SOC && errors.avgSpeedat30SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 40% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat40SOC}
                name="avgSpeedat40SOC"
                error={!!touched.avgSpeedat40SOC && !!errors.avgSpeedat40SOC}
                helperText={touched.avgSpeedat40SOC && errors.avgSpeedat40SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 50% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat50SOC}
                name="avgSpeedat50SOC"
                error={!!touched.avgSpeedat50SOC && !!errors.avgSpeedat50SOC}
                helperText={touched.avgSpeedat50SOC && errors.avgSpeedat50SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 60% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat60SOC}
                name="avgSpeedat60SOC"
                error={!!touched.avgSpeedat60SOC && !!errors.avgSpeedat60SOC}
                helperText={touched.avgSpeedat60SOC && errors.avgSpeedat60SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg speed at 70% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat70SOC}
                name="avgSpeedat70SOC"
                error={!!touched.avgSpeedat70SOC && !!errors.avgSpeedat70SOC}
                helperText={touched.avgSpeedat70SOC && errors.avgSpeedat70SOC}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg speed at 80% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat80SOC}
                name="avgSpeedat80SOC"
                error={!!touched.avgSpeedat80SOC && !!errors.avgSpeedat80SOC}
                helperText={touched.avgSpeedat80SOC && errors.avgSpeedat80SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg speed at 90% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat90SOC}
                name="avgSpeedat90SOC"
                error={!!touched.avgSpeedat90SOC && !!errors.avgSpeedat90SOC}
                helperText={touched.avgSpeedat90SOC && errors.avgSpeedat90SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg speed at 100% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgSpeedat100SOC}
                name="avgSpeedat100SOC"
                error={!!touched.avgSpeedat100SOC && !!errors.avgSpeedat100SOC}
                helperText={touched.avgSpeedat100SOC && errors.avgSpeedat100SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 10% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureAt10SOC}
                name="avgMotorTemperatureAt10SOC"
                error={!!touched.avgMotorTemperatureAt10SOC && !!errors.avgMotorTemperatureAt10SOC}
                helperText={touched.avgMotorTemperatureAt10SOC && errors.avgMotorTemperatureAt10SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 20% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat20SOC}
                name="avgMotorTemperatureat20SOC"
                error={!!touched.avgMotorTemperatureat20SOC && !!errors.avgMotorTemperatureat20SOC}
                helperText={touched.avgMotorTemperatureat20SOC && errors.avgMotorTemperatureat20SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 30% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat30SOC}
                name="avgMotorTemperatureat30SOC"
                error={!!touched.avgMotorTemperatureat30SOC && !!errors.avgMotorTemperatureat30SOC}
                helperText={touched.avgMotorTemperatureat30SOC && errors.avgMotorTemperatureat30SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 40% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat40SOC}
                name="avgMotorTemperatureat40SOC"
                error={!!touched.avgMotorTemperatureat40SOC && !!errors.avgMotorTemperatureat40SOC}
                helperText={touched.avgMotorTemperatureat40SOC && errors.avgMotorTemperatureat40SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 50% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat50SOC}
                name="avgMotorTemperatureat50SOC"
                error={!!touched.avgMotorTemperatureat50SOC && !!errors.avgMotorTemperatureat50SOC}
                helperText={touched.avgMotorTemperatureat50SOC && errors.avgMotorTemperatureat50SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 60% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat60SOC}
                name="avgMotorTemperatureat60SOC"
                error={!!touched.avgMotorTemperatureat60SOC && !!errors.avgMotorTemperatureat60SOC}
                helperText={touched.avgMotorTemperatureat60SOC && errors.avgMotorTemperatureat60SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg MotorTemperature at 70% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat70SOC}
                name="avgMotorTemperatureat70SOC"
                error={!!touched.avgMotorTemperatureat70SOC && !!errors.avgMotorTemperatureat70SOC}
                helperText={touched.avgMotorTemperatureat70SOC && errors.avgMotorTemperatureat70SOC}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg MotorTemperature at 80% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat80SOC}
                name="avgMotorTemperatureat80SOC"
                error={!!touched.avgMotorTemperatureat80SOC && !!errors.avgMotorTemperatureat80SOC}
                helperText={touched.avgMotorTemperatureat80SOC && errors.avgMotorTemperatureat80SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg MotorTemperature at 90% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat90SOC}
                name="avgMotorTemperatureat90SOC"
                error={!!touched.avgMotorTemperatureat90SOC && !!errors.avgMotorTemperatureat90SOC}
                helperText={touched.avgMotorTemperatureat90SOC && errors.avgMotorTemperatureat90SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg MotorTemperature at 100% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgMotorTemperatureat100SOC}
                name="avgMotorTemperatureat100SOC"
                error={!!touched.avgMotorTemperatureat100SOC && !!errors.avgMotorTemperatureat100SOC}
                helperText={touched.avgMotorTemperatureat100SOC && errors.avgMotorTemperatureat100SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 10% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat10SOC}
                name="avgControllerTemperatureat10SOC"
                error={!!touched.avgControllerTemperatureat10SOC && !!errors.avgControllerTemperatureat10SOC}
                helperText={touched.avgControllerTemperatureat10SOC && errors.avgControllerTemperatureat10SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 20% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat20SOC}
                name="avgControllerTemperatureat20SOC"
                error={!!touched.avgControllerTemperatureat20SOC && !!errors.avgControllerTemperatureat20SOC}
                helperText={touched.avgControllerTemperatureat20SOC && errors.avgControllerTemperatureat20SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 30% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat30SOC}
                name="avgControllerTemperatureat30SOC"
                error={!!touched.avgControllerTemperatureat30SOC && !!errors.avgControllerTemperatureat30SOC}
                helperText={touched.avgControllerTemperatureat30SOC && errors.avgControllerTemperatureat30SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 40% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat40SOC}
                name="avgControllerTemperatureat40SOC"
                error={!!touched.avgControllerTemperatureat40SOC && !!errors.avgControllerTemperatureat40SOC}
                helperText={touched.avgControllerTemperatureat40SOC && errors.avgControllerTemperatureat40SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 50% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat50SOC}
                name="avgControllerTemperatureat50SOC"
                error={!!touched.avgControllerTemperatureat50SOC && !!errors.avgControllerTemperatureat50SOC}
                helperText={touched.avgControllerTemperatureat50SOC && errors.avgControllerTemperatureat50SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 60% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat60SOC}
                name="avgControllerTemperatureat60SOC"
                error={!!touched.avgControllerTemperatureat60SOC && !!errors.avgControllerTemperatureat60SOC}
                helperText={touched.avgControllerTemperatureat60SOC && errors.avgControllerTemperatureat60SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg ControllerTemperature at 70% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat70SOC}
                name="avgControllerTemperatureat70SOC"
                error={!!touched.avgControllerTemperatureat70SOC && !!errors.avgControllerTemperatureat70SOC}
                helperText={touched.avgControllerTemperatureat70SOC && errors.avgControllerTemperatureat70SOC}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg ControllerTemperature at 80% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat80SOC}
                name="avgControllerTemperatureat80SOC"
                error={!!touched.avgControllerTemperatureat80SOC && !!errors.avgControllerTemperatureat80SOC}
                helperText={touched.avgControllerTemperatureat80SOC && errors.avgControllerTemperatureat80SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg ControllerTemperature at 90% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat90SOC}
                name="avgControllerTemperatureat90SOC"
                error={!!touched.avgControllerTemperatureat90SOC && !!errors.avgControllerTemperatureat90SOC}
                helperText={touched.avgControllerTemperatureat90SOC && errors.avgControllerTemperatureat90SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg ControllerTemperature at 100% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgControllerTemperatureat100SOC}
                name="avgControllerTemperatureat100SOC"
                error={!!touched.avgControllerTemperatureat100SOC && !!errors.avgControllerTemperatureat100SOC}
                helperText={touched.avgControllerTemperatureat100SOC && errors.avgControllerTemperatureat100SOC}
                sx={{ gridColumn: "span 1" }}
                />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 10% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat10SOC}
                name="avgCurrentat10SOC"
                error={!!touched.avgCurrentat10SOC && !!errors.avgCurrentat10SOC}
                helperText={touched.avgCurrentat10SOC && errors.avgCurrentat10SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 20% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat20SOC}
                name="avgCurrentat20SOC"
                error={!!touched.avgCurrentat20SOC && !!errors.avgCurrentat20SOC}
                helperText={touched.avgCurrentat20SOC && errors.avgCurrentat20SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 30% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat30SOC}
                name="avgCurrentat30SOC"
                error={!!touched.avgCurrentat30SOC && !!errors.avgCurrentat30SOC}
                helperText={touched.avgCurrentat30SOC && errors.avgCurrentat30SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 40% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat40SOC}
                name="avgCurrentat40SOC"
                error={!!touched.avgCurrentat40SOC && !!errors.avgCurrentat40SOC}
                helperText={touched.avgCurrentat40SOC && errors.avgCurrentat40SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 50% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat50SOC}
                name="avgCurrentat50SOC"
                error={!!touched.avgCurrentat50SOC && !!errors.avgCurrentat50SOC}
                helperText={touched.avgCurrentat50SOC && errors.avgCurrentat50SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 60% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat60SOC}
                name="avgCurrentat60SOC"
                error={!!touched.avgCurrentat60SOC && !!errors.avgCurrentat60SOC}
                helperText={touched.avgCurrentat60SOC && errors.avgCurrentat60SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="avg Current at 70% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat70SOC}
                name="avgCurrentat70SOC"
                error={!!touched.avgCurrentat70SOC && !!errors.avgCurrentat70SOC}
                helperText={touched.avgCurrentat70SOC && errors.avgCurrentat70SOC}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 80% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat80SOC}
                name="avgCurrentat80SOC"
                error={!!touched.avgCurrentat80SOC && !!errors.avgCurrentat80SOC}
                helperText={touched.avgCurrentat80SOC && errors.avgCurrentat80SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 90% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat90SOC}
                name="avgCurrentat90SOC"
                error={!!touched.avgCurrentat90SOC && !!errors.avgCurrentat90SOC}
                helperText={touched.avgCurrentat90SOC && errors.avgCurrentat90SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Current at 100% SOC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgCurrentat100SOC}
                name="avgCurrentat100SOC"
                error={!!touched.avgCurrentat100SOC && !!errors.avgCurrentat100SOC}
                helperText={touched.avgCurrentat100SOC && errors.avgCurrentat100SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 10km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat10SOC}
                name="avgWhrkmat10SOC"
                error={!!touched.avgWhrkmat10SOC && !!errors.avgWhrkmat10SOC}
                helperText={touched.avgWhrkmat10SOC && errors.avgWhrkmat10SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 20km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat20SOC}
                name="avgWhrkmat20SOC"
                error={!!touched.avgWhrkmat20SOC && !!errors.avgWhrkmat20SOC}
                helperText={touched.avgWhrkmat20SOC && errors.avgWhrkmat20SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 30km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat30SOC}
                name="avgWhrkmat30SOC"
                error={!!touched.avgWhrkmat30SOC && !!errors.avgWhrkmat30SOC}
                helperText={touched.avgWhrkmat30SOC && errors.avgWhrkmat30SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 40km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat40SOC}
                name="avgWhrkmat40SOC"
                error={!!touched.avgWhrkmat40SOC && !!errors.avgWhrkmat40SOC}
                helperText={touched.avgWhrkmat40SOC && errors.avgWhrkmat40SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 50km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat50SOC}
                name="avgWhrkmat50SOC"
                error={!!touched.avgWhrkmat50SOC && !!errors.avgWhrkmat50SOC}
                helperText={touched.avgWhrkmat50SOC && errors.avgWhrkmat50SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 60km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat60SOC}
                name="avgWhrkmat60SOC"
                error={!!touched.avgWhrkmat60SOC && !!errors.avgWhrkmat60SOC}
                helperText={touched.avgWhrkmat60SOC && errors.avgWhrkmat60SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 70km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat70SOC}
                name="avgWhrkmat70SOC"
                error={!!touched.avgWhrkmat70SOC && !!errors.avgWhrkmat70SOC}
                helperText={touched.avgWhrkmat70SOC && errors.avgWhrkmat70SOC}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 80km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat80SOC}
                name="avgWhrkmat80SOC"
                error={!!touched.avgWhrkmat80SOC && !!errors.avgWhrkmat80SOC}
                helperText={touched.avgWhrkmat80SOC && errors.avgWhrkmat80SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm at 90km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat90SOC}
                name="avgWhrkmat90SOC"
                error={!!touched.avgWhrkmat90SOC && !!errors.avgWhrkmat90SOC}
                helperText={touched.avgWhrkmat90SOC && errors.avgWhrkmat90SOC}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="number"
                label="avg Whrkm after 100km"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.avgWhrkmat100SOC}
                name="avgWhrkmat100SOC"
                error={!!touched.avgWhrkmat100SOC && !!errors.avgWhrkmat100SOC}
                helperText={touched.avgWhrkmat100SOC && errors.avgWhrkmat100SOC}
                sx={{ gridColumn: "span 1" }}
              />

            </Box>
            <Box display="flex" justifyContent="center" mt="1rem" >
              <Button type="submit" color="secondary" variant="contained" sx={{width:'12rem'}}>
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  vehicleId: yup.string().required("required"),
  vehicleNo: yup.string().required("required"),
  motorNo: yup.string().required("required"),
  chassiNo: yup.string().required("required"),
  batteryId: yup.string().required("required"),
});
const initialValues = {
    date: ""
};

export default AnalyticsForm;
