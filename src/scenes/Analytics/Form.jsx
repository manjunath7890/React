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
    <Box borderRadius={'1rem'} sx={{background:colors.palette[300], boxShadow:colors.palette[200]}} p={'1rem'} ml="2rem" mr='2rem' mt="1rem" display={'flex'} flexDirection={'column'} justifyContent="center" alignItems="center">
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
              gap="1rem"
              mt={'1rem'}
              gridTemplateColumns="repeat(8, minmax(0, 1fr))"
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
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Vehicle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicle}
                name="vehicle"
                error={!!touched.vehicle && !!errors.vehicle}
                helperText={touched.vehicle && errors.vehicle}
                sx={{ gridColumn: "span 1" }}
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
                variant="filled"
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
                variant="filled"
                type="number"
                label="Max speed"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxSpeed}
                name="maxSpeed"
                error={!!touched.maxSpeed && !!errors.maxSpeed}
                helperText={touched.maxSpeed && errors.maxSpeed}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
                type="number"
                label="init distance"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="text"
                label="Driving Mode"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.drivingMode}
                name="drivingMode"
                error={!!touched.drivingMode && !!errors.drivingMode}
                helperText={touched.drivingMode && errors.drivingMode}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="number"
                label="init motor temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initMotorTemperature}
                name="initMotorTemperature"
                error={!!touched.initMotorTemperature && !!errors.initMotorTemperature}
                helperText={touched.initMotorTemperature && errors.initMotorTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="number"
                label="final motor temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalMotorTemperature}
                name="finalMotorTemperature"
                error={!!touched.finalMotorTemperature && !!errors.finalMotorTemperature}
                helperText={touched.finalMotorTemperature && errors.finalMotorTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="number"
                label="init controller temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initControllerTemperature}
                name="initControllerTemperature"
                error={!!touched.initControllerTemperature && !!errors.initControllerTemperature}
                helperText={touched.initControllerTemperature && errors.initControllerTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="number"
                label="final controller temperature"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalControllerTemperature}
                name="finalControllerTemperature"
                error={!!touched.finalControllerTemperature && !!errors.finalControllerTemperature}
                helperText={touched.finalControllerTemperature && errors.finalControllerTemperature}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="number"
                label="final SOC"
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
                variant="filled"
                type="number"
                label="init AH"
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
                variant="filled"
                type="number"
                label="final AH"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.finalAH}
                name="finalAH"
                error={!!touched.finalAH && !!errors.finalAH}
                helperText={touched.finalAH && errors.finalAH}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="number"
                label="Whr consumed"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.whrConsumed}
                name="whrConsumed"
                error={!!touched.whrConsumed && !!errors.whrConsumed}
                helperText={touched.whrConsumed && errors.whrConsumed}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="text"
                label="Battery fault"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryFault}
                name="batteryFault"
                error={!!touched.batteryFault && !!errors.batteryFault}
                helperText={touched.batteryFault && errors.batteryFault}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="number"
                label="init cell difference"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.initCellDifference}
                name="initCellDifference"
                error={!!touched.initCellDifference && !!errors.initCellDifference}
                helperText={touched.initCellDifference && errors.initCellDifference}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="number"
                label="Efficiency"
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
                variant="filled"
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
                variant="filled"
                type="number"
                label="max gradient"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxGradient}
                name="maxGradient"
                error={!!touched.maxGradient && !!errors.maxGradient}
                helperText={touched.maxGradient && errors.maxGradient}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                type="text"
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
                variant="filled"
                type="text"
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
                variant="filled"
                type="text"
                label="battery fault during charging"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryHealthCharging}
                name="batteryHealthCharging"
                error={!!touched.batteryHealthCharging && !!errors.batteryHealthCharging}
                helperText={touched.batteryHealthCharging && errors.batteryHealthCharging}
                sx={{ gridColumn: "span 1" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="text"
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
                variant="filled"
                type="text"
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
                variant="filled"
                type="text"
                label="charging remark"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chargingRemark}
                name="chargingRemark"
                error={!!touched.chargingRemark && !!errors.chargingRemark}
                helperText={touched.chargingRemark && errors.chargingRemark}
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
